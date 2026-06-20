const items = [
  "Creators & talent",
  "Newsrooms",
  "Public figures",
  "Marketplaces",
  "Fintech & KYC",
  "Election integrity",
  "Dating platforms",
  "Brands & IP",
  "Social platforms"
];

export function TrustBar() {
  const row = [...items, ...items];
  return (
    <section className="relative border-y border-white/[0.06] py-8">
      <div className="container">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.22em] text-white/35">
          Protecting people &amp; platforms across
        </p>
      </div>
      <div className="mask-fade-x relative mt-6 overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 pr-4">
          {row.map((label, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-white/55"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
