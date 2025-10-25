import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="section">
      <div className="container relative">
        <div className="absolute inset-0 -z-10 bg-grid bg-[size:32px_32px] opacity-20" />
        <div className="mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
          <span className="badge mb-4 sm:mb-6 text-xs sm:text-sm">
            <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4" />
            Proactive Trust & Safety
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Find <span className="text-brand">deepfakes</span> before they spread.
            <br className="hidden sm:block" />
            <span className="block sm:inline">Automate takedowns at scale.</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto">
            RedElevenLabs scans the web for impersonations and synthetic media—then
            builds evidence packs and files removals automatically.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
            <Link href="#contact" className="btn-primary text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4">
              Book a demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="#how" className="btn-secondary text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4">
              See how it works
            </Link>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="card p-4 sm:p-6">
              <p className="font-semibold text-sm sm:text-base">Pre-upload screening</p>
              <p className="mt-1 text-xs sm:text-sm text-white/70">APIs to stop risky content before it goes live.</p>
            </div>
            <div className="card p-4 sm:p-6">
              <p className="font-semibold text-sm sm:text-base">Continuous monitoring</p>
              <p className="mt-1 text-xs sm:text-sm text-white/70">Search the web & platforms for impersonations.</p>
            </div>
            <div className="card p-4 sm:p-6 md:col-span-2 lg:col-span-1">
              <p className="font-semibold text-sm sm:text-base">Automated takedowns</p>
              <p className="mt-1 text-xs sm:text-sm text-white/70">Evidence packs, DMCA/ToS filings, and tracking.</p>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 inline-flex items-center gap-2 text-white/70 text-sm sm:text-base">
            <Zap className="h-4 w-4" />
            <span className="text-center">Privacy-first • No client secrets in the browser</span>
          </div>
        </div>
      </div>
    </section>
  );
}
