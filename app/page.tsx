import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Principles } from "@/components/Principles";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import Contact from "@/app/sections/Contact";

export default function Page() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <Features />
        <HowItWorks />
        <Principles />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
