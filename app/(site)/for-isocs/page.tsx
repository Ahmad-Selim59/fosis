import { FosisServicesGetInvolvedCta } from "@/components/fosis-services/get-involved-cta";
import { FosisServicesHero } from "@/components/fosis-services/hero";
import { FosisServicesIntro } from "@/components/fosis-services/intro";
import { FosisServicesOfferings } from "@/components/fosis-services/offerings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FOSIS Services - FOSIS",
  description:
    "Everything your ISoc needs to thrive — speaker tours, training, freshers packs, advocacy, events, and year-round support from FOSIS.",
};

export default function ForIsocsPage() {
  return (
    <main>
      <FosisServicesHero />
      <FosisServicesIntro />
      <FosisServicesOfferings />
      <FosisServicesGetInvolvedCta />
    </main>
  );
}
