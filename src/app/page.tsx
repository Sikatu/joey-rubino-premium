import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { Accordion } from "@/components/Accordion";
import { FinalCTA } from "@/components/FinalCTA";
import { RevealSection } from "@/lib/motion";

export default function HomePage() {
  return (
    <>
      {/* 01 - HERO */}
      <section className="relative flex min-h-[720px] h-[100svh] items-end overflow-hidden bg-ink text-ivory">
        {/* Atmospheric background — intentionally image-free */}
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

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-12 lg:pb-20 xl:px-16">
          <div className="grid grid-cols-1 gap-16 lg:-translate-y-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8 xl:-translate-x-16">
              <RevealSection>
                <p className="mb-7 font-sans text-[10px] tracking-[0.28em] uppercase text-bronze-soft sm:text-[11px]">
                  Recovery · Movement · Meaning
                </p>
              </RevealSection>

              <RevealSection delay={1}>
                <h1 className="font-serif text-[clamp(3.75rem,9vw,8.75rem)] leading-[0.86] tracking-[-0.045em] text-ivory lg:text-[clamp(5.5rem,7.35vw,8rem)] lg:leading-[0.87]">
                  <span className="block lg:whitespace-nowrap">
                    Find Healing.
                  </span>

                  <span className="block text-ivory/72 lg:whitespace-nowrap">
                    Find Hope.
                  </span>

                  <span className="block lg:whitespace-nowrap">
                    Find Meaning.
                  </span>
                </h1>
              </RevealSection>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 lg:self-center xl:translate-x-6">
              <RevealSection delay={2}>
                <div className="max-w-md border-t border-ivory/20 pt-7">
                  <p className="max-w-md font-sans text-[14px] leading-[1.8] text-ivory/68">
                    Recovery support, fitness, and guidance shaped by lived
                    experience, structure, and human connection.
                  </p>

                  <div className="mt-9 flex max-w-md flex-col gap-3">
                    <Button
                      href="/contact"
                      variant="secondary"
                      className="min-h-[58px] w-full"
                    >
                      Work with Joey
                    </Button>

                    <Button
                      href="/about"
                      variant="outline"
                      className="lux-button--dark-outline min-h-[52px] w-full opacity-80 transition-opacity hover:opacity-100"
                    >
                      Discover His Approach
                    </Button>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>

          <div className="mt-16 flex items-end justify-between border-t border-ivory/10 pt-5 lg:mt-20">
            <p className="font-sans text-[9px] tracking-[0.22em] uppercase text-ivory/35 sm:text-[10px]">
              Los Angeles
            </p>

            <div
              className="flex items-center gap-3 font-sans text-[9px] tracking-[0.22em] uppercase text-ivory/35 sm:text-[10px]"
              aria-hidden="true"
            >
              <span>Explore</span>
              <span className="h-7 w-px bg-ivory/20" />
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


      {/* 02 - INTRODUCTION */}
      <section className="bg-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-start lg:gap-12 xl:gap-16">
            <div className="relative lg:col-span-5 lg:pt-14">
              <RevealSection>
                <div className="img-hover-scale relative aspect-[4/5] overflow-hidden border border-stone/15 bg-alabaster">
                  <Image
                    src="/images/joey/portrait.webp"
                    alt="Joey Rubino"
                    fill
                    loading="eager"
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

            <div className="lg:col-span-7 lg:col-start-6">
              <RevealSection className="mb-10 lg:mb-12">
                <div className="mb-7 flex items-center gap-4">
                  <span
                    className="h-px w-8 bg-bronze-deep"
                    aria-hidden="true"
                  />

                  <p className="text-eyebrow">
                    Sober Companion · Coach · Guide
                  </p>
                </div>

                <h2 className="font-serif text-[clamp(2.7rem,3.65vw,4.3rem)] leading-[0.98] tracking-[-0.035em] text-ink">
                  <span className="block lg:whitespace-nowrap">
                    A grounded approach
                  </span>
                  <span className="block lg:whitespace-nowrap">
                    to meaningful change.
                  </span>
                </h2>
              </RevealSection>

              <RevealSection delay={1}>
                <div className="max-w-2xl space-y-5 text-body-lg text-body">
                  <p>
                    Transformation requires more than just stopping a behavior
                    &mdash; it requires building a life that supports you.
                    Drawing on over ten years of lived experience in recovery
                    and a background in fitness and wellness, Joey provides the
                    structure, accountability, and connection needed to
                    navigate change.
                  </p>

                  <p>
                    Whether working as a sober companion through early
                    recovery, guiding interventions, or integrating fitness
                    into a new way of living, the approach is always personal,
                    discreet, and deeply compassionate.
                  </p>
                </div>
              </RevealSection>

              <RevealSection delay={2} className="mt-8">
                <Link href="/about" className="editorial-link">
                  Read Joey&apos;s Story
                </Link>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>
      {/* 03 - WORK / SERVICES */}
      <section className="bg-ink py-24 text-ivory lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <SectionHeading
            eyebrow="How Joey Can Help"
            title="Work & Services"
            dark
          />

          <div className="border-t border-ivory/15">
            {[
              {
                number: "01",
                eyebrow: "Recovery Support",
                title: "Sober Companioning",
                desc: "Real-world presence, structure, and accountability for people navigating recovery and transition.",
                href: "/work/sober-companioning",
              },
              {
                number: "02",
                eyebrow: "Movement & Structure",
                title: "Fitness & Transformation",
                desc: "Movement, consistency, and practical structure brought together as tools for sustainable personal change.",
                href: "/work/fitness",
              },
              {
                number: "03",
                eyebrow: "Conversation & Clarity",
                title: "Interventions",
                desc: "Structured and compassionate conversations intended to create clarity and help open a path toward recovery.",
                href: "/work/interventions",
              },
            ].map((service, i) => (
              <RevealSection key={service.title} delay={i + 1}>
                <Link
                  href={service.href}
                  className="group grid gap-6 border-b border-ivory/15 py-9 transition-colors hover:border-ivory/35 md:grid-cols-12 md:items-center lg:py-11"
                >
                  <div className="md:col-span-1">
                    <span className="font-sans text-[10px] tracking-[0.2em] text-ivory/50">
                      {service.number}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <p className="mb-3 font-sans text-[10px] tracking-[0.2em] uppercase text-bronze-soft">
                      {service.eyebrow}
                    </p>

                    <h3 className="font-serif text-[clamp(2rem,3vw,3.25rem)] leading-[1] tracking-[-0.025em] text-ivory transition-colors duration-500 group-hover:text-bronze-soft">
                      {service.title}
                    </h3>
                  </div>

                  <div className="md:col-span-5 md:col-start-7">
                    <p className="max-w-xl font-sans text-[15px] leading-[1.8] text-ivory/68">
                      {service.desc}
                    </p>
                  </div>

                  <div className="flex items-center md:col-span-1 md:col-start-12 md:justify-end">
                    <span
                      className="flex items-center gap-2 font-sans text-[9px] tracking-[0.16em] uppercase text-ivory/45 transition-colors duration-300 group-hover:text-ivory"
                      aria-hidden="true"
                    >
                      Explore
                      <span className="font-serif text-xl transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
      {/* 04 - HOW IT WORKS */}
      <section className="bg-alabaster py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <RevealSection className="mx-auto mb-14 max-w-4xl text-center lg:mb-20">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span
                className="h-px w-8 bg-bronze-deep"
                aria-hidden="true"
              />

              <p className="text-eyebrow">How It Works</p>
            </div>

            <h2 className="font-serif text-[clamp(2.5rem,4.5vw,4.75rem)] leading-[0.98] tracking-[-0.035em] text-ink">
              A personal process.
              <br />
              <span className="text-body">A considered approach.</span>
            </h2>
          </RevealSection>

          <div className="grid border-t border-stone/25 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Reach Out",
                desc: "Start with a private conversation about what is happening and what kind of support may be needed.",
              },
              {
                num: "02",
                title: "Understand the Need",
                desc: "Create space to understand the circumstances, goals, and type of support that may be appropriate.",
              },
              {
                num: "03",
                title: "Create the Next Step",
                desc: "If working together makes sense, establish a personalized direction for support, structure, accountability, or recovery.",
              },
            ].map((step, index) => (
              <RevealSection
                key={step.num}
                delay={index + 1}
                className={`h-full ${
                  index < 2 ? "md:border-r md:border-stone/20" : ""
                }`}
              >
                <div className="h-full border-b border-stone/20 py-10 md:min-h-[270px] md:border-b-0 md:px-8 md:py-12">
                  <p className="mb-10 font-sans text-[10px] tracking-[0.2em] text-bronze-deep">
                    {step.num}
                  </p>

                  <h3 className="mb-5 max-w-xs font-serif text-[clamp(1.55rem,2.2vw,2.25rem)] leading-[1.05] tracking-[-0.02em] text-ink">
                    {step.title}
                  </h3>

                  <p className="max-w-sm font-sans text-[15px] leading-[1.8] text-body">
                    {step.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
      {/* 05 - ABOUT JOEY / STORY */}
      <section className="overflow-hidden border-t border-stone/10 bg-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <RevealSection>
                <p className="text-eyebrow mb-6">
                  About Joey
                </p>

                <h2 className="max-w-[760px] font-serif text-[clamp(2.7rem,3.55vw,4.1rem)] leading-[0.98] tracking-[-0.035em] text-ink">
                  Experience
                  <br />
                  shaped by life.
                  <br />
                  <span className="text-body">
                    Guidance grounded in
                  </span>
                  <br />
                  <span className="text-body">
                    understanding.
                  </span>
                </h2>
              </RevealSection>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <RevealSection delay={1}>
                <div className="max-w-2xl space-y-5 font-sans text-[16px] leading-[1.85] text-body">
                  <p>
                    Joey&apos;s work is informed by his own recovery and years
                    spent in fitness, personal training, group fitness, and
                    demanding professional environments. That experience
                    helped shape a practical approach centered on structure,
                    consistency, movement, and human connection.
                  </p>

                  <p>
                    His background includes certifications in Interventions,
                    Health Coaching, and Yoga, together with experience working
                    and traveling in high-demand environments. The work remains
                    personal and grounded in meeting people where they are.
                  </p>
                </div>
              </RevealSection>

              <RevealSection delay={2}>
                <div className="mb-7 mt-9 grid grid-cols-1 border-y border-stone/20 sm:grid-cols-3">
                  {[
                    ["Foundation", "Lived Experience"],
                    ["Background", "Fitness & Wellness"],
                    ["Focus", "Recovery Support"],
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

                      <p className="mt-3 font-serif text-[1.3rem] leading-[1.1] text-ink">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </RevealSection>

              <RevealSection delay={3}>
                <Link href="/about" className="editorial-link">
                  About Joey
                </Link>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>
      {/* 06 - EDITORIAL STATEMENT */}
      <section className="bg-ink text-ivory py-32 lg:py-48 flex items-center justify-center">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-12 lg:space-y-16">
          <RevealSection>
            <h2 className="font-serif text-[clamp(1.5rem,4vw,3.5rem)] leading-tight text-ivory/80">
              FROM SURVIVING TO LIVING.
            </h2>
          </RevealSection>
          <RevealSection delay={1}>
            <h2 className="font-serif text-[clamp(1.5rem,4vw,3.5rem)] leading-tight text-ivory/90">
              FROM CHAOS TO CLARITY.
            </h2>
          </RevealSection>
          <RevealSection delay={2}>
            <h2 className="font-serif text-[clamp(1.5rem,4vw,3.5rem)] leading-tight text-ivory">
              FROM ISOLATION TO CONNECTION.
            </h2>
          </RevealSection>
        </div>
      </section>

      {/* 07 - FINDING MEANING */}
      <section className="overflow-hidden bg-olive py-24 text-ivory lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-8">
              <RevealSection>
                <p className="text-eyebrow text-eyebrow--dark mb-6">
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
                <div className="border-t border-ivory/20 pt-7">
                  <p className="font-sans text-[15px] leading-[1.8] text-ivory/72">
                    Finding Meaning extends Joey&apos;s recovery experience into
                    education, awareness, speaking, podcasting, and outreach.
                  </p>

                  <a
                    href="/finding-meaning"
                    className="editorial-link editorial-link--light mt-8"
                  >
                    Explore Finding Meaning
                  </a>
                </div>
              </RevealSection>
            </div>
          </div>

          <div
            className="mt-16 grid grid-cols-2 border-t border-ivory/15 md:mt-20 md:grid-cols-4"
            aria-label="Finding Meaning focus areas"
          >
            {[
              "School Presentations",
              "Recovery Education",
              "Podcasting",
              "Speaking & Outreach",
            ].map((item, index) => (
              <div
                key={item}
                className="border-b border-ivory/10 px-5 py-8 first:pl-0 last:pr-0 md:border-b-0 md:border-r md:px-7 md:py-9 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <p className="mb-4 font-sans text-[10px] tracking-[0.18em] text-bronze-soft">
                  0{index + 1}
                </p>

                <p className="max-w-[180px] font-sans text-[11px] leading-[1.55] tracking-[0.13em] uppercase text-ivory/80">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 08 - PHILOSOPHY */}
      <section className="border-t border-stone/15 bg-ivory py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <RevealSection className="mb-14 max-w-4xl lg:mb-20">
            <div className="mb-6 flex items-center gap-4">
              <span
                className="h-px w-8 bg-bronze-deep"
                aria-hidden="true"
              />

              <p className="text-eyebrow">Philosophy</p>
            </div>

            <h2 className="font-serif text-[clamp(2.6rem,4.5vw,4.8rem)] leading-[0.99] tracking-[-0.035em] text-ink">
              The foundation
              <br />
              of the work.
            </h2>
          </RevealSection>

          <div className="grid border-t border-stone/25 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Presence",
                desc: "Support where life actually happens.",
              },
              {
                number: "02",
                title: "Connection",
                desc: "Recovery does not happen in isolation.",
              },
              {
                number: "03",
                title: "Structure",
                desc: "Create sustainable systems instead of temporary fixes.",
              },
              {
                number: "04",
                title: "Meaning",
                desc: "Build a life that no longer requires escape.",
              },
            ].map((item, index) => (
              <RevealSection
                key={item.title}
                delay={index + 1}
                className={`h-full ${
                  index < 3 ? "lg:border-r lg:border-stone/20" : ""
                } ${
                  index % 2 === 0 ? "sm:border-r sm:border-stone/20" : ""
                }`}
              >
                <div className="h-full border-b border-stone/20 py-10 sm:px-7 lg:min-h-[270px] lg:border-b-0 lg:px-8 lg:py-12">
                  <p className="mb-10 font-sans text-[10px] tracking-[0.2em] text-bronze-deep">
                    {item.number}
                  </p>

                  <h3 className="mb-6 font-sans text-[11px] tracking-[0.18em] uppercase text-ink">
                    {item.title}
                  </h3>

                  <p className="max-w-xs font-serif text-[clamp(1.55rem,2.1vw,2.15rem)] leading-[1.12] tracking-[-0.015em] text-ink/80">
                    {item.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
      {/* 09 - LIFE & WORK */}
      <section className="overflow-hidden bg-alabaster py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <div className="grid gap-14 border-b border-stone/25 pb-16 lg:grid-cols-12 lg:items-end lg:pb-20">
            <div className="lg:col-span-7">
              <RevealSection>
                <p className="text-eyebrow mb-6">
                  Life &amp; Work
                </p>

                <h2 className="font-serif text-[clamp(3.2rem,6vw,6.5rem)] leading-[0.94] tracking-[-0.045em] text-ink">
                  Recovery.
                  <br />
                  Movement.
                  <br />
                  <span className="text-bronze-deep">
                    Meaning.
                  </span>
                </h2>
              </RevealSection>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <RevealSection delay={1}>
                <div className="border-t border-stone/30 pt-7">
                  <p className="font-sans text-[15px] leading-[1.85] text-body">
                    A life shaped by more than a decade in recovery, more than
                    two decades in fitness, and years spent navigating
                    demanding professional environments, travel, and personal
                    change.
                  </p>
                </div>
              </RevealSection>
            </div>
          </div>

          <div className="grid lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Recovery",
                description:
                  "Lived experience informs Joey's understanding of consistency, accountability, and rebuilding daily life.",
              },
              {
                number: "02",
                title: "Movement",
                description:
                  "Years in fitness, personal training, and group fitness shaped an approach grounded in structure and sustainable progress.",
              },
              {
                number: "03",
                title: "Meaning",
                description:
                  "Recovery became something Joey could bring into education, awareness, connection, and work intended to help others.",
              },
            ].map((item, index) => (
              <RevealSection
                key={item.title}
                delay={index + 1}
                className={`h-full ${
                  index < 2 ? "lg:border-r lg:border-stone/20" : ""
                }`}
              >
                <div
                  className={`h-full border-b border-stone/20 py-10 lg:min-h-[290px] lg:border-b-0 lg:py-14 ${
                    index === 0
                      ? "lg:pr-9"
                      : index === 2
                        ? "lg:pl-9"
                        : "lg:px-9"
                  }`}
                >
                  <p className="mb-11 font-sans text-[10px] tracking-[0.2em] text-bronze-deep">
                    {item.number}
                  </p>

                  <h3 className="mb-7 font-serif text-[clamp(2.2rem,3.3vw,3.6rem)] leading-none tracking-[-0.03em] text-ink">
                    {item.title}
                  </h3>

                  <p className="max-w-sm font-sans text-[15px] leading-[1.8] text-body">
                    {item.description}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
      {/* 10 - FAQ PREVIEW */}
      <section className="bg-ivory py-24 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <RevealSection>
                <div className="mb-6 flex items-center gap-4">
                  <span
                    className="h-px w-8 bg-bronze-deep"
                    aria-hidden="true"
                  />

                  <p className="text-eyebrow">FAQ</p>
                </div>

                <h2 className="max-w-xl font-serif text-[clamp(2.7rem,4.5vw,4.8rem)] leading-[0.98] tracking-[-0.035em] text-ink">
                  Questions
                  <br />
                  you may have.
                </h2>

                <p className="mt-8 max-w-sm font-sans text-[15px] leading-[1.8] text-body">
                  A few answers before a first conversation.
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
                        "Every situation is different. A first conversation can help clarify what you are looking for and which area of Joey's work may be relevant.",
                    },
                    {
                      question: "Who is sober companioning for?",
                      answer:
                        "Sober companioning centers on real-world presence, structure, accountability, and support around recovery and periods of transition.",
                    },
                    {
                      question: "What areas of work does Joey offer?",
                      answer:
                        "Joey's work is presented across sober companioning, fitness and transformation, and interventions.",
                    },
                    {
                      question: "How do I get started?",
                      answer:
                        "You can begin by calling or emailing Joey directly and sharing what you are looking for.",
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
      {/* 11 - FINAL CTA */}
      <FinalCTA heading="You don't have to navigate change alone." />
    </>
  );
}
