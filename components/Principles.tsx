import { UserCheck, Lock, ScrollText, Scale } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const principles = [
  {
    icon: UserCheck,
    title: "Human-in-the-loop",
    desc: "Autonomy with accountability. Consequential actions require human confirmation, and reviewers can override the agent at any step."
  },
  {
    icon: Lock,
    title: "Privacy by design",
    desc: "Minimal retention, encryption in transit and at rest, and deployment options up to VPC and fully on-prem."
  },
  {
    icon: ScrollText,
    title: "Auditable & explainable",
    desc: "Every decision ships with its evidence — model scores, captures, and a full audit trail you can inspect and defend."
  },
  {
    icon: Scale,
    title: "Fair & proportionate",
    desc: "Policy-aware scoring and bias testing keep enforcement proportionate, reducing false positives and collateral takedowns."
  }
];

export function Principles() {
  return (
    <section id="safety" className="section scroll-mt-24">
      <div className="container">
        <div className="surface !translate-y-0 relative overflow-hidden rounded-3xl border-white/10 p-8 sm:p-12 lg:p-16">
          {/* ambient accents inside the panel */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-iris/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand/15 blur-3xl" />

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <SectionHeading
              align="left"
              eyebrow="AI safety, built in"
              title="Powerful agents need guardrails"
              description="We build safety tools, so safety is the product — not an afterthought. These commitments shape every decision the agent makes."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.title} delay={(i % 2) * 0.08}>
                    <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-iris/30 hover:bg-white/[0.05]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-iris/30 bg-iris/10 text-iris-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 font-semibold tracking-tight text-white">{p.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/60">{p.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
