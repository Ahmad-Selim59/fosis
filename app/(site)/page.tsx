import { AffiliatedIsocsSection } from "@/components/sections/affiliated-isocs";
import { GetInvolvedSection } from "@/components/sections/get-involved";
import { HeroSection } from "@/components/sections/hero";
import { MissionSection } from "@/components/sections/mission";
import { PillarsSection } from "@/components/sections/pillars";
import { StatsTestimonialsSection } from "@/components/sections/stats-testimonials";

export default function Home() {
  return (
    <main>
        <HeroSection />
        <MissionSection />
        <StatsTestimonialsSection />
        <PillarsSection />
        <AffiliatedIsocsSection />
        <GetInvolvedSection />
    </main>
  );
}
