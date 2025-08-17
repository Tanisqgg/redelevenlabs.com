'use client';

import { useState } from "react";

type Billing = "monthly" | "yearly";

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  // Yearly = 3 months free (pay for 9)
  function renderPrice(monthly: number | "custom") {
    if (monthly === "custom") {
      return { main: "Custom", periodShown: false, note: "" };
    }
    if (monthly === 0) {
      return { main: "$0", periodShown: true, note: "" };
    }
    if (billing === "monthly") {
      return { main: `$${monthly}`, periodShown: true, note: "" };
    }
    const billedYearly = monthly * 9;
    const effectivePerMonth = Math.round(billedYearly / 12);
    return {
      main: `$${effectivePerMonth}`,
      periodShown: true,
      note: `Billed $${billedYearly}/yr`,
    };
  }

  // ----- Tier config -----
  const tiers = [
    {
      name: "Launchpad", // Starter
      monthly: 0 as const,
      blurb: "Great for first-timers",
      features: ["1 project • 100 scans/mo", "Email support", "Dashboard access"],
      cta: "Get Launchpad",
      highlighted: false,
      color: "neutral", // gray
    },
    {
      name: "Spotlight", // Rising Creator ($49)
      monthly: 49 as const,
      blurb: "Creators gaining traction",
      features: ["Up to 5k scans/mo", "Evidence packs (PDF)", "Basic takedown templates"],
      cta: "Get Spotlight",
      highlighted: false,
      color: "brand", // brand pink
    },
    {
      name: "Powerhouse", // Pro ($299)
      monthly: 299 as const,
      blurb: "Teams & Creators",
      features: ["Up to 100k scans/mo", "Webhooks + evidence packs", "Priority support"],
      cta: "Get Powerhouse",
      highlighted: true,
      color: "indigo", // indigo
    },
    {
      name: "Titan", // Enterprise (Custom)
      monthly: "custom" as const,
      blurb: "Scale, SLAs & security",
      features: ["Millions of scans", "Dedicated SRE, SLA", "On-prem / VPC options"],
      cta: "Talk to sales",
      highlighted: false,
      color: "emerald", // green
    },
  ] as const;

  // CTA color helper
  function ctaClass(
    color: (typeof tiers)[number]["color"],
    highlighted: boolean
  ) {
    const base = "inline-block rounded-xl px-4 py-2 transition";
    if (highlighted) return `${base} bg-brand text-white hover:bg-brand/90`;
    switch (color) {
      case "brand":
        return `${base} bg-brand text-white hover:bg-brand/90`;
      case "indigo":
        return `${base} bg-indigo-500 text-white hover:bg-indigo-400`;
      case "emerald":
        return `${base} bg-emerald-500 text-white hover:bg-emerald-400`;
      case "neutral":
      default:
        return `${base} bg-white/10 text-white hover:bg-white/20`;
    }
  }

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Simple pricing that scales</h2>
          <p className="mt-4 text-white/80">Pick a tier or talk to us for custom needs.</p>

          {/* Billing toggle */}
          <div className="mt-6 inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                billing === "monthly" ? "bg-brand text-white" : "text-white/80 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                billing === "yearly" ? "bg-brand text-white" : "text-white/80 hover:text-white"
              }`}
              title="Get 3 months free (pay for 9)"
            >
              Yearly{" "}
              <span className="ml-1 hidden rounded bg-white/10 px-2 py-0.5 text-[10px] text-white/90 md:inline">
                3 months free
              </span>
            </button>
          </div>
        </div>

        {/* Equal-height cards; buttons aligned bottom */}
        <div className="mt-10 grid grid-cols-1 gap-4 items-stretch md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t) => {
            const price = renderPrice(t.monthly);
            return (
              <div
                key={t.name}
                className={`card h-full min-h-[340px] flex flex-col ${t.highlighted ? "border-brand/40" : ""}`}
              >
                {/* Header row (name + badge) with fixed height so spacing matches */}
                <div className="flex items-center gap-3 min-h-[40px]">
                  <p className="text-sm text-white/70">{t.name}</p>
                  {t.blurb && (
                    <span
                      className="badge text-xs whitespace-nowrap max-w-[200px] truncate"
                      title={t.blurb}
                    >
                      {t.blurb}
                    </span>
                  )}
                </div>
                
                {/* Alpha testing indicator for Powerhouse tier */}
                {t.name === "Powerhouse" && (
                  <div className="mt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium text-orange-300 border border-orange-500/30">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400"></span>
                      </span>
                      Alpha Testing Available
                    </span>
                  </div>
                )}


                {/* Price row: consistent height + /mo alignment, tabular numerals */}
                <div className="mt-2 min-h-[60px]">
                  <div className="flex items-end gap-1">
                    <span className="tabular-nums text-3xl font-bold leading-none md:text-4xl">
                      {price.main}
                    </span>
                    {/* Keep layout width even if period isn't shown */}
                    <span className={`text-white/60 ${price.periodShown ? "" : "invisible"}`}>/mo</span>
                  </div>
                  {/* Note row gets a fixed height so all cards line up */}
                  <p className="mt-1 h-5 text-xs text-white/60">
                    {price.note || <span className="invisible">placeholder</span>}
                  </p>
                </div>

                {/* Features grow naturally */}
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {t.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>

                {/* CTA pinned to bottom for perfect horizontal alignment */}
                <div className="mt-auto pt-4">
                  <a href="#contact" className={ctaClass(t.color, t.highlighted)}>
                    {t.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-white/60">
          Yearly billing gives you <strong>3 months free</strong> (pay for 9). Cancel anytime; changes take effect at the next cycle.
        </p>
      </div>
    </section>
  );
}
