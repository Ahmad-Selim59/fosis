import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { routes } from "@/lib/routes";
import { type ReactNode } from "react";

const placeholderLogos: ReactNode[] = [
  <path key="1" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
  <path key="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  <>
    <path key="3a" d="M12 21a9 9 0 110-18 9 9 0 010 18zm0-2a7 7 0 100-14 7 7 0 000 14z" />
    <path key="3b" d="M12 11l3 3-3 3-3-3 3-3z" />
  </>,
  <path
    key="4"
    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
  />,
  <path
    key="5"
    d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
  />,
  <path
    key="6"
    d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
  />,
  <>
    <path
      key="7a"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
    />
    <path
      key="7b"
      d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
    />
  </>,
  <>
    <path
      key="8a"
      d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
    />
    <path key="8b" d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </>,
];

export function AffiliatedIsocsSection() {
  return (
    <section className="bg-brand-navy section-padding-md">
      <Container className="text-center">
        <div className="mb-12">
          <p className="eyebrow mb-4">Our Network</p>
          <h2 className="headline-kerning mb-6 text-3xl font-extrabold text-white md:text-5xl">
            Affiliated ISocs
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Join a growing network of over 100 Islamic Societies across the
            United Kingdom, working together to empower Muslim students.
          </p>
        </div>

        <div className="mx-auto mb-16 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {placeholderLogos.map((icon, index) => (
            <div
              key={index}
              className="flex aspect-square items-center justify-center rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <svg
                className="h-16 w-16 text-white/40"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {icon}
              </svg>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={routes.affiliate} className="w-full sm:w-auto">
            Affiliate Your ISoc
          </Button>
          <Button href={routes.isocs} variant="secondary" className="w-full sm:w-auto">
            View All ISocs
          </Button>
        </div>
      </Container>
    </section>
  );
}
