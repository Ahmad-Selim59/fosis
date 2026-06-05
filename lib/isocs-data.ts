export type Isoc = {
  id: string;
  name: string;
  university: string;
  region: string;
  email?: string;
  instagram?: string;
  website?: string;
  whatsappMen?: string;
  whatsappWomen?: string;
  description?: string;
};

export const fosisRegions = [
  { number: "01", name: "Scotland" },
  { number: "02", name: "Ireland" },
  { number: "03", name: "North" },
  { number: "04", name: "Wales & West" },
  { number: "05", name: "Midlands" },
  { number: "06", name: "London & South" },
];

export const ISOC_PAGE_SIZE = 6;
export const ISOC_DIRECTORY_ANCHOR = "isoc-directory";

/** Maps affiliate "Explore by Region" slugs to ISoc listing region names. */
export const fosisRegionFilters: Record<string, string[]> = {
  north: ["Yorkshire", "North West", "North East"],
  midlands: ["West Midlands", "East Midlands"],
  south: ["South East", "East of England"],
  london: ["London"],
  "wales-west": ["Wales", "South West"],
  scotland: ["Scotland"],
  ireland: ["Ireland", "Northern Ireland"],
};

export function getIsocDirectoryHref(regionSlug?: string) {
  if (!regionSlug || !(regionSlug in fosisRegionFilters)) {
    return `/isocs#${ISOC_DIRECTORY_ANCHOR}`;
  }

  return `/isocs?region=${regionSlug}#${ISOC_DIRECTORY_ANCHOR}`;
}

export function resolveRegionFilter(
  regionSlug: string | undefined,
  isocRegions: string[],
): Set<string> | "all" {
  if (!regionSlug) {
    return "all";
  }

  if (regionSlug in fosisRegionFilters) {
    return new Set(fosisRegionFilters[regionSlug]);
  }

  if (isocRegions.includes(regionSlug)) {
    return new Set([regionSlug]);
  }

  return "all";
}

export function getIsocInitials(name: string) {
  return (
    name
      .split(" ")
      .filter((word) => word.length > 2 && /^[A-Z]/.test(word))
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase() || name.slice(0, 2).toUpperCase()
  );
}
