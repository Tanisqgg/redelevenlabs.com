import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="section scroll-mt-24">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand/15 via-ink-900 to-iris/15 px-6 py-14 text-center sm:px-12 sm:py-20">
            {/* glow + grid texture */}
            <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:40px_40px] opacity-[0.12] [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-4xl md:text-5xl">
                Put an autonomous safety agent on watch.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-white/65 sm:text-lg">
                See RedElevenLabs detect, verify, and enforce on your real use case — in a tailored 30-minute demo.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="#contact" className="btn-primary px-8 py-3.5 text-base">
                  Book a demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#platform" className="btn-secondary px-8 py-3.5 text-base">
                  Explore the platform
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
