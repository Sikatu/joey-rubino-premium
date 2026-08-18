export const servicePaths = [
  "/work/sober-companioning",
  "/work/fitness",
  "/work/interventions",
] as const;

export type ServicePath = (typeof servicePaths)[number];

export interface ServiceDefinition {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  href: ServicePath;
}

export const services: readonly ServiceDefinition[] = [
  {
    number: "01",
    eyebrow: "Recovery Support",
    title: "Sober Companioning",
    description:
      "Real-world presence, structure, and accountability for people navigating recovery, transition, and the return to everyday life.",
    href: "/work/sober-companioning",
  },
  {
    number: "02",
    eyebrow: "Movement & Structure",
    title: "Fitness & Transformation",
    description:
      "Movement, consistency, and practical structure brought together as tools for building sustainable personal change.",
    href: "/work/fitness",
  },
  {
    number: "03",
    eyebrow: "Conversation & Clarity",
    title: "Interventions",
    description:
      "Structured and compassionate conversations intended to create clarity and help open a path toward recovery.",
    href: "/work/interventions",
  },
];
