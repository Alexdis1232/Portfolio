"use client";

import { Magnet } from "@/components/Magnet";
import { LoadFadeIn, LoadFadeInH1 } from "@/components/ScrollReveal";
import { HeroSpeechBubble } from "./HeroSpeechBubble";

export function Hero() {
  return (
    <section className="hero-section pb-12 sm:pb-16">
      <div className="grid grid-cols-1 items-center gap-8 pt-8 sm:gap-12 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12 lg:pt-24">
        <LoadFadeIn className="relative mx-auto shrink-0 lg:order-2 lg:mx-0 lg:translate-x-6 lg:justify-self-end">
          <Magnet padding={60} magnetStrength={4}>
            <img
              src="/photomecat.png?v=2"
              alt="Саша"
              width={280}
              height={280}
              style={{ objectFit: "cover" }}
              className="h-auto w-full max-w-[242px] grayscale lg:max-w-[330px]"
            />
          </Magnet>
          <HeroSpeechBubble />
        </LoadFadeIn>

        <LoadFadeInH1
          className="hero-title min-w-0 max-w-full text-[32px] font-normal leading-[1.1] text-[#0F0F0F] sm:text-[40px] lg:order-1 lg:pr-2 lg:text-[52px]"
          style={{ fontFamily: "'Sexsmith', serif", letterSpacing: "0.01em" }}
        >
          Я Саша — Продуктовый
          <br />
          дизайнер mobile-first,
          <br />
          с 3 годами опыта в B2C и B2B
          <br />
          продуктах: E-commerce
          <br />
          и PetTech.
        </LoadFadeInH1>
      </div>
    </section>
  );
}
