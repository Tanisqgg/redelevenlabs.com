"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const qas = [
  {
    q: "Is this production-ready?",
    a: "We're live with an MVP for demos and pilots today. The production model — with SLAs, enterprise controls, and on-prem options — is in final validation."
  },
  {
    q: "How do you handle false positives?",
    a: "Policy-aware scoring, optional human-in-the-loop review, and transparent evidence packs. The agent won't enforce on a low-confidence call on its own."
  },
  {
    q: "Do you store our data?",
    a: "We minimize retention by default and support privacy-first deployments, including VPC and fully on-prem installs where nothing leaves your environment."
  },
  {
    q: "Can it integrate with our moderation team?",
    a: "Yes — webhooks, exports, role-based dashboards, and audit logs let your team track every report and outcome alongside the agent."
  },
  {
    q: "Which content types do you cover?",
    a: "Image, video, and audio — including face/voice deepfakes, manipulated media, and unauthorized reuse of likeness or IP."
  }
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`surface !translate-y-0 overflow-hidden ${open ? "border-white/20 bg-white/[0.05]" : ""}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-white">{q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-transform duration-300 ${
            open ? "rotate-45 border-brand/50 bg-brand/15 text-brand-300" : ""
          }`}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-white/65 sm:px-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="section scroll-mt-24">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="Straight answers"
          description="Everything you might want to know before a pilot."
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {qas.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.04}>
              <Item {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
