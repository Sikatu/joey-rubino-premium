import { Button } from "./Button";
import { RevealSection } from "@/lib/motion";

interface FinalCTAProps {
  heading: string;
  buttonText?: string;
  href?: string;
  compact?: boolean;
}

export function FinalCTA({
  heading,
  buttonText = "Start a conversation",
  href = "/contact",
  compact = false,
}: FinalCTAProps) {
  return (
    <section
      className={`relative overflow-hidden bg-alabaster ${
        compact
          ? "border-b border-stone/20 py-16 lg:py-20"
          : "border-t border-stone/15 py-20 lg:py-28"
      }`}
    >
      {!compact && (
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute -right-48 -top-48 h-[420px] w-[420px] rounded-full border border-bronze/[0.08]" />
          <div className="absolute -right-20 -top-20 h-[240px] w-[240px] rounded-full border border-bronze/[0.08]" />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
        <div
          className={`grid gap-10 lg:grid-cols-12 lg:items-center ${
            compact ? "lg:gap-10" : "lg:gap-14"
          }`}
        >
          <div className={compact ? "lg:col-span-9" : "lg:col-span-8"}>
            <RevealSection>
              <div className="mb-6 flex items-center gap-4">
                <span
                  className="h-px w-9 bg-bronze"
                  aria-hidden="true"
                />

                <p className="text-eyebrow text-bronze">
                  A Private Conversation
                </p>
              </div>

              <h2
                className={
                  compact
                    ? "max-w-[980px] font-serif text-[clamp(2.6rem,3.2vw,3.9rem)] leading-[0.98] tracking-[-0.035em] text-ink"
                    : "max-w-[900px] text-balance font-serif text-[clamp(2.8rem,4.2vw,4.75rem)] leading-[0.96] tracking-[-0.04em] text-ink"
                }
              >
                {heading}
              </h2>
            </RevealSection>
          </div>

          <div
            className={
              compact
                ? "lg:col-span-3 lg:col-start-10 lg:self-center"
                : "lg:col-span-3 lg:col-start-10"
            }
          >
            <RevealSection delay={1}>
              <div className="border-t border-stone/30 pt-6">
                <p className="mb-5 max-w-sm font-sans text-[10px] leading-[1.7] tracking-[0.16em] uppercase text-stone">
                  Private. Personal. No pressure.
                </p>

                <Button
                  href={href}
                  variant="outline"
                  className="w-full sm:w-auto lg:w-full"
                >
                  {buttonText}
                </Button>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}