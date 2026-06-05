import Link from "next/link";
import { Container } from "@/components/ui/container";
import { regions } from "@/lib/affiliate-data";
import { routes } from "@/lib/routes";

function ChevronDown() {
  return (
    <svg
      className="h-3 w-3"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M19 9l-7 7-7-7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function AffiliateRegions() {
  return (
    <section className="relative overflow-hidden bg-section-navy section-padding-md">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-[#0f2840] to-brand-navy" />

      <Container className="relative z-10">
        <div className="mb-12 text-center">
          <p className="eyebrow mb-4">Our Network</p>
          <h2 className="headline-kerning mb-4 text-3xl font-extrabold text-white md:text-5xl">
            Explore by Region
          </h2>
          <p className="text-gray-300">
            Tap a card to see your regional contact and available ISocs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((region) => (
            <Link
              key={region.slug}
              href={routes.isocs}
              className="group flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f2840] to-[#1a3a5c] p-8 text-center transition-all hover:border-brand-mustard/30 hover:shadow-lg"
            >
              <h3 className="mb-2 text-2xl font-bold text-white">
                {region.name}
              </h3>
              <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-brand-mustard">
                {region.count} ISocs
              </p>
              <span className="flex items-center gap-1 text-xs uppercase tracking-wider text-gray-400 transition-colors group-hover:text-white">
                <ChevronDown />
                See Details
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
