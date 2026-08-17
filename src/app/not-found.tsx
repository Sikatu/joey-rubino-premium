import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[72vh] items-center bg-ink pb-20 pt-32 text-ivory lg:pt-40">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 xl:px-20">
        <p className="mb-6 font-sans text-[10px] tracking-[0.25em] uppercase text-bronze-soft">
          404 / Page Not Found
        </p>

        <h1 className="max-w-4xl font-serif text-[clamp(3.25rem,8vw,7rem)] leading-[0.94] tracking-[-0.04em]">
          This path doesn&apos;t lead anywhere.
        </h1>

        <p className="mt-8 max-w-xl font-sans text-[15px] leading-[1.85] text-ivory/68">
          Return to Joey&apos;s home page or continue exploring his work around
          recovery, movement, and meaningful change.
        </p>

        <Link
          href="/"
          className="editorial-link editorial-link--light mt-10"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}