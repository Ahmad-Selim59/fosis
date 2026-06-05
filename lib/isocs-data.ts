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
