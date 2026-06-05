import { Container } from "@/components/ui/container";

export function IslamicResourcesDiw() {
  return (
    <section className="border-b border-gray-200 bg-white section-padding-md">
      <Container>
        <p className="eyebrow mb-4">Discover Islam Week</p>
        <h2 className="headline-kerning mb-6 text-3xl font-extrabold text-brand-navy md:text-4xl">
          DIW: Sharing Islam on Campus
        </h2>
        <div className="mb-8 h-px w-full bg-gray-200" />

        <p className="mb-4 max-w-3xl text-lg leading-relaxed text-brand-navy/70">
          Discover Islam Week (DIW) is an annual national campaign run by Islamic
          Societies (ISocs) across the UK and Ireland, coordinated by FOSIS. Each
          year, ISocs host a week of activities designed to share Islam with the
          wider student body — from Da&apos;wah stalls and public talks to
          literature distribution and open discussions.
        </p>
        <p className="max-w-3xl text-lg leading-relaxed text-brand-navy/70">
          FOSIS provides affiliated ISocs with the materials, training, speaker
          support, and campaign guidance needed to run a successful DIW on
          campus.
        </p>
      </Container>
    </section>
  );
}
