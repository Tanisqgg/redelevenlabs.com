"use client";

import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const links = [
  { href: "#platform", label: "Platform" },
  { href: "#how", label: "How it works" },
  { href: "#safety", label: "AI Safety" },
  { href: "#faq", label: "FAQ" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container">
        <div
          className={`mt-3 flex items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "border-white/10 bg-ink-900/80 shadow-soft backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <Link href="#" aria-label="RedElevenLabs home" className="flex items-center gap-2.5">
            <img
              src={`${basePath}/logo.png`}
              alt=""
              className="h-9 w-auto object-contain sm:h-10"
            />
            <span className="hidden text-sm font-semibold tracking-tight text-white/90 sm:inline">
              RedElevenLabs
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-primary hidden px-4 py-2 sm:inline-flex">
              Book a demo <ArrowRight className="h-4 w-4" />
            </a>
            <button
              className="rounded-lg p-2 text-white/80 transition-colors hover:bg-white/10 md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 p-2 shadow-soft backdrop-blur-xl md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block rounded-xl px-4 py-3 text-base text-white/85 transition-colors hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary mt-1 w-full"
              onClick={() => setOpen(false)}
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
