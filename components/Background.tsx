// Fixed, site-wide ambient background: aurora orbs + grid + grain.
// Purely decorative, lives behind all content.
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-ink-950" />

      {/* aurora orbs */}
      <div className="absolute -top-40 left-[-10%] h-[42rem] w-[42rem] rounded-full bg-brand/20 blur-[140px] animate-aurora" />
      <div className="absolute top-[10%] right-[-12%] h-[40rem] w-[40rem] rounded-full bg-iris/20 blur-[150px] animate-aurora-slow" />
      <div className="absolute bottom-[-20%] left-[20%] h-[36rem] w-[36rem] rounded-full bg-signal/10 blur-[150px] animate-aurora" />

      {/* grid overlay, fading toward the bottom */}
      <div className="absolute inset-0 bg-grid bg-[size:44px_44px] [mask-image:radial-gradient(120%_90%_at_50%_0%,black,transparent_75%)] opacity-60" />

      {/* film grain */}
      <div className="absolute inset-0 grain opacity-[0.05] mix-blend-soft-light" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,transparent_55%,rgba(0,0,0,0.65))]" />
    </div>
  );
}
