import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getFeaturedIsocs } from "@/lib/isoc-list";
import { getIsocInitials } from "@/lib/isocs-data";
import { routes } from "@/lib/routes";

export function AffiliatedIsocsSection() {
  const featuredIsocs = getFeaturedIsocs();

  return (
    <section className="bg-brand-navy section-padding-md">
      <Container className="text-center">
        <div className="mb-12">
          <p className="eyebrow mb-4">Our Network</p>
          <h2 className="headline-kerning mb-6 text-3xl font-extrabold text-white md:text-5xl">
            Affiliated ISocs
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Join a growing network of over 100 Islamic Societies across the
            United Kingdom, working together to empower Muslim students.
          </p>
        </div>

        <div className="mx-auto mb-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredIsocs.map((isoc) => (
            <div
              key={isoc.id}
              className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 text-center transition-colors hover:bg-white/10"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-mustard/20 text-lg font-bold text-brand-mustard">
                {getIsocInitials(isoc.name)}
              </div>
              <h3 className="mb-2 text-sm font-bold leading-snug text-white">
                {isoc.name}
              </h3>
              <p className="text-xs leading-relaxed text-gray-400">
                {isoc.university}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={routes.affiliate} className="w-full sm:w-auto">
            Affiliate Your ISoc
          </Button>
          <Button
            href={routes.isocsDirectory}
            variant="secondary"
            className="w-full sm:w-auto"
          >
            View All ISocs
          </Button>
        </div>
      </Container>
    </section>
  );
}
