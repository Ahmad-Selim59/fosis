import { Container } from "@/components/ui/container";
import { contributeOptions } from "@/lib/projects-data";

export function ProjectsContribute() {
  return (
    <section className="border-b border-gray-200 bg-white section-padding-md">
      <Container>
        <p className="eyebrow mb-4">Ways to Get Involved</p>
        <h2 className="headline-kerning mb-2 text-3xl font-extrabold text-brand-navy md:text-4xl">
          How You Can Contribute
        </h2>
        <div className="mb-10 h-1 w-16 bg-brand-mustard" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {contributeOptions.map((option) => (
            <div key={option.title} className="rounded-2xl bg-section-navy p-8">
              <h3 className="mb-4 text-lg font-bold text-brand-mustard">
                {option.title}
              </h3>
              <p className="leading-relaxed text-gray-300">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
