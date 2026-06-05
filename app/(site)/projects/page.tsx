import { ProjectsContribute } from "@/components/projects/contribute";
import { ProjectsHero } from "@/components/projects/hero";
import { ProjectsIntroWithOpenings } from "@/components/projects/intro-with-openings";
import { ProjectsReadyToJoin } from "@/components/projects/ready-to-join";
import { FosisServicesGetInvolvedCta } from "@/components/fosis-services/get-involved-cta";
import { getOpenings } from "@/lib/openings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Team FOSIS - FOSIS",
  description:
    "Be part of something bigger — explore volunteer openings and ways to contribute to the UK's largest Muslim student organisation.",
};

export default function ProjectsPage() {
  const openings = getOpenings();

  return (
    <main>
      <ProjectsHero />
      <ProjectsIntroWithOpenings openings={openings} />
      <ProjectsContribute />
      <ProjectsReadyToJoin />
      <FosisServicesGetInvolvedCta />
    </main>
  );
}
