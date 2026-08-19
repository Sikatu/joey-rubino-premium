import type { Metadata } from "next";
import Link from "next/link";

const description =
  "Website terms and important disclaimers for using joeyrubinorehab.com.";

export const metadata: Metadata = {
  title: "Website Terms & Disclaimer",
  description,
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Website Terms & Disclaimer",
    description,
    url: "/terms",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Website Terms & Disclaimer",
    description,
  },
};

const sections = [
  {
    title: "Website information",
    body: (
      <>
        <p>
          This website provides general information about Joey Rubino,
          his background, and the areas of support and coaching
          described on the site.
        </p>

        <p>
          Website content is provided for general informational
          purposes. It is not individualized professional advice and
          should not be treated as a diagnosis, medical treatment plan,
          or substitute for advice from an appropriately qualified
          healthcare professional.
        </p>
      </>
    ),
  },
  {
    title: "Fitness and physical activity",
    body: (
      <>
        <p>
          The website discusses fitness, movement, physical activity,
          and related coaching. Physical activity can involve risk and
          may not be appropriate for every person or circumstance.
        </p>

        <p>
          Website content is not individualized medical or fitness
          clearance. Consider your own health, circumstances, and
          appropriate professional guidance before beginning or making
          material changes to a physical-activity program.
        </p>
      </>
    ),
  },
  {
    title: "Contacting Joey",
    body: (
      <>
        <p>
          Viewing this website, submitting the Contact form, calling,
          or sending an email does not by itself create a client
          relationship, service engagement, or contract with Joey
          Rubino.
        </p>

        <p>
          Any actual services, responsibilities, scope of work,
          scheduling, fees, or other engagement terms are established
          separately when appropriate.
        </p>

        <p>
          Information submitted through the website is handled as
          described in the{" "}
          <Link
            href="/privacy"
            className="underline decoration-bronze/50 underline-offset-4 transition-colors hover:text-olive"
          >
            Privacy Notice
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    title: "No guaranteed outcome",
    body: (
      <>
        <p>
          Individual circumstances differ. Nothing on this website
          promises or guarantees a particular personal, recovery,
          fitness, or other outcome.
        </p>
      </>
    ),
  },
  {
    title: "Third-party links",
    body: (
      <>
        <p>
          The website may link to third-party services or social
          platforms, including Instagram and X. Those services are
          operated independently and may have their own terms, privacy
          practices, and availability.
        </p>

        <p>
          A link to another website or platform does not by itself
          represent responsibility for, control over, or endorsement of
          that third party&apos;s content or practices.
        </p>
      </>
    ),
  },
  {
    title: "Website materials",
    body: (
      <>
        <p>
          The website&apos;s original text, design, branding, and other
          materials are protected to the extent that Joey Rubino or the
          applicable licensors hold rights in them.
        </p>

        <p>
          Third-party names, trademarks, photographs, or other
          materials remain subject to the rights of their respective
          owners where applicable.
        </p>
      </>
    ),
  },
  {
    title: "Acceptable website use",
    body: (
      <>
        <p>
          Do not use the website unlawfully, attempt to interfere with
          its operation or security, introduce malicious code, or try
          to gain unauthorized access to systems or information.
        </p>
      </>
    ),
  },
  {
    title: "Availability and accuracy",
    body: (
      <>
        <p>
          Reasonable efforts are made to keep the website useful and
          current, but uninterrupted availability, complete accuracy,
          or freedom from technical errors is not guaranteed.
        </p>

        <p>
          To the extent permitted by applicable law, Joey Rubino is not
          responsible for losses arising solely from reliance on
          website information, interruption of the website, or
          third-party websites linked from it. Nothing in these Terms
          excludes responsibility that cannot lawfully be excluded.
        </p>
      </>
    ),
  },
  {
    title: "Changes to these Terms",
    body: (
      <>
        <p>
          These Website Terms may be updated as the website, its
          features, or relevant practices change. The effective date
          below will be updated when revised Terms take effect.
        </p>
      </>
    ),
  },
  {
    title: "Applicable law",
    body: (
      <>
        <p>
          These Website Terms are governed by the laws of the State of
          California to the extent permitted by applicable law.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="pb-16 pt-32 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <p className="text-eyebrow mb-4">
            Terms
          </p>

          <h1 className="text-display max-w-5xl">
            Website Terms
            <br />
            &amp; Disclaimer.
          </h1>

          <p className="text-body-lg mt-6 max-w-2xl text-body">
            The conditions and boundaries that apply to use of this
            website.
          </p>

          <p className="mt-5 font-sans text-[11px] tracking-[0.08em] uppercase text-body/60">
            Effective August 19, 2026
          </p>
        </div>
      </section>

      <div className="divider mx-auto max-w-7xl" />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-12 xl:px-20">
          <div className="space-y-12 lg:space-y-16">
            <div>
              <h2 className="font-serif text-[clamp(1.85rem,3vw,2.5rem)] leading-[1.05] tracking-[-0.025em] text-ink">
                Scope of these Terms
              </h2>

              <div className="mt-5 space-y-4 font-sans text-[15px] leading-[1.85] text-body">
                <p>
                  These Website Terms &amp; Disclaimer apply to the use
                  of joeyrubinorehab.com and the information presented
                  through it.
                </p>

                <p>
                  They concern the website itself. They are not a
                  substitute for any separate agreement that may later
                  govern services provided by Joey Rubino.
                </p>
              </div>
            </div>

            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-serif text-[clamp(1.85rem,3vw,2.5rem)] leading-[1.05] tracking-[-0.025em] text-ink">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-4 font-sans text-[15px] leading-[1.85] text-body">
                  {section.body}
                </div>
              </div>
            ))}

            <div className="border-t border-ink/10 pt-10">
              <p className="text-eyebrow mb-4">
                Questions
              </p>

              <h2 className="font-serif text-[clamp(1.85rem,3vw,2.5rem)] leading-[1.05] tracking-[-0.025em] text-ink">
                Questions about these Terms?
              </h2>

              <p className="mt-5 max-w-2xl font-sans text-[15px] leading-[1.85] text-body">
                Email{" "}
                <a
                  href="mailto:joeyrubino@gmail.com"
                  className="underline decoration-bronze/50 underline-offset-4 transition-colors hover:text-olive"
                >
                  joeyrubino@gmail.com
                </a>{" "}
                or use the{" "}
                <Link
                  href="/contact"
                  className="underline decoration-bronze/50 underline-offset-4 transition-colors hover:text-olive"
                >
                  Contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
