import { Radar, ScanFace, ShieldCheck, FileCheck2, Gavel } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: Radar,
    title: "Ingest & scan",
    desc: "Upload via API for pre-upload screening, or connect crawlers to continuously monitor the open web and major platforms."
  },
  {
    icon: ScanFace,
    title: "Detect & rank",
    desc: "Deepfake and forgery models plus fingerprint matching score every asset and rank incidents by risk and reach."
  },
  {
    icon: ShieldCheck,
    title: "Verify with a human",
    desc: "Policy-aware scoring routes edge cases to your reviewers. The agent never enforces on a low-confidence call alone."
  },
  {
    icon: FileCheck2,
    title: "Assemble evidence",
    desc: "Pages, headers, hashes, and screenshots are captured into a timestamped, tamper-evident evidence pack."
  },
  {
    icon: Gavel,
    title: "Enforce & track",
    desc: "DMCA and ToS reports are filed programmatically, with status tracking and automatic follow-up until removal."
  }
];

export function HowItWorks() {
  return (
    <section id="how" className="section scroll-mt-24">
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          title="An autonomous loop, end to end"
          description="Proactive detection meets automated enforcement — with a human checkpoint exactly where it matters."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* connecting spine */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-brand/60 via-iris/40 to-transparent sm:left-[31px]" />

          <ol className="space-y-5">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal as="li" key={s.title} delay={i * 0.06}>
                  <div className="surface flex items-start gap-5 p-5 sm:p-6">
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand/30 bg-ink-900 text-brand-300 shadow-glow">
                      <Icon className="h-6 w-6" />
                      <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-ink-850 font-mono text-xs text-white/70">
                        {i + 1}
                      </span>
                    </div>
                    <div className="pt-1">
                      <h3 className="text-lg font-semibold tracking-tight text-white">{s.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/60">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>

          <Reveal delay={0.1}>
            <p className="mt-6 text-center font-mono text-xs text-white/40">
              Secrets stay server-side — API keys are never exposed in the browser.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
