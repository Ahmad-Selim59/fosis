import { Container } from "@/components/ui/container";
import { hubStats } from "@/lib/isoc-resources-data";

export function IsocResourcesWelcome() {
  return (
    <section className="bg-white section-padding-md">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex flex-col items-center justify-center bg-brand-navy px-8 py-12 text-center">
                <p
                  className="mb-4 text-3xl leading-loose text-brand-mustard"
                  dir="rtl"
                  lang="ar"
                >
                  بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                </p>
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  In the name of Allah, the Most Gracious, the Most Merciful
                </p>
              </div>

              <div className="grid grid-cols-3 divide-x divide-gray-200 bg-about-surface">
                {hubStats.map((stat) => (
                  <div key={stat.label} className="px-3 py-8 text-center">
                    <p className="text-2xl font-extrabold text-brand-navy md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[0.6rem] font-semibold uppercase leading-tight tracking-wider text-brand-navy/60 md:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="eyebrow mb-4">
              Curated with Ihsaan · Lead with Barakah
            </p>
            <h2 className="headline-kerning mb-6 text-3xl font-extrabold text-brand-navy md:text-4xl">
              Welcome to the IE Hub
            </h2>

            <blockquote className="mb-8 border-l-4 border-brand-mustard pl-6">
              <p className="text-lg font-semibold leading-relaxed text-brand-navy md:text-xl">
                Being part of an ISoc is the hardest work on campus. We help you
                lead with Barakah, not stress.
              </p>
            </blockquote>

            <p className="mb-4 text-lg leading-relaxed text-brand-navy/70">
              The ISoc Essentials Hub centralises over 60 years of FOSIS
              institutional knowledge — best practices, frameworks, and lived
              experience from Islamic Society leaders across the UK — into one
              accessible, living resource.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-brand-navy/70">
              Whether you are a first-year rep or a President inheriting a
              complex society, this Hub is your foundation. Navigate by pillar,
              search by topic, or follow the structured roadmap.
            </p>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/60">
                Sincerely, The ISoc Essentials Team
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
