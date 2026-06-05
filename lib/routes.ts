export const routes = {
  home: "/",
  about: "/about",
  ourHistory: "/our-history",
  forStudents: "/for-students",
  forIsocs: "/for-isocs",
  forStudentUnions: "/for-student-unions",
  events: "/events",
  careerHelp: "/career-help",
  fosisReport: "/fosis-report",
  islamicResources: "/islamic-resources",
  isocResources: "/isoc-resources",
  training: "/training",
  suGuidelines: "/su-guidelines",
  islamophobiaTraining: "/islamophobia-training",
  sabbaticalNetwork: "/sabbatical-officer-network",
  articles: "/articles",
  projects: "/projects",
  contact: "/contact",
  support: "/support",
  affiliate: "/affiliate",
  isocs: "/isocs",
  volunteer: "/volunteer",
  pillars: {
    advocacy: "/pillars/advocacy",
    development: "/pillars/development",
    unity: "/pillars/unity",
  },
} as const;

export type NavDropdown = {
  label: string;
  children: { label: string; href: string }[];
};

export const navDropdowns: NavDropdown[] = [
  {
    label: "What's FOSIS?",
    children: [
      { label: "About FOSIS", href: routes.about },
      { label: "Our History", href: routes.ourHistory },
    ],
  },
  {
    label: "For Students",
    children: [
      { label: "Find Your ISoc", href: routes.isocs },
      { label: "FOSIS Report", href: routes.fosisReport },
      { label: "Islamic Resources", href: routes.islamicResources },
    ],
  },
  {
    label: "For Isocs",
    children: [
      { label: "FOSIS Services", href: routes.forIsocs },
      { label: "Affiliate Your ISoc", href: routes.affiliate },
      { label: "ISoc Resources", href: routes.isocResources },
    ],
  },
];

export const pillarContent: Record<
  string,
  { title: string; description: string }
> = {
  advocacy: {
    title: "Advocacy",
    description:
      "Representing the voice of Muslim students at a national level, defending rights, and ensuring equal opportunities across higher education institutions.",
  },
  development: {
    title: "Development",
    description:
      "Providing training, resources, and mentorship to equip Muslim students with the skills needed for personal, spiritual, and professional growth.",
  },
  unity: {
    title: "Unity",
    description:
      "Fostering brotherhood and sisterhood by connecting ISocs nationally, hosting regional events, and building a cohesive Muslim student community.",
  },
};
