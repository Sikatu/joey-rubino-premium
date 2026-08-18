import type { Metadata } from "next";
import { Accordion } from "@/components/Accordion";
import { FinalCTA } from "@/components/FinalCTA";
import { RevealSection } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about Joey Rubino's work across sober companioning, fitness and transformation, interventions, and how to get started.",
};

const faqItems = [
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
      "Joey's work is currently presented across three core areas: sober companioning, fitness and transformation, and interventions.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can begin by calling or emailing Joey directly. The first exchange is an opportunity to share what you are looking for and ask practical questions about his work.",
  },
  {
    question: "What experience informs Joey's approach?",
    answer:
      "Joey's background includes his own recovery experience, more than twenty years in fitness and wellness, and experience working in demanding professional and global touring environments.",
  },
  {
    question: "How is fitness incorporated into Joey's work?",
    answer:
      "Joey's background in personal training, group fitness, and transformational coaching informs his use of movement, routine, consistency, and physical wellness as part of broader personal change.",
  },
  {
    question: "How does Joey approach discretion?",
    answer:
      "Joey's background includes work in environments where discretion and adaptability matter. If you have specific privacy or confidentiality requirements, discuss those directly when you get in touch.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="pb-16 pt-32 lg:pb-24 lg:pt-40">
        <div className="site-shell">
          <p className="text-eyebrow mb-4">FAQ</p>

          <h1 className="text-display max-w-3xl">
            Questions you
            <br />
            may have.
          </h1>

          <p className="text-body-lg mt-6 max-w-2xl text-body">
            These are a few starting points. For questions specific to your
            circumstances, you can reach out to Joey directly.
          </p>
        </div>
      </section>

      <div className="divider mx-auto max-w-7xl" />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-12 xl:px-20">
          <RevealSection>
            <Accordion items={faqItems} />
          </RevealSection>
        </div>
      </section>

      <FinalCTA heading="Questions? Start with a conversation." />
    </>
  );
}