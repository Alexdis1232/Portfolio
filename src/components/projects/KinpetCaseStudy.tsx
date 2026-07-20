"use client";

import dynamic from "next/dynamic";
import {
  LoadFadeIn,
  ScrollReveal,
  ScrollRevealH2,
} from "@/components/ScrollReveal";
import { KinpetKeysImage } from "@/components/projects/KinpetKeysImage";
import { ZoomableArea } from "@/components/ZoomableArea";

const KinpetBeforeAfterSlider = dynamic(
  () =>
    import("@/components/projects/KinpetBeforeAfterSlider").then(
      (mod) => mod.KinpetBeforeAfterSlider,
    ),
  { ssr: false },
);

const sexsmithStyle = { fontFamily: "'Sexsmith', serif" } as const;

/** Отступ между текстовым блоком и картинкой ниже: 40px mobile / 48px desktop */
const textToImageGap = "mt-10 sm:mt-12";
const blockStackGap = "gap-10 sm:gap-12";
/** Отступ между соседними текстовыми абзацами */
const paragraphStackGap = "gap-3";

const projectInfo = [
  { label: "Роль", value: "Продуктовый дизайнер" },
  { label: "Направление", value: "B2C" },
  { label: "Формат", value: "desktop" },
  { label: "Год", value: "©2024" },
];

const contextBlocks = [
  {
    label: "Целевая аудитория:",
    text: "Покупатели, продавцы, владельцы организаций, приюты.",
  },
  {
    label: "Что делала:",
    text: "Работала над ключевым сценарием — поиском питомца.",
  },
  {
    label: "Проблема:",
    text: "Анализ выявил, что 45% пользователей покидают первый экран, не переходя к просмотру объявлений — сценарий обрывается на старте.",
  },
  {
    label: "Задача:",
    text: "Переработать точку входа в поиск питомца — сделать так, чтобы пользователи не уходили с первого экрана, а переходили к просмотру объявлений.",
  },
  {
    label: "Цель:",
    text: "Увеличить конверсию в просмотр объявлений.",
  },
];

const insightItems = [
  "Пользователи не понимают, с чего начать поиск — есть те, кто ещё не определился с выбором, они теряются.",
  "Пользователи ожидают, что поиск на первом экране сразу даст точный результат, к примеру, сразу найти щенка или им нужен питомец специально для вязки.",
];

const hypothesisItems = [
  "Если помочь неопределившимся пользователям с выбором питомца прямо на старте — они не потеряются и дойдут до просмотра объявлений.",
  "Если добавить в поиск тип объявления Купить / Бесплатно, а также поле с возрастом питомца на первый экран, то это увеличит удовлетворенность и уменьшит откат пользователей.",
  "Добавление фильтра на главной приведёт к снижению отказов на странице результатов и росту конверсии в целевое действие.",
];

const resultItems = [
  {
    key: "bounce-rate",
    label: "Drop-off Rate",
    from: "42%",
    to: "36%",
  },
  {
    key: "conversion",
    label: "CR в просмотр объявлений",
    from: "58%",
    to: "64%",
  },
];

