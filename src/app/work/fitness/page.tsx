import type { Metadata } from "next";
import Image from "next/image";

import { FinalCTA } from "@/components/FinalCTA";
import { ServiceNavigation } from "@/components/ServiceNavigation";
import { RevealSection } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Fitness & Transformation",
  description:
    "Fitness coaching with Joey Rubino centered on movement, consistency, practical structure, and sustainable personal change.",
};

const focusAreas = [
  {
    number: "01",
    title: "Consistency",
    description:
      "Building a repeatable relationship with movement that supports routine, accountability, and sustainable progress.",
  },
  {
    number: "02",
    title: "Mind & Body",
    description:
      "Using physical activity as a practical way to reconnect with the body, manage stress, and stay engaged with the present moment.",
  },
  {
    number: "03",
    title: "Personal Structure",
    description:
      "Creating movement and fitness routines around the person, their environment, their current capacity, and the life they are building.",
  },
  {
    number: "04",
    title: "Forward Momentum",
    description:
      "Using achievable physical progress to reinforce confidence, discipline, and the experience of following through consistently.",
  },
];

export default function FitnessPage() {
  return (
    <>
      {/* 01 - HERO */}
      <section className="relative overflow-hidden bg-ink pb-20 pt-40 text-ivory lg:pb-28 lg:pt-52">
        <Image
          src="/images/editorial/journey/tropical-garden-sunlight.webp"
          alt=""
          fill
          priority
          className="object-cover object-[center_45%]"
          sizes="100vw"
        />

        <div
          className="absolute inset-0 bg-ink/[0.74]"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute -right-36 -top-40 h-[540px] w-[540px] rounded-full border border-ivory/[0.06]" />

          <div className="absolute -right-4 -top-12 h-[350px] w-[350px] rounded-full border border-ivory/[0.05]" />

          <div className="absolute bottom-0 left-[8%] top-0 hidden w-px bg-ivory/[0.05] lg:block" />

          <div className="absolute bottom-0 right-[8%] top-0 hidden w-px bg-ivory/[0.05] lg:block" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-12 xl:px-20">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <RevealSection>
                <p className="mb-6 text-hero-kicker text-bronze-soft">
                  Fitness &amp; Transformation
                </p>
              </RevealSection>

              <RevealSection delay={1}>
                <h1 className="max-w-5xl font-serif text-[clamp(3.1rem,7vw,7.2rem)] leading-[0.93] tracking-[-0.045em] text-ivory">
                  Build strength.
                  <br />

                  <span className="text-ivory/72">
                    Build structure.
                  </span>
                </h1>
              </RevealSection>
            </div>

            <div className="lg:col-span-3 lg:col-start-10">
              <RevealSection delay={2}>
                <div className="border-t border-ivory/25 pt-6">
                  <p className="font-sans text-[14px] leading-[1.8] text-ivory/72">
                    Fitness coaching centered on movement, consistency,
                    practical structure, and sustainable personal change.
                  </p>
                </div>
              </RevealSection>
            </div>
          </div>

          <div className="mt-16 border-t border-ivory/15 pt-5 lg:mt-24">
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-ivory/65">
              Movement / Consistency / Personal Progress
            </p>
          </div>
        </div>
      </section>

      {/* 02 - APPROACH */}
      <section className="bg-ivory py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <RevealSection>
                <p className="text-eyebrow mb-6">
                  The Approach
                </p>

                <h2 className="text-headline max-w-xl text-ink">
                  Movement with
                  <br />
                  a larger purpose.
                </h2>
              </RevealSection>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <RevealSection delay={1}>
                <div className="space-y-7 text-body-lg text-body">
                  <p>
                    Joey&apos;s background in fitness, personal training, and
                    group fitness informs an approach centered on consistency,
                    structure, and meeting people at their current level.
                  </p>

                  <p>
                    Fitness in this work is not treated as a finish line or an
                    aesthetic standard. Movement can become a practical anchor:
                    something repeatable that supports routine, resilience, and
                    a stronger relationship with daily life.
                  </p>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* 03 - FOCUS AREAS */}
      <section className="bg-alabaster py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <RevealSection>
            <div className="mb-14 flex flex-col gap-5 border-b border-stone/20 pb-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-eyebrow mb-5">
                  Where the Work Can Focus
                </p>

                <h2 className="text-headline max-w-3xl text-ink">
                  Progress that can
                  <br />
                  carry into daily life.
                </h2>
              </div>

              <p className="max-w-sm font-sans text-[14px] leading-[1.8] text-body">
                The right structure depends on the person, their starting
                point, their goals, and what is sustainable in real life.
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2">
            {focusAreas.map((item, index) => (
              <RevealSection
                key={item.number}
                delay={Math.min(index + 1, 4)}
              >
                <div className="border-b border-stone/20 py-9 md:min-h-[225px] md:border-r md:px-8 md:odd:pl-0 md:even:border-r-0 md:even:pr-0 lg:py-12">
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

      {/* 04 - PHILOSOPHY */}
      <section className="bg-olive py-20 text-ivory sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
          <RevealSection>
            <p className="mb-7 font-sans text-[10px] tracking-[0.25em] uppercase text-bronze-soft">
              The Principle
            </p>

            <p className="font-serif text-[clamp(2.2rem,4vw,4.5rem)] leading-[1.08] tracking-[-0.03em] text-ivory">
              Sustainable change is built
              <br />
              through what you can return to.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* 05 - CTA */}
      <ServiceNavigation currentHref="/work/fitness" />

      <FinalCTA heading="Start with a conversation about your goals." />
    </>
  );
}
