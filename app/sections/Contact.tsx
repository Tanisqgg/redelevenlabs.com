"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Clock } from "lucide-react";

const inputCls =
  "mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-brand/50 focus:bg-white/[0.06]";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const name = String(formData.get("name") || "");
      const email = String(formData.get("email") || "");
      const company = String(formData.get("company") || "");
      const message = String(formData.get("message") || "");
      const subject = encodeURIComponent(`Demo request from ${name || email}`);
      const body = encodeURIComponent(
        [`Name: ${name}`, `Email: ${email}`, `Company: ${company}`, "", message].join("\n")
      );

      window.location.href = `mailto:hello@redelevenlabs.com?subject=${subject}&body=${body}`;
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section scroll-mt-24">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* left: pitch + contact details */}
          <div>
            <span className="eyebrow inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_12px_2px_rgba(255,46,99,0.7)]" />
              Get started
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
              Book a demo
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
              Tell us what you need to protect and we&apos;ll show the agent working on your use case.
              We typically reply within 24 hours.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:hello@redelevenlabs.com"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75 transition-colors hover:border-brand/40 hover:text-white"
              >
                <Mail className="h-4 w-4 text-brand-300" />
                hello@redelevenlabs.com
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75">
                <MapPin className="h-4 w-4 text-iris-300" />
                Bangalore, India
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75">
                <Clock className="h-4 w-4 text-signal-400" />
                Replies within 24 hours
              </div>
            </div>
          </div>

          {/* right: form */}
          <div className="surface !translate-y-0 p-6 sm:p-8">
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-white/60">Name</label>
                <input required name="name" placeholder="Jane Doe" className={inputCls} />
              </div>
              <div>
                <label className="text-xs font-medium text-white/60">Work email</label>
                <input required type="email" name="email" placeholder="jane@company.com" className={inputCls} />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-white/60">Company</label>
                <input name="company" placeholder="Company Inc." className={inputCls} />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-white/60">What do you want to protect?</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Creator likenesses, brand IP, marketplace listings…"
                  className={`${inputCls} resize-none`}
                />
              </div>
              <div className="flex flex-col items-start justify-between gap-3 sm:col-span-2 sm:flex-row sm:items-center">
                <p className="text-xs text-white/45">By submitting, you agree to our terms and privacy policy.</p>
                <button
                  disabled={status === "loading"}
                  className="btn-primary w-full px-7 py-3 disabled:opacity-60 sm:w-auto"
                >
                  {status === "loading" ? "Opening email…" : "Request demo"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              {status === "success" && (
                <p className="text-sm text-signal-400 sm:col-span-2">
                  Your email app should open with the demo request ready to send.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-brand-300 sm:col-span-2">
                  Something went wrong — please email hello@redelevenlabs.com
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
