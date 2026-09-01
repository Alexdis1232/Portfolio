"use client";

import { ScrollReveal, ScrollRevealH1 } from "@/components/ScrollReveal";

type ToolItem = {
  name: string;
  description: string;
  number: string;
  logo: string;
  iconSize?: number;
  iconRadius?: number;
};

const tools: ToolItem[] = [
  {
    name: "Figma",
    description: "Основной инструмент для создания дизайна",
    number: "(01)",
    logo: "/figma.png",
  },
  {
    name: "Claude",
    description: "Использую для вайбкодинга и тестирования",
    number: "(02)",
    logo: "/claude.png",
  },
  {
    name: "Protopie",
    description: "Делаю прототипы для тестирования макетов",
    number: "(03)",
    logo: "/protopie.png",
  },
  {
    name: "Rive",
    description: "Создаю микроанимации для интерфейсов",
    number: "(04)",
    logo: "/rive.png",
  },
];

export function Tools() {
  return (
    <section id="tools" className="mt-[65px] pb-20 sm:mt-[85px] sm:pb-32">
      <ScrollRevealH1
        className="font-sexsmith text-[32px] font-normal text-[#0F0F0F] sm:text-[48px]"
        style={{ fontFamily: "'Sexsmith', serif" }}
      >
        Инструменты
      </ScrollRevealH1>

      <div className="mt-8 flex flex-col sm:mt-[54px]">
        {tools.map((tool, index) => (
          <ScrollReveal
            key={tool.number}
            className={`flex cursor-pointer items-center justify-between gap-4 py-5 sm:gap-6 sm:py-6 ${
              index > 0 ? "border-t border-[#C7C7C7]" : ""
            }`}
          >
            <div className="flex min-w-0 items-center gap-4">
              <img
                src={tool.logo}
                alt={tool.name}
                width={tool.iconSize ?? 54}
                height={tool.iconSize ?? 54}
                className="shrink-0 object-cover"
                style={{
                  width: tool.iconSize ?? 54,
                  height: tool.iconSize ?? 54,
                  borderRadius: tool.iconRadius ?? 12,
                }}
              />
              <div className="flex min-w-0 w-[200px] flex-col gap-[2px] sm:w-auto">
                <h2
                  className="font-sexsmith text-[22px] font-normal leading-tight text-[#0F0F0F] sm:text-[28px]"
                  style={{ fontFamily: "'Sexsmith', serif", margin: 0 }}
                >
                  {tool.name}
                </h2>
                <p
                  className="text-[13px] leading-snug text-[#C7C7C7] sm:whitespace-nowrap"
                  style={{ margin: 0 }}
                >
                  {tool.description}
                </p>
              </div>
            </div>
            <span className="shrink-0 text-[13px] text-[#848484]">{tool.number}</span>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
