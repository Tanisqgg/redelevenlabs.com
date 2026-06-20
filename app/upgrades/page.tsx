import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function UpgradesPage() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
      <section className="section pt-32 sm:pt-40">
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/10">
                <svg 
                  className="w-12 h-12 text-brand" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              We're <span className="text-brand">upgrading</span> and will release soon.
            </h1>
            
            <p className="mt-6 text-lg text-white/80">
              Our website is currently undergoing improvements. We'll be back with exciting new features and a better experience.
            </p>

            <div className="mt-8">
              <div className="card">
                <p className="font-semibold">Stay tuned for the launch!</p>
                <p className="mt-1 text-sm text-white/70">We're working hard to bring you something amazing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
