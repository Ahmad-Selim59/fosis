import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
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

export function GetInvolvedSection() {
  return (
    <section className="bg-white section-padding-md">
      <Container className="text-center">
        <p className="eyebrow mb-8">Get Involved</p>

        <h2 className="headline-kerning mx-auto mb-8 max-w-5xl text-4xl font-extrabold text-brand-navy md:text-6xl lg:text-7xl">
          There Is a Place For You Here.
        </h2>

        <div className="mx-auto mb-12 max-w-2xl">
          <p className="text-lg leading-relaxed text-brand-navy/70 md:text-xl">
            Whether you want to affiliate your ISoc, access our services, or join
            the national team — we want to hear from you.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href={routes.contact}
            className="w-full px-10 py-5 tracking-cta sm:w-auto"
            icon={<ArrowIcon />}
          >
            Contact Us
          </Button>
          <Link
            href={routes.projects}
            className="inline-flex w-full items-center justify-center border-2 border-brand-navy/40 px-10 py-5 text-sm font-bold uppercase tracking-cta text-brand-navy transition-all hover:border-brand-navy hover:bg-brand-navy/5 sm:w-auto"
          >
            Volunteer
          </Link>
        </div>
      </Container>
    </section>
  );
}
