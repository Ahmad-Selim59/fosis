import { Container } from "@/components/ui/container";
import { coreValues } from "@/lib/about-data";
import { type ReactNode } from "react";

function ValueIcon({ title }: { title: string }) {
  const paths: Record<string, ReactNode> = {
    "Faith-Centred": (
      <path d="M12 3a7 7 0 00-4 12.7V21h8v-5.3A7 7 0 0012 3z" />
    ),
    Advocacy: (
      <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    ),
    Unity: (
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
    Development: (
      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    ),
    Inclusion: (
      <>
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </>
    ),
  };

  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[title]}
    </svg>
  );
}

const variantStyles = {
  navy: {
    card: "bg-brand-navy text-white",
    icon: "text-brand-mustard",
  },
  mustard: {
    card: "bg-brand-mustard text-brand-navy",
    icon: "text-brand-navy",
  },
  light: {
    card: "border border-gray-200 bg-white text-brand-navy",
    icon: "text-brand-navy",
  },
  outline: {
    card: "border border-gray-300 bg-white text-brand-navy",
    icon: "text-brand-navy",
  },
};

export function AboutCoreValues() {
  return (
    <section className="bg-about-surface section-padding-md">
      <Container>
        <div className="mb-12 text-center">
          <p className="eyebrow mb-4">What Guides Us</p>
          <h2 className="headline-kerning text-3xl font-extrabold text-brand-navy md:text-5xl">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {coreValues.slice(0, 3).map((value) => {
            const styles = variantStyles[value.variant];
            return (
              <div
                key={value.title}
                className={`rounded-2xl p-8 shadow-sm ${styles.card}`}
              >
                <div className={`mb-4 ${styles.icon}`}>
                  <ValueIcon title={value.title} />
                </div>
                <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                <p
                  className={`leading-relaxed ${
                    value.variant === "navy"
                      ? "text-gray-300"
                      : "text-brand-navy/70"
                  }`}
                >
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
          {coreValues.slice(3).map((value) => {
            const styles = variantStyles[value.variant];
            return (
              <div
                key={value.title}
                className={`rounded-2xl p-8 shadow-sm ${styles.card}`}
              >
                <div className={`mb-4 ${styles.icon}`}>
                  <ValueIcon title={value.title} />
                </div>
                <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                <p className="leading-relaxed text-brand-navy/70">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
