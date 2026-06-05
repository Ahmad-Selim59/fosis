import { Container } from "@/components/ui/container";

export function IslamicResourcesIntro() {
  return (
    <section className="border-b border-gray-200 bg-white section-padding-md">
      <Container>
        <p className="eyebrow mb-4">Knowledge &amp; Faith</p>
        <h2 className="headline-kerning mb-6 text-3xl font-extrabold text-brand-navy md:text-4xl lg:text-5xl">
          Resources for Your Spiritual &amp; Intellectual Journey
        </h2>
        <div className="mb-8 h-px w-full bg-gray-200" />

        <p className="max-w-3xl text-lg leading-relaxed text-brand-navy/70">
          At FOSIS we believe that a Muslim student&apos;s university years are
          among the most formative of their life — not just academically, but
          spiritually and intellectually. Our Islamic Resources hub exists to
          support that journey with high-quality, accessible materials curated
          specifically for students navigating faith in a modern university
          context.
        </p>
      </Container>
    </section>
  );
}
