import { legacyStats } from "@/lib/history-data";

export function HistoryGlobalLegacy() {
  return (
    <section className="bg-section-navy px-4 py-12 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="headline-kerning mb-4 text-3xl font-extrabold text-white md:text-5xl">
          Empowering Generations Across the Globe
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-300">
          Our legacy extends beyond borders. For decades, FOSIS has been a beacon
          of unity, bringing together diverse voices and fostering leadership on a
          global scale.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {legacyStats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-center transition-colors hover:bg-white/10"
            >
              <div className="mb-2 text-5xl font-extrabold text-brand-mustard">
                {stat.value}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {stat.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
