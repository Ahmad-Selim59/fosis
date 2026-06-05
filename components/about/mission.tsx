import Link from "next/link";
import { Container } from "@/components/ui/container";
import { routes } from "@/lib/routes";

export function AboutMission() {
  return (
    <section className="bg-white section-padding-md">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navy via-[#1a3a5c] to-brand-mustard/80">
            <div className="absolute bottom-6 left-6 rounded-xl border border-white/20 bg-brand-navy/80 px-6 py-4 backdrop-blur-sm">
              <p className="text-4xl font-extrabold text-brand-mustard">60+</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-white">
                Years of Impact
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Our Mission</p>
            <h2 className="headline-kerning mb-6 text-3xl font-extrabold text-brand-navy md:text-4xl">
              Serving Muslim Students Since 1963
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-brand-navy/70">
              FOSIS unites Muslim students across the United Kingdom, connecting
              over 100 Islamic Societies and representing more than 350,000
              students nationwide.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-brand-navy/70">
              From spiritual development to national advocacy — we are the
              infrastructure behind Muslim student excellence.
            </p>
            <Link
              href={routes.ourHistory}
              className="inline-flex items-center bg-brand-navy px-8 py-4 text-sm font-bold uppercase tracking-cta text-white transition-colors hover:bg-brand-navy/90"
            >
              FOSIS History
              <svg
                className="ml-3 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
