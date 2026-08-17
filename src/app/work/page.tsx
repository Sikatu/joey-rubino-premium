import type { Metadata } from "next";
import Link from "next/link";

import { FinalCTA } from "@/components/FinalCTA";
import { RevealSection } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Joey Rubino's work across sober companioning, fitness and transformation, and interventions.",
};

const services = [
  {
    number: "01",
    eyebrow: "Recovery Support",
    title: "Sober Companioning",
    description:
      "Real-world presence, structure, and accountability for people navigating recovery, transition, and the return to everyday life.",
    href: "/work/sober-companioning",
  },
  {
    number: "02",
    eyebrow: "Movement & Structure",
    title: "Fitness & Transformation",
    description:
      "Movement, consistency, and practical structure brought together as tools for building sustainable personal change.",
    href: "/work/fitness",
  },
  {
    number: "03",
    eyebrow: "Conversation & Clarity",
    title: "Interventions",
    description:
      "Structured and compassionate conversations intended to create clarity and help open a path toward recovery.",
    href: "/work/interventions",
  },
];

export default function WorkPage() {
  return (
    <>
      {/* HERO */}
        <section className="relative overflow-hidden border-b border-stone/20 bg-ivory pb-14 pt-24 lg:min-h-[560px] lg:pb-16 lg:pt-28">

          {/* Warm editorial background */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            {/* Warm ivory tonal wash */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#FAF8F4_0%,#F6F2EB_52%,#EFE9DF_100%)]" />

            {/* Slightly warmer field behind the supporting copy */}
            <div className="absolute inset-y-0 right-0 w-[42%] bg-bronze/[0.02]" />

            {/* Diffused atmosphere behind the statement */}
            <div className="absolute -left-[12%] top-[4%] h-[520px] w-[520px] rounded-full bg-bronze/[0.04] blur-3xl" />

            {/* Architectural geometry */}
            <div className="absolute -right-[17%] -top-[48%] h-[720px] w-[720px] rounded-full border border-bronze/[0.065]" />

            <div className="absolute -right-[5%] -top-[24%] h-[500px] w-[500px] rounded-full border border-stone/10" />


          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
              {/* Editorial statement */}
              <div className="lg:col-span-8">
                <RevealSection>
                  <p className="mb-7 text-eyebrow">
                    Work with Joey
                  </p>

                  <h1 className="max-w-[880px] font-serif text-[clamp(3.5rem,10vw,5rem)] leading-[0.92] tracking-[-0.04em] text-ink lg:text-[clamp(4.4rem,4.6vw,5.6rem)] lg:leading-[0.9]">
                    <span className="block lg:whitespace-nowrap">
                      Support shaped
                    </span>

                    <span className="block lg:whitespace-nowrap">
                      around the person,
                    </span>

                    <span className="block lg:whitespace-nowrap">
                      not a template.
                    </span>
                  </h1>
                </RevealSection>
              </div>

              {/* Supporting context */}
              <div className="lg:col-span-4 lg:col-start-9 lg:self-center lg:pl-6 xl:pl-10">
                <RevealSection delay={1}>
                  <div className="max-w-lg border-t border-stone/25 pt-7">
                    <div className="space-y-5 font-sans text-[16px] leading-[1.85] text-body">
                      <p>
                        Joey&apos;s work brings together lived experience,
                        recovery support, accountability, and a background in
                        fitness and wellness.
                      </p>

                      <p>
                        The starting point is always understanding what kind of
                        support may be useful now.
                      </p>
                    </div>

                    <div className="mt-7 h-px w-14 bg-bronze/60" />

                    <p className="mt-5 font-sans text-[10px] tracking-[0.16em] uppercase text-bronze-deep">
                      Personal. Grounded. Considered.
                    </p>
                  </div>
                </RevealSection>
              </div>
            </div>
          </div>
        </section>
        {/* SERVICE INDEX */}
        <section className="bg-alabaster py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
            <RevealSection>
              <div className="mb-8 flex flex-col gap-5 border-b border-stone/25 pb-8 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-eyebrow mb-5">
                    Areas of Work
                  </p>

                  <h2 className="text-headline text-ink">
                    Three ways to begin.
                  </h2>
                </div>

                <p className="max-w-sm font-sans text-[14px] leading-[1.8] text-body">
                  Each area has a different focus, while sharing the same
                  foundation of presence, structure, and human connection.
                </p>
              </div>
            </RevealSection>

            <div>
              {services.map((service, index) => (
                <RevealSection
                  key={service.href}
                  delay={Math.min(index + 1, 3)}
                >
                  <Link
                    href={service.href}
                    className="group relative block border-b border-stone/25 py-9 transition-colors duration-300 first:border-t hover:border-stone/40 focus-visible:border-stone/40 motion-reduce:transition-none lg:py-12"
                  >

                    <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-center lg:gap-8">
                      <div className="lg:col-span-1">
                        <span className="font-serif text-[1.7rem] leading-none text-stone/75 transition-colors duration-300 group-hover:text-bronze-deep group-focus-visible:text-bronze-deep motion-reduce:transition-none">
                          {service.number}
                        </span>
                      </div>

                      <div className="lg:col-span-3">
                        <p className="mb-3 font-sans text-[10px] tracking-[0.16em] uppercase text-bronze-deep transition-colors duration-300 group-hover:text-bronze group-focus-visible:text-bronze motion-reduce:transition-none">
                          {service.eyebrow}
                        </p>

                        <h3 className="font-serif text-[clamp(1.9rem,3.1vw,2.95rem)] leading-[1.06] tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-bronze-deep group-focus-visible:text-bronze-deep motion-reduce:transition-none">
                          {service.title}
                        </h3>
                      </div>

                      <div className="lg:col-span-5 lg:col-start-6">
                        <p className="max-w-xl font-sans text-[15px] leading-[1.8] text-body transition-colors duration-300 group-hover:text-ink group-focus-visible:text-ink motion-reduce:transition-none lg:text-[15.5px]">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex items-center lg:col-span-1 lg:col-start-12 lg:justify-end">
                        <span className="relative flex items-center gap-2.5 font-sans text-[10px] tracking-[0.18em] uppercase text-bronze-deep transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-bronze-deep after:transition-[width] after:duration-500 group-hover:text-ink group-hover:after:w-full group-focus-visible:text-ink group-focus-visible:after:w-full motion-reduce:transition-none motion-reduce:after:transition-none">
                          Explore

                          <span
                            className="font-serif text-xl transition-transform duration-300 group-hover:translate-x-1"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="border-y border-ivory/10 bg-ink py-16 text-ivory lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-12">
              {/* Editorial index */}
              <div className="lg:col-span-3 lg:pt-2">
                <RevealSection>
                  <div className="flex max-w-[230px] items-center gap-4">
                    <p className="shrink-0 font-sans text-[10px] tracking-[0.2em] uppercase text-bronze-soft">
                      The Approach
                    </p>

                    <span
                      className="h-px flex-1 bg-ivory/25"
                      aria-hidden="true"
                    />
                  </div>
                </RevealSection>
              </div>

              {/* Statement */}
              <div className="lg:col-span-8 lg:col-start-5">
                <RevealSection delay={1}>
                  <h2 className="font-serif text-[clamp(2.75rem,8vw,4rem)] leading-[0.98] tracking-[-0.03em] text-ivory lg:text-[clamp(3.5rem,4.1vw,4.5rem)] lg:leading-[0.96]">
                    <span className="block lg:whitespace-nowrap">
                      Different circumstances.
                    </span>

                    <span className="block text-ivory/82 lg:whitespace-nowrap">
                      One grounded approach.
                    </span>
                  </h2>
                </RevealSection>

                <RevealSection delay={2}>
                  <p className="mt-8 max-w-2xl text-body-lg text-ivory/68">
                    The work begins with listening. From there, the focus is on
                    creating useful structure, meaningful connection, and
                    practical support that reflects the situation in front of
                    you.
                  </p>
                </RevealSection>
              </div>
            </div>
          </div>
        </section>
      <FinalCTA heading="Start with a conversation about what comes next." compact />
    </>
  );
}