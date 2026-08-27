"use client";

import { LoadFadeIn, ScrollReveal, ScrollRevealH2 } from "@/components/ScrollReveal";
import { ZoomableArea } from "@/components/ZoomableArea";

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
      </section>
    </article>
    </ZoomableArea>
  );
}
