"use client";

import { LoadFadeIn, ScrollReveal } from "@/components/ScrollReveal";

type CareerEntry = {
  company: string;
  years: string;
  role: string;
  platform: string;
  logo: string;
};

const careerData: CareerEntry[] = [
  {
    company: "Faberlic",
    years: "2025-Сейчас",
    role: "Продуктовый дизайнер",
    platform: "mobile",
    logo: "/faberlic.webp",
  },
  {
    company: "AGIMA",
    years: "2024-2025",
    role: "Продуктовый дизайнер",
    platform: "desktop",
    logo: "/agima.png",
  },
  {
    company: "CAPS",
    years: "2023-2024",
    role: "Графический дизайнер",
    platform: "social media",
    logo: "/caps.png",
  },
];

function CompanyLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      width={45}
      height={45}
      className="h-[45px] w-[45px] shrink-0 rounded-xl object-cover"
    />
  );
}

export function Career() {
  return (
    <section id="info" className="pb-0 pt-[40px] sm:pt-[80px]">
      <LoadFadeIn>
        <h2 className="mb-[10px] text-sm font-normal text-gray-caption">Карьера</h2>
        <div className="mb-10 h-px w-full bg-gray-divider" />
      </LoadFadeIn>

      <div className="flex flex-col gap-0">
        {careerData.map((entry) => (
          <ScrollReveal key={entry.company} className="w-full">
            <div className="grid h-[76px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 text-[13px] sm:gap-6">
              <div className="flex items-center gap-4">
                <CompanyLogo src={entry.logo} alt={entry.company} />
                <div className="min-w-0">
                  <p className="truncate font-medium text-black">{entry.company}</p>
                  <p className="mt-0.5 truncate text-gray-caption">{entry.years}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="whitespace-nowrap font-medium text-black">{entry.role}</p>
                <p className="mt-0.5 whitespace-nowrap text-gray-caption">{entry.platform}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
