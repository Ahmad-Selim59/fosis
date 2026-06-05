import { historyPillars } from "@/lib/history-data";

function PillarIcon({ type }: { type: "activism" | "support" | "development" }) {
  if (type === "activism") {
    return (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (type === "support") {
    return (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v9a2 2 0 01-2 2h-2z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function HistoryCorePillars() {
  return (
    <section className="bg-history-surface px-4 py-12 text-center md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="headline-kerning mb-4 text-3xl font-extrabold text-history-primary md:text-5xl">
          Our Core Pillars
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-history-body">
          The foundation of our work supporting Islamic Societies across the UK
          and Ireland.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {historyPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(11,35,65,0.08)]"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-history-primary">
                <PillarIcon type={pillar.icon} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-history-heading">
                {pillar.title}
              </h3>
              <p className="text-base leading-relaxed text-history-body">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
