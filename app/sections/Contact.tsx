"use client";

import { useState } from "react";

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
      const body = encodeURIComponent([
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        "",
        message,
      ].join("\n"));

      window.location.href = `mailto:hello@redelevenlabs.com?subject=${subject}&body=${body}`;
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl card p-4 sm:p-6 lg:p-8">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Get a demo</h3>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-white/70">Tell us about your use case. We'll reach out within 24 hours.</p>
          <form onSubmit={onSubmit} className="mt-4 sm:mt-6 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
            <div><label className="text-xs sm:text-sm text-white/70">Name</label><input required name="name" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 sm:py-3 text-sm sm:text-base outline-none focus:border-brand/50 transition-colors" /></div>
            <div><label className="text-xs sm:text-sm text-white/70">Work email</label><input required type="email" name="email" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 sm:py-3 text-sm sm:text-base outline-none focus:border-brand/50 transition-colors" /></div>
            <div className="md:col-span-2"><label className="text-xs sm:text-sm text-white/70">Company</label><input name="company" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 sm:py-3 text-sm sm:text-base outline-none focus:border-brand/50 transition-colors" /></div>
            <div className="md:col-span-2"><label className="text-xs sm:text-sm text-white/70">What do you want to protect?</label><textarea required name="message" rows={4} className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 sm:py-3 text-sm sm:text-base outline-none focus:border-brand/50 transition-colors resize-none" /></div>
            <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <p className="text-xs text-white/60">By submitting, you agree to our terms and privacy policy.</p>
              <button disabled={status === "loading"} className="btn-primary text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3 w-full sm:w-auto">{status === "loading" ? "Opening email..." : "Request demo"}</button>
            </div>
            {status === "success" && <p className="md:col-span-2 text-sm text-green-400">Your email app should open with the demo request ready to send.</p>}
            {status === "error" && <p className="md:col-span-2 text-sm text-red-400">Something went wrong—please email hello@redelevenlabs.com</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
