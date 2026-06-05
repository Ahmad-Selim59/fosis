import Link from "next/link";
import { Container } from "@/components/ui/container";
import { routes } from "@/lib/routes";
import { type ReactNode } from "react";

type Pillar = {
  title: string;
  href: string;
  description: string;
  icon: ReactNode;
};

const pillars: Pillar[] = [
  {
    title: "Advocacy",
    href: routes.pillars.advocacy,
    description:
      "Representing the voice of Muslim students at a national level, defending rights, and ensuring equal opportunities across higher education institutions.",
    icon: (
      <path
        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    ),
  },
  {
    title: "Development",
    href: routes.pillars.development,
    description:
      "Providing training, resources, and mentorship to equip Muslim students with the skills needed for personal, spiritual, and professional growth.",
    icon: (
      <path
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    ),
  },
  {
    title: "Unity",
    href: routes.pillars.unity,
    description:
      "Fostering brotherhood and sisterhood by connecting ISocs nationally, hosting regional events, and building a cohesive Muslim student community.",
    icon: (
      <path
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    ),
  },
];

function ArrowIcon() {
  return (
    <svg
      className="ml-2 h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M17 8l4 4m0 0l-4 4m4-4H3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function PillarsSection() {
  return (
    <section className="bg-white section-padding-md">
      <Container>
        <div className="mb-16 text-center">
          <p className="eyebrow mb-4">Our Work</p>
          <h2 className="headline-kerning text-3xl font-extrabold text-brand-navy md:text-5xl">
            The Three Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-2xl border border-gray-200 bg-gray-50 p-10 transition-shadow hover:shadow-xl"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-navy transition-colors group-hover:bg-brand-mustard">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {pillar.icon}
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-brand-navy">
                {pillar.title}
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                {pillar.description}
              </p>
              <Link
                href={pillar.href}
                className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-brand-mustard transition-colors hover:text-brand-navy"
              >
                Learn More
                <ArrowIcon />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
