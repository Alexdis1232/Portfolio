"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

type ProjectInfo = {
  label: string;
  value: string;
};

type Project = {
  heroImage: string;
  heroAlt: string;
  logo: string;
  company: string;
  number: string;
  title: string;
  info: ProjectInfo[];
};

const projects: Project[] = [
  {
    heroImage: "/faberlichero.png",
    heroAlt: "Faberlic project preview",
    logo: "/faberlic.png",
    company: "Faberlic",
    number: "(01)",
    title: "Application for order processing and business management",
    info: [
      { label: "Роль", value: "Продуктовый дизайнер" },
      { label: "Девайс", value: "desktop" },
      { label: "Направление", value: "B2B, B2C" },
    ],
  },
  {
    heroImage: "/kabinetpvhero.png",
    heroAlt: "Кабинет ПВ project preview",
    logo: "/kabinetpv.png",
    company: "Кабинет ПВ",
    number: "(02)",
    title: "Как редизайн сценария снял нагрузку сотрудникам на 75%",
    info: [
      { label: "Роль", value: "Продуктовый дизайнер" },
      { label: "Девайс", value: "©2025" },
      { label: "Направление", value: "B2E" },
    ],
  },
  {
    heroImage: "/kinpethero.png",
    heroAlt: "Kinpet project preview",
    logo: "/kinpet.png",
    company: "Kinpet",
    number: "(03)",
    title: "Как мы повысили конверсию в подбор питомца на 25%",
    info: [
      { label: "Роль", value: "Продуктовый дизайнер" },
      { label: "Девайс", value: "Desktop" },
      { label: "Направление", value: "B2C" },
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid grid-cols-1 items-start gap-8 py-[42px] lg:grid-cols-[470px_1fr] lg:gap-12">
      <motion.img
        src={project.heroImage}
        alt={project.heroAlt}
        width={470}
        height={389}
        whileHover={{ rotate: 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-[389px] w-full max-w-[470px] rounded-[40px] object-cover lg:w-[470px]"
      />

      <div className="flex min-h-[389px] flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={project.logo}
                alt={project.company}
                width={34}
                height={34}
                className="h-[34px] w-[34px] rounded-lg object-cover"
              />
              <span className="text-[16px] text-[#0F0F0F]">{project.company}</span>
            </div>
            <span className="shrink-0 text-[16px] text-[#0F0F0F]">
              {project.number}
            </span>
          </div>

          <h3
            className="mt-[18px] font-sexsmith text-[28px] font-normal leading-[1.2] text-[#0F0F0F]"
            style={{ fontFamily: "'Sexsmith', serif" }}
          >
            {project.title}
          </h3>
        </div>

        <div className="flex flex-nowrap gap-10">
          {project.info.map((col) => (
            <div key={col.label} className="shrink-0">
              <p className="text-[12px] text-[#C7C7C7]">{col.label}</p>
              <p className="mt-1 whitespace-nowrap text-[15px] text-[#0F0F0F]">
                {col.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-white pb-0 pt-16">
      <h2
        className="mb-[10px] font-sexsmith text-[48px] font-normal text-[#0F0F0F]"
        style={{ fontFamily: "'Sexsmith', serif" }}
      >
        Проекты
      </h2>

      <div className="flex flex-col gap-0">
        {projects.map((project) => (
          <ScrollReveal key={project.number}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
