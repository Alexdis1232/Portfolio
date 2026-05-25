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
    name: "Protopie",
    description: "Делаю прототипы для тестирования макетов",
    number: "(02)",
    logo: "/protopie.png",
  },
  {
    name: "Rive",
    description: "Создаю микроанимации",
    number: "(03)",
    logo: "/rive.png",
  },
  {
    name: "Claude",
    description: "Использую для исследований и проработки решений",
    number: "(04)",
    logo: "/claude.png",
  },
  {
    name: "Cursor",
    description: "Генерирую код по макетам для тестирования интерфейсов",
    number: "(05)",
    logo: "/cursor.png",
    iconSize: 64,
    iconRadius: 16,
  },
];

export function Tools() {
  return (
    <section id="tools" className="mt-[60px] bg-white pb-32">
      <ScrollRevealH1
        className="font-sexsmith text-[48px] font-normal text-[#0F0F0F]"
        style={{ fontFamily: "'Sexsmith', serif" }}
      >
        Инструменты
      </ScrollRevealH1>

      <div className="mt-[54px] flex flex-col">
        {tools.map((tool, index) => (
          <ScrollReveal
            key={tool.number}
            className={`flex cursor-pointer items-center justify-between gap-6 py-6 ${
              index > 0 ? "border-t border-[#C7C7C7]" : ""
            }`}
          >
            <div className="flex min-w-0 items-center gap-4">
              <img
                src={tool.logo}
                alt={tool.name}
                width={tool.iconSize ?? 66}
                height={tool.iconSize ?? 66}
                className="shrink-0 object-cover"
                style={{
                  width: tool.iconSize ?? 66,
                  height: tool.iconSize ?? 66,
                  borderRadius: tool.iconRadius ?? 12,
                }}
              />
              <div className="flex min-w-0 flex-col gap-[2px]">
                <h2
                  className="font-sexsmith text-[28px] font-normal leading-tight text-[#0F0F0F]"
                  style={{ fontFamily: "'Sexsmith', serif", margin: 0 }}
                >
                  {tool.name}
                </h2>
                <p
                  className="text-[15px] leading-snug text-[#C7C7C7]"
                  style={{ margin: 0 }}
                >
                  {tool.description}
                </p>
              </div>
            </div>
            <span className="shrink-0 text-[16px] text-[#0F0F0F]">{tool.number}</span>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
