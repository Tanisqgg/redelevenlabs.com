'use client';

import Link from "next/link";
import {Menu} from "lucide-react";
import {useState} from "react";

export function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur">
            <div className="container flex h-20 items-center justify-between">{/* h-20 = 80px */}
                <Link href="#" aria-label="redelevenlabs" className="flex items-center">
                    <img
                        src="/logo.png"
                        alt="redelevenlabs"
                        width={320} height={80}          // intrinsic size (any values OK)
                        className="h-16 md:h-24 w-auto object-contain"
                    />
                    <span className="sr-only">RedElevenLabs</span>
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    <a href="#features" className="text-white/80 hover:text-white">Features</a>
                    <a href="#how" className="text-white/80 hover:text-white">How it works</a>
                    <a href="#faq" className="text-white/80 hover:text-white">FAQ</a>
                    <a href="#contact" className="btn-primary">Get a demo</a>
                </nav>

                <button
                    className="md:hidden rounded-lg p-2 hover:bg-white/10"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <Menu className="h-6 w-6"/>
                </button>
            </div>

            {open && (
                <div className="border-t border-white/10 bg-black/80 md:hidden">
                    <div className="container flex flex-col py-3">
                        <a href="#features" className="px-2 py-2 text-white/90 hover:text-white"
                           onClick={() => setOpen(false)}>Features</a>
                        <a href="#how" className="px-2 py-2 text-white/90 hover:text-white"
                           onClick={() => setOpen(false)}>How it works</a>
                        <a href="#faq" className="px-2 py-2 text-white/90 hover:text-white"
                           onClick={() => setOpen(false)}>FAQ</a>
                        <a href="#contact" className="px-2 py-2 text-brand hover:text-white"
                           onClick={() => setOpen(false)}>Get a demo</a>
                    </div>
                </div>
            )}
        </header>
    );
}
