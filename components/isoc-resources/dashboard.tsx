import Link from "next/link";
import { Container } from "@/components/ui/container";
import { dashboardCategories } from "@/lib/isoc-resources-data";

function CategoryIcon({ title }: { title: string }) {
  const className =
    "h-8 w-8 text-gray-400 transition-colors duration-300 group-hover:text-brand-mustard";

  switch (title) {
    case "Leadership":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case "Events":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case "Finance":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case "Advocacy":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case "Tarbiyyah":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case "Alumni":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}

function ArrowIcon() {
  return (
    <svg className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

const cardBaseClasses =
  "group relative flex min-h-[220px] flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f2840] to-[#1a3a5c] p-8 transition-all duration-300 ease-out";

const cardInteractiveClasses =
  "cursor-pointer hover:z-10 hover:-translate-y-2 hover:scale-[1.03] hover:border-brand-mustard/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]";

function DashboardCard({
  category,
}: {
  category: (typeof dashboardCategories)[number];
}) {
  const content = (
    <>
      <span className="mb-4 text-sm font-semibold text-brand-mustard">
        {category.number}
      </span>
      <div className="mb-4">
        <CategoryIcon title={category.title} />
      </div>
      <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">
        {category.title}
      </h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-300">
        {category.description}
      </p>

      {category.comingSoon ? (
        <span className="inline-flex w-fit border border-white/20 bg-brand-navy px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
          Coming Soon
        </span>
      ) : (
        <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-gray-400 transition-colors duration-300 group-hover:text-brand-mustard">
          Explore
          <ArrowIcon />
        </span>
      )}
    </>
  );

  if (category.comingSoon) {
    return (
      <div className={`${cardBaseClasses} cursor-default opacity-90`}>
        {content}
      </div>
    );
  }

  return (
    <Link
      href={category.href}
      className={`${cardBaseClasses} ${cardInteractiveClasses}`}
    >
      {content}
    </Link>
  );
}

export function IsocResourcesDashboard() {
  return (
    <section className="relative overflow-hidden bg-section-navy section-padding-md">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-[#0f2840] to-brand-navy" />

      <Container className="relative z-10">
        <div className="mb-12">
          <h2 className="headline-kerning mb-3 text-3xl font-extrabold text-white md:text-4xl">
            Dashboard
          </h2>
          <p className="text-gray-300">
            Six pillars. One hub. Everything your ISoc needs to lead with
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dashboardCategories.map((category) => (
            <DashboardCard key={category.title} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
