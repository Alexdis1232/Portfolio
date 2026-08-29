"use client";

import { LoadFadeIn, LoadFadeInH1 } from "@/components/ScrollReveal";

export function Hero() {
  return (
    <section className="hero-section pb-0">
      <div className="flex w-full flex-col items-start pt-[28px] sm:items-center sm:pt-[60px] lg:pt-[92px]">
        <LoadFadeIn className="mt-[45px] sm:mt-0">
          <div className="hero-video-frame h-[105px] w-[105px] shrink-0 sm:h-[125px] sm:w-[125px]">
            <div className="hero-video-inner h-[210px] w-[210px] sm:h-[250px] sm:w-[250px]">
              <video
                src="/mevideo.mp4"
                poster="/mevideo-poster.jpg"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="hero-video h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </LoadFadeIn>

        <LoadFadeInH1
          className="hero-title mt-[50px] w-full text-left text-[clamp(28px,10vw,54px)] font-normal leading-[1.1] text-[#0F0F0F] sm:mt-[62px] sm:text-center sm:text-[54px]"
          style={{ fontFamily: "'Sexsmith', serif", letterSpacing: "0.01em" }}
        >
          <span className="sm:hidden">
            Я Саша — Продуктовый
            <br />
            дизайнер с 3 годами
            <br />
            опыта в B2C и B2B
            <br />
            продуктах в сферах
            <br />
            e-Commerce и Pettech, с фокусом
            <br />
            на AI-инструменты.
          </span>
          <span className="hidden sm:inline">
            Я Саша — Продуктовый дизайнер
            <br />
            с 3 годами опыта в B2C и B2B
            <br />
            продуктах в сферах e-Commerce и Pettech,
            <br />
            с фокусом на AI-инструменты.
          </span>
        </LoadFadeInH1>
      </div>
    </section>
  );
}
