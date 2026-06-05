import { Container } from "@/components/ui/container";

export function IsocsNoIsoc() {
  return (
    <section className="border-t border-gray-200 bg-white section-padding-md">
      <Container size="narrow">
        <h2 className="headline-kerning mb-4 text-3xl font-extrabold text-brand-navy md:text-4xl">
          No ISoc at Your University?
        </h2>
        <div className="mb-6 h-px w-full bg-gray-200" />
        <p className="eyebrow mb-4">Can&apos;t Find Yours?</p>
        <p className="text-lg leading-relaxed text-brand-navy/70">
          If your university doesn&apos;t yet have an affiliated Islamic Society,
          FOSIS can help you establish one. Reach out to our team at{" "}
          <a
            href="mailto:info@fosis.org.uk"
            className="font-medium text-brand-navy underline decoration-brand-mustard underline-offset-2 hover:text-brand-mustard"
          >
            info@fosis.org.uk
          </a>{" "}
          and we&apos;ll guide you through the process of setting up a thriving
          ISoc on your campus.
        </p>
      </Container>
    </section>
  );
}
