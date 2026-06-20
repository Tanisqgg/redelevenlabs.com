"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AgentConsole } from "./AgentConsole";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
};
const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.21, 0.5, 0.27, 1] } }
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Left: copy */}
          <motion.div variants={container} initial="hidden" animate="show" className="min-w-0 max-w-xl">
            <motion.div variants={item}>
              <span className="badge">
                <Sparkles className="h-3.5 w-3.5 text-brand-300" />
                Autonomous agents for trust &amp; safety
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="text-gradient">Defend authenticity at</span>{" "}
              <span className="text-gradient-brand">machine speed.</span>
            </motion.h1>

            <motion.p variants={item} className="mt-6 text-lg leading-relaxed text-white/65">
              RedElevenLabs deploys autonomous safety agents that hunt down deepfakes and
              synthetic media, assemble court-ready evidence, and file takedowns —
              <span className="text-white/85"> before the damage spreads,</span> with humans in the loop.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="btn-primary px-7 py-3.5 text-base">
                Book a demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#how" className="btn-secondary px-7 py-3.5 text-base">
                See how the agent works
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/50"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                Human-in-the-loop by default
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-iris" />
                Privacy-first &amp; VPC / on-prem
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Court-ready evidence
              </span>
            </motion.div>
          </motion.div>

          {/* Right: live agent console */}
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.21, 0.5, 0.27, 1], delay: 0.2 }}
          >
            <AgentConsole />
          </motion.div>
        </div>
      </div>

      {/* fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-950/60" />
    </section>
  );
}
