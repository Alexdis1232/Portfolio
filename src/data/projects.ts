export type ProjectInfo = {
  label: string;
  value: string;
};

export type Project = {
  slug?: string;
  heroImage: string;
  heroAlt: string;
  logo: string;
  company: string;
  number: string;
  title: string;
  info: ProjectInfo[];
};

export const projects: Project[] = [
  {
    heroImage: "/faberlichero.png",
    heroAlt: "Faberlic project preview",
    logo: "/faberlic.png",
    company: "Faberlic",
    number: "(01)",
    title: "Application for order processing and business management",
    info: [
      { label: "Год", value: "©2025" },
      { label: "Девайс", value: "Mobile" },
      { label: "Направление", value: "B2B, B2C" },
    ],
  },
  {
    slug: "kabinetpv",
    heroImage: "/kabinetpvhero.png",
    heroAlt: "Кабинет ПВ project preview",
    logo: "/kabinetpv.png",
    company: "Кабинет ПВ",
    number: "(02)",
    title: "Как редизайн сценария снял нагрузку сотрудникам на 75%",
    info: [
      { label: "Год", value: "©2025" },
      { label: "Девайс", value: "Mobile" },
      { label: "Направление", value: "B2E" },
    ],
  },
  {
    slug: "kinpet",
    heroImage: "/kinpethero.png",
    heroAlt: "Kinpet project preview",
    logo: "/kinpet.png",
    company: "Kinpet",
    number: "(03)",
    title: "Как мы повысили конверсию в подбор питомца на 8%",
    info: [
      { label: "Год", value: "©2024" },
      { label: "Девайс", value: "Desktop" },
      { label: "Направление", value: "B2C" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
