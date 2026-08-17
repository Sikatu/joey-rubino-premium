import { RevealSection } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className = "",
  dark = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <RevealSection
      className={`mb-12 lg:mb-20 ${centered ? "text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <div
          className={`mb-7 flex items-center gap-4 ${
            centered ? "justify-center" : ""
          }`}
        >
          <span
            className={`h-px w-8 ${
              dark ? "bg-bronze-soft/70" : "bg-bronze-deep"
            }`}
            aria-hidden="true"
          />

          <p
            className={`text-eyebrow ${
              dark ? "text-eyebrow--dark" : ""
            }`}
          >
            {eyebrow}
          </p>
        </div>
      )}

      <h2
        className={`text-headline ${
          centered ? "mx-auto" : ""
        } ${dark ? "text-ivory" : "text-ink"}`}
      >
        {title}
      </h2>
    </RevealSection>
  );
}