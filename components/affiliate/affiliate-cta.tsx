import Link from "next/link";
import { Container } from "@/components/ui/container";
import { routes } from "@/lib/routes";

function ExternalIcon() {
  return (
    <svg
      className="ml-2 h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function AffiliateCtaBanner() {
  return (
    <section className="bg-white section-padding-md">
      <Container>
        <div className="rounded-2xl border border-white/10 bg-section-navy p-8 md:flex md:items-center md:justify-between md:gap-12 md:p-12">
          <div className="mb-8 max-w-xl md:mb-0">
            <span className="mb-4 inline-block rounded-full bg-brand-mustard px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-navy">
              Open Now
            </span>
            <h2 className="headline-kerning mb-4 text-2xl font-extrabold text-white md:text-4xl">
              Ready to Affiliate Your ISoc?
            </h2>
            <p className="leading-relaxed text-gray-300">
              Join the UK&apos;s largest Muslim student network. Affiliating gives
              your society access to FOSIS resources, events, training, and
              national representation.
            </p>
          </div>

          <div className="shrink-0 text-center md:text-right">
            <Link
              href={routes.contact}
              className="inline-flex items-center justify-center rounded-full bg-brand-mustard px-8 py-4 text-sm font-bold uppercase tracking-cta text-brand-navy shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-colors hover:bg-brand-mustard-dark"
            >
              Affiliate Your ISoc Now
              <ExternalIcon />
            </Link>
            <p className="mt-3 text-sm text-gray-400">
              Takes 5 minutes · Free to apply
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
