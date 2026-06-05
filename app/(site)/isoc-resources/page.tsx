import { IsocResourcesDashboard } from "@/components/isoc-resources/dashboard";
import { IsocResourcesFoundationPillars } from "@/components/isoc-resources/foundation-pillars";
import { IsocResourcesHero } from "@/components/isoc-resources/hero";
import { IsocResourcesWelcome } from "@/components/isoc-resources/welcome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISoc Resources - FOSIS",
  description:
    "The ISoc Essentials Hub — 60 years of institutional knowledge in one place for Islamic Society leaders across the UK.",
};

export default function IsocResourcesPage() {
  return (
    <main>
      <IsocResourcesHero />
      <IsocResourcesWelcome />
      <IsocResourcesDashboard />
      <IsocResourcesFoundationPillars />
    </main>
  );
}
