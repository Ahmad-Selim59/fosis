import { Container } from "@/components/ui/container";
import { regionalChairs } from "@/lib/about-data";

export function AboutRegionalChairs() {
  return (
    <section className="bg-about-surface section-padding-md">
      <Container>
        <div className="mb-12 text-center">
          <p className="eyebrow mb-4">Regional Leadership</p>
          <h2 className="headline-kerning mb-4 text-3xl font-extrabold text-brand-navy md:text-5xl">
            Regional Chairs
          </h2>
          <p className="mx-auto max-w-xl text-brand-navy/70">
            Seven regional leads connecting FOSIS to ISocs across the UK &amp;
            Ireland.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {regionalChairs.map((chair) => (
            <div
              key={chair.region}
              className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-mustard bg-brand-navy text-lg font-bold text-brand-mustard">
                {chair.initials}
              </div>
              <h3 className="mb-1 font-bold text-brand-navy">{chair.region}</h3>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-mustard">
                {chair.name}
              </p>
              <a
                href={`mailto:${chair.email}`}
                className="inline-flex items-center gap-2 text-sm text-brand-navy/70 transition-colors hover:text-brand-mustard"
              >
                <svg
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                {chair.email}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
