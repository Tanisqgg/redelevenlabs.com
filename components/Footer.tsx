export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 sm:py-10 text-sm text-white/60">
      <div className="container px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row">
        <div className="flex flex-col items-center sm:items-start gap-3">
          <div className="flex items-center gap-3">
            <img src="/logo.png" className="h-6 w-6 sm:h-8 sm:w-8" />
            <span className="text-xs sm:text-sm">© {new Date().getFullYear()} redelevenlabs</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-white/90 backdrop-blur-sm">
            <span className="text-sm sm:text-base">📍</span>
            <span>Bangalore, India</span>
          </div>
        </div>
        <nav className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="mailto:hr@redelevenlabs.com" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
