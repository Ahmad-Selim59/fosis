import { AffiliateBenefits } from "@/components/affiliate/benefits";
import { AffiliateCtaBanner } from "@/components/affiliate/affiliate-cta";
import { AffiliateHero } from "@/components/affiliate/hero";
import { AffiliateHowTo } from "@/components/affiliate/how-to-affiliate";
import { AffiliateQuestionsCta } from "@/components/affiliate/questions-cta";
import { AffiliateRegions } from "@/components/affiliate/regions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISOC Affiliations - FOSIS",
  description:
    "Browse 150+ affiliated Islamic Societies across the UK & Ireland — or join the FOSIS family today.",
};

export default function AffiliatePage() {
  return (
    <main>
      <AffiliateHero />
      <AffiliateCtaBanner />
      <AffiliateRegions />
      <AffiliateBenefits />
      <AffiliateHowTo />
      <AffiliateQuestionsCta />
    </main>
  );
}
