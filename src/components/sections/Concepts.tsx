"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

const scrollAnimation = {
  initial: { opacity: 0.3, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

const mediaClassName =
  "m-0 block h-full min-h-0 w-full flex-1 rounded-[20px] object-cover p-0";

type BentoLayout = "square" | "wide" | "tall";

type ConceptCard = {
  title: string;
  number: string;
  subtitle: string;
  image?: string;
  video?: string;
  bento?: BentoLayout;
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

const bentoGridStyle: Record<string, CSSProperties> = {
  "(06)": {},
  "(07)": {},
  "(09)": { gridColumn: 3, gridRow: "1 / span 2" },
  "(08)": { gridColumn: "span 2", gridRow: 2 },
};

function BentoFrame({
  layout,
  children,
}: {
  layout: BentoLayout;
  children: ReactNode;
}) {
  const frameClass =
    "relative flex w-full items-center justify-center overflow-hidden bg-[#F5F5F5] p-0";

  if (layout === "square") {
    return (
      <div className={`${frameClass} aspect-square rounded-[40px]`}>{children}</div>
    );
  }

  if (layout === "wide") {
    return (
      <div
        className={`${frameClass} aspect-[11/4] rounded-[40px] sm:aspect-[5/2]`}
      >
        {children}
      </div>
    );
  }

  return (
    <div className={`${frameClass} min-h-0 flex-1 rounded-[40px]`}>{children}</div>
  );
}

function ConceptCardMedia({ concept }: { concept: ConceptCard }) {
  if (concept.bento) {
    const mediaClass =
      concept.bento === "wide"
        ? "max-h-full max-w-[92%] object-contain"
        : concept.number === "(06)"
          ? "max-h-[58%] max-w-[58%] object-contain"
          : concept.number === "(07)"
            ? "h-[42%] w-[42%] object-contain"
            : "max-h-[88%] max-w-[88%] object-contain";

    const content = concept.video ? (
      <video
        src={concept.video}
        autoPlay
        loop
        muted
        playsInline
        className={mediaClass}
      />
    ) : (
      <img src={concept.image} alt={concept.title} className={mediaClass} />
    );

    return (
      <BentoFrame layout={concept.bento}>{content}</BentoFrame>
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

  return (
    <img
      src={concept.image}
      alt={concept.title}
      className={mediaClassName}
    />
  );
}

function ConceptCardItem({ concept }: { concept: ConceptCard }) {
  return (
    <article className="flex h-full min-h-0 flex-col">
      {concept.bento === "tall" ? (
        <div className="flex min-h-0 flex-1 flex-col">
          <ConceptCardMedia concept={concept} />
        </div>
      ) : (
        <ConceptCardMedia concept={concept} />
      )}
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
    <motion.div className="h-full" style={style} {...scrollAnimation}>
      <ConceptCardItem concept={concept} />
    </motion.div>
  );
}

export function Concepts() {
  return (
    <section id="concepts" className="bg-white pb-32 pt-16">
      <motion.h1
        className="mb-10 font-sexsmith text-[48px] font-normal text-[#0F0F0F]"
        style={{ fontFamily: "'Sexsmith', serif" }}
        {...scrollAnimation}
      >
        Концепты
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-3"
        {...scrollAnimation}
      >
        {primaryConcepts.map((concept) => (
          <ConceptCardWrapper
            key={concept.number}
            concept={concept}
            style={
              concept.number === "(05)" ? { gridColumn: "span 2" } : undefined
            }
          />
        ))}
      </motion.div>

      <div className="mt-6 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-3 sm:grid-rows-2">
        {bentoConcepts.map((concept) => (
          <ConceptCardWrapper
            key={concept.number}
            concept={concept}
            style={bentoGridStyle[concept.number]}
          />
        ))}
      </div>
    </section>
  );
}
