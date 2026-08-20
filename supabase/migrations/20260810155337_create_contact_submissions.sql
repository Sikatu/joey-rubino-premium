create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(trim(name)) between 1 and 120),
  email text not null check (char_length(trim(email)) between 3 and 320),
  phone text check (phone is null or char_length(trim(phone)) <= 50),
  subject text not null check (char_length(trim(subject)) between 1 and 120),
  message text not null check (char_length(trim(message)) between 1 and 5000),
  status text not null default 'new' check (status in ('new', 'read', 'replied', 'archived')),
  source text not null default 'website' check (char_length(trim(source)) between 1 and 50)
);

alter table public.contact_submissions enable row level security;

revoke all on table public.contact_submissions from anon, authenticated;
grant select, insert, update, delete on table public.contact_submissions to service_role;

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);
