import { AboutCoreValues } from "@/components/about/core-values";
import { AboutExecutiveCommittee } from "@/components/about/executive-committee";
import { AboutGetInvolved } from "@/components/about/get-involved";
import { AboutHero } from "@/components/about/hero";
import { AboutMission } from "@/components/about/mission";
import { AboutRegionalChairs } from "@/components/about/regional-chairs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About FOSIS",
  description:
    "The Federation of Student Islamic Societies — the national voice for Muslim students across the UK & Ireland since 1963.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutMission />
      <AboutCoreValues />
      <AboutExecutiveCommittee />
      <AboutRegionalChairs />
      <AboutGetInvolved />
    </main>
  );
}
