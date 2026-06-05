export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#0f2840] to-brand-navy" />
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-white/5" />
      <div className="absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-brand-mustard/10" />
      <div className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-white/5" />

      <div className="hero-offset relative z-10 mx-auto max-w-4xl px-4 pb-16 text-center md:px-10 md:pb-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-mustard">
          Est. 1963
        </p>
        <h1 className="headline-kerning mb-6 text-4xl font-extrabold uppercase md:text-6xl lg:text-7xl">
          About FOSIS
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
          The Federation of Student Islamic Societies — the national voice for
          Muslim students across the UK &amp; Ireland since 1963.
        </p>
      </div>

      <div className="relative z-10 h-1 bg-brand-mustard" />
    </section>
  );
}
