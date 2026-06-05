import { IslamicResourcesDiw } from "@/components/islamic-resources/diw";
import { IslamicResourcesHero } from "@/components/islamic-resources/hero";
import { IslamicResourcesIntro } from "@/components/islamic-resources/intro";
import { IslamicResourcesSpeakers } from "@/components/islamic-resources/speakers";
import { FosisServicesGetInvolvedCta } from "@/components/fosis-services/get-involved-cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Islamic Resources - FOSIS",
  description:
    "Resources for your spiritual and intellectual journey — Discover Islam Week, speakers, and curated materials for Muslim students.",
};

export default function IslamicResourcesPage() {
  return (
    <main>
      <IslamicResourcesHero />
      <IslamicResourcesIntro />
      <IslamicResourcesDiw />
      <IslamicResourcesSpeakers />
      <FosisServicesGetInvolvedCta />
    </main>
  );
}
