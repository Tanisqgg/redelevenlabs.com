import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <Reveal>
          <div className={isCenter ? "flex justify-center" : ""}>
            <span className="eyebrow inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_12px_2px_rgba(255,46,99,0.7)]" />
              {eyebrow}
            </span>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-gradient sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={`mt-4 text-pretty text-base leading-relaxed text-white/65 sm:text-lg ${
              isCenter ? "mx-auto max-w-2xl" : ""
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
