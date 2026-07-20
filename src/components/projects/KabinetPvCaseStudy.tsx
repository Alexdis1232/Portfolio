"use client";

import { LoadFadeIn, ScrollReveal, ScrollRevealH2 } from "@/components/ScrollReveal";
import { ZoomableArea } from "@/components/ZoomableArea";

const sexsmithStyle = { fontFamily: "'Sexsmith', serif" } as const;

const textToImageGap = "mt-10 sm:mt-12";

const projectInfo = [
  { label: "Роль", value: "Продуктовый дизайнер" },
  { label: "Направление", value: "B2E" },
  { label: "Формат", value: "mobile" },
  { label: "Год", value: "©2025" },
];

const contextBlocks = [
  {
    label: "Целевая аудитория:",
    text: "Сотрудники ПВЗ, консультанты Faberlic.",
  },
  {
    label: "Что делала:",
    text: "Работала над сценарием создания претензий к товарам для сотрудников пункта выдачи.",
  },
  {
    label: "Проблема:",
    text: "Функционал создания претензий отсутствовал в приложении, а десктопная версия была устаревшей и неудобной — это увеличивало время выполнения задач и нагрузку на сотрудников ПВ.",
  },
  {
    label: "Задача:",
    text: "Перенести функционал создания претензий из устаревшей десктопной версии в мобильное приложение для сотрудников пункта выдачи.",
  },
  {
    label: "Цель:",
    text: "Сократить время выполнения задачи, перенеся сценарий создания претензий в мобильное приложение и переосмыслив процесс.",
  },
];

const oldVersionProblems = [
  {
    image: "/pretenzia.png",
    caption: "Карточка заказа",
    title: "Точка входа не очевидна",
    text: "Создание претензии спрятано в выпадающем меню внутри карточки заказа — сотрудник не сразу понимает где это искать.",
  },
  {
    image: "/forma.png",
    caption: "Форма создания претензии",
    title: "Всё на одном экране",
    text: "Форма открывается модальным окном со всеми полями одновременно — тип, товар, действие, количество, причина, описание. Высокая когнитивная нагрузка, легко пропустить обязательное поле.",
  },
  {
    image: "/sohranit.png",
    caption: "Заполненная форма",
    title: "Неочевидная логика сохранения",
    text: "Если сотрудник не успевал закончить заполнение и закрывал форму — претензия автоматически уходила в черновики, никак об этом не сообщая. Не было ни уведомления, ни подтверждения, ни визуального маркера. Непонятно в какой момент это произошло и произошло ли вообще.",
  },
  {
    image: "/spisok.png",
    caption: "Список претензий",
    title: "Нет разделения по статусам",
    text: "Черновики и отправленные претензии в одном списке. Непонятно что требует действия прямо сейчас.",
  },
];

export function KabinetPvCaseStudy() {
  return (
    <ZoomableArea>
    <article className="pb-16 sm:pb-24">
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

            <p className="mt-6 max-w-[640px] text-[15px] leading-[1.65] text-[#0F0F0F]">
              Кабинет ПВ — приложение для сотрудников пунктов выдачи Faberlic.
              Оно помогает оформлять заказы и возвраты, подписывать документы в
              электронном виде и использовать сканер штрихкодов для
              идентификации заказов.
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/kabinet%20pv%20keys.png"
          alt="Кабинет ПВ — ключевые экраны мобильного приложения"
          width={890}
          height={536}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full max-w-full rounded-[24px] sm:rounded-[40px]"
        />
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
            <p className="mt-3 text-[15px] leading-[1.65] text-[#0F0F0F] sm:text-[19px]">
              Изменение бэкенда было недоступно — решение разрабатывалось в
              рамках существующей логики и данных.
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
            <p className="text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
              Прямые интервью не проводились — в качестве источника данных
              использовалась обратная связь от сотрудников ПВЗ, предоставленная
              командой поддержки. На основе этих данных были выявлены основные
              болевые точки сценария.
            </p>
          </ScrollReveal>

          <ScrollReveal className="w-full">
            <p className="text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
              Параллельно изучила старую десктопную версию сценария — и сразу
              стало понятно откуда берутся проблемы.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-10 flex w-full flex-col gap-16 sm:mt-12 sm:gap-20">
          {oldVersionProblems.map((item, index) => (
            <ScrollReveal key={item.image} className="w-full">
              <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
                {index + 1}. {item.title}
              </p>
              <p className="mt-2 text-[15px] leading-[1.65] text-[#0F0F0F] sm:mt-3 sm:text-[19px]">
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
      </section>

    </article>
    </ZoomableArea>
  );
}
