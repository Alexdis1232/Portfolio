"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { ScrollRevealH1, scrollReveal } from "@/components/ScrollReveal";
import { AnimatePresence, motion } from "framer-motion";
import { PRIMARY_COL_WIDTH, PRIMARY_WIDE_WIDTH } from "@/config/layout";

type LightboxMedia = { type: "image" | "video"; src: string; alt: string };

const LightboxContext = createContext<(media: LightboxMedia) => void>(() => {});

function LightboxProvider({ children }: { children: ReactNode }) {
  const [media, setMedia] = useState<LightboxMedia | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const open = useCallback((next: LightboxMedia) => setMedia(next), []);
  const close = useCallback(() => setMedia(null), []);

  useEffect(() => {
    if (!media) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    // peek-to-hold: закрываем, как только отпустили кнопку/палец
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerup", close);
    window.addEventListener("pointercancel", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerup", close);
      window.removeEventListener("pointercancel", close);
    };
  }, [media, close]);

  return (
    <LightboxContext.Provider value={open}>
      {children}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {media && (
              <motion.div
                className="fixed inset-0 z-[999] flex cursor-zoom-out items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="pointer-events-none max-h-full max-w-full"
                  initial={{ scale: 0.94, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.94, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {media.type === "video" ? (
                    <video
                      src={media.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="max-h-[88vh] max-w-full rounded-[20px] object-contain"
                    />
                  ) : (
                    <img
                      src={media.src}
                      alt={media.alt}
                      className="max-h-[88vh] max-w-full rounded-[20px] object-contain"
                    />
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </LightboxContext.Provider>
  );
}

const mediaClassName =
  "m-0 block h-full min-h-0 w-full flex-1 rounded-[20px] object-cover p-0";

const primaryImageClassName = "m-0 block h-full w-full object-cover p-0";

const PRIMARY_IMAGE_FRAME_HEIGHT = 488;

function getFrameRadiusClass(number: string) {
  const squareCards = new Set(["(06)", "(07)", "(11)", "(12)", "(13)"]);

  return number === "(08)"
    ? "rounded-[26px] lg:rounded-[35px]"
    : squareCards.has(number)
      ? "rounded-[28px] lg:rounded-[40px]"
      : "rounded-[26px] lg:rounded-[40px]";
}

function PrimaryImageFrame({
  children,
  number,
}: {
  children: ReactNode;
  number: string;
}) {
  return (
    <div
      className={`relative w-full shrink-0 overflow-hidden bg-[#F5F5F5] ${getFrameRadiusClass(number)} ${frameResponsiveClass[number] ?? ""}`}
    >
      {children}
    </div>
  );
}

type BentoLayout = "square" | "wide" | "tall";
type FrameLayout = "square" | "wide" | "screen";

const BENTO_SQUARE_FRAME_SIZE = PRIMARY_COL_WIDTH;
const BENTO_WIDE_FRAME_HEIGHT = 108;
/** Сдвиг кадра (08) влево / вверх в px — меняй здесь */
const BENTO_08_VIDEO_OFFSET_MOBILE = { x: -60, y: -65 };
const BENTO_08_VIDEO_OFFSET_DESKTOP = { x: -60, y: -62 };
const BENTO_08_VIDEO_SCALE = 2.0;

const mobileTall = "max-lg:w-full max-lg:aspect-[161/294]";
const mobileSquare = "max-lg:w-full max-lg:aspect-square";
const mobileWide = "max-lg:w-full max-lg:aspect-[338/278]";
const mobileWideShort = "max-lg:w-full max-lg:aspect-[338/108]";

/** Mobile: 161×294 / 161×161 / wide; lg: desktop sizes */
const frameResponsiveClass: Record<string, string> = {
  "(01)": `${mobileTall} lg:w-[281px] lg:h-[488px] lg:aspect-auto`,
  "(02)": `${mobileTall} lg:w-[281px] lg:h-[488px] lg:aspect-auto`,
  "(03)": `${mobileTall} lg:w-[281px] lg:h-[488px] lg:aspect-auto`,
  "(04)": `${mobileTall} lg:w-[281px] lg:h-[488px] lg:aspect-auto`,
  "(05)": `${mobileWide} lg:w-[586px] lg:h-[488px] lg:aspect-auto`,
  "(06)": `${mobileSquare} lg:w-[281px] lg:h-[281px] lg:aspect-auto`,
  "(07)": `${mobileSquare} lg:w-[281px] lg:h-[281px] lg:aspect-auto`,
  "(08)": `${mobileWideShort} lg:h-[108px] lg:aspect-auto`,
  "(09)": `${mobileTall} lg:w-[281px] lg:h-[488px] lg:aspect-auto`,
  "(10)": `${mobileTall} lg:w-[281px] lg:h-[488px] lg:aspect-auto`,
  "(11)": `${mobileSquare} lg:w-[281px] lg:h-[281px] lg:aspect-auto`,
  "(12)": `${mobileSquare} lg:w-[281px] lg:h-[281px] lg:aspect-auto`,
  "(13)": `${mobileSquare} lg:w-[281px] lg:h-[281px] lg:aspect-auto`,
  "(14)": `${mobileWide} lg:w-[586px] lg:h-[488px] lg:aspect-auto`,
};

const bentoFrameSize: Record<string, { width: number | string; height: number }> = {
  "(06)": { width: BENTO_SQUARE_FRAME_SIZE, height: BENTO_SQUARE_FRAME_SIZE },
  "(07)": { width: BENTO_SQUARE_FRAME_SIZE, height: BENTO_SQUARE_FRAME_SIZE },
  "(08)": { width: PRIMARY_WIDE_WIDTH, height: BENTO_WIDE_FRAME_HEIGHT },
  "(09)": { width: BENTO_SQUARE_FRAME_SIZE, height: PRIMARY_IMAGE_FRAME_HEIGHT },
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
    title: "Quick Trip",
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

const primaryByNumber = Object.fromEntries(
  primaryConcepts.map((concept) => [concept.number, concept]),
);

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

const moreFrameSize: Record<string, { width: number | string; height: number }> = {
  "(10)": { width: PRIMARY_COL_WIDTH, height: PRIMARY_IMAGE_FRAME_HEIGHT },
  "(11)": { width: PRIMARY_COL_WIDTH, height: PRIMARY_COL_WIDTH },
  "(12)": { width: PRIMARY_COL_WIDTH, height: PRIMARY_COL_WIDTH },
  "(13)": { width: PRIMARY_COL_WIDTH, height: PRIMARY_COL_WIDTH },
  "(14)": { width: PRIMARY_WIDE_WIDTH, height: PRIMARY_IMAGE_FRAME_HEIGHT },
};

const moreMediaClass: Record<string, string> = {
  "(10)": "h-full w-full object-cover",
  "(11)": "h-full w-full object-contain",
  "(12)": "h-full w-full object-contain",
  "(13)": "h-full w-full object-contain",
  "(14)": "h-full w-full object-cover",
};

const displayNumberMap: Record<string, string> = {
  "(04)": "(03)",
  "(06)": "(04)",
  "(07)": "(05)",
  "(09)": "(06)",
  "(03)": "(07)",
  "(12)": "(11)",
  "(11)": "(10)",
  "(10)": "(11)",
  "(05)": "(12)",
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
    "relative flex shrink-0 items-center justify-center overflow-hidden bg-[#F5F5F5] p-0";
  const frameSize = moreFrameSize[number];

  if (frameSize && typeof frameSize.width === "number") {
    return (
      <div
        className={`${frameClass} w-full ${getFrameRadiusClass(number)} ${frameResponsiveClass[number] ?? ""}`}
        style={{
          border: number === "(12)" ? "1px solid #E0E0E0" : undefined,
          boxSizing: "border-box",
        }}
      >
        {number === "(12)" ? (
          <div className="relative h-full w-full overflow-hidden">{children}</div>
        ) : (
          children
        )}
      </div>
    );
  }

  if (frame === "wide") {
    return (
      <div
        className={`${frameClass} w-full ${getFrameRadiusClass(number)} sm:aspect-[5/2]`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`${frameClass} aspect-square w-full ${getFrameRadiusClass(number)}`}
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
    "relative flex shrink-0 items-center justify-center overflow-hidden bg-[#F5F5F5] p-0";

  return (
    <div
      className={`${frameClass} w-full ${getFrameRadiusClass(number)} ${frameResponsiveClass[number] ?? ""}`}
    >
      {children}
    </div>
  );
}

function Bento08Video({ src }: { src: string }) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const { x, y } = isDesktop
    ? BENTO_08_VIDEO_OFFSET_DESKTOP
    : BENTO_08_VIDEO_OFFSET_MOBILE;

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#F5F5F5]">
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${x}px, ${y}px) scale(${BENTO_08_VIDEO_SCALE})`,
          transformOrigin: "center center",
        }}
      >
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="block h-full w-full object-cover"
        />
      </div>
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
          preload="metadata"
          className={mediaClass}
          style={moreMediaStyle}
        />
      ) : (
        <img
          src={concept.gif ?? concept.image}
          alt={concept.title}
          loading="lazy"
          decoding="async"
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
    if (concept.number === "(08)" && concept.video) {
      return (
        <BentoFrame layout={concept.bento} number={concept.number}>
          <Bento08Video src={concept.video} />
        </BentoFrame>
      );
    }

    const mediaClass =
      concept.number === "(06)"
          ? "h-full w-full object-cover"
          : concept.number === "(07)"
            ? "h-full w-full object-cover"
            : concept.number === "(09)"
              ? "h-full w-full object-cover"
              : "max-h-[88%] max-w-[88%] object-contain";

    const bentoMediaStyle: CSSProperties | undefined =
      concept.number === "(09)"
        ? {
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }
        : concept.number === "(07)"
          ? {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "scale(2.75) translateY(-5px)",
              transformOrigin: "center",
            }
            : undefined;

    const content = concept.video ? (
      <video
        src={concept.video}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className={mediaClass}
        style={bentoMediaStyle}
      />
    ) : (
      <img
        src={concept.image}
        alt={concept.title}
        loading="lazy"
        decoding="async"
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
        preload="metadata"
        className={mediaClassName}
        style={{ width: "100%", borderRadius: "20px", objectFit: "cover" }}
      />
    );
  }

  const isPrimaryImage =
    concept.number === "(01)" ||
    concept.number === "(02)" ||
    concept.number === "(03)" ||
    concept.number === "(04)" ||
    concept.number === "(05)";

  if (isPrimaryImage) {
    return (
      <PrimaryImageFrame number={concept.number}>
        <img
          src={concept.image}
          alt={concept.title}
          loading="lazy"
          decoding="async"
          className={primaryImageClassName}
        />
      </PrimaryImageFrame>
    );
  }

  return (
    <img
      src={concept.image}
      alt={concept.title}
      loading="lazy"
      decoding="async"
      className={mediaClassName}
    />
  );
}

function ConceptCardItem({ concept }: { concept: ConceptCard }) {
  const squareCards = new Set(["(06)", "(07)", "(11)", "(12)", "(13)"]);
  const cardRadiusClass = squareCards.has(concept.number)
    ? "rounded-[28px] lg:rounded-[40px]"
    : concept.number === "(08)"
      ? "rounded-[26px] lg:rounded-[35px]"
      : "rounded-[26px] lg:rounded-[40px]";

  const openLightbox = useContext(LightboxContext);
  const lightboxSrc = concept.video ?? concept.gif ?? concept.image;

  // Долгое нажатие: зум открывается только если палец/мышь удержаны на месте.
  const LONG_PRESS_MS = 350;
  const MOVE_CANCEL_PX = 12;
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pressStart = useRef<{ x: number; y: number } | null>(null);

  const cancelPress = useCallback(() => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
    pressStart.current = null;
  }, []);

  return (
    <article className="flex min-w-0 w-full flex-col">
      <motion.div
        className={`origin-center w-full cursor-zoom-in select-none overflow-hidden ${cardRadiusClass}`}
        {...scrollReveal}
        onPointerDown={(e) => {
          if (!lightboxSrc) return;
          pressStart.current = { x: e.clientX, y: e.clientY };
          cancelPress();
          pressTimer.current = setTimeout(() => {
            openLightbox({
              type: concept.video ? "video" : "image",
              src: lightboxSrc,
              alt: concept.title,
            });
          }, LONG_PRESS_MS);
        }}
        onPointerMove={(e) => {
          if (!pressStart.current) return;
          const dx = Math.abs(e.clientX - pressStart.current.x);
          const dy = Math.abs(e.clientY - pressStart.current.y);
          if (dx > MOVE_CANCEL_PX || dy > MOVE_CANCEL_PX) cancelPress();
        }}
        onPointerUp={cancelPress}
        onPointerCancel={cancelPress}
        onPointerLeave={cancelPress}
        onContextMenu={(e) => e.preventDefault()}
      >
        <ConceptCardMedia concept={concept} />
      </motion.div>
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
            className="font-sexsmith text-left text-[22px] font-normal text-[#0F0F0F] sm:text-[28px]"
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
        <span className="shrink-0 text-[16px] text-[#848484]">
          {displayNumberMap[concept.number] ?? concept.number}
        </span>
      </div>
    </article>
  );
}

function ConceptCardWrapper({
  concept,
  className = "",
  style,
  mobileCentered = true,
}: {
  concept: ConceptCard | undefined;
  className?: string;
  style?: CSSProperties;
  mobileCentered?: boolean;
}) {
  if (!concept) return null;

  const isWideMobile =
    concept.number === "(05)" ||
    concept.number === "(08)" ||
    concept.number === "(14)";

  return (
    <div
      className={`min-w-0 ${mobileCentered && !isWideMobile ? "max-lg:mx-auto" : ""} ${className}`}
      style={style}
    >
      <ConceptCardItem concept={concept} />
    </div>
  );
}

function ConceptsMobileLayout() {
  return (
    <div className="space-y-4 lg:hidden">
      <div className="grid w-full grid-cols-2 gap-4">
        <ConceptCardWrapper concept={primaryByNumber["(01)"]} mobileCentered={false} />
        <ConceptCardWrapper concept={primaryByNumber["(02)"]} mobileCentered={false} />
      </div>

      <div className="grid w-full grid-cols-2 items-start gap-4">
        {/* 2 ряд: Quick Trip (04) 161×294 + Quran book (06) 161×161 */}
        <ConceptCardWrapper concept={primaryByNumber["(04)"]} mobileCentered={false} />
        <ConceptCardWrapper concept={bentoByNumber["(06)"]} mobileCentered={false} />

        {/* 3 ряд: Heart (07) под Quick Trip + Language Coach (09) высокая */}
        <ConceptCardWrapper concept={bentoByNumber["(07)"]} mobileCentered={false} />
        <ConceptCardWrapper
          concept={bentoByNumber["(09)"]}
          mobileCentered={false}
          style={{ marginTop: "calc((100vw - 2rem) * -0.39)" }}
        />

        {/* 4 ряд: Meet Point (03) под Heart + Ring bell (12) квадрат */}
        <ConceptCardWrapper concept={primaryByNumber["(03)"]} mobileCentered={false} />
        <ConceptCardWrapper concept={moreByNumber["(12)"]} mobileCentered={false} />

        {/* 5 ряд: Vita (13) под Meet Point + Smart Home (10) */}
        <ConceptCardWrapper concept={moreByNumber["(13)"]} mobileCentered={false} />
        <ConceptCardWrapper
          concept={moreByNumber["(10)"]}
          mobileCentered={false}
          style={{ marginTop: "calc((100vw - 2rem) * -0.39)" }}
        />

        {/* 6 ряд: Discover places (05) на всю ширину */}
        <ConceptCardWrapper
          concept={primaryByNumber["(05)"]}
          className="col-span-2 w-full"
          mobileCentered={false}
        />

        {/* Остальные мобильные можно добавить ниже при необходимости */}
      </div>
    </div>
  );
}

function ConceptsDesktopLayout() {
  return (
    <div className="hidden lg:block">
      <div className="grid grid-cols-3 items-start gap-6">
        {primaryConcepts.map((concept) => (
          <ConceptCardWrapper
            key={concept.number}
            concept={concept}
            mobileCentered={false}
            className={concept.number === "(05)" ? "col-span-2" : undefined}
          />
        ))}
      </div>

      <div className="mt-6 grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start gap-6">
        <div className="flex min-w-0 flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <ConceptCardWrapper
              concept={bentoByNumber["(06)"]}
              mobileCentered={false}
            />
            <ConceptCardWrapper
              concept={bentoByNumber["(07)"]}
              mobileCentered={false}
            />
          </div>
          <ConceptCardWrapper
            concept={bentoByNumber["(08)"]}
            mobileCentered={false}
            style={{ marginTop: -1 }}
          />
        </div>
        <ConceptCardWrapper
          concept={bentoByNumber["(09)"]}
          mobileCentered={false}
          className="self-start"
        />
      </div>

      <div className="mt-6 grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-start gap-6">
        <div className="flex min-w-0 flex-col gap-6">
          <ConceptCardWrapper
            concept={moreByNumber["(10)"]}
            mobileCentered={false}
          />
          <ConceptCardWrapper
            concept={moreByNumber["(11)"]}
            mobileCentered={false}
            className="self-start"
          />
        </div>
        <div className="flex min-w-0 flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <ConceptCardWrapper
              concept={moreByNumber["(13)"]}
              mobileCentered={false}
              className="self-start"
            />
            <ConceptCardWrapper
              concept={moreByNumber["(12)"]}
              mobileCentered={false}
              className="self-start"
            />
          </div>
          <ConceptCardWrapper
            concept={moreByNumber["(14)"]}
            mobileCentered={false}
            className="self-start"
          />
        </div>
      </div>
    </div>
  );
}

export function Concepts() {
  return (
    <section id="concepts" className="pb-0 pt-12 sm:pt-16">
      <ScrollRevealH1
        className="mb-[28px] font-sexsmith text-[32px] font-normal text-[#0F0F0F] sm:mb-[52px] sm:text-[48px]"
        style={{ fontFamily: "'Sexsmith', serif" }}
      >
        Концепты
      </ScrollRevealH1>

      <LightboxProvider>
        <ConceptsMobileLayout />
        <ConceptsDesktopLayout />
      </LightboxProvider>
    </section>
  );
}
