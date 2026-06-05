import { FosisReportCategories } from "@/components/fosis-report/categories";
import { FosisReportHero } from "@/components/fosis-report/hero";
import { FosisReportHowTo } from "@/components/fosis-report/how-to-report";
import { FosisReportIntro } from "@/components/fosis-report/intro";
import { FosisReportWhatHappensNext } from "@/components/fosis-report/what-happens-next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FOSIS Report - FOSIS",
  description:
    "A confidential reporting portal for ISocs and Muslim students to submit incidents regarding ISoc issues, SU problems, or Islamophobia.",
};

export default function FosisReportPage() {
  return (
    <main>
      <FosisReportHero />
      <FosisReportIntro />
      <FosisReportCategories />
      <FosisReportHowTo />
      <FosisReportWhatHappensNext />
    </main>
  );
}
