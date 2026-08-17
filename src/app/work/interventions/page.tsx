import type { Metadata } from "next";
import Image from "next/image";

import { FinalCTA } from "@/components/FinalCTA";
import { RevealSection } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Interventions",
  description:
    "A compassionate and structured approach to difficult conversations around addiction, clarity, connection, and recovery.",
};

const principles = [
  {
    number: "01",
    title: "Clarity",
    description:
      "Creating space to understand what is happening, what needs to be communicated, and what the conversation is really about.",
  },
  {
    number: "02",
    title: "Compassion",
    description:
      "Keeping care for the person at the center of a difficult and emotionally complex conversation.",
  },
  {
    number: "03",
    title: "Connection",
    description:
      "Approaching the conversation with the intention of creating an opening toward support, recovery, and another possible direction.",
  },
];

export default function InterventionsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-20 pt-40 text-ivory lg:pb-28 lg:pt-52">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute left-[8%] top-0 hidden h-full w-px bg-ivory/[0.05] lg:block" />
          <div className="absolute right-[8%] top-0 hidden h-full w-px bg-ivory/[0.05] lg:block" />

          <div className="absolute right-[12%] top-[22%] hidden h-px w-[28%] bg-ivory/[0.06] lg:block" />
          <div className="absolute right-[12%] top-[22%] hidden h-[180px] w-px bg-ivory/[0.06] lg:block" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-12 xl:px-20">
          <RevealSection>
            <p className="mb-8 font-sans text-[10px] tracking-[0.3em] uppercase text-bronze-soft sm:text-[11px]">
              Interventions
            </p>
          </RevealSection>

          <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <RevealSection delay={1}>
                <h1 className="max-w-5xl font-serif text-[clamp(3.3rem,7vw,7.2rem)] leading-[0.94] tracking-[-0.045em] text-ivory">
                  A difficult conversation
                  <br />
                  <span className="text-ivory/55">
                    can create an opening.
                  </span>
                </h1>
              </RevealSection>
            </div>

            <div className="lg:col-span-3 lg:col-start-10">
              <RevealSection delay={2}>
                <div className="border-t border-ivory/20 pt-6">
                  <p className="font-sans text-[14px] leading-[1.8] text-ivory/68">
                    Structured and compassionate guidance for conversations
                    around addiction, recovery, and the possibility of change.
                  </p>
                </div>
              </RevealSection>
            </div>
          </div>

          <div className="mt-16 border-t border-ivory/10 pt-5 lg:mt-24">
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-ivory/50 sm:text-[10px]">
              Clarity / Compassion / Connection
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <RevealSection className="lg:col-span-5">
              <div className="relative aspect-[3/4] overflow-hidden bg-alabaster">
                <Image
                  src="/images/editorial/journey/carved-doorway-transition.webp"
                  alt="An open carved doorway leading into a garden"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </RevealSection>

            <RevealSection delay={1} className="lg:col-span-5 lg:col-start-7">
              <p className="text-eyebrow mb-6">Creating an Opening</p>
              <p className="font-serif text-[clamp(2.25rem,4vw,4.25rem)] leading-[1.02] tracking-[-0.03em] text-ink">
                A different direction can begin with one clear, compassionate
                opening.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <RevealSection>
                <p className="text-eyebrow mb-6">The Conversation</p>

                <h2 className="text-headline max-w-xl text-ink">
                  Create space
                  <br />
                  for clarity.
                </h2>
              </RevealSection>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <RevealSection delay={1}>
                <div className="space-y-7 text-body-lg text-body">
                  <p>
                    Conversations around addiction can be difficult for everyone
                    involved. Emotion, concern, uncertainty, and long-standing
                    patterns can make it hard to know where to begin.
                  </p>

                  <p>
                    Joey approaches intervention work with compassion,
                    structure, and an understanding of how emotionally complex
                    those moments can be.
                  </p>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-alabaster py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <RevealSection>
            <div className="mb-14 border-b border-stone/20 pb-8">
              <p className="text-eyebrow mb-5">What the Work Centers On</p>

              <h2 className="text-headline max-w-3xl text-ink">
                A considered approach
                <br />
                to a difficult moment.
              </h2>
            </div>
          </RevealSection>

          <div>
            {principles.map((item, index) => (
              <RevealSection key={item.number} delay={index + 1}>
                <div className="grid gap-7 border-b border-stone/20 py-10 md:grid-cols-12 md:items-start lg:py-12">
                  <div className="md:col-span-1">
                    <p className="font-sans text-[10px] tracking-[0.2em] text-bronze-deep">
                      {item.number}
                    </p>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="font-serif text-[clamp(2.2rem,3.5vw,3.75rem)] leading-[1] tracking-[-0.03em] text-ink">
                      {item.title}
                    </h3>
                  </div>

                  <div className="md:col-span-5 md:col-start-7">
                    <p className="max-w-xl font-sans text-[14px] leading-[1.8] text-body">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-olive py-24 text-ivory lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <RevealSection>
                <p className="mb-6 font-sans text-[10px] tracking-[0.25em] uppercase text-bronze-soft">
                  Experience & Perspective
                </p>

                <h2 className="font-serif text-[clamp(2.7rem,5vw,5rem)] leading-[0.98] tracking-[-0.035em] text-ivory">
                  Experience
                  <br />
                  informs the room.
                </h2>
              </RevealSection>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <RevealSection delay={1}>
                <div className="space-y-7 border-t border-ivory/15 pt-7 font-sans text-[14px] leading-[1.9] text-ivory/68">
                  <p>
                    Joey&apos;s background includes training in interventions.
                    His approach emphasizes clarity, connection, and creating
                    space for a person to see that another direction may be
                    possible.
                  </p>

                  <p>
                    His own recovery experience also brings lived perspective to
                    conversations that can otherwise feel difficult to begin.
                  </p>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA heading="Begin with a conversation." />
    </>
  );
}