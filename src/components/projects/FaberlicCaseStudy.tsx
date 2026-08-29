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

const contextBlocks = [
  {
    label: "Целевая аудитория:",
    text: "Консультанты, покупатели.",
  },
  {
    label: "Что делала:",
    text: "Работала над скидками заказов в личном кабинете.",
  },
  {
    label: "Проблема:",
    text: "Faberlic перешла на новую систему дифференцированных скидок, но в приложении не было никакого инструмента который объяснял бы механику и показывал прогресс — консультант не понимал как работает система и что нужно сделать чтобы получить скидку выше.",
  },
  {
    label: "Задача:",
    text: "Спроектировать с нуля как консультант видит свой прогресс и понимает сколько нужно набрать до следующего уровня 20–26%.",
  },
  {
    label: "Цель:",
    text: "Завлечь консультантов в новую систему скидок и мотивировать делать больше заказов за период — чтобы достигать следующего уровня скидки и увеличивать средний чек.",
  },
];

const audienceInsights = [
  "Когда я планирую заказ в новом периоде, я хочу понимать сколько мне осталось до следующего уровня скидки, чтобы принять решение — добирать товары.",
  "Когда я делаю заказы в периоде, я хочу видеть свой текущий прогресс, чтобы в следующем периоде сохранить скидку и не снизить её от начального уровня.",
];

