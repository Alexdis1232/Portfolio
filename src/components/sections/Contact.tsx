"use client";

import { useState } from "react";
import DecryptedText from "@/components/DecryptedText";
import { ScrollReveal, ScrollRevealH2 } from "@/components/ScrollReveal";
import { useButtonClickSound } from "@/hooks/useButtonClickSound";
import { useContactHoverSound } from "@/hooks/useContactHoverSound";
const contactButtonClass =
  "press-bounce nav-hover flex h-auto w-full flex-1 items-center justify-center rounded-full bg-gray-pill py-4 text-[13px] lowercase text-black transition-colors duration-200 ease-in-out active:bg-[#E8E8E8] sm:h-[75px] sm:py-0 sm:text-[18px]";

const contactLinks = [
  { label: "telegram", href: "https://t.me/podrazhayu" },
  { label: "email", href: "mailto:antonyuk10@gmail.com" },
  { label: "linkedin", href: "https://www.linkedin.com/in/" },
];

export function Contact() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [hoverTrigger, setHoverTrigger] = useState(0);
  const playClick = useButtonClickSound();
  const playHover = useContactHoverSound();

  return (
    <section
      id="contact"
      className="relative z-10 -mt-[20px] flex w-full flex-col items-center pb-[19px] pt-10 text-center sm:pb-[44px]"
    >
      <ScrollRevealH2
        className="font-sexsmith text-[36px] font-normal leading-[1.05] text-[#0F0F0F] sm:text-[48px] lg:text-[62px]"
        style={{ fontFamily: "'Sexsmith', serif", opacity: 1 }}
        initial={{ opacity: 1, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <DecryptedText
          text="Связаться со мной"
          externalHover={hoveredButton !== null}
          hoverTrigger={hoverTrigger}
          animateOn="hover"
          sequential={true}
          revealDirection="start"
          speed={50}
        />
      </ScrollRevealH2>

      <ScrollReveal className="mt-6 flex w-full flex-col items-center gap-6 sm:mt-[32px] sm:gap-[30px]">
        <div className="flex w-screen gap-1 px-4 sm:w-full sm:gap-2 sm:px-0">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "email" ? undefined : "_blank"}
              rel={item.label === "email" ? undefined : "noopener noreferrer"}
              className={contactButtonClass}
              onPointerDown={playClick}
              onMouseEnter={() => {
                playHover();
                setHoveredButton(item.label);
                setHoverTrigger((count) => count + 1);
              }}
              onMouseLeave={() => setHoveredButton(null)}
            >
              {item.label} ↗
            </a>
          ))}
        </div>

        <p className="text-[14px] text-[#C7C7C7]">Alexandra Antonyuk ♥ 2025</p>
      </ScrollReveal>
    </section>
  );
}
