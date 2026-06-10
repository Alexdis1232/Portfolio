"use client";

import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TypingAnimation } from "@/registry/magicui/typing-animation";

const BUBBLE_TEXT = "Привет!";

export function HeroSpeechBubble() {
  const rootRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rootRef, { once: true, amount: 0.4 });
  const [showHi, setShowHi] = useState(false);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute left-[calc(100%-10px)] top-[22px] z-10 translate-x-[45px] sm:top-[26px]"
      aria-hidden
    >
      <div className="relative origin-top-left">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/cursorb.svg"
          alt=""
          width={23}
          height={23}
          className="absolute z-20"
          style={{ left: -8, top: -15 }}
          draggable={false}
        />
        <div
          className="relative ml-[10px] mt-[10px] whitespace-nowrap text-white"
          style={{
            backgroundColor: "#CB30E0",
            padding: "10px 12px",
            fontSize: 15,
            lineHeight: 1.2,
            borderRadius: "0 10px 10px 10px",
          }}
        >
          <span className="inline-flex items-center" style={{ gap: 2 }}>
            <TypingAnimation
              start={isInView}
              onComplete={() => setShowHi(true)}
            >
              {BUBBLE_TEXT}
            </TypingAnimation>
            {showHi ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/hi.png"
                alt=""
                width={15}
                height={15}
                className="shrink-0"
                draggable={false}
              />
            ) : null}
          </span>
        </div>
      </div>
    </div>
  );
}
