export type Isoc = {
  id: string;
  name: string;
  university: string;
  region: string;
  email?: string;
  instagram?: string;
  website?: string;
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
