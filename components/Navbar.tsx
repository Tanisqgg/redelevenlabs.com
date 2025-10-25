'use client';

import Link from "next/link";
import {Menu} from "lucide-react";
import {useState} from "react";

export function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur">
            <div className="container flex h-20 sm:h-24 lg:h-28 items-center justify-between">
                <Link href="#" aria-label="redelevenlabs" className="flex items-center">
                    <img
                        src="/logo.png"
                        alt="redelevenlabs"
                        width={400} height={100}
                        className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto object-contain"
                    />
                    <span className="sr-only">RedElevenLabs</span>
                </Link>

                <nav className="hidden items-center gap-4 lg:gap-6 xl:gap-8 md:flex">
                    <a href="#features" className="text-sm lg:text-base text-white/80 hover:text-white transition-colors">Features</a>
                    <a href="#how" className="text-sm lg:text-base text-white/80 hover:text-white transition-colors">How it works</a>
                    <a href="#faq" className="text-sm lg:text-base text-white/80 hover:text-white transition-colors">FAQ</a>
                    <a href="#contact" className="btn-primary text-sm lg:text-base px-4 py-2 lg:px-6 lg:py-3">Get a demo</a>
                </nav>

                <button
                    className="md:hidden rounded-lg p-2 hover:bg-white/10 transition-colors"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <Menu className="h-6 w-6 sm:h-7 sm:w-7"/>
                </button>
            </div>

            {open && (
                <div className="border-t border-white/10 bg-black/80 md:hidden">
                    <div className="container flex flex-col py-4 space-y-1">
                        <a href="#features" className="px-3 py-3 text-base text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                           onClick={() => setOpen(false)}>Features</a>
                        <a href="#how" className="px-3 py-3 text-base text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                           onClick={() => setOpen(false)}>How it works</a>
                        <a href="#faq" className="px-3 py-3 text-base text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                           onClick={() => setOpen(false)}>FAQ</a>
                        <a href="#contact" className="px-3 py-3 text-base text-brand hover:text-white hover:bg-brand/10 rounded-lg transition-colors"
                           onClick={() => setOpen(false)}>Get a demo</a>
                    </div>
                </div>
            )}
        </header>
    );
}
