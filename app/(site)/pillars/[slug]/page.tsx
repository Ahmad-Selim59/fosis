import { PlaceholderPage } from "@/components/placeholder-page";
import { pillarContent } from "@/lib/routes";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(pillarContent).map((slug) => ({ slug }));
}

export default async function PillarPage({ params }: PageProps) {
  const { slug } = await params;
  const page = pillarContent[slug];

  if (!page) {
    notFound();
  }

  return <PlaceholderPage title={page.title} description={page.description} />;
}
