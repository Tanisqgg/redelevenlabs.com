import { Eye, Fingerprint, Search, ShieldCheck, FileCheck2, Webhook } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Eye,
    title: "Deepfake & forgery detection",
    desc: "Multimodal classifiers analyze face and voice consistency, generative artifacts, and low-level cues across image, video, and audio.",
    featured: true
  },
  {
    icon: Search,
    title: "Reverse media search",
    desc: "Perceptual hashing and crawling pipelines maximize recall across the open web and major platforms."
  },
  {
    icon: Fingerprint,
    title: "Content fingerprinting",
    desc: "Watermark and hash matches survive crops, resizes, re-encodes, and minor edits."
  },
  {
    icon: FileCheck2,
    title: "Court-ready evidence packs",
    desc: "Timestamped captures with URLs, response headers, and screenshots — ready for legal follow-through."
  },
  {
    icon: ShieldCheck,
    title: "Policy-aware enforcement",
    desc: "Violations are mapped to each platform's policies to cut false positives and speed removals."
  },
  {
    icon: Webhook,
    title: "Developer-first APIs",
    desc: "Clean REST endpoints, webhooks, and a dashboard with role-based access and audit logs."
  }
];

export function Features() {
  return (
    <section id="platform" className="section scroll-mt-24">
      <div className="container">
        <SectionHeading
          eyebrow="The platform"
          title={<>One agent. The full safety loop.</>}
          description="From pre-upload screening to automated enforcement — compose the capabilities you need, or run the whole pipeline autonomously."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc, featured }, i) => (
            <Reveal
              key={title}
              delay={(i % 3) * 0.07}
              className={featured ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
            >
              <article
                className={`surface group h-full p-6 ${
                  featured ? "lg:flex lg:flex-col lg:justify-between lg:p-8" : ""
                }`}
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand/0 to-iris/0 opacity-0 transition-opacity duration-300 group-hover:from-brand/10 group-hover:to-iris/5 group-hover:opacity-100" />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-brand-300 transition-colors group-hover:border-brand/40 group-hover:bg-brand/10">
                  <Icon className="h-5 w-5" />
                </div>
                <div className={featured ? "lg:mt-auto" : ""}>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>
                </div>
                {featured && (
                  <p className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-brand-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" /> core engine
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
