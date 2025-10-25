import Link from "next/link";

export function CTA() {
  return (
    <section className="section">
      <div className="container text-center px-4 sm:px-6 lg:px-8">
        <div className="card p-6 sm:p-8 lg:p-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Ready to protect your users and brand?</h3>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-white/80">See redelevenlabs in action with a tailored demo.</p>
          <Link href="#contact" className="mt-4 sm:mt-6 inline-flex rounded-xl bg-brand px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium hover:bg-brand/90 transition-colors">
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
