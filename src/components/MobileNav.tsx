"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const mainLinks = [
  { href: "/about", number: "01", label: "About" },
  { href: "/work", number: "02", label: "Work" },
  {
    href: "/finding-meaning",
    number: "03",
    label: "Finding Meaning",
  },
  { href: "/podcast", number: "04", label: "Podcast" },
  { href: "/faq", number: "05", label: "FAQ" },
  { href: "/contact", number: "06", label: "Contact" },
];

const workLinks = [
  {
    href: "/work/sober-companioning",
    number: "01",
    label: "Sober Companioning",
    eyebrow: "Recovery Support",
  },
  {
    href: "/work/fitness",
    number: "02",
    label: "Fitness & Transformation",
    eyebrow: "Movement & Structure",
  },
  {
    href: "/work/interventions",
    number: "03",
    label: "Interventions",
    eyebrow: "Conversation & Clarity",
  },
];

function routeIsActive(pathname: string, href: string) {
  if (href === "/work") {
    return pathname === "/work" || pathname.startsWith("/work/");
  }

  return pathname === href;
}

export function MobileNav({
  open,
  onClose,
}: MobileNavProps) {
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open && closeRef.current) {
      closeRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open || !menuRef.current) return;

    const focusable =
      menuRef.current.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])',
      );

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trap = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }

        return;
      }

      if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", trap);

    return () => {
      document.removeEventListener("keydown", trap);
    };
  }, [open]);

  return (
    <div
      id="mobile-navigation"
      ref={menuRef}
      className={`fixed inset-0 z-[60] transition-[visibility] duration-500 lg:hidden ${
        open
          ? "visible pointer-events-auto"
          : "invisible pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-ink/45 transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`absolute inset-y-0 right-0 flex w-full flex-col bg-ink text-ivory transition-transform duration-700 ease-out sm:max-w-[440px] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-ivory/10 px-6">
          <Link
            href="/"
            onClick={onClose}
            className="font-sans text-[12px] tracking-[0.24em] uppercase text-ivory"
          >
            Joey Rubino
          </Link>

          <button
            ref={closeRef}
            onClick={onClose}
            className="relative flex h-10 w-10 items-center justify-center"
            aria-label="Close menu"
          >
            <span
              className="absolute h-px w-6 rotate-45 bg-ivory"
              aria-hidden="true"
            />

            <span
              className="absolute h-px w-6 -rotate-45 bg-ivory"
              aria-hidden="true"
            />
          </button>
        </div>

        <nav
          className="flex-1 overflow-y-auto px-6 py-10"
          aria-label="Mobile menu"
        >
          <div className="mb-8 flex items-center gap-4">
            <span
              className="h-px w-8 bg-bronze-soft"
              aria-hidden="true"
            />

            <p className="font-sans text-[9px] tracking-[0.22em] uppercase text-bronze-soft">
              Navigate
            </p>
          </div>

          <ul>
            {mainLinks.map((link) => {
              const active = routeIsActive(
                pathname,
                link.href,
              );

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    aria-current={
                      active ? "page" : undefined
                    }
                    className="group flex items-end justify-between gap-6 border-b border-ivory/10 py-5"
                  >
                    <span className="flex min-w-0 items-start gap-4">
                      <span
                        className={`mt-1 shrink-0 font-sans text-[9px] tracking-[0.14em] ${
                          active
                            ? "text-bronze-soft"
                            : "text-ivory/35"
                        }`}
                      >
                        {link.number}
                      </span>

                      <span
                        className={`font-serif text-[clamp(2rem,9vw,2.8rem)] leading-[0.95] tracking-[-0.035em] transition-colors duration-500 ${
                          active
                            ? "text-bronze-soft"
                            : "text-ivory group-hover:text-bronze-soft"
                        }`}
                      >
                        {link.label}
                      </span>
                    </span>

                    <span
                      className="shrink-0 pb-1 font-serif text-xl text-ivory/35 transition-[color,transform] duration-500 group-hover:translate-x-1 group-hover:text-ivory"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-12">
            <div className="mb-7 flex items-center gap-4">
              <span
                className="h-px w-8 bg-bronze-soft"
                aria-hidden="true"
              />

              <p className="font-sans text-[9px] tracking-[0.22em] uppercase text-bronze-soft">
                Work
              </p>
            </div>

            <div className="border-t border-ivory/10">
              {workLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    aria-current={
                      active ? "page" : undefined
                    }
                    className="group grid grid-cols-[28px_1fr_auto] items-center gap-3 border-b border-ivory/10 py-5"
                  >
                    <span
                      className={`font-sans text-[9px] tracking-[0.14em] ${
                        active
                          ? "text-bronze-soft"
                          : "text-ivory/35"
                      }`}
                    >
                      {link.number}
                    </span>

                    <span>
                      <span className="block font-sans text-[9px] tracking-[0.14em] uppercase text-ivory/40">
                        {link.eyebrow}
                      </span>

                      <span
                        className={`mt-1 block font-serif text-[1.45rem] leading-[1.05] tracking-[-0.02em] transition-colors duration-500 ${
                          active
                            ? "text-bronze-soft"
                            : "text-ivory group-hover:text-bronze-soft"
                        }`}
                      >
                        {link.label}
                      </span>
                    </span>

                    <span
                      className="font-serif text-lg text-ivory/35 transition-[color,transform] duration-500 group-hover:translate-x-1 group-hover:text-ivory"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        <div className="shrink-0 border-t border-ivory/10 px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-6">
          <Link
            href="/contact"
            onClick={onClose}
            className="group flex w-full items-center justify-between border border-ivory/45 px-5 py-4 font-sans text-[10px] tracking-[0.18em] uppercase text-ivory transition-[background-color,border-color,color] duration-500 hover:border-ivory hover:bg-ivory hover:text-ink"
          >
            Start a Conversation

            <span
              className="transition-transform duration-500 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>

          <p className="mt-4 text-center font-sans text-[9px] tracking-[0.16em] uppercase text-ivory/35">
            Private. Personal. No pressure.
          </p>
        </div>
      </div>
    </div>
  );
}