import type { Metadata } from "next";
import Image from "next/image";

import { FinalCTA } from "@/components/FinalCTA";
import { RevealSection } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Finding Meaning",
  description:
    "Finding Meaning brings together recovery education, awareness, speaking, podcasting, and outreach.",
};

const focusAreas = [
  {
    title: "School Presentations",
    description:
      "Bringing conversations about addiction, mental health, recovery, and awareness to younger audiences.",
  },
  {
    title: "Recovery Education",
    description:
      "Using lived experience to help make addiction and recovery easier to understand and discuss.",
  },
  {
    title: "Podcasting",
    description:
      "Creating space for conversations around recovery, meaning, and transformation through Finding Meaning.",
  },
  {
    title: "Speaking & Outreach",
    description:
      "Extending the conversation beyond individual recovery through speaking, education, and community outreach.",
  },
];

export default function FindingMeaningPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-16 pt-40 text-ivory lg:pb-24 lg:pt-52">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute -right-32 -top-48 h-[520px] w-[520px] rounded-full border border-ivory/[0.06]" />
          <div className="absolute -right-8 -top-24 h-[340px] w-[340px] rounded-full border border-ivory/[0.05]" />
          <div className="absolute bottom-0 left-[8%] top-0 hidden w-px bg-ivory/[0.05] lg:block" />
          <div className="absolute bottom-0 right-[8%] top-0 hidden w-px bg-ivory/[0.05] lg:block" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-12 xl:px-20">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <RevealSection>
                <p className="mb-6 font-sans text-[10px] tracking-[0.3em] uppercase text-ivory/50 sm:text-[11px]">
                  Finding Meaning
                </p>
              </RevealSection>

              <RevealSection delay={1}>
                <h1 className="max-w-4xl font-serif text-[clamp(3.2rem,7vw,7rem)] leading-[0.94] tracking-[-0.04em] text-ivory">
                  Recovery can become
                  <br />
                  <span className="text-ivory/60">a source of hope</span>
                  <br />
                  for someone else.
                </h1>
              </RevealSection>
            </div>

            <div className="lg:col-span-3 lg:col-start-10">
              <RevealSection delay={2}>
                <div className="border-t border-ivory/20 pt-6">
                  <p className="font-sans text-[14px] leading-[1.8] text-ivory/68">
                    Education, awareness, speaking, podcasting, and outreach
                    shaped by lived recovery experience.
                  </p>
                </div>
              </RevealSection>
            </div>
          </div>

          <div className="mt-16 border-t border-ivory/10 pt-5 lg:mt-24">
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-ivory/50 sm:text-[10px]">
              Recovery Education / Awareness / Outreach
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-12 xl:px-20">
          <RevealSection>
            <p className="text-body-lg text-body">
              Finding Meaning brings Joey&apos;s recovery experience into a broader
              conversation about education, awareness, stigma, and the
              possibility of change.
            </p>
          </RevealSection>

          <RevealSection delay={1}>
            <p className="text-body-lg mt-6 text-body">
              Through school presentations, speaking, podcasting, and outreach,
              the initiative creates space for more informed conversations about
              addiction, mental health, and recovery — particularly among
              younger generations.
            </p>
          </RevealSection>
        </div>
      </section>

      <section className="bg-ivory pb-20 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <div className="grid gap-6 md:grid-cols-12 md:gap-8">
            <RevealSection className="md:col-span-4 md:pt-20">
              <div className="relative aspect-[3/4] overflow-hidden bg-alabaster">
                <Image
                  src="/images/editorial/journey/temple-water-reflection.webp"
                  alt="A temple reflected in still water"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 32vw"
                />
              </div>
            </RevealSection>

            <RevealSection delay={1} className="md:col-span-4">
              <div className="relative aspect-[3/4] overflow-hidden bg-alabaster">
                <Image
                  src="/images/editorial/journey/woven-circle-landscape.webp"
                  alt="A landscape viewed through a circular woven frame"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 32vw"
                />
              </div>
            </RevealSection>

            <RevealSection delay={2} className="md:col-span-4 md:pt-32">
              <div className="relative aspect-[3/4] overflow-hidden bg-alabaster">
                <Image
                  src="/images/editorial/journey/rice-terraces-overlook.webp"
                  alt="Green rice terraces across a tropical valley"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 32vw"
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <section className="bg-alabaster py-20 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-12 xl:px-20">
          <RevealSection>
            <p className="text-eyebrow mb-12">Finding Meaning</p>
          </RevealSection>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
            {focusAreas.map((item, index) => (
              <RevealSection key={item.title} delay={index + 1}>
                <div className="border-t border-stone/20 pt-6">
                  <h2 className="mb-3 font-sans text-[15px] tracking-[0.1em] uppercase text-ink">
                    {item.title}
                  </h2>

                  <p className="font-sans text-[14px] leading-[1.75] text-body">
                    {item.description}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-olive py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <RevealSection>
            <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-bronze-soft">
              The Purpose
            </p>

            <p className="mt-7 font-serif text-[clamp(1.5rem,3vw+0.5rem,2.75rem)] leading-[1.2] text-ivory/90">
              Use lived experience to make recovery more visible, reduce stigma,
              and create hope for people who may need to see that change is
              possible.
            </p>
          </RevealSection>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <div className="grid gap-10 border-t border-stone/20 pt-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <RevealSection>
                <p className="text-eyebrow mb-5">
                  Support the Mission
                </p>

                <h2 className="max-w-md font-serif text-[clamp(2rem,3.2vw,3.4rem)] leading-[1.02] tracking-[-0.025em] text-ink">
                  Education, awareness,
                  <br />
                  and outreach.
                </h2>
              </RevealSection>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <RevealSection delay={1}>
                <p className="max-w-xl font-sans text-[15px] leading-[1.85] text-body">
                  If you would like to learn more about Finding Meaning or
                  discuss ways to support its education and outreach work,
                  start with a conversation.
                </p>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>
      <FinalCTA heading="Turn experience into something meaningful." />
    </>
  );
}