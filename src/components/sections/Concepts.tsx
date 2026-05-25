"use client";

import type { CSSProperties, ReactNode } from "react";
import { ScrollReveal, ScrollRevealH1 } from "@/components/ScrollReveal";

const mediaClassName =
  "m-0 block h-full min-h-0 w-full flex-1 rounded-[20px] object-cover p-0";

const primaryTallMediaClassName =
  "m-0 block w-full shrink-0 rounded-[20px] object-cover p-0";

const PRIMARY_TALL_IMAGE_HEIGHT = 488.5;

type BentoLayout = "square" | "wide" | "tall";
type FrameLayout = "square" | "wide" | "screen";

const BENTO_COL_WIDTH = 267.34;
const LANGUAGE_COACH_FRAME_HEIGHT = 488.51;
const BENTO_SQUARE_FRAME_HEIGHT = BENTO_COL_WIDTH;
const BENTO_WIDE_FRAME_WIDTH = 558.68;
const BENTO_WIDE_FRAME_HEIGHT = 120;

const bentoFrameSize: Record<string, { width: string | number; height: number }> = {
  "(06)": { width: "100%", height: BENTO_SQUARE_FRAME_HEIGHT },
  "(07)": { width: "100%", height: BENTO_SQUARE_FRAME_HEIGHT },
  "(08)": { width: BENTO_WIDE_FRAME_WIDTH, height: BENTO_WIDE_FRAME_HEIGHT },
  "(09)": { width: "100%", height: LANGUAGE_COACH_FRAME_HEIGHT },
};

type ConceptCard = {
  title: string;
  number: string;
  subtitle: string;
  image?: string;
  gif?: string;
  video?: string;
  bento?: BentoLayout;
  frame?: FrameLayout;
};

const primaryConcepts: ConceptCard[] = [
  { image: "/01.png", title: "AI Outfits", number: "(01)", subtitle: "Screen" },
  {
    image: "/02.png",
    title: "Smart navigator",
    number: "(02)",
    subtitle: "Screen",
  },
  { image: "/03.png", title: "Meet Point", number: "(03)", subtitle: "Screen" },
  {
    image: "/04.png",
    title: "Quick Trip Planner (AI)",
    number: "(04)",
    subtitle: "Screen",
  },
  {
    image: "/05.png",
    title: "Discover places",
    number: "(05)",
    subtitle: "Screen",
  },
];

const bentoConcepts: ConceptCard[] = [
  {
    image: "/06.png",
    title: "Quran book",
    number: "(06)",
    subtitle: "Icon",
    bento: "square",
  },
  {
    video: "/07.mp4",
    title: "Heart",
    number: "(07)",
    subtitle: "Animation",
    bento: "square",
  },
  {
    image: "/09.png",
    title: "Language Coach",
    number: "(09)",
    subtitle: "Screen",
    bento: "tall",
  },
  {
    video: "/08.mp4",
    title: "Voice search",
    number: "(08)",
    subtitle: "Animation",
    bento: "wide",
  },
];

const bentoByNumber = Object.fromEntries(
  bentoConcepts.map((concept) => [concept.number, concept]),
);

const moreConcepts: ConceptCard[] = [
  {
    image: "/10.png",
    title: "Smart Home",
    number: "(10)",
    subtitle: "Screen",
    frame: "screen",
  },
  {
    image: "/11.png",
    title: "Voice assistant",
    number: "(11)",
    subtitle: "Icon",
    frame: "square",
  },
  {
    gif: "/12.gif",
    title: "Ring bell",
    number: "(12)",
    subtitle: "Animation",
    frame: "square",
  },
  {
    video: "/13.mp4",
    title: "Vita",
    number: "(13)",
    subtitle: "Animation",
    frame: "square",
  },
  {
    image: "/14.png",
    title: "League of Legends landing page",
    number: "(14)",
    subtitle: "Screen",
    frame: "wide",
  },
];

const moreByNumber = Object.fromEntries(
  moreConcepts.map((concept) => [concept.number, concept]),
);

const MORE_SCREEN_WIDTH = 267.33;
const MORE_WIDE_WIDTH = 558.67;
const MORE_TALL_HEIGHT = 488.5;

