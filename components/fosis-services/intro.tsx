import { Container } from "@/components/ui/container";

export function FosisServicesIntro() {
  return (
    <section className="border-b border-gray-200 bg-white section-padding-md">
      <Container>
        <p className="eyebrow mb-4">How We Support You</p>
        <h2 className="headline-kerning mb-4 text-3xl font-extrabold text-brand-navy md:text-4xl lg:text-5xl">
          Everything Your ISoc Needs to Thrive
        </h2>
        <div className="mb-8 h-px w-full max-w-md bg-gray-200" />

        <p className="max-w-3xl text-lg leading-relaxed text-brand-navy/70">
          FOSIS provides affiliated Islamic Societies with a comprehensive range
          of services designed to help every committee build a thriving,
          impactful community on campus. From day-to-day advisory support to
          national speaker tours, we are here throughout the entire academic
          year.
        </p>
      </Container>
    </section>
  );
}
