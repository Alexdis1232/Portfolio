"use client";

import Link from "next/link";
import { useCallback } from "react";
import { LoadFadeIn, ScrollReveal, ScrollRevealH2 } from "@/components/ScrollReveal";
import { ZoomableArea } from "@/components/ZoomableArea";
import { useButtonClickSound } from "@/hooks/useButtonClickSound";
import { useProjectHoverSound } from "@/hooks/useProjectHoverSound";

function isCoarsePointerDevice() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none), (pointer: coarse)").matches
  );
}

function BackToKabinetPv() {
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
  }, [playHover]);

  return (
    <Link
      href="/projects/kabinetpv"
      className="press-bounce flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#F0F0F0] text-[13px] tracking-[-0.02em] text-black no-underline transition-transform duration-200 hover:scale-[0.98] active:scale-[0.96] sm:h-[72px] sm:text-[18px]"
      onPointerDown={handlePointerDown}
      onMouseEnter={handleMouseEnter}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 12H5M11 6l-6 6 6 6" />
      </svg>
      Назад
    </Link>
  );
}

const sexsmithStyle = { fontFamily: "'Sexsmith', serif" } as const;

const textToImageGap = "mt-10 sm:mt-12";

const projectInfo = [
  { label: "Роль", value: "Продуктовый дизайнер" },
  { label: "Направление", value: "B2B, B2C" },
  { label: "Формат", value: "mobile" },
  { label: "Год", value: "©2025" },
];

export function FaberlicCaseStudy() {
  return (
    <ZoomableArea>
    <article className="pb-[19px] sm:pb-[44px]">
      <LoadFadeIn className="pt-[100px]">
        <img
          src="/faberlic.png"
          alt="Faberlic"
          width={80}
          height={80}
          className="h-[80px] w-[80px] rounded-2xl object-cover"
        />

        <div className="mt-[74px] grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-x-12">
          <div className="min-w-0">
            <h1
              className="font-sexsmith text-[32px] font-normal leading-[1.1] text-[#0F0F0F] sm:text-[48px] lg:text-[52px]"
              style={sexsmithStyle}
            >
              Faberlic
            </h1>

            <p className="mt-6 max-w-[640px] text-[15px] leading-[1.65] text-[#0F0F0F]">
              Faberlic — российская косметическая компания прямых продаж.
              Производит косметику, парфюмерию, одежду и товары для дома,
              распространяя их через сеть независимых консультантов в 12
              странах.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-4 lg:gap-5">
            {projectInfo.map((item) => (
              <div key={item.label}>
                <p className="text-[12px] text-[#C7C7C7]">{item.label}</p>
                <p className="mt-1 text-[15px] leading-snug text-[#0F0F0F]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </LoadFadeIn>

      <section className="mt-[52px] sm:mt-[68px]">
        <ScrollRevealH2
          className="font-sexsmith text-[32px] font-normal leading-[1.1] text-[#0F0F0F] sm:text-[48px]"
          style={sexsmithStyle}
        >
          Что ещё делала
        </ScrollRevealH2>

        <ScrollReveal className="mt-10 sm:mt-12">
          <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
            Личные данные
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-[#0F0F0F] sm:mt-6 sm:text-[19px]">
            Переработала экран с личными данными — разделила его на две
            части: нередактируемые поля и редактируемые. Это упростило
            навигацию и сократило длину экрана на 10%. Также добавила
            возможность подтверждать почту прямо в приложении и подсветила
            статусы верификации понятными индикаторами. В результате
            пользователи стали быстрее находить нужные данные, а CR
            подтверждённой почты вырос.
          </p>
        </ScrollReveal>

        <ScrollReveal className={textToImageGap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/lichn%20dun%20mobilka.png"
            alt="Faberlic — экран личных данных до и после"
            width={1080}
            height={1080}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full max-w-full rounded-[16px] sm:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/lichn%20dun.png"
            alt="Faberlic — экран личных данных до и после"
            width={1780}
            height={1070}
            loading="lazy"
            decoding="async"
            className="hidden h-auto w-full max-w-full rounded-[24px] sm:block"
          />
          <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
            Личные данные
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-12 sm:mt-16">
          <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
            Карточки &quot;Мои события&quot;
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-[#0F0F0F] sm:mt-6 sm:text-[19px]">
            Спроектировала экраны с визуальным отображением статистики
            консультанта за период. Пользователям важно не только видеть
            свои результаты, но и делиться ими в соцсетях. Таким образом
            повышается вовлечённость в приложение.
          </p>
        </ScrollReveal>

        <ScrollReveal className={textToImageGap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Faberlic%20moi%20sob%20mobilka.png"
            alt="Faberlic — карточки «Мои события»"
            width={1080}
            height={1080}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full max-w-full rounded-[16px] sm:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Faberlic%20moi%20sob.png"
            alt="Faberlic — карточки «Мои события»"
            width={1780}
            height={1070}
            loading="lazy"
            decoding="async"
            className="hidden h-auto w-full max-w-full rounded-[24px] sm:block"
          />
          <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
            Статистика в карточках
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-12 sm:mt-16">
          <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
            3D. Визуальная айдентика
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-[#0F0F0F] sm:mt-6 sm:text-[19px]">
            Отвечала за 3D-иконки в приложении — писала промпты и
            генерировала их с помощью AI-инструментов. Формировала единый
            визуальный стиль делая интерфейс более живым и узнаваемым.
          </p>
        </ScrollReveal>

        <ScrollReveal className={textToImageGap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/3D.png"
            alt="Faberlic — 3D-иконки"
            width={1780}
            height={1726}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full max-w-full rounded-[16px] sm:rounded-[24px]"
          />
          <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
            3D иконки
          </p>
        </ScrollReveal>
      </section>

      <ScrollReveal
        className="mt-16 sm:mt-20"
        viewport={{ once: true, amount: 0.08 }}
      >
        <BackToKabinetPv />
      </ScrollReveal>

      <ScrollReveal
        className="mt-8 flex justify-center sm:mt-10"
        viewport={{ once: true, amount: 0.08 }}
      >
        <p className="text-[14px] text-[#C7C7C7]">Alexandra Antonyuk ♥ 2025</p>
      </ScrollReveal>
    </article>
    </ZoomableArea>
  );
}
