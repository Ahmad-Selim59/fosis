import { Container } from "@/components/ui/container";
import { reportCategories } from "@/lib/fosis-report-data";
import { type ReactNode } from "react";

function CategoryIcon({ type }: { type: string }) {
  const className = "h-8 w-8 text-brand-mustard";

  const icons: Record<string, ReactNode> = {
    isoc: (
      <path
        d="M12 3L4 9v12h16V9l-8-6zm0 2.2L18 10v9H6v-9l6-4.8zM10 14h4v5h-4v-5z"
        fill="currentColor"
      />
    ),
    su: (
      <path
        d="M4 20V8l8-5 8 5v12H4zm2-2h12V9.5l-6-3.75L6 9.5V18zm3-2h2v2H9v-2zm4 0h2v2h-2v-2z"
        fill="currentColor"
      />
    ),
    islamophobia: (
      <path
        d="M12 2L1 21h22L12 2zm0 4.5L19.5 19h-15L12 6.5zM11 10h2v5h-2v-5zm0 7h2v2h-2v-2z"
        fill="currentColor"
      />
    ),
  };

  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

export function FosisReportCategories() {
  return (
    <section className="border-t border-gray-200 bg-white section-padding-md">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="headline-kerning mb-4 text-3xl font-extrabold text-brand-navy md:text-4xl">
            What Can I Report?
          </h2>
          <p className="text-brand-navy/70">
            This portal is for reporting three categories of incident:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reportCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border-2 border-gray-200 bg-white p-8 text-center transition-all duration-300 hover:border-brand-mustard hover:shadow-sm"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-navy">
                <CategoryIcon type={category.icon} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-brand-navy">
                {category.title}
              </h3>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-brand-mustard">
                {category.label}
              </p>
              <p className="leading-relaxed text-brand-navy/70">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
