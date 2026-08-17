"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ContactDrawer } from "./ContactDrawer";
import { MobileNav } from "./MobileNav";

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

const desktopLinks = [
  { href: "/about", label: "About" },
  { href: "/finding-meaning", label: "Finding Meaning" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const lightInitialRoutes = new Set([
  "/contact",
  "/faq",
  "/podcast",
  "/work",
]);

function routeIsActive(pathname: string, href: string) {
  if (href === "/work") {
    return pathname === "/work" || pathname.startsWith("/work/");
  }

  return pathname === href;
}

export function Header() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  const workRef = useRef<HTMLDivElement>(null);
  const workButtonRef = useRef<HTMLButtonElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const workTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const lightInitialPage = lightInitialRoutes.has(pathname);
  const darkNavigation = scrolled || (lightInitialPage && pathname !== "/about");
  const workActive = routeIsActive(pathname, "/work");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);


  useEffect(() => {
    if (!workOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        workRef.current &&
        !workRef.current.contains(event.target as Node)
      ) {
        setWorkOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setWorkOpen(false);
        workButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [workOpen]);

  useEffect(() => {
    return () => {
      if (workTimeout.current) {
        clearTimeout(workTimeout.current);
      }
    };
  }, []);

  const openWorkMenu = () => {
    if (workTimeout.current) {
      clearTimeout(workTimeout.current);
    }

    setWorkOpen(true);
  };

  const scheduleWorkMenuClose = () => {
    if (workTimeout.current) {
      clearTimeout(workTimeout.current);
    }

    workTimeout.current = setTimeout(() => {
      setWorkOpen(false);
    }, 220);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);

    window.requestAnimationFrame(() => {
      mobileButtonRef.current?.focus();
    });
  };

  const navTextClass = darkNavigation ? "text-ink" : "text-ivory";

  const activeTextClass = darkNavigation
    ? "text-bronze-deep"
    : pathname === "/about"
      ? "text-ivory"
      : "text-bronze-soft";

  const headerSurfaceClass = scrolled
    ? "bg-ivory/95 shadow-[0_1px_0_rgba(172,162,148,0.22)] backdrop-blur-md"
    : lightInitialPage && pathname !== "/about"
      ? "bg-ivory/95 shadow-[0_1px_0_rgba(172,162,148,0.14)] backdrop-blur-md"
      : "bg-transparent";

  const talkButtonClass = darkNavigation
    ? "border-ink/70 text-ink hover:border-ink hover:bg-ink hover:text-ivory"
    : "border-ivory/55 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink";

  const renderDesktopLink = (
    href: string,
    label: string,
  ) => {
    const active = routeIsActive(pathname, href);

    return (
      <Link
        key={href}
        href={href}
        aria-current={active ? "page" : undefined}
        className={`group relative py-3 font-sans text-[11px] tracking-[0.16em] uppercase transition-colors duration-500 ${
          active ? activeTextClass : navTextClass
        }`}
      >
        {label}

        <span
          aria-hidden="true"
          className={`absolute bottom-[7px] left-0 h-px transition-[width,background-color] duration-500 ${
            active
              ? `w-full ${
                  darkNavigation
                    ? "bg-bronze-deep"
                    : "bg-bronze-soft"
                }`
              : `w-0 group-hover:w-full ${
                  darkNavigation ? "bg-ink/55" : "bg-ivory/60"
                }`
          }`}
        />
      </Link>
    );
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-out ${headerSurfaceClass}`}
      >
        <nav
          className={`mx-auto flex max-w-[1680px] items-center justify-between px-6 transition-[height] duration-500 lg:px-12 xl:px-20 ${
            scrolled
              ? "h-[68px] lg:h-[72px]"
              : "h-[72px] lg:h-[84px]"
          }`}
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className={`group relative z-10 font-sans text-[12px] font-normal tracking-[0.24em] uppercase transition-colors duration-500 ${navTextClass}`}
          >
            Joey Rubino

            <span
              aria-hidden="true"
              className={`absolute -bottom-2 left-0 h-px w-6 transition-colors duration-500 ${
                darkNavigation
                  ? "bg-bronze-deep/65"
                  : "bg-bronze-soft/70"
              }`}
            />
          </Link>

          <div className="hidden items-center gap-7 lg:flex xl:gap-8">
            {renderDesktopLink(
              desktopLinks[0].href,
              desktopLinks[0].label,
            )}

            <div
              ref={workRef}
              className="relative"
              onMouseEnter={openWorkMenu}
              onMouseLeave={scheduleWorkMenuClose}
              onFocusCapture={openWorkMenu}
              onBlurCapture={(event) => {
                const nextTarget = event.relatedTarget as Node | null;

                if (
                  nextTarget &&
                  event.currentTarget.contains(nextTarget)
                ) {
                  return;
                }

                setWorkOpen(false);
              }}
            >
              <button
                ref={workButtonRef}
                type="button"
                onClick={() =>
                  setWorkOpen((current) => !current)
                }
                aria-expanded={workOpen}
                aria-haspopup="menu"
                aria-controls="desktop-work-menu"
                className={`group relative flex items-center gap-1.5 py-3 font-sans text-[11px] tracking-[0.16em] uppercase transition-colors duration-500 ${
                  workActive ? activeTextClass : navTextClass
                }`}
              >
                Work

                <svg
                  className={`h-3 w-3 transition-transform duration-500 ${
                    workOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.4}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

                <span
                  aria-hidden="true"
                  className={`absolute bottom-[7px] left-0 h-px transition-[width,background-color] duration-500 ${
                    workActive
                      ? `w-full ${
                          darkNavigation
                            ? "bg-bronze-deep"
                            : "bg-bronze-soft"
                        }`
                      : `w-0 group-hover:w-full ${
                          darkNavigation
                            ? "bg-ink/55"
                            : "bg-ivory/60"
                        }`
                  }`}
                />
              </button>

              <div
                id="desktop-work-menu"
                role="menu"
                aria-hidden={!workOpen}
                className={`absolute left-1/2 top-full w-[470px] -translate-x-1/2 pt-4 transition-[opacity,transform,visibility] duration-500 ${
                  workOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <div className="overflow-hidden border border-stone/20 bg-ivory shadow-[0_24px_80px_rgba(23,23,21,0.12)]">
                  <div className="flex items-center justify-between px-6 py-5">
                    <div>
                      <p className="font-sans text-[9px] tracking-[0.22em] uppercase text-bronze-deep">
                        Work
                      </p>

                      <p className="mt-1 font-sans text-[11px] text-body">
                        Three ways to begin.
                      </p>
                    </div>

                    <Link
                      href="/work"
                      role="menuitem"
                      onClick={() => setWorkOpen(false)}
                      className="group flex items-center gap-2 font-sans text-[9px] tracking-[0.16em] uppercase text-ink"
                    >
                      Overview

                      <span
                        className="transition-transform duration-500 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </div>

                  <div className="border-t border-stone/20">
                    {workLinks.map((link) => {
                      const active = pathname === link.href;

                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          role="menuitem"
                          aria-current={
                            active ? "page" : undefined
                          }
                          onClick={() => setWorkOpen(false)}
                          className={`group grid grid-cols-[34px_1fr_auto] items-center gap-4 border-b border-stone/15 px-6 py-5 last:border-b-0 transition-colors duration-500 ${
                            active
                              ? "bg-alabaster/70"
                              : "hover:bg-alabaster/55"
                          }`}
                        >
                          <span className="font-sans text-[9px] tracking-[0.16em] text-bronze-deep">
                            {link.number}
                          </span>

                          <span>
                            <span className="block font-sans text-[9px] tracking-[0.16em] uppercase text-bronze-deep/80">
                              {link.eyebrow}
                            </span>

                            <span
                              className={`mt-1 block font-serif text-[21px] leading-none tracking-[-0.02em] transition-colors duration-500 ${
                                active
                                  ? "text-bronze-deep"
                                  : "text-ink group-hover:text-bronze-deep"
                              }`}
                            >
                              {link.label}
                            </span>
                          </span>

                          <span
                            className="font-serif text-xl text-stone transition-[color,transform] duration-500 group-hover:translate-x-1 group-hover:text-ink"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {desktopLinks.slice(1).map((link) =>
              renderDesktopLink(link.href, link.label),
            )}

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className={`group ml-2 flex items-center gap-3 border px-5 py-3 font-sans text-[10px] tracking-[0.18em] uppercase transition-[background-color,border-color,color] duration-500 ${talkButtonClass}`}
            >
              Private Conversation

              <span
                className="transition-transform duration-500 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </button>
          </div>

          <button
            ref={mobileButtonRef}
            type="button"
            className="relative flex h-10 w-10 flex-col items-end justify-center gap-[7px] lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <span
              className={`block h-px w-6 transition-[background-color,width] duration-500 ${
                darkNavigation ? "bg-ink" : "bg-ivory"
              }`}
            />

            <span
              className={`block h-px w-4 transition-[background-color,width] duration-500 ${
                darkNavigation ? "bg-ink" : "bg-ivory"
              }`}
            />
          </button>
        </nav>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={closeMobileMenu}
      />

      <ContactDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}