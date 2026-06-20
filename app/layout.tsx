import type { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = "https://tanisqgg.github.io/redelevenlabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "RedElevenLabs — Autonomous Agents for AI Safety & Authenticity",
  description:
    "RedElevenLabs builds autonomous safety agents that detect deepfakes and synthetic media, assemble court-ready evidence, and file takedowns — with humans in the loop.",
  keywords: [
    "AI safety",
    "deepfake detection",
    "trust and safety",
    "agentic AI",
    "synthetic media",
    "content authenticity",
    "automated takedowns"
  ],
  openGraph: {
    title: "RedElevenLabs — Autonomous Agents for AI Safety & Authenticity",
    description:
      "Autonomous safety agents that detect synthetic media, assemble evidence, and enforce takedowns — with humans in the loop.",
    url: siteUrl,
    siteName: "RedElevenLabs",
    images: [{ url: `${basePath}/og-image.png`, width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "RedElevenLabs — Autonomous Agents for AI Safety",
    description:
      "Autonomous safety agents that detect synthetic media and enforce takedowns — with humans in the loop."
  },
  icons: [{ rel: "icon", url: `${basePath}/logo.png` }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
