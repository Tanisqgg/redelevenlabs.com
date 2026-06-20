import { MapPin } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nav = [
  { href: "#platform", label: "Platform" },
  { href: "#how", label: "How it works" },
  { href: "#safety", label: "AI Safety" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Book a demo" }
];

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10">
      <div className="container py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <img src={`${basePath}/logo.png`} className="h-8 w-auto object-contain" alt="" />
              <span className="text-base font-semibold tracking-tight text-white">RedElevenLabs</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Autonomous agents for AI safety — detecting synthetic media and defending authenticity,
              with humans in the loop.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70">
              <MapPin className="h-3.5 w-3.5 text-brand-300" />
              Bangalore, India
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2.5 text-sm sm:grid-cols-1">
            <p className="col-span-full mb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">
              Navigate
            </p>
            {nav.map((l) => (
              <a key={l.href} href={l.href} className="text-white/60 transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <hr className="hairline my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} RedElevenLabs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@redelevenlabs.com" className="transition-colors hover:text-white">
              Contact
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
