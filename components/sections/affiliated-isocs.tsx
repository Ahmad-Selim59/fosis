import { AffiliatedIsocsGrid } from "@/components/sections/affiliated-isocs-grid";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getFeaturedIsocs } from "@/lib/isoc-list";
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

        <AffiliatedIsocsGrid isocs={featuredIsocs} />

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
