import { createPageMetadata } from "@/lib/seo";
import { serializeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Image from "next/image";
import { FinalCTA } from "@/components/FinalCTA";
import { RevealSection } from "@/lib/motion";

export const metadata: Metadata = createPageMetadata({
  path: "/about",
  title: "About",
  description:
    "Joey Rubino's journey of recovery, and his path to becoming a sober companion, coach, and guide based in Los Angeles.",
});

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://joeyrubinorehab.com/about#profile-page",
  url: "https://joeyrubinorehab.com/about",
  mainEntity: {
    "@type": "Person",
    "@id": "https://joeyrubinorehab.com/about#joey-rubino",
    name: "Joey Rubino",
    image:
      "https://joeyrubinorehab.com/images/joey/portrait.webp",
    sameAs: [
      "https://www.instagram.com/joeyrubino1/",
      "https://twitter.com/joeyrubino?lang=en",
    ],
  },
} as const;

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(profilePageJsonLd),
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-ivory">


        <div className="relative z-10 site-shell pb-16 pt-36 lg:pb-24 lg:pt-40">
          <div className="grid gap-14 lg:min-h-[610px] lg:grid-cols-12 lg:items-center lg:gap-8">
            {/* Editorial statement */}
            <div className="lg:col-span-6">
              <p className="mb-7 font-sans text-[10px] tracking-[0.28em] uppercase text-bronze-soft sm:text-[11px]">
                About Joey
              </p>

              <h1 className="font-serif text-[clamp(2.85rem,calc(13.7vw+0.11rem),3.35rem)] leading-[0.93] tracking-[-0.04em] text-ivory lg:text-[clamp(4rem,4.25vw,5.15rem)] lg:leading-[0.92]">
                <span className="block xl:whitespace-nowrap">
                  Experience shaped
                </span>

                <span className="block xl:whitespace-nowrap">
                  by life.
                </span>

                <span className="mt-4 block text-ivory/72 lg:mt-5 xl:whitespace-nowrap">
                  Guidance grounded
                </span>

                <span className="block text-ivory/72 xl:whitespace-nowrap">
                  in understanding.
                </span>
              </h1>

              <div className="mt-9 flex items-center gap-4 lg:mt-11">
                <span
                  className="h-px w-10 bg-bronze-soft/70"
                  aria-hidden="true"
                />

                <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-ivory/48">
                  Recovery · Movement · Meaning
                </p>
              </div>
            </div>

            {/* Intentional editorial gutter = column 7 */}

            {/* Authentic portrait */}
            <div className="w-full lg:col-span-5 lg:col-start-8">
              <div className="relative aspect-[5/6] w-full overflow-hidden border border-ivory/10 bg-olive lg:ml-auto lg:max-w-[470px] xl:translate-x-12">
                <Image
                  src="/images/joey/portrait.webp"
                  alt="Joey Rubino"
                  fill
                  priority
                  className="object-cover object-[center_32%]"
                  style={{
                    filter: "saturate(0.48) contrast(1.05) brightness(0.84)",
                  }}
                  sizes="(max-width: 1024px) 100vw, 36vw"
                />

                <div
                  className="absolute inset-0 bg-olive/10 mix-blend-multiply"
                  aria-hidden="true"
                />

                <div
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink/35 to-transparent"
                  aria-hidden="true"
                />

                <span
                  className="absolute bottom-0 left-0 h-px w-20 bg-bronze-soft/80"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Editorial Bio */}
      <section className="py-24 lg:py-40 bg-ivory">
        <div className="site-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-y-24 lg:gap-x-16 xl:gap-x-24">
            
            {/* Left Column (Sticky) */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
              <RevealSection>
                <h2 className="text-subtitle mb-8">
                  Recovery and transformation extend beyond a single moment of change.
                </h2>
                <div className="space-y-4">
                  <div className="border-t border-stone/20 pt-4">
                    <p className="text-eyebrow">Based In</p>
                    <p className="font-sans text-[15px] text-ink mt-1">Los Angeles, CA</p>
                  </div>
                  <div className="border-t border-stone/20 pt-4">
                    <p className="text-eyebrow">Experience</p>
                    <p className="font-sans text-[15px] text-ink mt-1">
                      Global Touring &amp; Travel
                    </p>
                  </div>
                  <div className="border-t border-stone/20 pt-4">
                    <p className="text-eyebrow">Focus</p>
                    <p className="font-sans text-[15px] text-ink mt-1">Sober Companioning<br />Fitness Coaching<br />Interventions</p>
                  </div>
                </div>
              </RevealSection>
            </div>

            {/* Right Column (Bio text) */}
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-12 lg:space-y-16">
                
                <RevealSection>
                  <p className="font-serif text-[clamp(1.5rem,2.5vw+0.5rem,2.25rem)] leading-tight text-ink">
                    Joey Rubino&apos;s approach to recovery and transformation is built on over a decade of lived experience. 
                  </p>
                </RevealSection>

                <RevealSection delay={1}>
                  <div className="space-y-6 text-body-lg text-body">
                    <p>
                      With more than ten years of sobriety, Joey brings lived
                      recovery experience into work that is personal, grounded,
                      and centered on connection, structure, and meaningful
                      change.
                    </p>
                    <p>
                      Before dedicating his life fully to recovery support, Joey spent over twenty years working in fitness and wellness. As a personal trainer and group fitness instructor, he learned early on that physical movement is often the catalyst for mental and emotional shifts. Today, he integrates this expertise into his coaching, using fitness as a core tool to help individuals establish routine, build resilience, and reconnect with their bodies.
                    </p>
                  </div>
                </RevealSection>

                <RevealSection delay={2}>
                  <div className="aspect-[16/9] relative img-hover-scale my-16">
                    <Image
                      src="/images/editorial/journey/rice-terraces-red-foliage.webp"
                      alt="Rice terraces framed by red tropical foliage"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                </RevealSection>

                <RevealSection delay={3}>
                  <h3 className="font-serif text-2xl text-ink mb-6">Supporting Complex Environments</h3>
                  <div className="space-y-6 text-body-lg text-body">
                    <p>
                      Based in Los Angeles, Joey&apos;s background includes
                      international travel, global touring, and demanding
                      professional environments where adaptability and
                      discretion matter.
                    </p>
                    <p>
                      Joey&apos;s background includes training across
                      interventions, health coaching, and yoga. Together with
                      his recovery experience and years in fitness and wellness,
                      that training informs a practical and human approach to
                      support.
                    </p>
                  </div>
                </RevealSection>

              </div>
            </div>

          </div>
        </div>
      </section>

      <FinalCTA heading="You don't have to navigate change alone." />
    </>
  );
}
