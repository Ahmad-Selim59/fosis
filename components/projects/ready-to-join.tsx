import { Container } from "@/components/ui/container";

export function ProjectsReadyToJoin() {
  return (
    <section className="bg-white section-padding-md">
      <Container size="narrow">
        <p className="eyebrow mb-4">Contact</p>
        <h2 className="headline-kerning mb-2 text-3xl font-extrabold text-brand-navy md:text-4xl">
          Ready to Join?
        </h2>
        <div className="mb-8 h-1 w-16 bg-brand-mustard" />

        <p className="text-lg leading-relaxed text-brand-navy/70">
          Send us a message at{" "}
          <a
            href="mailto:info@fosis.org.uk"
            className="font-semibold text-brand-navy underline decoration-brand-mustard underline-offset-2 hover:text-brand-mustard"
          >
            info@fosis.org.uk
          </a>{" "}
          with a brief introduction and what you&apos;d like to contribute. We
          review applications throughout the year and will be in touch as soon as
          an opportunity that fits your skills becomes available.
        </p>
      </Container>
    </section>
  );
}
