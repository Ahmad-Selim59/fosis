import { milestones } from "@/lib/history-data";

function MilestoneCard({
  year,
  title,
  description,
  align,
  isLast,
}: (typeof milestones)[number] & { isLast: boolean }) {
  const isRight = align === "right";

  return (
    <div
      className={`group relative mb-12 flex flex-col items-center justify-between md:mb-20 ${
        isRight ? "md:flex-row-reverse" : "md:flex-row"
      } ${isLast ? "mb-0" : ""}`}
    >
      <div
        className={`hidden w-5/12 md:block ${
          isRight ? "pl-6 text-left" : "pr-6 text-right"
        }`}
      >
        <div className="text-4xl font-extrabold text-history-primary opacity-20 transition-all duration-300 group-hover:text-brand-mustard group-hover:opacity-100 lg:text-5xl">
          {year}
        </div>
      </div>

      <div className="absolute left-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-history-primary bg-history-surface transition-colors duration-300 group-hover:border-brand-mustard md:left-1/2" />

      <div
        className={`mt-4 w-full pl-12 md:mt-0 md:w-5/12 ${
          isRight ? "md:pr-6 md:text-right" : "md:pl-6"
        }`}
      >
        <div className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(11,35,65,0.08)]">
          <div className="mb-2 text-2xl font-bold text-history-primary md:hidden">
            {year}
          </div>
          <h3 className="mb-2 text-xl font-semibold text-history-heading">
            {title}
          </h3>
          <p className="text-base leading-relaxed text-history-body">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function HistoryTimeline() {
  return (
    <section className="bg-history-surface px-4 py-12 md:px-10 md:py-24">
      <div className="history-timeline mx-auto max-w-7xl">
        {milestones.map((milestone, index) => (
          <MilestoneCard
            key={milestone.title}
            {...milestone}
            isLast={index === milestones.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
