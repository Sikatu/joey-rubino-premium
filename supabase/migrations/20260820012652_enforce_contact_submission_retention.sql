create extension if not exists pg_cron;

alter table public.contact_submissions
  add column retention_hold boolean not null default false,
  add column retention_hold_reason text;

alter table public.contact_submissions
  add constraint contact_submissions_retention_hold_reason_check
  check (
    not retention_hold
    or (
      retention_hold_reason is not null
      and char_length(trim(retention_hold_reason)) between 1 and 500
    )
  );

comment on column public.contact_submissions.retention_hold is
  'When true, excludes this submission from the ordinary 12-month retention purge for an active inquiry, ongoing business relationship, security/fraud investigation, or legal/recordkeeping obligation.';

comment on column public.contact_submissions.retention_hold_reason is
  'Required human-readable reason when retention_hold is true. Do not place unnecessary sensitive data in this field.';

create index contact_submissions_retention_purge_idx
  on public.contact_submissions (created_at)
  where retention_hold = false;

create table public.contact_retention_runs (
  id bigint generated always as identity primary key,
  ran_at timestamptz not null default now(),
  cutoff_at timestamptz not null,
  deleted_count integer not null check (deleted_count >= 0)
);

alter table public.contact_retention_runs enable row level security;

revoke all on table public.contact_retention_runs from anon, authenticated;
grant select on table public.contact_retention_runs to service_role;

create or replace function public.purge_expired_contact_submissions()
returns integer
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  v_cutoff timestamptz := now() - interval '12 months';
  v_deleted integer := 0;
begin
  with deleted as (
    delete from public.contact_submissions
    where created_at < v_cutoff
      and retention_hold = false
    returning 1
  )
  select count(*)::integer
    into v_deleted
    from deleted;

  insert into public.contact_retention_runs (
    cutoff_at,
    deleted_count
  )
  values (
    v_cutoff,
    v_deleted
  );

  return v_deleted;
end;
$$;

revoke all on function public.purge_expired_contact_submissions()
  from public, anon, authenticated;

grant execute
  on function public.purge_expired_contact_submissions()
  to postgres, service_role;

select cron.schedule(
  'purge-expired-contact-submissions',
  '17 3 * * *',
  'select public.purge_expired_contact_submissions();'
);