const moreFrameSize: Record<string, { width: number; height: number }> = {
  "(10)": { width: MORE_SCREEN_WIDTH, height: MORE_TALL_HEIGHT },
  "(14)": { width: MORE_WIDE_WIDTH, height: MORE_TALL_HEIGHT },
};

const moreMediaClass: Record<string, string> = {
  "(10)": "h-full w-full object-cover",
  "(11)": "h-full w-full object-contain",
  "(12)": "h-full w-full object-contain",
  "(13)": "h-full w-full object-contain",
  "(14)": "h-full w-full object-cover",
};

function ConceptFrame({
  frame,
  number,
  children,
}: {
  frame: FrameLayout;
  number: string;
  children: ReactNode;
}) {
  const frameClass =
    "relative flex w-full shrink-0 items-center justify-center overflow-hidden bg-[#F5F5F5] p-0";
  const frameSize = moreFrameSize[number];

  if (frameSize) {
    return (
      <div
        className={frameClass}
        style={{
          width: frameSize.width,
          height: frameSize.height,
          borderRadius: 40,
        }}
      >
        {children}
      </div>
    );
  }

  if (frame === "wide") {
    return (
      <div
        className={`${frameClass} w-full rounded-[40px] sm:aspect-[5/2]`}
        style={{ borderRadius: 40 }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`${frameClass} aspect-square w-full rounded-[40px]`}
      style={{
        borderRadius: 40,
        border: number === "(12)" ? "1px solid #E0E0E0" : undefined,
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}

function BentoFrame({
  layout,
  number,
  children,
}: {
  layout: BentoLayout;
  number: string;
  children: ReactNode;
}) {
  const frameClass =
    "relative flex w-full shrink-0 items-center justify-center overflow-hidden bg-[#F5F5F5] p-0";
  const frameSize = bentoFrameSize[number];

  return (
    <div
      className={frameClass}
      style={{
        width: frameSize?.width ?? "100%",
        height: frameSize?.height,
        maxWidth: layout === "tall" ? BENTO_COL_WIDTH : undefined,
        borderRadius: number === "(08)" ? 35 : 40,
      }}
    >
      {children}
    </div>
  );
}

function ConceptCardMedia({ concept }: { concept: ConceptCard }) {
  if (concept.frame) {
    const mediaClass = moreMediaClass[concept.number] ?? "object-contain";

    const moreMediaStyle: CSSProperties | undefined =
      concept.number === "(11)"
        ? {
            width: "100%",
            height: "100%",
            objectFit: "contain",
            transform: "scale(1.04)",
            transformOrigin: "center center",
          }
        : concept.number === "(12)"
          ? {
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transform: "scale(1.5)",
              transformOrigin: "center center",
            }
          : concept.number === "(13)"
            ? {
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: "scale(4.5) translateY(-2px)",
                transformOrigin: "center center",
              }
            : undefined;

    const content = concept.video ? (
        <video
          src={concept.video}
          autoPlay
          loop
          muted
          playsInline
          className={mediaClass}
          style={moreMediaStyle}
        />
      ) : (
        <img
          src={concept.gif ?? concept.image}
          alt={concept.title}
          className={mediaClass}
          style={moreMediaStyle}
        />
      );

    return (
      <ConceptFrame frame={concept.frame} number={concept.number}>
        {content}
      </ConceptFrame>
    );
  }

  if (concept.bento) {
    const mediaClass =
      concept.number === "(08)"
        ? "h-full w-full object-contain"
        : concept.number === "(06)"
          ? "h-full w-full object-cover"
          : concept.number === "(07)"
            ? "h-full w-full object-cover"
            : concept.number === "(09)"
              ? "h-full w-full object-cover"
              : "max-h-[88%] max-w-[88%] object-contain";

    const bentoMediaStyle: CSSProperties | undefined =
      concept.number === "(09)"
        ? {
            width: BENTO_COL_WIDTH,
            height: LANGUAGE_COACH_FRAME_HEIGHT,
            objectFit: "cover",
          }
        : concept.number === "(07)"
          ? {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "scale(2.75)",
              transformOrigin: "center",
            }
          : concept.number === "(08)"
            ? {
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: "scale(5.5) translate(-12px, -11.5px)",
                transformOrigin: "center center",
              }
            : undefined;

    const content = concept.video ? (
      <video
        src={concept.video}
        autoPlay
        loop
        muted
        playsInline
        className={mediaClass}
        style={bentoMediaStyle}
      />
    ) : (
      <img
        src={concept.image}
        alt={concept.title}
        className={mediaClass}
        style={bentoMediaStyle}
      />
    );

    return (
      <BentoFrame layout={concept.bento} number={concept.number}>
        {content}
      </BentoFrame>
    );
  }

  if (concept.video) {
    return (
      <video
        src={concept.video}
        autoPlay
        loop
        muted
        playsInline
        className={mediaClassName}
        style={{ width: "100%", borderRadius: "20px", objectFit: "cover" }}
      />
    );
  }

  const isPrimaryTallImage =
    concept.number === "(04)" || concept.number === "(05)";

  const primaryMediaStyle: CSSProperties | undefined = isPrimaryTallImage
    ? {
        height: PRIMARY_TALL_IMAGE_HEIGHT,
        width: "100%",
        objectFit: "cover",
      }
    : undefined;

  return (
    <img
      src={concept.image}
      alt={concept.title}
      className={isPrimaryTallImage ? primaryTallMediaClassName : mediaClassName}
      style={primaryMediaStyle}
    />
  );
}

function ConceptCardItem({ concept }: { concept: ConceptCard }) {
  return (
    <article className="flex flex-col">
      <ConceptCardMedia concept={concept} />
      <div
        className="flex shrink-0 items-baseline justify-between gap-4"
        style={{ marginTop: "12px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          <h2
            className="font-sexsmith text-left text-[28px] font-normal text-[#0F0F0F]"
            style={{ fontFamily: "'Sexsmith', serif", margin: 0 }}
          >
            {concept.title}
          </h2>
          <p
            className="text-left text-[14px] text-[#C7C7C7]"
            style={{ margin: 0, padding: 0 }}
          >
            {concept.subtitle}
          </p>
        </div>
        <span className="shrink-0 text-[16px] text-[#0F0F0F]">{concept.number}</span>
      </div>
    </article>
  );
}

function ConceptCardWrapper({
  concept,
  style,
}: {
  concept: ConceptCard;
  style?: CSSProperties;
}) {
  return (
    <ScrollReveal style={style}>
      <ConceptCardItem concept={concept} />
    </ScrollReveal>
  );
}

export function Concepts() {
  return (
    <section id="concepts" className="bg-white pb-0 pt-16">
      <ScrollRevealH1
        className="mb-10 font-sexsmith text-[48px] font-normal text-[#0F0F0F]"
        style={{ fontFamily: "'Sexsmith', serif" }}
      >
        Концепты
      </ScrollRevealH1>

      <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-3">
        {primaryConcepts.map((concept) => (
          <ConceptCardWrapper
            key={concept.number}
            concept={concept}
            style={
              concept.number === "(05)"
                ? { gridColumn: "span 2", alignSelf: "start" }
                : concept.number === "(04)"
                  ? { alignSelf: "start" }
                  : undefined
            }
          />
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 items-start gap-6 sm:grid-cols-[558.68px_267.34px]">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <ConceptCardWrapper
              concept={bentoByNumber["(06)"]}
            />
            <ConceptCardWrapper concept={bentoByNumber["(07)"]} />
          </div>
          <ConceptCardWrapper concept={bentoByNumber["(08)"]} />
        </div>
        <ConceptCardWrapper
          concept={bentoByNumber["(09)"]}
          style={{ width: BENTO_COL_WIDTH }}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 items-start gap-6 sm:grid-cols-[267.33px_558.67px]">
        <div className="flex flex-col gap-6">
          <ConceptCardWrapper
            concept={moreByNumber["(10)"]}
            style={{ width: MORE_SCREEN_WIDTH }}
          />
          <ConceptCardWrapper concept={moreByNumber["(13)"]} />
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <ConceptCardWrapper concept={moreByNumber["(11)"]} />
            <ConceptCardWrapper concept={moreByNumber["(12)"]} />
          </div>
          <ConceptCardWrapper
            concept={moreByNumber["(14)"]}
            style={{ width: MORE_WIDE_WIDTH }}
          />
        </div>
      </div>
    </section>
  );
}