const progressHypotheses = [
  "Если вынести прогресс по баллам на главный экран, тогда консультант будет чаще проверять сколько осталось → потому что информация доступна без лишних действий.",
  "Если показать баллы и процент скидки в одном блоке, тогда пользователь сразу поймёт связь между своими действиями и скидкой → потому что не нужно сопоставлять данные из разных мест.",
  "Если показать все уровни скидки на одной шкале (20% → 26% → VIP), тогда пользователь будет знать к чему стремиться, потому что видит полную картину а не только текущий уровень.",
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

      <ScrollReveal className={textToImageGap}>
        <div className="aspect-square overflow-hidden rounded-[24px] sm:aspect-auto sm:rounded-[40px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/keys%20faberlic.png"
            alt="Faberlic — ключевые экраны мобильного приложения"
            width={1780}
            height={1069}
            loading="lazy"
            decoding="async"
            className="block h-full w-full object-cover object-center sm:h-auto"
          />
        </div>
      </ScrollReveal>

      <section className="mt-[52px] sm:mt-[68px]">
        <ScrollRevealH2
          className="font-sexsmith text-[32px] font-normal leading-[1.1] text-[#0F0F0F] sm:text-[48px]"
          style={sexsmithStyle}
        >
          Контекст
        </ScrollRevealH2>

        <div className="mt-10 flex w-full flex-col gap-8 sm:mt-12 sm:gap-10">
          {contextBlocks.map((block) => (
            <ScrollReveal key={block.label} className="w-full">
              <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
                {block.label}
              </p>
              <p className="mt-3 text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
                {block.text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mt-16 sm:mt-20">
        <ScrollRevealH2
          className="font-sexsmith text-[32px] font-normal leading-[1.1] text-[#0F0F0F] sm:text-[48px]"
          style={sexsmithStyle}
        >
          Исследование
        </ScrollRevealH2>

        <div className="mt-6 flex w-full flex-col gap-8 sm:mt-8 sm:gap-10">
          <ScrollReveal className="w-full">
            <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
              Анализ аудитории
            </p>
            <p className="mt-3 text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
              Приложением пользуются две аудитории — консультанты и обычные
              покупатели. Консультанты думают как предприниматели: им важно
              понять при каком объёме заказа они получат максимальную выгоду.
              Покупатели хотят просто купить дешевле. Для обеих аудиторий
              экран со скидками — инструмент мотивации, а не просто
              информация.
            </p>
            <p className="mt-4 text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
              Далее мне нужно было определить в какой момент и зачем
              консультанту нужна информация о прогрессе. Это и даст понимание
              как должен выглядеть экран:
            </p>
          </ScrollReveal>

          <div className="flex w-full flex-col gap-6 sm:gap-8">
            {audienceInsights.map((text) => (
              <ScrollReveal
                key={text}
                className="flex w-full items-start gap-4 sm:gap-5"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF9E0] sm:h-14 sm:w-14">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/lump.png"
                    alt=""
                    width={28}
                    height={28}
                    className="h-3.5 w-3.5 object-contain sm:h-7 sm:w-7"
                  />
                </div>
                <p className="min-w-0 flex-1 text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
                  {text}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="w-full">
            <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
              Анализ рынка
            </p>
            <p className="mt-3 text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
              Изучила непрямых конкурентов — Wildberries, Ozon, Яндекс
              Маркет: персональные скидки есть, но скрыты от пользователя и
              непрозрачны. Рассмотрела прямого конкурента Oriflame — механика
              скидки за период такая же, но баллы и процент скидки разнесены
              по разным местам, связь между ними не очевидна.
            </p>
          </ScrollReveal>

          <ScrollReveal className="w-full">
            <p className="text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
              Приоритизировали по усилиям разработки и бизнес-ценности
              гипотезы и выбрали 3 для реализации:
            </p>
          </ScrollReveal>

          <div className="flex w-full flex-col gap-6 sm:gap-8">
            {progressHypotheses.map((text) => (
              <ScrollReveal
                key={text}
                className="flex w-full items-start gap-4 sm:gap-5"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF9E0] sm:h-14 sm:w-14">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/lump.png"
                    alt=""
                    width={28}
                    height={28}
                    className="h-3.5 w-3.5 object-contain sm:h-7 sm:w-7"
                  />
                </div>
                <p className="min-w-0 flex-1 text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
                  {text}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 sm:mt-20">
        <ScrollRevealH2
          className="font-sexsmith text-[32px] font-normal leading-[1.1] text-[#0F0F0F] sm:text-[48px]"
          style={sexsmithStyle}
        >
          Решение
        </ScrollRevealH2>

        <ScrollReveal className="mt-6 sm:mt-8">
          <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
            Дизайн. Юзабилити тест
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-[#0F0F0F] sm:mt-6 sm:text-[19px]">
            Отрисовала итоговые 2 варианта для юзабилити теста с двумя
            вариантами отображения скидки. По результатам пользователи
            выбрали <span className="font-bold">Вариант А</span> — линейная
            шкала с прогрессом оказалась понятнее: сразу видно где ты
            находишься и сколько осталось до следующего уровня.{" "}
            <span className="font-bold">Вариант Б</span> воспринимался как
            набор отдельных кликабельных элементов — чтобы узнать сколько
            баллов осталось, нужно было открывать шторку через «Подробнее»,
            что создавало лишний шаг.
          </p>
        </ScrollReveal>

        <ScrollReveal className={textToImageGap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/AB%20test%20progress%20mobilka.png"
            alt="Faberlic — юзабилити тест вариантов прогресса скидки"
            width={1080}
            height={1080}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full max-w-full rounded-[16px] sm:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/AB%20test%20progress.png"
            alt="Faberlic — юзабилити тест вариантов прогресса скидки"
            width={1780}
            height={1070}
            loading="lazy"
            decoding="async"
            className="hidden h-auto w-full max-w-full rounded-[24px] sm:block"
          />
          <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
            Варианты юзабилити теста
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-12 sm:mt-16">
          <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
            Итоговый вариант
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-[#0F0F0F] sm:mt-6 sm:text-[19px]">
            На основе результатов теста доработала Вариант А — добавила
            шторку с детальной информацией: текущая скидка, количество
            набранных баллов и условие для перехода на следующий уровень.
          </p>
        </ScrollReveal>

        <ScrollReveal className={textToImageGap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/skidki%20progress%20mobilka.png"
            alt="Faberlic — итоговый экран прогресса скидки"
            width={1080}
            height={1080}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full max-w-full rounded-[16px] sm:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/skidki%20progress.png"
            alt="Faberlic — итоговый экран прогресса скидки"
            width={1780}
            height={1070}
            loading="lazy"
            decoding="async"
            className="hidden h-auto w-full max-w-full rounded-[24px] sm:block"
          />
          <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
            Итоговый вариант
          </p>
        </ScrollReveal>
      </section>

      <section className="mt-16 sm:mt-20">
        <ScrollRevealH2
          className="font-sexsmith text-[32px] font-normal leading-[1.1] text-[#0F0F0F] sm:text-[48px]"
          style={sexsmithStyle}
        >
          Результаты
        </ScrollRevealH2>

        <ScrollReveal className="mt-6 sm:mt-8">
          <p className="text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
            Функционал находится в продакшене, данные продолжают собираться.
            Ключевой метрикой успеха будет{" "}
            <span className="font-bold">
              рост доли пользователей которые достигают скидки 26% за период
            </span>{" "}
            — это покажет что механика прогресса мотивирует делать больше
            заказов.
          </p>
        </ScrollReveal>
      </section>

      <section className="mt-16 sm:mt-20">
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
            навигацию и <span className="font-bold">сократило длину экрана на 10%</span>. Также добавила
            возможность подтверждать почту прямо в приложении и подсветила
            статусы верификации понятными индикаторами. В результате
            пользователи стали{" "}
            <span className="font-bold">
              быстрее находить нужные данные, а CR подтверждённой почты вырос.
            </span>
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
            Онбординг
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-[#0F0F0F] sm:mt-6 sm:text-[19px]">
            Перед проектированием провела быстрый опрос среди консультантов в
            группе Telegram — спросила какие возможности приложения новички
            узнают слишком поздно. На основе ответов отобрала три ключевых
            момента и оформила их в онбординг-экраны. Минимум текста — только
            самое важное, чтобы не перегружать пользователя с первых шагов. По
            итогу метрика Time on Screen составила 4 секунды, что говорит о
            заинтересованности пользователей.
          </p>
        </ScrollReveal>

        <ScrollReveal className={textToImageGap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/onbording%20mobilka.png"
            alt="Faberlic — экраны онбординга"
            width={1080}
            height={1080}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full max-w-full rounded-[16px] sm:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/onbording.png"
            alt="Faberlic — экраны онбординга"
            width={1780}
            height={1216}
            loading="lazy"
            decoding="async"
            className="hidden h-auto w-full max-w-full rounded-[24px] sm:block"
          />
          <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
            Онбординг
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
