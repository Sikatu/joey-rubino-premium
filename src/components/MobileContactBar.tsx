"use client";

export function MobileContactBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-stone/20 bg-ivory/95 backdrop-blur-md lg:hidden"
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="flex h-[54px] items-stretch">
        <a
          href="tel:+13234043759"
          className="group flex flex-1 items-center justify-center gap-2.5 font-sans text-[10px] tracking-[0.16em] uppercase text-ink transition-colors duration-300 hover:text-bronze-deep"
          aria-label="Call Joey Rubino"
        >
          <svg
            className="h-[14px] w-[14px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.4}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>

          Call
        </a>

        <div
          className="my-4 w-px bg-stone/20"
          aria-hidden="true"
        />

        <a
          href="mailto:joeyrubino@gmail.com"
          className="group flex flex-1 items-center justify-center gap-2.5 font-sans text-[10px] tracking-[0.16em] uppercase text-ink transition-colors duration-300 hover:text-bronze-deep"
          aria-label="Email Joey Rubino"
        >
          <svg
            className="h-[14px] w-[14px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.4}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>

          Email
        </a>
      </div>
    </div>
  );
}