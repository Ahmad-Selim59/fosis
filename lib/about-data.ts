export const coreValues = [
  {
    title: "Faith-Centred",
    description:
      "Everything we do is rooted in Islamic values — we empower students to live authentically as Muslims in a pluralistic society.",
    variant: "navy" as const,
  },
  {
    title: "Advocacy",
    description:
      "Speaking up for Muslim students at every level — from campus to Parliament.",
    variant: "mustard" as const,
  },
  {
    title: "Unity",
    description:
      "Bridging ISocs from every corner of the UK into one powerful, unified network.",
    variant: "light" as const,
  },
  {
    title: "Development",
    description:
      "Training and resources that equip students to excel in their careers and communities.",
    variant: "light" as const,
  },
  {
    title: "Inclusion",
    description:
      "A home for every Muslim student — regardless of background, school of thought, or university — united in identity and purpose.",
    variant: "outline" as const,
  },
];

export type CommitteeMember = {
  role: string;
  name: string;
  initials?: string;
};

export const executiveCommittee: CommitteeMember[] = [
  { role: "President", name: "Sohaib Saleem" },
  { role: "General Secretary", name: "Lujain Yasser" },
  { role: "Vice President, Student Affairs", name: "Rahma Hegy" },
  { role: "Vice President, Higher Education", name: "Ehtesham Al Hoque" },
  { role: "Head of Finance", name: "S Ismail", initials: "SI" },
  { role: "Head of Comms", name: "Ali Bashir", initials: "AB" },
];

export type RegionalChair = {
  region: string;
  name: string;
  email: string;
  initials: string;
};

export const regionalChairs: RegionalChair[] = [
  {
    region: "London Chair",
    name: "Idrees Mahmood",
    email: "london.chair@fosis.org.uk",
    initials: "IM",
  },
  {
    region: "South Chair",
    name: "South Regional Lead",
    email: "south.chair@fosis.org.uk",
    initials: "SC",
  },
  {
    region: "Midlands Chair",
    name: "Midlands Regional Lead",
    email: "midlands.chair@fosis.org.uk",
    initials: "MA",
  },
  {
    region: "North Chair",
    name: "North Regional Lead",
    email: "north.chair@fosis.org.uk",
    initials: "LC",
  },
  {
    region: "Wales Chair",
    name: "Wales Regional Lead",
    email: "wales.chair@fosis.org.uk",
    initials: "WC",
  },
  {
    region: "Ireland Chair",
    name: "Ireland Regional Lead",
    email: "ireland.chair@fosis.org.uk",
    initials: "IC",
  },
  {
    region: "Scotland Chair",
    name: "Scotland Regional Lead",
    email: "scotland.chair@fosis.org.uk",
    initials: "SC",
  },
];
