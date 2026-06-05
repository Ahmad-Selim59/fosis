import Link from "next/link";
import { Container } from "@/components/ui/container";
import { routes } from "@/lib/routes";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <main className="bg-brand-navy section-padding-md min-h-[60vh]">
      <Container size="narrow" className="text-center">
        <p className="eyebrow mb-6">Coming soon</p>
        <h1 className="headline-kerning mb-6 text-4xl font-extrabold text-white md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-gray-300">
          {description}
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
