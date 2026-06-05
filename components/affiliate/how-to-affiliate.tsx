import { Container } from "@/components/ui/container";

export function AffiliateHowTo() {
  return (
    <section className="border-t border-gray-200 bg-white section-padding-md">
      <Container>
        <p className="eyebrow mb-4">Get Started</p>
        <h2 className="headline-kerning mb-2 text-3xl font-extrabold text-brand-navy md:text-4xl">
          How to Affiliate
        </h2>
        <div className="mb-8 h-1 w-16 bg-brand-mustard" />

        <p className="max-w-3xl text-lg leading-relaxed text-brand-navy/80">
          Affiliating your ISoc is straightforward. Click the Affiliations link
          at the top of this page, or reach out to our team at{" "}
          <a
            href="mailto:info@fosis.org.uk"
            className="font-medium text-brand-navy underline decoration-brand-mustard underline-offset-2 hover:text-brand-mustard"
          >
            info@fosis.org.uk
          </a>{" "}
          with your university name and a brief introduction to your society.
          Our team will guide you through the process and get you set up as an
          official FOSIS affiliate.
        </p>
      </Container>
    </section>
  );
}
