import Link from "next/link";
import { Container } from "@/components/ui/container";
import { routes } from "@/lib/routes";

export function MissionSection() {
  return (
    <section className="bg-white section-padding">
      <Container size="narrow" className="text-center">
        <p className="eyebrow mb-6">Our Mission</p>

        <h2 className="headline-kerning mb-8 text-4xl font-extrabold text-brand-navy md:text-5xl lg:text-6xl">
          We have been serving
          <br />
          Muslim students since 1963.
        </h2>

        <div className="mx-auto mb-12 max-w-2xl">
          <p className="text-lg leading-relaxed text-brand-navy/70 md:text-xl">
            FOSIS connects, empowers, and advocates for Islamic Societies across
            every university in the United Kingdom. From spiritual development to
            career guidance, from national campaigns to grassroots community
            building — we are the infrastructure behind Muslim student
            excellence.
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            href={routes.about}
            className="inline-flex items-center justify-center bg-brand-navy px-10 py-5 text-xs font-bold uppercase tracking-cta text-white transition-all hover:bg-brand-navy/90"
          >
            About FOSIS
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
      </Container>
    </section>
  );
}
