import { HistoryCorePillars } from "@/components/history/core-pillars";
import { HistoryGlobalLegacy } from "@/components/history/global-legacy";
import { HistoryHero } from "@/components/history/hero";
import { HistoryTimeline } from "@/components/history/timeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chapters that Shaped History - FOSIS",
  description:
    "Explore the milestones that define FOSIS — decades of student leadership, intellectual rigor, and commitment to faith and community.",
};

export default function OurHistoryPage() {
  return (
    <main className="bg-history-surface text-history-body">
      <HistoryHero />
      <HistoryTimeline />
      <HistoryGlobalLegacy />
      <HistoryCorePillars />
    </main>
  );
}
