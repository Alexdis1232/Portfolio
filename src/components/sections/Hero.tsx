"use client";

import { LoadFadeIn, LoadFadeInH1 } from "@/components/ScrollReveal";

export function Hero() {
  return (
    <section className="hero-section pb-0">
      <div className="flex w-full flex-col items-start pt-[42px] sm:pt-[74px] lg:pt-[106px]">
        <LoadFadeIn>
          <div className="h-[180px] w-[180px] shrink-0 overflow-hidden rounded-[40px]">
            <video
              src="/mevideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="h-full w-full scale-[1.4] object-cover"
            />
          </div>
        </LoadFadeIn>

        <LoadFadeInH1
          className="hero-title mt-[80px] w-full text-left text-[65px] font-normal leading-[1.1] text-[#0F0F0F]"
          style={{ fontFamily: "'Sexsmith', serif", letterSpacing: "0.01em" }}
        >
          Я Саша — Продуктовый дизайнер
          <br />
          mobile-first, с 3 годами опыта в
          <br />
          B2C и B2B продуктах: E-commerce
          <br />
          и PetTech.
        </LoadFadeInH1>
      </div>
    </section>
  );
}
