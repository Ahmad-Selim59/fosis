import { Container } from "@/components/ui/container";

export function IsocsIntro() {
  return (
    <section className="border-b border-gray-200 bg-white section-padding-md">
      <Container>
        <p className="eyebrow mb-4">150+ ISocs Nationwide</p>
        <h2 className="headline-kerning mb-6 text-3xl font-extrabold text-brand-navy md:text-4xl lg:text-5xl">
          Your ISoc Is Waiting For You
        </h2>
        <div className="mb-10 h-px w-full bg-gray-200" />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <p className="text-lg leading-relaxed text-brand-navy/70">
            Wherever you study in the UK or Ireland, there is almost certainly
            an Islamic Society on your campus. FOSIS affiliates over 150 ISocs
            across universities and colleges from Edinburgh to Exeter, and our
            network spans 6 regional committees covering every corner of the
            country. Your ISoc is your home on campus — a community, a support
            network, and a space to grow your faith alongside your studies.
          </p>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navy via-[#1a3a5c] to-brand-mustard/60">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2740%27 height=%2740%27 viewBox=%270 0 40 40%27%3E%3Cpath d=%27M0 20h40M20 0v40%27 stroke=%27%23ffffff%27 stroke-opacity=%270.05%27/%3E%3C/svg%3E')] opacity-60" />
          </div>
        </div>
      </Container>
    </section>
  );
}
