"use client";

import { ScrollReveal, ScrollRevealH2 } from "@/components/ScrollReveal";

const contactButtonClass =
  "rounded-full bg-gray-pill px-[52px] py-6 text-[18px] lowercase text-black transition-[transform,background-color] duration-200 ease-in-out hover:scale-105 hover:bg-[#E8E8E8]";

const contactLinks = [
  { label: "telegram", href: "https://t.me/" },
  { label: "email", href: "mailto:hello@example.com" },
  { label: "linkedin", href: "https://www.linkedin.com/in/" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="-mt-[40px] flex flex-col items-center bg-white px-4 pb-[28px] pt-20 text-center"
    >
      <ScrollRevealH2
        className="font-sexsmith text-[62px] font-normal leading-[1.05] text-[#0F0F0F]"
        style={{ fontFamily: "'Sexsmith', serif" }}
      >
        Связаться со мной
      </ScrollRevealH2>

      <ScrollReveal className="mt-[32px] flex flex-col items-center gap-[30px]">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "email" ? undefined : "_blank"}
              rel={item.label === "email" ? undefined : "noopener noreferrer"}
              className={contactButtonClass}
            >
              {item.label} ↗
            </a>
          ))}
        </div>

        <p className="text-[14px] text-[#C7C7C7]">Alexandra Antonyuk ©2025</p>
      </ScrollReveal>
    </section>
  );
}
