export function AffiliateHero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#0f2840] to-brand-navy" />
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-white/5" />
      <div className="absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-brand-mustard/10" />

      <div className="hero-offset relative z-10 mx-auto max-w-4xl px-4 pb-16 text-center md:px-10 md:pb-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-mustard">
          For ISocs
        </p>
        <h1 className="headline-kerning mb-6 text-4xl font-extrabold uppercase md:text-6xl lg:text-7xl">
          ISOC Affiliations
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
          Browse 150+ affiliated Islamic Societies across the UK &amp; Ireland —
          or join the FOSIS family today.
        </p>
      </div>

      <div className="relative z-10 h-1 bg-brand-mustard" />
    </section>
  );
}
