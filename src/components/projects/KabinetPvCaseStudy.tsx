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
    text: "Точка входа в создание претензии была спрятана в выпадающем меню внутри карточки заказа. Сотрудник, который видит этот интерфейс впервые, просто не знает куда нажать — и либо тратит время на поиск, либо обращается за помощью к коллегам.",
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
    text: "Черновики и отправленные претензии лежали в одном списке без какого-либо разграничения. Чтобы утвердить претензию, нужно было открывать каждую по отдельности — быстрого действия прямо из списка не было. При большом количестве претензий это превращалось в рутину и занимало лишнее время.",
  },
];

const hypotheses = [
  {
    title: "Дробление сценария на шаги снизит нагрузку",
    text: "Если разбить длинную форму на отдельные экраны — выбор товара, тип претензии, причина — сотрудник будет сфокусирован на одной задаче за раз и реже допускать ошибки.",
  },
  {
    title: "Разделение статусов ускорит работу",
    text: "Если разделить черновики и утверждённые претензии на отдельные вкладки — сотрудник сразу видит что требует внимания и не тратит время на поиск нужной записи.",
  },
  {
    title: "Уведомление о статусе сохранения снизит тревогу",
    text: "Вместо отдельной кнопки «Сохранить в черновик» оставили автосохранение, но добавили тост-уведомление при выходе — сотрудник видит что данные сохранились и может спокойно вернуться к претензии позже.",
  },
  {
    title: "Быстрое утверждение из списка сократит время на рутину",
    text: "Если добавить возможность утверждать претензии прямо из списка — без необходимости открывать каждую по отдельности — сотрудник сможет обрабатывать несколько претензий быстрее.",
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

        <ScrollReveal className="mt-16 sm:mt-20">
          <p className="text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
            Далее, разобравшись с проблемами и их следствиями, я вывела такие{" "}
            <span className="font-bold">гипотезы:</span>
          </p>
        </ScrollReveal>

        <div className="mt-10 flex w-full flex-col gap-8 sm:mt-12 sm:gap-10">
          {hypotheses.map((h) => (
            <ScrollReveal
              key={h.title}
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
                {h.text}
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
            Дробление сценария на шаги
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-[#0F0F0F] sm:mt-6 sm:text-[19px]">
            Сценарий был разбит на отдельные шаги чтобы снизить когнитивную
            нагрузку — сотрудник решает одну задачу за раз и не держит в голове
            всю форму целиком. Претензии разделены по статусам чтобы было понятно
            что требует действия прямо сейчас.
          </p>
        </ScrollReveal>

        <ScrollReveal className={textToImageGap}>
          <div className="overflow-hidden rounded-[16px] sm:rounded-[24px]">
            {/* mobile: квадрат (телефон крупнее) */}
            <video
              src="/kabinet_pv_video.mp4?v=3"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="block h-auto w-full max-w-full sm:hidden"
            />
            {/* desktop: горизонтальное */}
            <video
              src="/kabinet_pv_video_desktop.mp4?v=3"
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
          <p className="mt-4 text-[15px] leading-[1.65] text-[#0F0F0F] sm:mt-6 sm:text-[19px]">
            При закрытии незавершённой претензии приложение автоматически
            сохраняет её в черновики и показывает тост-уведомление. Сотрудник
            видит что данные не потеряны и может вернуться к оформлению в любой
            момент — без тревоги и лишних вопросов.
          </p>
        </ScrollReveal>

        <ScrollReveal className={textToImageGap}>
          <div className="overflow-hidden rounded-[16px] sm:rounded-[24px]">
            {/* mobile: квадрат */}
            <video
              src="/kabinet_pv_drafts.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="block h-auto w-full max-w-full sm:hidden"
            />
            {/* desktop: горизонтальное */}
            <video
              src="/kabinet_pv_drafts_desktop.mp4"
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
          <p className="mt-4 text-[15px] leading-[1.65] text-[#0F0F0F] sm:mt-6 sm:text-[19px]">
            Чтобы сотрудник сразу понимал какие претензии требуют действия —
            разделила список на две вкладки: черновики и утверждённые. Это
            убирает необходимость просматривать всё подряд в поисках
            незавершённых записей.
          </p>
        </ScrollReveal>

        <ScrollReveal className={textToImageGap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/chernoviki.png"
            alt="Кабинет ПВ — вкладка черновиков в списке претензий"
            width={1780}
            height={1070}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full max-w-full rounded-[16px] sm:rounded-[24px]"
          />
          <p className="mt-3 text-center text-[15px] leading-none text-[#C7C7C7] sm:mt-6">
            Черновики
          </p>
        </ScrollReveal>
      </section>

      <section className="mt-16 sm:mt-20">
        <ScrollRevealH2
          className="font-sexsmith text-[32px] font-normal leading-[1.1] text-[#0F0F0F] sm:text-[48px]"
          style={sexsmithStyle}
        >
          Юзабилити-тестирование
        </ScrollRevealH2>

        <ScrollReveal className="mt-6 sm:mt-8">
          <p className="text-[15px] sm:text-[19px] leading-[1.65] text-[#0F0F0F]">
            Следующим этапом было юзабилити-тестирование. Провела
            модерируемое юзабилити-тестирование с 7 респондентами. Все
            участники выполняли задачи фактически без ошибок, однако тест
            помог подсветить точки для улучшения. По результатам внесла два
            изменения:
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-12 sm:mt-16">
          <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
            Размер каунтера
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-[#0F0F0F] sm:mt-6 sm:text-[19px]">
            Сотрудники иногда промахивались по кнопкам — увеличила размер
            степпера и добавила отображение максимально допустимого
            количества товара, чтобы сразу было понятно в каких пределах
            можно изменять значение.
          </p>
        </ScrollReveal>

        <ScrollReveal className={textToImageGap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/do%20posle%20caunter.png"
            alt="Кабинет ПВ — счётчик количества товара до и после"
            width={1780}
            height={1070}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full max-w-full rounded-[16px] sm:rounded-[24px]"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-12 sm:mt-16">
          <p className="text-[15px] font-bold leading-[1.4] text-[#0F0F0F] sm:text-[19px]">
            Счётчик черновиков
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-[#0F0F0F] sm:mt-6 sm:text-[19px]">
            В ходе теста стало понятно что сотрудники не всегда замечали
            незавершённые претензии — вкладка «Черновики» не давала никакого
            сигнала. Добавила бейдж с количеством черновиков чтобы сотрудник
            сразу видел есть ли незавершённые претензии и не забывал
            вернуться к ним.
          </p>
        </ScrollReveal>

        <ScrollReveal className={textToImageGap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/do%20posle%20chernoviki.png"
            alt="Кабинет ПВ — бейдж со счётчиком черновиков до и после"
            width={1780}
            height={1070}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full max-w-full rounded-[16px] sm:rounded-[24px]"
          />
        </ScrollReveal>
      </section>

    </article>
    </ZoomableArea>
  );
}
