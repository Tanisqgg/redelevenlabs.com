"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix?: string; prefix?: string; decimals?: number; label: string };

const STATS: Stat[] = [
  { value: 12, suffix: "M+", label: "Assets scanned for synthetic media" },
  { value: 98.7, suffix: "%", decimals: 1, label: "Detection precision on benchmark sets" },
  { value: 3.8, suffix: "h", decimals: 1, label: "Median time from detection to takedown" },
  { value: 14, suffix: "+", label: "Platforms continuously monitored" }
];

function Counter({ value, suffix = "", prefix = "", decimals = 0 }: Stat) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v)
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="section">
      <div className="container">
        <div className="surface !translate-y-0 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/[0.06] lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-ink-900/70 p-6 sm:p-8">
              <div className="text-3xl font-semibold tracking-tight text-gradient-brand sm:text-4xl lg:text-5xl">
                <Counter {...s} />
              </div>
              <p className="mt-2 text-sm leading-snug text-white/55">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center font-mono text-[11px] text-white/30">
          Representative figures from current pilots &amp; benchmarks.
        </p>
      </div>
    </section>
  );
}
