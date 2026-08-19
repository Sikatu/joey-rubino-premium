import type { Metadata } from "next";
import Image from "next/image";

import { FinalCTA } from "@/components/FinalCTA";
import { ServiceNavigation } from "@/components/ServiceNavigation";
import { RevealSection } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Sober Companioning",
  description:
    "Real-world recovery support centered on presence, structure, accountability, and discretion with Joey Rubino.",
};

const focusAreas = [
  {
    number: "01",
    title: "Transitions",
    description:
      "Structure and support while navigating changes in routine, environment, or the return to everyday life.",
  },
  {
    number: "02",
    title: "Accountability",
    description:
      "Consistent presence designed to reinforce commitments, routines, and recovery-focused decisions.",
  },
  {
    number: "03",
    title: "Demanding Environments",
    description:
      "Adaptable support around professional responsibilities, travel, touring, and demanding schedules.",
  },
  {
    number: "04",
    title: "Routine & Wellness",
    description:
      "Daily rhythms built around consistency, movement, healthy habits, and sustainable change.",
  },
];

export default function SoberCompanioningPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-20 pt-40 text-ivory lg:pb-28 lg:pt-52">
        <Image
          src="/images/editorial/journey/tropical-palm-valley.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/[0.76]" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute -right-40 -top-44 h-[560px] w-[560px] rounded-full border border-ivory/[0.06]" />
          <div className="absolute -right-10 -top-16 h-[360px] w-[360px] rounded-full border border-ivory/[0.05]" />
          <div className="absolute bottom-0 left-[8%] top-0 hidden w-px bg-ivory/[0.05] lg:block" />
          <div className="absolute bottom-0 right-[8%] top-0 hidden w-px bg-ivory/[0.05] lg:block" />
        </div>

        <div className="relative site-shell w-full">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <RevealSection>
                <p className="mb-6 text-hero-kicker text-bronze-soft">
                  Sober Companioning
                </p>
              </RevealSection>

              <RevealSection delay={1}>
                <h1 className="max-w-5xl font-serif text-[clamp(3.3rem,7vw,7.4rem)] leading-[0.93] tracking-[-0.045em] text-ivory">
                  Steady presence
                  <br />
                  <span className="text-ivory/55">when life is moving.</span>
                </h1>
              </RevealSection>
            </div>

            <div className="lg:col-span-3 lg:col-start-10">
              <RevealSection delay={2}>
                <div className="border-t border-ivory/20 pt-6">
                  <p className="font-sans text-[14px] leading-[1.8] text-ivory/68">
                    Real-world recovery support centered on presence,
                    accountability, structure, and discretion.
                  </p>
                </div>
              </RevealSection>
            </div>
          </div>

          <div className="mt-16 border-t border-ivory/10 pt-5 lg:mt-24">
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-ivory/72 sm:text-[10px]">
              Recovery Support / Structure / Accountability
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 lg:py-36">
        <div className="site-shell">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <RevealSection>
                <p className="text-eyebrow mb-6">The Approach</p>

                <h2 className="text-headline max-w-xl text-ink">
                  Support beyond
                  <br />
                  the conversation.
                </h2>
              </RevealSection>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <RevealSection delay={1}>
                <div className="space-y-7 text-body-lg text-body">
                  <p>
                    Recovery is lived in ordinary days, demanding schedules,
                    travel, professional responsibilities, and transitions back
                    into everyday life.
                  </p>

                  <p>
                    Joey&apos;s role is centered on being present in those
                    real-world environments while helping reinforce structure,
                    consistency, accountability, and recovery-focused routines.
                  </p>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-alabaster py-24 lg:py-36">
        <div className="site-shell">
          <RevealSection>
            <div className="mb-14 flex flex-col gap-5 border-b border-stone/20 pb-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-eyebrow mb-5">Where the Work Can Focus</p>

                <h2 className="text-headline max-w-3xl text-ink">
                  Practical support for
                  <br />
                  real-world recovery.
                </h2>
              </div>

              <p className="max-w-sm font-sans text-[14px] leading-[1.8] text-body">
                The shape of support depends on the person, the environment,
                and what is happening in daily life.
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2">
            {focusAreas.map((item, index) => (
              <RevealSection key={item.title} delay={index + 1}>
                <div className="border-b border-stone/20 py-9 md:min-h-[220px] md:border-r md:px-8 md:odd:pl-0 md:even:border-r-0 md:even:pr-0 lg:py-12">
                  <p className="mb-8 text-step-index text-bronze-deep">
                    {item.number}
                  </p>

                  <h3 className="mb-5 font-serif text-[clamp(2rem,3vw,3rem)] leading-[1] tracking-[-0.025em] text-ink">
                    {item.title}
                  </h3>

                  <p className="max-w-lg font-sans text-[14px] leading-[1.8] text-body">
                    {item.description}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-olive py-24 text-ivory lg:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
          <RevealSection>
            <p className="mb-7 font-sans text-[10px] tracking-[0.25em] uppercase text-bronze-soft">
              The Principle
            </p>

            <p className="font-serif text-[clamp(2.2rem,4vw,4.5rem)] leading-[1.08] tracking-[-0.03em] text-ivory/90">
              Recovery happens in real life.
              <br />
              Support should be able to meet you there.
            </p>
          </RevealSection>
        </div>
      </section>

      <ServiceNavigation currentHref="/work/sober-companioning" />

      <FinalCTA heading="Start with a conversation." />
    </>
  );
}