"use client";

import { LoadFadeIn, LoadFadeInH1 } from "@/components/ScrollReveal";

export function Hero() {
  return (
    <section className="hero-section pb-0">
      <div className="flex w-full flex-col items-start pt-[28px] sm:items-center sm:pt-[60px] lg:pt-[92px]">
        <LoadFadeIn className="mt-[45px] sm:mt-0">
          <div className="h-[105px] w-[105px] shrink-0 overflow-hidden rounded-[28px] sm:h-[125px] sm:w-[125px] sm:rounded-[34px]">
            <video
              src="/mevideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              width={125}
              height={125}
              className="h-[105px] w-[105px] scale-[1.2] object-cover sm:h-[125px] sm:w-[125px]"
            />
          </div>
        </LoadFadeIn>

        <LoadFadeInH1
          className="hero-title mt-[50px] w-full text-left text-[41px] font-normal leading-[1.1] text-[#0F0F0F] sm:mt-[62px] sm:text-center sm:text-[46px]"
          style={{ fontFamily: "'Sexsmith', serif", letterSpacing: "0.01em" }}
        >
          <span className="sm:hidden">
            Я Саша — Продуктовый
            <br />
            mobile-first,
            <br />
            с 3 годами опыта в
            <br />
            B2C и B2B продуктах:
            <br />
            E-commerce и PetTech.
          </span>
          <span className="hidden sm:inline">
            Я Саша — Продуктовый дизайнер
            <br />
            mobile-first, с 3 годами опыта
            <br />
            в B2C и B2B продуктах: E-commerce
            <br />
            и PetTech.
          </span>
        </LoadFadeInH1>
      </div>
    </section>
  );
}
