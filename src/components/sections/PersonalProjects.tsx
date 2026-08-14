"use client";

import { useCallback } from "react";
import { ScrollReveal, ScrollRevealH2 } from "@/components/ScrollReveal";
import { CURSOR_VIEW_HOVER_EVENT } from "@/components/CustomCursor";
import { useButtonClickSound } from "@/hooks/useButtonClickSound";
import { useProjectHoverSound } from "@/hooks/useProjectHoverSound";

const sexsmithStyle = { fontFamily: "'Sexsmith', serif" } as const;

function setCursorViewHover(active: boolean) {
  window.dispatchEvent(
    new CustomEvent(CURSOR_VIEW_HOVER_EVENT, { detail: active }),
  );
}

function isCoarsePointerDevice() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none), (pointer: coarse)").matches
  );
}

type PersonalProjectEntry = {
  name: string;
  subtitle?: string;
  logo: string;
  href?: string;
};

const personalProjectsData: PersonalProjectEntry[] = [
  {
    name: "Поиск квартир Москва и МО",
    subtitle: "Бот-помощник",
    logo: "/bot_poiskzhilya.png",
  },
];

function ProjectLogo({ src, alt }: { src: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={74}
      height={74}
      className="h-[74px] w-[74px] shrink-0 rounded-[14px] object-cover"
    />
  );
}

function ProjectRowContent({ entry }: { entry: PersonalProjectEntry }) {
  return (
    <div className="flex min-w-0 items-center gap-6">
      <ProjectLogo src={entry.logo} alt={entry.name} />
      <div className="min-w-0">
        <p className="truncate text-[19px] leading-[24px] text-black">
          {entry.name}
        </p>
        {entry.subtitle ? (
          <p className="truncate text-[15px] leading-[24px] text-[#C7C7C7]">
            {entry.subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function PersonalProjectCard({ entry }: { entry: PersonalProjectEntry }) {
  const playClick = useButtonClickSound();
  const playHover = useProjectHoverSound();

  const handlePointerDown = useCallback(
    (event: React.PointerEvent) => {
      if (event.pointerType === "touch") return;
      playClick();
    },
    [playClick],
  );

  const handleMouseEnter = useCallback(() => {
    if (!isCoarsePointerDevice()) playHover();
    setCursorViewHover(true);
  }, [playHover]);

  const handleMouseLeave = useCallback(() => setCursorViewHover(false), []);

  const cardClassName =
    "press-bounce flex items-center rounded-[24px] bg-[#FBFBFB] px-6 py-8 active:scale-[0.98]";

  if (entry.href) {
    return (
      <a
        href={entry.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cardClassName} block text-inherit no-underline`}
        onPointerDown={handlePointerDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ProjectRowContent entry={entry} />
      </a>
    );
  }

  return (
    <div
      className={cardClassName}
      onPointerDown={handlePointerDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ProjectRowContent entry={entry} />
    </div>
  );
}

export function PersonalProjects() {
  if (personalProjectsData.length === 0) return null;

  return (
    <section id="personal" className="pb-0 pt-[40px] sm:pt-[80px]">
      <ScrollRevealH2
        className="font-sexsmith text-[32px] font-normal leading-[1.1] text-[#0F0F0F] sm:text-[48px]"
        style={sexsmithStyle}
      >
        Личные проекты
      </ScrollRevealH2>

      <div className="mt-8 flex flex-col gap-3 sm:mt-12">
        {personalProjectsData.map((entry) => (
          <ScrollReveal key={entry.name} className="w-full">
            <PersonalProjectCard entry={entry} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