export function KinpetCaseStudy() {
  return (
    <ZoomableArea>
    <article className="pb-16 sm:pb-24">
      <LoadFadeIn className="pt-[100px]">
        <img
          src="/kinpet.png"
          alt="Kinpet"
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
              Сервис Kinpet
            </h1>

            <p className="mt-6 max-w-[640px] text-[15px] leading-[1.65] text-[#0F0F0F]">
              Kinpet — веб-сервис, где публикуют объявления о продаже собак и
              кошек, а также отдают питомцев бесплатно в добрые руки. С широким
              выбором пород и возрастов из любого уголка России.
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
        <KinpetKeysImage className="rounded-[24px] sm:rounded-[40px]" />
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

      <ScrollReveal className="mt-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/before.png"
          alt="Kinpet — главная до редизайна"
          width={890}
          height={536}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full max-w-full"
        />
        <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
          Главная / ДО
        </p>
      </ScrollReveal>

      <section className="mt-16 sm:mt-20">
        <ScrollRevealH2
          className="font-sexsmith text-[32px] font-normal leading-[1.1] text-[#0F0F0F] sm:text-[48px]"
          style={sexsmithStyle}
        >
          Исследование
        </ScrollRevealH2>

        <ScrollReveal className="mt-6 sm:mt-8">
          <p className="w-full text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
            Чтобы понять, почему пользователи уходят с первого экрана поиска, я
            провела{" "}
            <span className="font-bold">6 глубинных интервью</span> с целевой
            аудиторией. И вот, какие инсайты я получила:
          </p>
        </ScrollReveal>
      </section>

      <section className="mt-10 flex w-full flex-col gap-8 sm:mt-12 sm:gap-10">
        {insightItems.map((text) => (
          <ScrollReveal key={text} className="flex w-full items-start gap-4 sm:gap-5">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF9E0] sm:h-14 sm:w-14">
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
      </section>

      <ScrollReveal className={textToImageGap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/interview.png"
          alt="Ответы пользователей на глубинных интервью"
          width={890}
          height={536}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full max-w-full"
        />
        <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
          Ответы пользователей
        </p>
      </ScrollReveal>

      <section className={`mt-[44px] flex w-full flex-col ${paragraphStackGap} sm:mt-[60px]`}>
        <ScrollReveal className="w-full">
          <p className="text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
            Далее я провела{" "}
            <span className="font-bold">количественный немодерируемый опрос</span>
            , чтобы выяснить: на что пользователи в первую очередь
            ориентируются при поиске питомца.
          </p>
        </ScrollReveal>

        <ScrollReveal className="w-full">
          <p className="text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
            Опрос показал, что кроме типа питомца и города, 67% пользователей
            ориентируются на цену, а 48% — на возраст, что играет ключевую
            роль при выборе питомца.
          </p>
        </ScrollReveal>
      </section>

      <ScrollReveal className={textToImageGap}>
        <div className="overflow-hidden rounded-[24px] border border-[#E0E0E0] sm:rounded-[40px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/opros.png"
            alt="Результаты опроса — на что ориентируются при поиске питомца"
            width={890}
            height={536}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full max-w-full"
          />
        </div>
        <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
          Ответы пользователей
        </p>
      </ScrollReveal>

      <section className="mt-[44px] flex w-full flex-col gap-8 sm:mt-[60px] sm:gap-10">
        <ScrollReveal className="w-full">
          <p className="text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
            На основе всех данных составила{" "}
            <span className="font-bold">гипотезы:</span>
          </p>
        </ScrollReveal>

        {hypothesisItems.map((text) => (
          <ScrollReveal key={text} className="flex w-full items-start gap-4 sm:gap-5">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF9E0] sm:h-14 sm:w-14">
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
            Поиск. Фильтры
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-4 sm:mt-6">
          <p className="text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
            Был пересобран первый экран так, чтобы пользователь мог сразу задать
            нужный контекст поиска. Добавили фильтр — чтобы пользователь сразу
            мог заложить нужные ему параметры, вывели в поиск тип объявления и
            возраст, так как именно эти параметры определяют выбор для
            большинства пользователей.
          </p>
        </ScrollReveal>
      </section>

      <ScrollReveal className={textToImageGap}>
        <div className="overflow-hidden rounded-[24px] bg-[#E8E8E8] sm:rounded-[40px]">
          <video
            src="/video_after_kinpet.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="block h-auto w-full max-w-full"
          />
        </div>
        <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
          Главная / ПОСЛЕ
        </p>
      </ScrollReveal>

      <section className={`${textToImageGap} flex flex-col ${blockStackGap}`}>
        <ScrollReveal>
          <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
            Подбор питомца
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-[#0F0F0F] sm:mt-6 sm:text-[19px]">
            Для пользователей, не определившихся с выбором, был добавлен сценарий
            «Подбор питомца», который снижает барьер входа в поиск, помогая
            сформировать критерии и перейти к просмотру объявлений.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-hidden rounded-[24px] sm:rounded-[40px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/tochka%20vhoda.png"
              alt="Kinpet — сценарий «Подбор питомца» на главной"
              width={890}
              height={536}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full max-w-full"
            />
          </div>
          <div className="mt-[15px] flex flex-col gap-[24px]">
            <p className="m-0 text-center text-[15px] leading-none text-[#C7C7C7]">
              Точка входа
            </p>
            <div className="overflow-hidden rounded-[24px] sm:rounded-[40px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/podbor%20pitomtsa.png"
                alt="Kinpet — экран «Подберём для вас питомца мечты»"
                width={890}
                height={536}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full max-w-full"
              />
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-3">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
              <div className="min-w-0 overflow-hidden rounded-[24px] sm:rounded-[40px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/vozrast.png"
                  alt="Kinpet — шаг «Желаемый возраст питомца»"
                  width={435}
                  height={536}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full max-w-full"
                />
              </div>
              <div className="min-w-0 overflow-hidden rounded-[24px] sm:rounded-[40px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/gorod.png"
                  alt="Kinpet — шаг «Место, где я ищу питомца»"
                  width={435}
                  height={536}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full max-w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
              <div className="min-w-0 overflow-hidden rounded-[24px] sm:rounded-[40px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/poroda.png"
                  alt="Kinpet — шаг «Я ищу собаку породы»"
                  width={435}
                  height={536}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full max-w-full"
                />
              </div>
              <div className="min-w-0 overflow-hidden rounded-[24px] sm:rounded-[40px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/pol.png"
                  alt="Kinpet — шаг «Я ищу» (выбор пола)"
                  width={435}
                  height={536}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full max-w-full"
                />
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
                <div className="min-w-0 overflow-hidden rounded-[24px] sm:rounded-[40px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/byudzhet.png"
                    alt="Kinpet — шаг «Мой бюджет на покупку»"
                    width={435}
                    height={536}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full max-w-full"
                  />
                </div>
                <div className="min-w-0 overflow-hidden rounded-[24px] sm:rounded-[40px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/rassilka.png"
                    alt="Kinpet — шаг «Мы подобрали для вас питомцев»"
                    width={435}
                    height={536}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full max-w-full"
                  />
                </div>
              </div>
              <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
                Подбор питомца
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
            Таким образом, пользователь пошагово формирует запрос с помощью
            подсказок и без необходимости принимать сложные решения на старте.
            После прохождения опроса он попадает на страницу с релевантными
            объявлениями.
          </p>

          <div className={`${textToImageGap} overflow-hidden rounded-[24px] sm:rounded-[40px]`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/obyavleniya.png?v=1"
              alt="Kinpet — страница объявлений после подбора питомца"
              width={890}
              height={536}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full max-w-full"
            />
          </div>
          <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
            Объявления
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

        <div className={`mt-6 flex w-full flex-col ${paragraphStackGap} sm:mt-8`}>
          <ScrollReveal className="w-full">
            <p className="text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
              Спустя месяц после внедрения изменений были собраны данные
              продуктовой аналитики для оценки эффективности решения.
            </p>
          </ScrollReveal>

          <ScrollReveal className="w-full">
            <p className="text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
              Пересобрав точку входа в поиск мы снизили Drop-off Rate и увеличили
              конверсию в просмотр объявлений. Пользователи стали быстрее
              находить релевантные объявления благодаря фильтрам на старте —
              типу объявления и возрасту питомца, что повлияло на сокращение
              времени получения результата в поиск объявлений.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-10 sm:mt-12">
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
            {resultItems.map((item) => (
              <div
                key={item.key}
                className="rounded-[20px] bg-[#F5F5F5] px-4 py-5 text-left sm:rounded-[24px] sm:px-6 sm:py-6"
              >
                <p className="text-[13px] leading-[1.4] text-[#0F0F0F] sm:text-[19px] sm:leading-[1.65]">
                  {item.label}
                </p>
                <div className="mt-2 flex items-center gap-2 sm:mt-3 sm:gap-3">
                  <span
                    className="font-sexsmith text-[32px] font-normal leading-[1.1] text-[#0F0F0F] sm:text-[48px]"
                    style={sexsmithStyle}
                  >
                    {item.from}
                  </span>
                  <span className="flex shrink-0 items-center self-center text-[22px] leading-none text-[#0F0F0F] sm:text-[30px]">
                    →
                  </span>
                  <span
                    className="font-sexsmith text-[32px] font-normal leading-[1.1] text-[#0F0F0F] sm:text-[48px]"
                    style={sexsmithStyle}
                  >
                    {item.to}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </article>
    </ZoomableArea>
  );
}
