import { Container } from "@/components/ui/container";
import { affiliationBenefits } from "@/lib/affiliate-data";

export function AffiliateBenefits() {
  return (
    <section className="border-t border-gray-200 bg-white section-padding-md">
      <Container>
        <p className="eyebrow mb-4">What You Get</p>
        <h2 className="headline-kerning mb-2 text-3xl font-extrabold text-brand-navy md:text-4xl">
          Benefits of Affiliation
        </h2>
        <div className="mb-10 h-1 w-16 bg-brand-mustard" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {affiliationBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl bg-section-navy p-8"
            >
              <h3 className="mb-4 text-lg font-bold text-brand-mustard">
                {benefit.title}
              </h3>
              <p className="leading-relaxed text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
