import Link from "next/link";
import { Container } from "@/components/ui/container";
import { routes } from "@/lib/routes";

export default function NotFound() {
  return (
    <main className="flex min-h-full flex-1 items-center bg-brand-navy section-padding-md">
      <Container size="narrow" className="text-center">
        <p className="eyebrow mb-6">404</p>
        <h1 className="headline-kerning mb-6 text-4xl font-extrabold text-white md:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-gray-300">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>
        <Link
          href={routes.home}
          className="inline-flex items-center justify-center bg-brand-mustard-dark px-8 py-4 text-sm font-bold uppercase tracking-widest-cta text-brand-navy transition-all hover:bg-brand-mustard"
        >
          Back to home
        </Link>
      </Container>
    </main>
  );
}
