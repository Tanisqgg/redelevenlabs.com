import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import Contact from "./sections/Contact";
import { ComingSoon } from "@/components/ComingSoon";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <ComingSoon />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
