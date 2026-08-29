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
    slug: "faberlic",
    heroImage: "/faberlichero.png",
    heroAlt: "Faberlic project preview",
    logo: "/faberlic.png",
    company: "Faberlic",
    number: "(01)",
    title: "Как замотивировать пользователей повышать скидку на заказ",
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
    title: "Как редизайн сценария снял нагрузку сотрудникам на 35%",
    info: [
      { label: "Год", value: "©2025" },
      { label: "Девайс", value: "Mobile" },
      { label: "Направление", value: "B2B" },
    ],
  },
  {
    slug: "kinpet",
    heroImage: "/kinpethero.png",
    heroAlt: "Kinpet project preview",
    logo: "/kinpet.png",
    company: "Kinpet",
    number: "(03)",
    title: "Увеличение конверсии на 8% в подбор питомца",
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
