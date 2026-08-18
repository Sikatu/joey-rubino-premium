import type { Metadata } from "next";

import { FinalCTA } from "@/components/FinalCTA";
import { RevealSection } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "Finding Meaning podcast information and future episode updates.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PodcastPage() {
  return (
    <>
      {/* Editorial hero */}
        <section className="border-b border-stone/15 bg-ivory pb-20 pt-32 lg:pb-28 lg:pt-44">
          <div className="site-shell">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="lg:col-span-7">
                <RevealSection>
                  <p className="text-eyebrow mb-7">
                    Podcast
                  </p>

                  <h1 className="text-display max-w-[900px] text-ink">
                    Finding Meaning
                    <br />
                    <span className="text-stone">
                      The Podcast
                    </span>
                  </h1>
                </RevealSection>
              </div>

              <div className="lg:col-span-4 lg:col-start-9">
                <RevealSection delay={1}>
                  <div className="border-t border-stone/30 pt-7">
                    <p className="font-sans text-[15px] leading-[1.85] text-body">
                      A space for conversations around recovery, education,
                      and transformation.
                    </p>

                    <p className="mt-7 font-sans text-[10px] leading-[1.7] tracking-[0.14em] uppercase text-bronze-deep">
                      Confirmed episode details will be published here as they
                      become available.
                    </p>
                  </div>
                </RevealSection>
              </div>
            </div>
          </div>
        </section>

        {/* Episode state */}
        <section className="bg-ink py-24 text-ivory lg:py-36">
          <div className="site-shell">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <RevealSection>
                  <div className="flex items-center gap-4">
                    <span
                      className="h-px w-8 bg-bronze-soft"
                      aria-hidden="true"
                    />

                    <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-bronze-soft">
                      Episode Archive
                    </p>
                  </div>

                  <p className="mt-7 max-w-xs font-sans text-[10px] leading-[1.7] tracking-[0.12em] uppercase text-ivory/40">
                    Updates will be added when episode information is confirmed.
                  </p>
                </RevealSection>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <RevealSection delay={1}>
                  <h2 className="font-serif text-[clamp(3rem,6vw,6.25rem)] leading-[0.94] tracking-[-0.04em] text-ivory">
                    Episode information
                    <br />
                    <span className="text-ivory/48">
                      coming soon.
                    </span>
                  </h2>

                  <div className="mt-10 max-w-xl border-t border-ivory/15 pt-7">
                    <p className="font-sans text-[14px] leading-[1.85] text-ivory/68">
                      Confirmed episode information will appear here when it is
                      available. In the meantime, explore Finding Meaning and
                      Joey&apos;s broader work around recovery, education, and
                      transformation.
                    </p>

                    <a
                      href="https://www.instagram.com/joeyrubino1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-link editorial-link--light mt-8"
                    >
                      Follow Joey on Instagram
                    </a>
                  </div>
                </RevealSection>
              </div>
            </div>
          </div>
        </section>
      <FinalCTA heading="Turn experience into something meaningful." />
    </>
  );
}