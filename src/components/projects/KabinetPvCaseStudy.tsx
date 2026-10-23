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

const caseNavPillClass =
  "press-bounce flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#F0F0F0] text-[13px] tracking-[-0.02em] text-black no-underline transition-transform duration-200 hover:scale-[0.98] active:scale-[0.96] sm:h-[72px] sm:text-[18px]";

const arrowIcon = (direction: "left" | "right") => (
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
    {direction === "left" ? (
      <path d="M19 12H5M11 6l-6 6 6 6" />
    ) : (
      <path d="M5 12h14M13 6l6 6-6 6" />
    )}
  </svg>
);

function CaseNav() {
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
    <div className="flex w-full gap-3">
      <Link
        href="/projects/kinpet"
        className={caseNavPillClass}
        onPointerDown={handlePointerDown}
        onMouseEnter={handleMouseEnter}
      >
        {arrowIcon("left")}
        Назад
      </Link>
    </div>
  );
}

const sexsmithStyle = { fontFamily: "'Sexsmith', serif" } as const;

const textToImageGap = "mt-10 sm:mt-12";

const projectInfo = [
  { label: "Роль", value: "Продуктовый дизайнер" },
  { label: "Направление", value: "B2B" },
  { label: "Формат", value: "mobile" },
  { label: "Год", value: "©2025" },
];

const resultItems = [
  {
    key: "errors",
    label: "Пользовательские ошибки",
    value: "-35%",
  },
];

const contextBlocks = [
  {
    label: "Проблема:",
    text: "Функционал создания претензий отсутствовал в приложении, а десктопная версия была устаревшей и неудобной — это увеличивало время выполнения задач и нагрузку на сотрудников ПВ.",
  },
  {
    label: "Целевая аудитория:",
    text: "Сотрудники ПВЗ, консультанты Faberlic.",
  },
  {
    label: "Что делала:",
    text: "Работала над сценарием создания претензий к товарам для сотрудников пункта выдачи.",
  },
  {
    label: "Задача:",
    text: "Перенести функционал создания претензий из устаревшей десктопной версии в мобильное приложение для сотрудников пункта выдачи.",
  },
  {
    label: "Цель:",
    text: "Перенести создание претензий в мобильное приложение — упростив флоу по сравнению с десктопной версией и сократив время выполнения задачи.",
  },
];

const oldVersionProblems = [
  {
    image: "/pretenzia.png",
    caption: "Карточка заказа",
    title: "Точка входа не очевидна",
    text: "Точка входа в создание претензии была спрятана в выпадающем меню внутри карточки заказа. Сотрудник, который видит этот интерфейс впервые, просто не знает куда нажать — и либо тратит время на поиск, либо обращается за помощью к коллегам.",
  },
  {
    image: "/forma.png",
    caption: "Форма создания претензии",
    title: "Перегруженная форма на одном экране",
    text: "Форма открывается модальным окном со всеми полями сразу — тип, товар, действие, количество, причина, описание. На мобильном экране это создаёт высокую когнитивную нагрузку и повышает риск пропустить обязательное поле.",
  },
  {
    image: "/sohranit.png",
    caption: "Заполненная форма",
    title: "Длинный путь до утверждения претензии",
    text: "После заполнения формы претензия автоматически сохранялась в черновики. Чтобы утвердить её, нужно было снова открыть претензию, и только внутри нажать кнопку утверждения. Лишний шаг который замедлял работу особенно при большом количестве претензий.",
  },
  {
    image: "/spisok.png",
    caption: "Список претензий",
    title: "Статусы в одном списке",
    text: "Черновики и отправленные претензии лежали вперемешку без какого-либо разграничения. Чтобы утвердить претензию из черновика, нужно было открывать каждую по отдельности — быстрого действия прямо из списка не было. При большом количестве претензий это превращалось в рутину и занимало лишнее время.",
  },
];

const hypotheses = [
  "Если разбить форму создания претензии на отдельные шаги — сотрудник будет фокусироваться на одной задаче за раз и реже допускать ошибки.",
  "Если при закрытии незавершённой претензии показывать тост-уведомление об автосохранении — сотрудник будет знать что данные не потеряны и вернётся к оформлению без лишних вопросов.",
  "Если разделить список претензий на черновики и утверждённые — сотрудник сразу увидит что требует действия и не будет тратить время на поиск нужной записи.",
];

