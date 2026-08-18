import Link from "next/link";

import {
  services,
  type ServicePath,
} from "@/lib/services";
import { RevealSection } from "@/lib/motion";

interface ServiceNavigationProps {
  currentHref: ServicePath;
}

export function ServiceNavigation({
  currentHref,
}: ServiceNavigationProps) {
  return (
    <section className="border-y border-ivory/10 bg-ink py-16 text-ivory sm:py-20 lg:py-24">
      <div className="site-shell">
        <RevealSection>
          <div className="mb-10 flex flex-col gap-6 border-b border-ivory/15 pb-7 sm:flex-row sm:items-end sm:justify-between lg:mb-12">
            <div>
              <p className="mb-4 font-sans text-[10px] tracking-[0.22em] uppercase text-bronze-soft">
                Explore Joey&apos;s Work
              </p>

              <h2 className="font-serif text-[clamp(2.5rem,4vw,4.25rem)] leading-[0.98] tracking-[-0.035em] text-ivory">
                Different needs.
                <br />
                Different starting points.
              </h2>
            </div>

            <Link
              href="/work"
              className="group inline-flex w-fit items-center gap-3 font-sans text-[10px] tracking-[0.18em] uppercase text-ivory/70 transition-colors duration-300 hover:text-ivory focus-visible:text-ivory"
            >
              View all work

              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                ?
              </span>
            </Link>
          </div>
        </RevealSection>

        <div className="grid lg:grid-cols-3">
          {services.map((service, index) => {
            const isCurrent = service.href === currentHref;

            const inner = (
              <>
                <div className="flex items-start justify-between gap-5">
                  <p className="font-sans text-[10px] tracking-[0.18em] text-bronze-soft">
                    {service.number}
                  </p>

                  <p className="font-sans text-[9px] tracking-[0.18em] uppercase text-ivory/55">
                    {isCurrent ? "Current" : "Explore"}
                  </p>
                </div>

                <p className="mt-8 font-sans text-[9px] tracking-[0.18em] uppercase text-bronze-soft">
                  {service.eyebrow}
                </p>

                <h3 className="mt-3 font-serif text-[clamp(2rem,2.8vw,3rem)] leading-[1] tracking-[-0.025em] text-ivory">
                  {service.title}
                </h3>

                {!isCurrent && (
                  <span className="mt-7 inline-flex items-center gap-3 font-sans text-[9px] tracking-[0.18em] uppercase text-ivory/65 transition-colors duration-300 group-hover:text-ivory group-focus-visible:text-ivory">
                    Learn more

                    <span
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      ?
                    </span>
                  </span>
                )}
              </>
            );

            return (
              <RevealSection
                key={service.href}
                delay={Math.min(index + 1, 3)}
                className="h-full"
              >
                {isCurrent ? (
                  <div
                    aria-current="page"
                    className={`h-full border-b border-ivory/15 py-9 lg:min-h-[250px] lg:border-b-0 lg:px-8 lg:py-10 ${
                      index === 0 ? "lg:pl-0" : ""
                    } ${
                      index === services.length - 1
                        ? "lg:border-r-0 lg:pr-0"
                        : "lg:border-r"
                    }`}
                  >
                    {inner}
                  </div>
                ) : (
                  <Link
                    href={service.href}
                    className={`group block h-full border-b border-ivory/15 py-9 transition-colors duration-300 hover:bg-ivory/[0.025] focus-visible:bg-ivory/[0.025] lg:min-h-[250px] lg:border-b-0 lg:px-8 lg:py-10 ${
                      index === 0 ? "lg:pl-0" : ""
                    } ${
                      index === services.length - 1
                        ? "lg:border-r-0 lg:pr-0"
                        : "lg:border-r"
                    }`}
                  >
                    {inner}
                  </Link>
                )}
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
