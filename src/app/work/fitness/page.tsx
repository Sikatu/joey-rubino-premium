import type { Metadata } from "next";
import Image from "next/image";
import { FinalCTA } from "@/components/FinalCTA";
import { RevealSection } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Fitness & Transformation",
  description:
    "Movement, mindset, and sustainable change. Joey Rubino integrates fitness into the recovery process to build resilience and routine.",
};

export default function FitnessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/images/editorial/wellness.webp"
          alt="Fitness and movement"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 px-6 lg:px-12 xl:px-20 pb-12 lg:pb-16 max-w-7xl mx-auto w-full">
          <p className="text-[11px] font-sans tracking-[0.3em] uppercase text-ivory/60 mb-4">
            Fitness & Transformation
          </p>
          <h1 className="font-serif text-ivory text-[clamp(2rem,4vw+0.5rem,4rem)] leading-[1.1] max-w-2xl">
            Movement as a catalyst for meaningful change.
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-12 xl:px-20">
          <RevealSection>
            <p className="text-body-lg text-body">
              Physical movement is one of the most powerful tools for mental and
              emotional shifts. With over twenty years of experience as a personal
              trainer and group fitness instructor, Joey integrates physical
              wellness directly into his transformational work.
            </p>
          </RevealSection>

          <RevealSection delay={1}>
            <p className="text-body-lg text-body mt-6">
              Fitness in this context isn&apos;t just about aesthetics &mdash; it&apos;s about
              reconnecting with your body, releasing stress, and proving to
              yourself that you are capable of doing hard things consistently. It
              provides an anchor and a positive routine that often replaces
              destructive habits.
            </p>
          </RevealSection>

          <RevealSection delay={2}>
            <div className="divider my-12" />
          </RevealSection>

          <RevealSection delay={2}>
            <h2 className="text-subtitle mb-6">The Approach</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Mind-Body Connection",
                  desc: "Using exercise to process emotions, reduce anxiety, and stay grounded in the present moment.",
                },
                {
                  title: "Building Discipline",
                  desc: "Developing the consistency required in the gym, which naturally translates to consistency in life and recovery.",
                },
                {
                  title: "Personalized Programming",
                  desc: "Tailored fitness routines that meet you where you are, whether you are beginning anew or looking to push past limits.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-sans text-[13px] tracking-[0.1em] uppercase text-ink mb-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[14px] leading-[1.75] text-body">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      <FinalCTA heading="Transformation begins with one decision." />
    </>
  );
}
