import openingsData from "@/data/openings.json";

export type OpeningImpact = {
  title: string;
  description: string;
};

export type Opening = {
  slug: string;
  title: string;
  department: string;
  initials: string;
  engagement: string;
  commitment: string;
  hours: string;
  intro: string;
  impact: OpeningImpact[];
  closing: string;
  applyUrl: string;
};

export function getOpenings(): Opening[] {
  return openingsData as Opening[];
}

export function getOpeningBySlug(slug: string): Opening | undefined {
  return getOpenings().find((opening) => opening.slug === slug);
}
