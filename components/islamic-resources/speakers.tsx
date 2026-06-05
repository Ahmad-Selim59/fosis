import { Container } from "@/components/ui/container";

export function IslamicResourcesSpeakers() {
  return (
    <section className="bg-white section-padding-md">
      <Container>
        <p className="eyebrow mb-4">Speakers &amp; Scholars</p>
        <h2 className="headline-kerning mb-6 text-3xl font-extrabold text-brand-navy md:text-4xl">
          Book a Speaker for Your ISoc
        </h2>
        <div className="mb-8 h-px w-full bg-gray-200" />

        <p className="mb-4 max-w-3xl text-lg leading-relaxed text-brand-navy/70">
          FOSIS maintains a network of speakers and scholars who regularly
          deliver talks at ISoc events across the country. Whether you are
          planning a Discover Islam Week talk, a weekly halaqah, or a special
          campus event, we can help connect your ISoc with the right speaker for
          your audience.
        </p>
        <p className="max-w-3xl text-lg leading-relaxed text-brand-navy/70">
          To request a speaker or access our full resource library, get in touch
          at{" "}
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
