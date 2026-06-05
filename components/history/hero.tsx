import Image from "next/image";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80";

export function HistoryHero() {
  return (
    <section className="relative overflow-hidden bg-history-primary text-center text-white">
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        className="object-cover opacity-10"
        sizes="100vw"
        priority
      />
      <div className="hero-offset relative z-10 mx-auto max-w-3xl px-4 pb-12 md:px-10 md:pb-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-mustard">
          Our Legacy
        </p>
        <h1 className="headline-kerning mb-6 text-4xl font-extrabold md:text-5xl lg:text-[56px] lg:leading-[64px]">
          Chapters that Shaped History
        </h1>
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-history-subtitle">
          A testament to decades of student leadership, intellectual rigor, and
          unwavering commitment to faith and community. Explore the milestones
          that define our journey.
        </p>
      </div>
    </section>
  );
}