export function KabinetPvCaseStudy() {
  return (
    <ZoomableArea>
    <article className="pb-[19px] sm:pb-[44px]">
      <LoadFadeIn className="pt-[100px]">
        <img
          src="/kabinetpv.png"
          alt="Кабинет ПВ"
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
              Кабинет ПВ
            </h1>

            <p className="mt-6 max-w-[640px] text-[15px] leading-[1.65] text-[#6D6868]">
              Кабинет ПВ — приложение для сотрудников пунктов выдачи Faberlic.
              Оно помогает оформлять заказы и возвраты, подписывать документы в
              электронном виде и использовать сканер штрихкодов для
              идентификации заказов
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-4 lg:gap-5">
            {projectInfo.map((item) => (
              <div key={item.label}>
                <p className="text-[12px] text-[#C7C7C7]">{item.label}</p>
                <p className="mt-1 text-[15px] leading-snug text-[#6D6868]">
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
            src="/kabinet%20pv%20keys.png"
            alt="Кабинет ПВ — ключевые экраны мобильного приложения"
            width={890}
            height={536}
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
              <p className="mt-3 text-[15px] sm:text-[19px] leading-[1.65] text-[#6D6868]">
                {block.text}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-8 sm:mt-10">
          <div className="rounded-[20px] bg-[#F5F5F5] px-4 py-5 sm:rounded-[24px] sm:px-6 sm:py-6">
            <div className="flex items-center gap-3 sm:gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/bulavka.png"
                alt=""
                width={36}
                height={36}
                className="h-6 w-6 shrink-0 object-contain sm:h-[36px] sm:w-[36px]"
              />
              <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
                Ограничения
              </p>
            </div>
            <p className="mt-3 text-[15px] leading-[1.65] text-[#6D6868] sm:text-[19px]">
              Изменение бэкенда было недоступно — решение разрабатывалось в
              рамках существующей логики и данных
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="mt-16 sm:mt-20">
        <ScrollRevealH2
          className="font-sexsmith text-[32px] font-normal leading-[1.1] text-[#0F0F0F] sm:text-[48px]"
          style={sexsmithStyle}
        >
          Исследование
        </ScrollRevealH2>

        <div className="mt-6 flex w-full flex-col gap-6 sm:mt-8">
          <ScrollReveal className="w-full">
            <p className="text-[15px] sm:text-[19px] leading-[1.65] text-[#6D6868]">
              Прямые интервью не проводились — в качестве источника данных
              использовалась обратная связь от сотрудников ПВЗ, предоставленная
              командой поддержки. Сотрудники просили перенести недостающий
              функционал из веб-версии в приложение — им удобнее работать с
              телефона и переключаться между вебом и мобильным приложением не
              хотелось
            </p>
          </ScrollReveal>

          <ScrollReveal className="w-full">
            <p className="text-[15px] sm:text-[19px] leading-[1.65] text-[#6D6868]">
              Дополнительно проанализировала текущий функционал сайта в
              мобильном адаптиве и выявила ряд неудобных моментов которые
              легли в основу решений
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-10 flex w-full flex-col gap-16 sm:mt-12 sm:gap-20">
          {oldVersionProblems.map((item, index) => (
            <ScrollReveal key={item.image} className="w-full">
              <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
                {index + 1}. {item.title}
              </p>
              <p className="mt-2 text-[15px] leading-[1.65] text-[#6D6868] sm:mt-3 sm:text-[19px]">
                {item.text}
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="mt-10 block h-auto w-full max-w-full rounded-[16px] sm:mt-12 sm:rounded-[24px]"
              />
              <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
                {item.caption}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-16 sm:mt-20">
          <p className="text-[15px] sm:text-[19px] leading-[1.65] text-[#6D6868]">
            Далее, разобравшись с проблемами и их следствиями, я вывела такие{" "}
            <span className="font-bold">гипотезы:</span>
          </p>
        </ScrollReveal>

        <div className="mt-10 flex w-full flex-col gap-8 sm:mt-12 sm:gap-10">
          {hypotheses.map((text) => (
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
              <p className="min-w-0 flex-1 text-[15px] sm:text-[19px] leading-[1.65] text-[#6D6868]">
                {text}
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
          Решение
        </ScrollRevealH2>

        <ScrollReveal className="mt-6 sm:mt-8">
          <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
            Дробление на шаги
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-[#6D6868] sm:mt-6 sm:text-[19px]">
            Принцип прогрессивного раскрытия — показывать только нужное в
            данный момент. Разбила сценарий на шаги: сотрудник решает одну
            задачу за раз и не держит весь контекст в голове
          </p>
        </ScrollReveal>

        <ScrollReveal className={textToImageGap}>
          <div className="overflow-hidden rounded-[16px] sm:rounded-[24px]">
            {/* mobile: квадрат (телефон крупнее) */}
            <video
              src="/kabinet_pv_video.mp4?v=5"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="block h-auto w-full max-w-full sm:hidden"
            />
            {/* desktop: горизонтальное */}
            <video
              src="/kabinet_pv_video_desktop.mp4?v=5"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="hidden h-auto w-full max-w-full sm:block"
            />
          </div>
          <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
            Оформление претензии
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-12 sm:mt-16">
          <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
            Автосохранение с подтверждением
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-[#6D6868] sm:mt-6 sm:text-[19px]">
            Принцип сохранения контекста. При закрытии незавершённой претензии
            приложение автоматически сохраняет её в черновики и показывает
            тост-уведомление — сотрудник видит что данные не потеряны и может
            вернуться позже
          </p>
        </ScrollReveal>

        <ScrollReveal className={textToImageGap}>
          <div className="overflow-hidden rounded-[16px] sm:rounded-[24px]">
            {/* mobile: квадрат */}
            <video
              src="/kabinet_pv_drafts.mp4?v=2"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="block h-auto w-full max-w-full sm:hidden"
            />
            {/* desktop: горизонтальное */}
            <video
              src="/kabinet_pv_drafts_desktop.mp4?v=2"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="hidden h-auto w-full max-w-full sm:block"
            />
          </div>
          <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
            Сохранение в черновики
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-12 sm:mt-16">
          <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
            Разделение статусов
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-[#6D6868] sm:mt-6 sm:text-[19px]">
            Принцип борьбы с визуальным шумом. Разделила список на две
            вкладки: черновики и утверждённые — сотрудник сразу видит что
            требует действия и не просматривает всё подряд
          </p>
        </ScrollReveal>

        <ScrollReveal className={textToImageGap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/chernoviki%20mobilka.png"
            alt="Кабинет ПВ — вкладка черновиков в списке претензий"
            width={1080}
            height={1080}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full max-w-full rounded-[16px] sm:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/chernoviki.png"
            alt="Кабинет ПВ — вкладка черновиков в списке претензий"
            width={1780}
            height={1070}
            loading="lazy"
            decoding="async"
            className="hidden h-auto w-full max-w-full rounded-[24px] sm:block"
          />
          <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
            Черновики
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-12 sm:mt-16">
          <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
            Быстрое утверждение из списка
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-[#6D6868] sm:mt-6 sm:text-[19px]">
            Чтобы сотрудник мог обработать несколько претензий быстрее —
            добавила контекстное меню по нажатию на три точки прямо в
            карточке черновика. Теперь не нужно открывать каждую претензию по
            отдельности — утвердить или удалить можно сразу из списка
          </p>
        </ScrollReveal>

        <ScrollReveal className={textToImageGap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/utverditchernovik%20mobilka.png"
            alt="Кабинет ПВ — быстрое утверждение черновика из списка"
            width={1080}
            height={1080}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full max-w-full rounded-[16px] sm:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/utverditchernovik.png"
            alt="Кабинет ПВ — быстрое утверждение черновика из списка"
            width={1780}
            height={1216}
            loading="lazy"
            decoding="async"
            className="hidden h-auto w-full max-w-full rounded-[24px] sm:block"
          />
          <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
            Быстрое утверждение
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-16 sm:mt-20">
          <ScrollRevealH2
            className="font-sexsmith text-[32px] font-normal leading-[1.1] text-[#0F0F0F] sm:text-[48px]"
            style={sexsmithStyle}
          >
            Юзабилити-тест
          </ScrollRevealH2>
          <p className="mt-4 text-[15px] sm:text-[19px] leading-[1.65] text-[#6D6868] sm:mt-6">
            Провела модерируемое юзабилити-тестирование с 7 респондентами
            после первой итерации — чтобы проверить подтвердились ли гипотезы
            и выявить точки где возникают трудности. Модерируемый формат
            позволяет наблюдать за поведением в реальном времени и задавать
            уточняющие вопросы. Задание: утвердить претензию с двумя
            одинаковыми товарами и удалить её — типичный рабочий сценарий.
            Тест помог подсветить точки для улучшения. По результатам внесла
            изменения:
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-12 sm:mt-16">
          <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
            Размер каунтера
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-[#6D6868] sm:mt-6 sm:text-[19px]">
            В ходе теста выяснилось что респонденты не понимали какое
            максимальное количество товара доступно — число была не на виду.
            Добавила отображение максимального количества прямо в каунтере —
            теперь сразу понятно в каких пределах можно изменять значение.
            Каунтер разворачивается только у выбранного товара — список стал
            чище, целевая зона крупнее
          </p>
        </ScrollReveal>

        <ScrollReveal className={textToImageGap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/do%20posle%20caunter%20mobilka.png"
            alt="Кабинет ПВ — счётчик количества товара до и после"
            width={1080}
            height={1080}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full max-w-full rounded-[16px] sm:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/do%20posle%20caunter.png"
            alt="Кабинет ПВ — счётчик количества товара до и после"
            width={1780}
            height={1070}
            loading="lazy"
            decoding="async"
            className="hidden h-auto w-full max-w-full rounded-[24px] sm:block"
          />
          <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
            Выбор количества товаров
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-12 sm:mt-16">
          <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
            Счётчик черновиков
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-[#6D6868] sm:mt-6 sm:text-[19px]">
            В ходе теста стало понятно что респонденты не всегда замечали
            незавершённые претензии — вкладка «Черновики» не давала никакого
            сигнала. Добавила количество черновиков чтобы сотрудник сразу
            видел есть ли незавершённые претензии и не забывал вернуться к
            ним
          </p>
        </ScrollReveal>

        <ScrollReveal className={textToImageGap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/do%20posle%20chernoviki%20mobilka.png"
            alt="Кабинет ПВ — бейдж со счётчиком черновиков до и после"
            width={1080}
            height={1080}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full max-w-full rounded-[16px] sm:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/do%20posle%20chernoviki.png"
            alt="Кабинет ПВ — бейдж со счётчиком черновиков до и после"
            width={1780}
            height={1070}
            loading="lazy"
            decoding="async"
            className="hidden h-auto w-full max-w-full rounded-[24px] sm:block"
          />
          <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
            Количество черновиков
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-12 sm:mt-16">
          <p className="text-[15px] sm:text-[19px] leading-[1.65] text-[#6D6868]">
            После отрисовки дизайна передала финальные макеты в разработку
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

        <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8">
          <ScrollReveal className="w-full">
            <p className="text-[15px] sm:text-[19px] leading-[1.65] text-[#6D6868]">
              Перенос сценария создания претензий в мобильное приложение
              позволил сотрудникам ПВЗ работать с претензиями не переключаясь
              на десктоп. Пошаговый сценарий и разделение статусов сократили
              время прохождения задачи и снизили количество пользовательских
              ошибок на 35%
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-10 sm:mt-12">
          <div className="grid w-full grid-cols-1 gap-3">
            {resultItems.map((item) => (
              <div
                key={item.key}
                className="min-w-0 rounded-[20px] bg-[#F5F5F5] px-3 py-4 text-left sm:rounded-[24px] sm:px-6 sm:py-6"
              >
                <p className="text-[12px] leading-[1.4] text-[#6D6868] sm:text-[19px] sm:leading-[1.65]">
                  {item.label}
                </p>
                <div className="mt-2 sm:mt-3">
                  <span
                    className="font-sexsmith text-[26px] font-normal leading-[1.1] text-[#0F0F0F] sm:text-[48px]"
                    style={sexsmithStyle}
                  >
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <ScrollReveal
        className="mt-16 sm:mt-20"
        viewport={{ once: true, amount: 0.08 }}
      >
        <CaseNav />
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
