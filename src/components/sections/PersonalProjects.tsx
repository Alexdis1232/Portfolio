"use client";

import { ScrollReveal, ScrollRevealH2 } from "@/components/ScrollReveal";

const sexsmithStyle = { fontFamily: "'Sexsmith', serif" } as const;

type PersonalProjectEntry = {
  name: string;
  subtitle?: string;
  logo: string;
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
      width={64}
      height={64}
      className="h-16 w-16 shrink-0 rounded-[12px] object-cover"
    />
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
            <div className="flex items-center rounded-[24px] bg-[#FAFAFA] px-4 py-4">
              <div className="flex min-w-0 items-center gap-4">
                <ProjectLogo src={entry.logo} alt={entry.name} />
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-medium leading-[24px] text-black">
                    {entry.name}
                  </p>
                  {entry.subtitle ? (
                    <p className="truncate text-[13px] leading-[24px] text-[#C7C7C7]">
                      {entry.subtitle}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
