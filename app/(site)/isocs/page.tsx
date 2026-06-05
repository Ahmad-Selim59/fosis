import { IsocDirectory } from "@/components/isocs/directory";
import { IsocsHero } from "@/components/isocs/hero";
import { IsocsIntro } from "@/components/isocs/intro";
import { IsocsNoIsoc } from "@/components/isocs/no-isoc";
import { IsocsRegions } from "@/components/isocs/regions";
import { FosisServicesGetInvolvedCta } from "@/components/fosis-services/get-involved-cta";
import { getIsocList } from "@/lib/isoc-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Your ISoc - FOSIS",
  description:
    "Browse 150+ affiliated Islamic Societies across the UK and Ireland — find your campus ISoc today.",
};

type IsocsPageProps = {
  searchParams: Promise<{ region?: string }>;
};

export default async function IsocsPage({ searchParams }: IsocsPageProps) {
  const { region } = await searchParams;
  const isocs = getIsocList();

  return (
    <main>
      <IsocsHero />
      <IsocsIntro />
      <IsocsRegions />
      <IsocDirectory isocs={isocs} initialRegionSlug={region} />
      <IsocsNoIsoc />
      <FosisServicesGetInvolvedCta />
    </main>
  );
}
