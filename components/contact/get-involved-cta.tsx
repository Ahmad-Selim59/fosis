import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";

function ArrowIcon() {
  return (
    <svg
      className="ml-2 h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M14 5l7 7m0 0l-7 7m7-7H3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function ContactGetInvolvedCta() {
  return (
    <section className="relative overflow-hidden border-t-4 border-brand-mustard bg-section-navy section-padding">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-[#0f2840] to-[#1a3a5c]" />

      <Container className="relative z-10">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Get Involved</p>
            <h2 className="headline-kerning text-3xl font-extrabold text-white md:text-4xl">
              Have a question or want to work with us?
            </h2>
          </div>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Button
              href="mailto:info@fosis.org.uk"
              className="w-full px-8 py-4 sm:w-auto"
              icon={<ArrowIcon />}
            >
              Email Us
            </Button>
            <Link
              href={routes.about}
              className="inline-flex w-full items-center justify-center border-2 border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-cta text-white transition-all hover:border-white hover:bg-white/10 sm:w-auto"
            >
              About FOSIS
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
