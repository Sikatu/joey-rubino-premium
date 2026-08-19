import type { Metadata } from "next";
import Link from "next/link";

const description =
  "How personal information shared through joeyrubinorehab.com is collected, used, stored, and retained.";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Notice",
    description,
    url: "/privacy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Notice",
    description,
  },
};

const sections = [
  {
    title: "Information you provide",
    body: (
      <>
        <p>
          When you use the Contact form, you may provide your name,
          email address, an optional phone number, the subject of your
          inquiry, and a message.
        </p>

        <p>
          Please share only the information reasonably needed for your
          inquiry. The Contact form is not designed for medical records,
          financial account information, Social Security numbers, or
          other government identification numbers.
        </p>
      </>
    ),
  },
  {
    title: "How your information is used",
    body: (
      <>
        <p>
          Contact-form information is used to review and respond to
          your inquiry, follow up about the services or information you
          requested, maintain appropriate records of the inquiry, and
          help detect or address spam, abuse, or security issues.
        </p>
      </>
    ),
  },
  {
    title: "Storage and service providers",
    body: (
      <>
        <p>
          Contact submissions are stored using Supabase. Providers used
          to host, secure, store, or operate the website may process
          information as necessary to provide those services.
        </p>

        <p>
          This notice does not represent that Contact submissions are
          medical records or that they receive protections that apply
          only to covered medical information.
        </p>
      </>
    ),
  },
  {
    title: "Retention",
    body: (
      <>
        <p>
          Ordinary Contact-form submissions are retained for up to
          12 months.
        </p>

        <p>
          A submission may be kept longer when it is still needed for
          an active inquiry, an ongoing business relationship, a
          security or fraud investigation, or a legal or recordkeeping
          obligation.
        </p>
      </>
    ),
  },
  {
    title: "Your choices and privacy requests",
    body: (
      <>
        <p>
          You may ask to access, correct, or delete personal
          information that you submitted through the website. A request
          may require enough information to reasonably verify that it
          relates to you.
        </p>

        <p>
          Requests can be made through the{" "}
          <Link
            href="/contact"
            className="underline decoration-bronze/50 underline-offset-4 transition-colors hover:text-olive"
          >
            Contact page
          </Link>{" "}
          or by emailing{" "}
          <a
            href="mailto:joeyrubino@gmail.com"
            className="underline decoration-bronze/50 underline-offset-4 transition-colors hover:text-olive"
          >
            joeyrubino@gmail.com
          </a>
          .
        </p>

        <p>
          Some information may need to be retained when one of the
          retention exceptions described above applies.
        </p>
      </>
    ),
  },
  {
    title: "Browser signals and technical services",
    body: (
      <>
        <p>
          The current website does not change its behavior in response
          to a browser Do Not Track signal.
        </p>

        <p>
          Website hosting, security, and delivery providers may process
          technical request information as part of operating and
          protecting the website.
        </p>
      </>
    ),
  },
  {
    title: "Changes to this notice",
    body: (
      <>
        <p>
          This notice may be updated when the website&apos;s data
          practices change. The effective date below will be updated
          when a revised notice becomes effective.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="pb-16 pt-32 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <p className="text-eyebrow mb-4">
            Privacy
          </p>

          <h1 className="text-display max-w-4xl">
            Privacy Notice.
          </h1>

          <p className="text-body-lg mt-6 max-w-2xl text-body">
            A clear explanation of how information shared through this
            website is handled.
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
                What this notice covers
              </h2>

              <div className="mt-5 space-y-4 font-sans text-[15px] leading-[1.85] text-body">
                <p>
                  This Privacy Notice explains the information-handling
                  practices associated with joeyrubinorehab.com,
                  especially information voluntarily submitted through
                  the Contact form.
                </p>

                <p>
                  It is intended to describe the website&apos;s current
                  practices without making broader medical, regulatory,
                  or confidentiality claims that have not been
                  established.
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
                Contact
              </p>

              <h2 className="font-serif text-[clamp(1.85rem,3vw,2.5rem)] leading-[1.05] tracking-[-0.025em] text-ink">
                Questions about privacy?
              </h2>

              <p className="mt-5 max-w-2xl font-sans text-[15px] leading-[1.85] text-body">
                For a question about this notice or a request concerning
                information you submitted through the website, email{" "}
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
