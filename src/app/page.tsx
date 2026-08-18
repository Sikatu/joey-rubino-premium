import Image from "next/image";
import Link from "next/link";

import { Accordion } from "@/components/Accordion";
import { Button } from "@/components/Button";
import { FinalCTA } from "@/components/FinalCTA";
import { RevealSection } from "@/lib/motion";

const services = [
  {
    number: "01",
    eyebrow: "Recovery Support",
    title: "Sober Companioning",
    description:
      "Real-world presence, structure, and accountability for people navigating recovery, transition, travel, and the return to everyday life.",
    href: "/work/sober-companioning",
  },
  {
    number: "02",
    eyebrow: "Movement & Structure",
    title: "Fitness & Transformation",
    description:
      "Movement, consistency, and practical structure brought together as tools for sustainable personal change.",
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

const processSteps = [
  {
    number: "01",
    title: "Start privately",
    description:
      "Begin with a private conversation about what is happening, what feels urgent, and what kind of support may be useful.",
  },
  {
    number: "02",
    title: "Understand the need",
    description:
      "Clarify the circumstances, goals, environment, and level of support that may be appropriate.",
  },
  {
    number: "03",
    title: "Create the next step",
    description:
      "If working together makes sense, establish a practical direction for support, structure, accountability, or recovery.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 01 - HERO */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-ivory">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#171715_0%,#252823_48%,#353A33_100%)]" />

          <div className="absolute -right-[14%] -top-[18%] h-[70vw] w-[70vw] max-h-[900px] max-w-[900px] rounded-full border border-ivory/[0.04]" />

          <div className="absolute -right-[4%] -top-[8%] h-[48vw] w-[48vw] max-h-[620px] max-w-[620px] rounded-full border border-ivory/[0.035]" />

          <div className="absolute bottom-0 left-[8%] top-0 hidden w-px bg-ivory/[0.055] lg:block" />

          <div className="absolute bottom-0 right-[8%] top-0 hidden w-px bg-ivory/[0.055] lg:block" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-32 lg:px-12 lg:pb-20 lg:pt-36 xl:px-16">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:-translate-y-16 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-8 xl:-translate-x-16">
              <RevealSection>
                <p className="mb-6 max-w-[18rem] font-sans text-[9px] leading-[1.7] tracking-[0.2em] uppercase text-bronze-soft sm:mb-7 sm:max-w-none sm:text-[10px] sm:tracking-[0.24em] lg:text-[11px]">
                  Los Angeles &middot; Sober Companioning &middot; Recovery Support
                </p>
              </RevealSection>

              <RevealSection delay={1}>
                <h1 className="font-serif text-[clamp(2.7rem,13.5vw,4.75rem)] leading-[0.88] tracking-[-0.04em] text-ivory sm:text-[clamp(4.5rem,12vw,6.5rem)] lg:text-[clamp(5.5rem,7.35vw,8rem)] lg:leading-[0.87] lg:tracking-[-0.045em]">
                  <span className="block whitespace-nowrap">
                    Find Healing.
                  </span>

                  <span className="block whitespace-nowrap text-ivory/72">
                    Find Hope.
                  </span>

                  <span className="block whitespace-nowrap">
                    Find Meaning.
                  </span>
                </h1>
              </RevealSection>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 lg:self-center xl:translate-x-6">
              <RevealSection delay={2}>
                <div className="max-w-md border-t border-ivory/25 pt-7">
                  <p className="max-w-md font-sans text-[14px] leading-[1.8] text-ivory/72">
                    Private sober companioning, interventions, fitness coaching,
                    and recovery support for individuals and families
                    navigating change.
                  </p>

                  <div className="mt-7 flex max-w-md flex-col gap-3 sm:mt-9">
                    <div className="sm:hidden">
                      <Button
                        href="/contact"
                        variant="secondary"
                        className="min-h-[58px] w-full"
                        style={{
                          paddingInline: "1rem",
                          fontSize: "0.625rem",
                          letterSpacing: "0.12em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Start a Private Conversation
                      </Button>
                    </div>

                    <div className="hidden sm:block">
                      <Button
                        href="/contact"
                        variant="secondary"
                        className="min-h-[58px] w-full"
                      >
                        Start a Private Conversation
                      </Button>
                    </div>

                    <div className="hidden sm:block">
                      <Button
                        href="/about"
                        variant="outline"
                        className="lux-button--dark-outline min-h-[52px] w-full opacity-90 transition-opacity hover:opacity-100"
                      >
                        Meet Joey
                      </Button>
                    </div>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>

          <div className="mt-10 hidden items-end justify-between gap-5 border-t border-ivory/15 pt-4 sm:mt-14 sm:flex sm:pt-5 lg:mt-20">
            <p className="max-w-[11rem] font-sans text-[9px] leading-[1.65] tracking-[0.16em] uppercase text-ivory/70 sm:max-w-none sm:text-[10px] sm:tracking-[0.22em]">
              Personal &middot; Discreet &middot; Grounded
            </p>

            <div
              className="flex items-center gap-3 font-sans text-[9px] tracking-[0.22em] uppercase text-ivory/60 sm:text-[10px]"
              aria-hidden="true"
            >
              <span>Explore</span>
              <span className="h-7 w-px bg-ivory/25" />

              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 5v14m0 0l-5-5m5 5l5-5"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 02 - SERVICES */}
      <section className="border-t border-ivory/10 bg-ink py-20 text-ivory sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <RevealSection>
            <div className="mb-10 grid gap-7 border-b border-ivory/15 pb-9 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="mb-5 font-sans text-[10px] tracking-[0.22em] uppercase text-bronze-soft">
                  Ways Joey Can Help
                </p>

                <h2 className="font-serif text-[clamp(2.8rem,5vw,5.25rem)] leading-[0.95] tracking-[-0.04em] text-ivory">
                  Support shaped around
                  <br />
                  the situation in front of you.
                </h2>
              </div>

              <div className="lg:col-span-4 lg:col-start-9">
                <p className="max-w-md font-sans text-[14px] leading-[1.8] text-ivory/72">
                  Three areas of work, connected by the same foundation:
                  presence, structure, accountability, and human connection.
                </p>
              </div>
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
                  className="group grid gap-6 border-b border-ivory/15 py-9 transition-colors duration-300 hover:border-ivory/35 focus-visible:border-ivory/35 md:grid-cols-12 md:items-center lg:py-11"
                >
                  <div className="md:col-span-1">
                    <span className="text-step-index text-ivory/60">
                      {service.number}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <p className="mb-3 font-sans text-[10px] tracking-[0.2em] uppercase text-bronze-soft">
                      {service.eyebrow}
                    </p>

                    <h3 className="font-serif text-[clamp(2rem,3vw,3.25rem)] leading-[1] tracking-[-0.025em] text-ivory transition-colors duration-500 group-hover:text-bronze-soft group-focus-visible:text-bronze-soft">
                      {service.title}
                    </h3>
                  </div>

                  <div className="md:col-span-5 md:col-start-7">
                    <p className="max-w-xl font-sans text-[15px] leading-[1.8] text-ivory/72">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center md:col-span-1 md:col-start-12 md:justify-end">
                    <span
                      className="flex items-center gap-2 font-sans text-[9px] tracking-[0.16em] uppercase text-ivory/65 transition-colors duration-300 group-hover:text-ivory group-focus-visible:text-ivory"
                      aria-hidden="true"
                    >
                      Explore
                      <span className="font-serif text-xl transition-transform duration-300 group-hover:translate-x-1">
                        {"→"}
                      </span>
                    </span>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>

          <RevealSection delay={2}>
            <div className="mt-9 flex justify-end">
              <Link href="/work" className="editorial-link editorial-link--light">
                View All Work
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* 03 - WHY JOEY */}
      <section className="bg-ivory py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-5">
              <RevealSection>
                <div className="img-hover-scale relative aspect-[4/5] overflow-hidden border border-stone/15 bg-alabaster">
                  <Image
                    src="/images/joey/portrait.webp"
                    alt="Joey Rubino"
                    fill
                    className="object-cover grayscale transition-[filter,transform] duration-1000 hover:grayscale-0"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />

                  <span
                    className="absolute bottom-0 left-0 h-px w-20 bg-bronze-deep"
                    aria-hidden="true"
                  />
                </div>
              </RevealSection>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <RevealSection>
                <div className="mb-6 flex items-center gap-4">
                  <span
                    className="h-px w-8 bg-bronze-deep"
                    aria-hidden="true"
                  />

                  <p className="text-eyebrow">
                    Why Joey
                  </p>
                </div>

                <h2 className="max-w-[760px] font-serif text-[clamp(2.8rem,4vw,4.6rem)] leading-[0.97] tracking-[-0.038em] text-ink">
                  Lived experience.
                  <br />
                  Practical structure.
                  <br />
                  <span className="text-body">
                    Human understanding.
                  </span>
                </h2>
              </RevealSection>

              <RevealSection delay={1}>
                <div className="mt-9 max-w-2xl space-y-5 text-body-lg text-body">
                  <p>
                    Joey&apos;s work is informed by more than a decade of lived
                    recovery experience and a long background in fitness,
                    wellness, personal training, and group fitness.
                  </p>

                  <p>
                    His background also includes training across interventions,
                    health coaching, and yoga, along with experience working and
                    traveling in demanding professional environments. The
                    approach is personal, practical, and centered on meeting
                    people where life is actually happening.
                  </p>
                </div>
              </RevealSection>

              <RevealSection delay={2}>
                <div className="mb-8 mt-9 grid grid-cols-1 border-y border-stone/20 sm:grid-cols-3">
                  {[
                    ["Foundation", "Lived Recovery"],
                    ["Background", "Fitness & Wellness"],
                    ["Approach", "Personal & Practical"],
                  ].map(([label, value], index) => (
                    <div
                      key={label}
                      className={`py-7 ${
                        index > 0
                          ? "border-t border-stone/15 sm:border-l sm:border-t-0 sm:px-7"
                          : "sm:pr-7"
                      }`}
                    >
                      <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-bronze-deep">
                        {label}
                      </p>

                      <p className="mt-3 font-serif text-[1.2rem] leading-[1.1] text-ink sm:text-[1.05rem] lg:text-[1.3rem]">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </RevealSection>

              <RevealSection delay={3}>
                <Link href="/about" className="editorial-link">
                  Read Joey&apos;s Story
                </Link>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* 04 - HOW SUPPORT WORKS */}
      <section className="bg-alabaster py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <RevealSection>
                <div className="mb-6 flex items-center gap-4">
                  <span
                    className="h-px w-8 bg-bronze-deep"
                    aria-hidden="true"
                  />

                  <p className="text-eyebrow">
                    How Support Begins
                  </p>
                </div>

                <h2 className="font-serif text-[clamp(2.65rem,4vw,4.4rem)] leading-[0.98] tracking-[-0.035em] text-ink">
                  Start with what
                  <br />
                  is happening now.
                </h2>

                <p className="mt-7 max-w-sm font-sans text-[15px] leading-[1.8] text-body">
                  No template and no pressure. The first goal is simply to
                  understand the situation and determine what kind of support
                  may actually be useful.
                </p>
              </RevealSection>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-t border-stone/25">
                {processSteps.map((step, index) => (
                  <RevealSection
                    key={step.number}
                    delay={Math.min(index + 1, 3)}
                  >
                    <div className="grid gap-5 border-b border-stone/25 py-8 sm:grid-cols-[52px_1fr] lg:py-10">
                      <p className="text-step-index text-bronze-deep">
                        {step.number}
                      </p>

                      <div>
                        <h3 className="font-serif text-[clamp(1.8rem,2.7vw,2.8rem)] leading-[1.04] tracking-[-0.025em] text-ink">
                          {step.title}
                        </h3>

                        <p className="mt-4 max-w-xl font-sans text-[15px] leading-[1.8] text-body">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </RevealSection>
                ))}
              </div>

              <RevealSection delay={3}>
                <div className="mt-9">
                  <Link href="/contact" className="editorial-link">
                    Start Privately
                  </Link>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* 05 - FINDING MEANING */}
      <section className="overflow-hidden bg-olive py-20 text-ivory sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-8">
              <RevealSection>
                <p className="mb-6 font-sans text-[10px] tracking-[0.22em] uppercase text-bronze-soft">
                  Finding Meaning
                </p>
              </RevealSection>

              <RevealSection delay={1}>
                <h2 className="max-w-[920px] font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.95] tracking-[-0.04em] text-ivory">
                  Experience can
                  <br />
                  become purpose.
                </h2>
              </RevealSection>
            </div>

            <div className="lg:col-span-3 lg:col-start-10">
              <RevealSection delay={2}>
                <div className="border-t border-ivory/25 pt-7">
                  <p className="font-sans text-[15px] leading-[1.8] text-ivory/75">
                    Finding Meaning extends Joey&apos;s recovery experience into
                    education, awareness, speaking, and outreach.
                  </p>

                  <Link
                    href="/finding-meaning"
                    className="editorial-link editorial-link--light mt-8"
                  >
                    Explore Finding Meaning
                  </Link>
                </div>
              </RevealSection>
            </div>
          </div>

          <div
            className="mt-16 grid grid-cols-2 border-t border-ivory/20 md:mt-20 md:grid-cols-4"
            aria-label="Finding Meaning focus areas"
          >
            {[
              "School Presentations",
              "Recovery Education",
              "Speaking",
              "Community Outreach",
            ].map((item, index) => (
              <div
                key={item}
                className={`px-4 py-8 sm:px-5 md:border-r md:border-ivory/15 md:px-7 md:py-9 ${
                  index < 2
                    ? "border-b border-ivory/15 md:border-b-0"
                    : ""
                } ${
                  index % 2 === 0
                    ? "border-r border-ivory/15"
                    : ""
                } ${
                  index === 0
                    ? "pl-0"
                    : ""
                } ${
                  index === 3
                    ? "pr-0 md:border-r-0"
                    : ""
                }`}
              >
                <p className="mb-4 font-sans text-[10px] tracking-[0.18em] text-bronze-soft">
                  0{index + 1}
                </p>

                <p className="max-w-[180px] font-sans text-[11px] leading-[1.55] tracking-[0.13em] uppercase text-ivory/82">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 - FAQ */}
      <section className="bg-ivory py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <RevealSection>
                <div className="mb-6 flex items-center gap-4">
                  <span
                    className="h-px w-8 bg-bronze-deep"
                    aria-hidden="true"
                  />

                  <p className="text-eyebrow">
                    Before We Talk
                  </p>
                </div>

                <h2 className="max-w-xl font-serif text-[clamp(2.7rem,4.5vw,4.8rem)] leading-[0.98] tracking-[-0.035em] text-ink">
                  A few useful
                  <br />
                  answers first.
                </h2>

                <p className="mt-8 max-w-sm font-sans text-[15px] leading-[1.8] text-body">
                  Every situation is different. These answers are simply a
                  starting point before a first conversation.
                </p>
              </RevealSection>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <RevealSection delay={1}>
                <Accordion
                  items={[
                    {
                      question: "What does working with Joey look like?",
                      answer:
                        "Every situation is different. A first conversation can help clarify what is happening, what you are looking for, and which area of Joey's work may be relevant.",
                    },
                    {
                      question: "Who is sober companioning for?",
                      answer:
                        "Sober companioning centers on real-world presence, structure, accountability, and support around recovery, transitions, travel, and the return to everyday life.",
                    },
                    {
                      question: "How do I get started?",
                      answer:
                        "Start with a private conversation. You can use the contact page, call Joey directly, or email him and briefly share what you are looking for.",
                    },
                  ]}
                />

                <div className="mt-10 flex justify-end">
                  <Link href="/faq" className="editorial-link">
                    View All FAQs
                  </Link>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* 07 - FINAL CTA */}
      <FinalCTA heading="You don't have to navigate change alone." />
    </>
  );
}
