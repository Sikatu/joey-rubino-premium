import Link from "next/link";

import { services } from "@/lib/services";

const navigateLinks = [
  { href: "/about", label: "About" },
  { href: "/finding-meaning", label: "Finding Meaning" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const workLinks = [
  { href: "/work", label: "Overview" },
  ...services.map((service) => ({
    href: service.href,
    label: service.title,
  })),
];

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-6 pb-[calc(4.5rem+env(safe-area-inset-bottom))] pt-12 lg:px-12 lg:pb-8 lg:pt-14 xl:px-20">
        {/* Closing statement */}
        <div className="grid gap-9 border-b border-ivory/10 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-12">
          <div className="lg:col-span-6">
            <Link
              href="/"
              className="inline-block font-sans text-[10px] tracking-[0.24em] uppercase text-ivory/80"
            >
              Joey Rubino
            </Link>

            <p className="mt-5 max-w-xl font-serif text-[clamp(2.15rem,4vw,4rem)] leading-[0.94] tracking-[-0.038em] text-ivory">
              Find Healing.
              <br />
              Find Hope.
              <br />
              <span className="text-stone">
                Find Meaning.
              </span>
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-md font-sans text-[13px] leading-[1.75] text-ivory/65">
              Personal support shaped around recovery, movement,
              accountability, and meaningful change.
            </p>

            <Link
              href="/contact"
              className="group mt-6 flex w-full items-center justify-between border border-ivory/35 px-5 py-3.5 font-sans text-[10px] tracking-[0.17em] uppercase text-ivory transition-[background-color,border-color,color] duration-500 hover:border-ivory hover:bg-ivory hover:text-ink"
            >
              Start a Private Conversation

              <span
                className="transition-transform duration-500 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Compact directory */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-9 border-b border-ivory/10 py-10 lg:grid-cols-12 lg:gap-8 lg:py-11">
          <div className="lg:col-span-3">
            <p className="mb-5 text-footer-heading">
              Navigate
            </p>

            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navigateLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-[13px] leading-relaxed text-ivory/68 transition-colors duration-300 hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-4 lg:col-start-4">
            <p className="mb-5 text-footer-heading">
              Work
            </p>

            <nav aria-label="Footer work navigation">
              <ul className="space-y-3">
                {workLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-[13px] leading-relaxed text-ivory/68 transition-colors duration-300 hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="col-span-2 border-t border-ivory/10 pt-8 lg:col-span-3 lg:col-start-10 lg:border-t-0 lg:pt-0">
            <p className="mb-5 text-footer-heading">
              Contact
            </p>

            <div className="grid gap-2.5">
              <a
                href="tel:+13234043759"
                className="w-fit font-serif text-[1.7rem] leading-none tracking-[-0.02em] text-ivory transition-colors duration-300 hover:text-bronze-soft"
              >
                323.404.3759
              </a>

              <a
                href="mailto:joeyrubino@gmail.com"
                className="w-fit font-sans text-[13px] text-ivory/72 transition-colors duration-300 hover:text-ivory"
              >
                joeyrubino@gmail.com
              </a>
            </div>

            <div className="mt-5 flex items-center gap-5">
              <a
                href="https://www.instagram.com/joeyrubino1/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-sans text-[10px] tracking-[0.12em] uppercase text-ivory/65 transition-colors duration-300 hover:text-ivory"
                aria-label="Joey Rubino on Instagram"
              >
                Instagram

                <span
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>

              <a
                href="https://twitter.com/joeyrubino?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-sans text-[10px] tracking-[0.12em] uppercase text-ivory/65 transition-colors duration-300 hover:text-ivory"
                aria-label="Joey Rubino on X"
              >
                X

                <span
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Colophon */}
        <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[10px] tracking-[0.03em] text-ivory/45">
            © {new Date().getFullYear()} Joey Rubino. All rights reserved.
          </p>

          <p className="font-sans text-[9px] tracking-[0.15em] uppercase text-ivory/38">
            Private. Personal. No pressure.
          </p>
        </div>
      </div>
    </footer>
  );
}
