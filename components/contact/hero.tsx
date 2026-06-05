export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#0f2840] to-brand-navy" />
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-white/5" />
      <div className="absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-brand-mustard/10" />

      <div className="hero-offset relative z-10 mx-auto max-w-4xl px-4 pb-16 text-center md:px-10 md:pb-20">
        <h1 className="headline-kerning text-4xl font-extrabold uppercase md:text-6xl lg:text-7xl">
          Contact Us
        </h1>
      </div>

      <div className="relative z-10 h-1 bg-brand-mustard" />
    </section>
  );
}
