import { Container } from "@/components/ui/container";
import { fosisServices } from "@/lib/fosis-services-data";

export function FosisServicesOfferings() {
  return (
    <section className="bg-white section-padding-md">
      <Container>
        <p className="eyebrow mb-4">Our Services</p>
        <h2 className="headline-kerning mb-2 text-3xl font-extrabold text-brand-navy md:text-4xl">
          What We Offer
        </h2>
        <div className="mb-10 h-1 w-16 bg-brand-mustard" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fosisServices.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-about-surface p-8"
            >
              <h3 className="mb-4 text-lg font-bold text-brand-navy">
                {service.title}
              </h3>
              <p className="leading-relaxed text-brand-navy/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-brand-navy/70">
          To access FOSIS services or discuss how we can support your ISoc,
          email us at{" "}
          <a
            href="mailto:info@fosis.org.uk"
            className="font-medium text-brand-navy underline decoration-brand-mustard underline-offset-2 hover:text-brand-mustard"
          >
            info@fosis.org.uk
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
