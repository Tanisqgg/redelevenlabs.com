"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, ShieldCheck, ScanFace, FileCheck2, Gavel, Radar } from "lucide-react";

type Step = {
  id: string;
  label: string;
  icon: typeof Radar;
  log: string;
  meta: string;
};

const STEPS: Step[] = [
  { id: "scan", label: "Scan", icon: Radar, log: "crawling 14 platforms · 3.2k new assets", meta: "monitoring" },
  { id: "detect", label: "Detect", icon: ScanFace, log: "face + voice consistency · artifact analysis", meta: "match 0.974" },
  { id: "verify", label: "Verify", icon: ShieldCheck, log: "policy mapping · human-in-the-loop check", meta: "confirmed" },
  { id: "evidence", label: "Evidence", icon: FileCheck2, log: "timestamped capture · hashes · headers", meta: "packed" },
  { id: "enforce", label: "Enforce", icon: Gavel, log: "DMCA + ToS filed · tracking opened", meta: "submitted" }
];

const STEP_MS = 1500;

export function AgentConsole() {
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((prev) => {
        if (prev >= STEPS.length - 1) {
          setCycle((c) => c + 1);
          return 0;
        }
        return prev + 1;
      });
    }, STEP_MS);
    return () => clearInterval(t);
  }, []);

  const current = STEPS[active];
  const progress = ((active + 1) / STEPS.length) * 100;

  return (
    <div className="relative">
      {/* glow behind */}
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/25 via-iris/15 to-transparent blur-2xl" />

      <div className="surface !translate-y-0 overflow-hidden rounded-3xl bg-ink-900/80 shadow-glow backdrop-blur-xl">
        {/* title bar */}
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-3.5">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
          </div>
          <p className="font-mono text-xs text-white/45">r11-agent · live</p>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-signal/30 bg-signal/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-signal-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            autonomous
          </span>
        </div>

        {/* pipeline rail */}
        <div className="grid grid-cols-5 gap-1 px-4 pt-5 sm:px-5">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const done = i < active;
            const isActive = i === active;
            return (
              <div key={s.id} className="flex flex-col items-center gap-2">
                <div
                  className={`relative flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-500 ${
                    isActive
                      ? "border-brand/60 bg-brand/15 text-brand-300 shadow-glow"
                      : done
                        ? "border-signal/40 bg-signal/10 text-signal-400"
                        : "border-white/10 bg-white/[0.03] text-white/35"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 animate-pulse-ring rounded-xl border border-brand/50" />
                  )}
                  {done ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                </div>
                <span
                  className={`font-mono text-[10px] tracking-wide transition-colors sm:text-[11px] ${
                    isActive ? "text-white" : done ? "text-white/60" : "text-white/30"
                  }`}
                >
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* progress bar */}
        <div className="px-5 pt-5">
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/8">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-brand via-brand-400 to-iris"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* live log readout */}
        <div className="px-5 py-5">
          <div className="rounded-xl border border-white/8 bg-black/40 p-4 font-mono text-xs">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${cycle}-${active}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-2"
              >
                <span className="shrink-0 whitespace-nowrap text-brand-300">r11 ❯</span>
                <span className="shrink-0 text-white/70">{current.label.toLowerCase()}:</span>
                <span className="truncate text-white/45">{current.log}</span>
              </motion.div>
            </AnimatePresence>

            <div className="mt-3 flex items-center justify-between border-t border-white/8 pt-3">
              <span className="inline-flex items-center gap-1.5 text-white/45">
                {active === STEPS.length - 1 ? (
                  <Check className="h-3.5 w-3.5 text-signal-400" />
                ) : (
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-brand-300" />
                )}
                status
              </span>
              <span className="rounded-md bg-white/5 px-2 py-0.5 text-signal-400">{current.meta}</span>
            </div>
          </div>
        </div>
      </div>

      {/* floating stat chips */}
      <motion.div
        className="absolute -left-4 bottom-10 hidden rounded-xl border border-white/10 bg-ink-900/90 px-3.5 py-2.5 shadow-soft backdrop-blur sm:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="font-mono text-[10px] uppercase tracking-wider text-white/40">median takedown</p>
        <p className="text-lg font-semibold text-white">3.8h</p>
      </motion.div>
      <motion.div
        className="absolute -right-3 top-24 hidden rounded-xl border border-white/10 bg-ink-900/90 px-3.5 py-2.5 shadow-soft backdrop-blur sm:block"
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <p className="font-mono text-[10px] uppercase tracking-wider text-white/40">precision</p>
        <p className="text-lg font-semibold text-signal-400">98.7%</p>
      </motion.div>
    </div>
  );
}
