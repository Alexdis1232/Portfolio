"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useCallback } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useButtonClickSound } from "@/hooks/useButtonClickSound";
import { useProjectHoverSound } from "@/hooks/useProjectHoverSound";
import { CURSOR_VIEW_HOVER_EVENT } from "@/components/CustomCursor";
import { projects, type Project } from "@/data/projects";

function setCursorViewHover(active: boolean) {
  window.dispatchEvent(new CustomEvent(CURSOR_VIEW_HOVER_EVENT, { detail: active }));
}

function isCoarsePointerDevice() {
  return typeof window !== "undefined" && window.matchMedia("(hover: none), (pointer: coarse)").matches;
}

const PROJECT_HERO_WIDTH = 470;
const PROJECT_HERO_HEIGHT = 389;

function ProjectCardContent({ project }: { project: Project }) {
  return (
    <>
      <motion.img
        src={project.heroImage}
        alt={project.heroAlt}
        width={PROJECT_HERO_WIDTH}
        height={PROJECT_HERO_HEIGHT}
        whileHover={{ rotate: 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="aspect-[470/389] h-auto w-full rounded-[24px] object-cover sm:rounded-[40px] lg:h-[389px] lg:w-[470px] lg:max-w-none lg:shrink-0"
      />

      <div className="flex min-w-0 w-full flex-col justify-between lg:min-h-[389px]">
        <div className="min-w-0">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={project.logo}
                alt={project.company}
                width={34}
                height={34}
                className="h-[34px] w-[34px] rounded-lg object-cover"
              />
              <span className="text-[15px] text-[#0F0F0F]">{project.company}</span>
            </div>
            <span className="shrink-0 text-[15px] text-[#0F0F0F]">
              {project.number}
            </span>
          </div>

          <h3
            className="mt-[18px] break-words font-sexsmith text-[22px] font-normal leading-[1.2] text-[#0F0F0F] sm:text-[28px]"
            style={{ fontFamily: "'Sexsmith', serif" }}
          >
            {project.number === "(03)" ? (
              <>
                Увеличение конверсии на 8%{" "}
                <br className="lg:hidden" />
                в подбор питомца
              </>
            ) : (
              project.title
            )}
          </h3>
        </div>

        <div className="mt-8 flex w-full flex-nowrap items-start justify-between gap-2 lg:mt-0">
          {project.info.map((col) => (
            <div key={col.label} className="min-w-0 shrink-0">
              <p className="text-[12px] text-[#C7C7C7]">{col.label}</p>
              <p className="mt-1 whitespace-nowrap text-[15px] leading-snug text-[#0F0F0F]">
                {col.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const playClick = useButtonClickSound();
  const playHover = useProjectHoverSound();

  const handlePointerDown = useCallback(
    (event: React.PointerEvent) => {
      if (event.pointerType === "touch") return;
      playClick();
    },
    [playClick],
  );

  const handleMouseEnterSound = useCallback(() => {
    if (isCoarsePointerDevice()) return;
    playHover();
  }, [playHover]);

  const cardClassName =
    "grid w-full min-w-0 grid-cols-1 items-start gap-6 py-[18px] sm:gap-8 lg:grid-cols-[470px_minmax(0,1fr)] lg:gap-[36px] lg:py-[42px]";

  if (project.slug) {
    return (
      <Link
        href={`/projects/${project.slug}`}
        className={`${cardClassName} press-bounce block text-inherit no-underline active:scale-[0.98]`}
        onPointerDown={handlePointerDown}
        onMouseEnter={() => {
          handleMouseEnterSound();
          setCursorViewHover(true);
        }}
        onMouseLeave={() => setCursorViewHover(false)}
      >
        <ProjectCardContent project={project} />
      </Link>
    );
  }

  return (
    <motion.article
      className={cardClassName}
      onPointerDown={handlePointerDown}
      onMouseEnter={handleMouseEnterSound}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
    >
      <ProjectCardContent project={project} />
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="w-full pb-0 pt-12 sm:pt-[82px]">
      <h2
        className="mb-[10px] font-sexsmith text-[32px] font-normal text-[#0F0F0F] sm:text-[48px]"
        style={{ fontFamily: "'Sexsmith', serif" }}
      >
        Кейсы
      </h2>

      <div className="flex w-full flex-col gap-0">
        {projects.map((project) => (
          <ScrollReveal key={project.number} className="w-full">
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
