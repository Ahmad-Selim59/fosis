export type Milestone = {
  year: string;
  title: string;
  description: string;
  align: "left" | "right";
};

export const milestones: Milestone[] = [
  {
    year: "1964",
    title: "Hosting Malcolm X",
    description:
      "FOSIS organized a UK speaking tour for El-Hajj Malik El-Shabazz, coordinating engagements across major cities just a year after its founding.",
    align: "left",
  },
  {
    year: "1970s–Present",
    title: "Scholars Who Shaped a Generation",
    description:
      "FOSIS has hosted the world's foremost Islamic scholars, nurturing generations of confident, grounded Muslim leaders.",
    align: "right",
  },
  {
    year: "1995–1996",
    title: "Co-Founding FEMYSO",
    description:
      "FOSIS co-founded the Forum of European Muslim Youth and Student Organisations, now representing 32 organizations across 22 countries.",
    align: "left",
  },
  {
    year: "1963 & Beyond",
    title: "Seeding Global Organizations",
    description:
      "FOSIS's founding generation helped shape international student movements, including the MSA in the USA and IIFSO.",
    align: "right",
  },
  {
    year: "2015",
    title: "#StudentNotSuspect",
    description:
      "FOSIS led the student response to the Counter-Terrorism and Security Act, placing civil liberties at the heart of the national debate.",
    align: "left",
  },
  {
    year: "Ongoing",
    title: "Believe & Do Good",
    description:
      "FOSIS's national service campaigns unite ISocs for community service, from food banks and blood drives to hospital support.",
    align: "right",
  },
];

export const legacyStats = [
  {
    value: "130+",
    title: "Islamic Societies",
    description:
      "Supported across the UK and Ireland, creating safe spaces for students.",
  },
  {
    value: "60",
    title: "Years of Legacy",
    description:
      "A rich history of advocacy, education, and community building since 1963.",
  },
  {
    value: "115K+",
    title: "Muslim Students",
    description:
      "Represented and empowered to become the leaders of tomorrow.",
  },
];

export const historyPillars = [
  {
    title: "Activism",
    description:
      "The voice of 350,000+ Muslim students in policy and public life, from campus prayer rooms to Parliament.",
    icon: "activism" as const,
  },
  {
    title: "ISOC Support",
    description:
      "Providing the 'ISoc Essentials'—six decades of institutional knowledge, codified and made accessible to every ISoc in the country.",
    icon: "support" as const,
  },
  {
    title: "Development",
    description:
      "Annual conferences, training programs, and regional committees developing the next generation of Muslim leaders in Britain.",
    icon: "development" as const,
  },
];
