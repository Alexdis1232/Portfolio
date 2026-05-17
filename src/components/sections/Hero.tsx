"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="hero-section bg-white pb-16">
      <div className="grid grid-cols-1 items-center gap-12 pt-16 lg:grid-cols-[1fr_auto] lg:gap-16 lg:pt-24">
        <h1
          className="hero-title text-[48px] font-normal leading-[1.1] text-[#0F0F0F]"
          style={{ fontFamily: "'Sexsmith', serif", letterSpacing: "0.01em" }}
        >
          Привет, я Саша — Продуктовый
          <br />
          дизайнер mobile-first,
          <br />
          с 3 годами опыта в B2C и B2B
          <br />
          продуктах: E-commerce и PetTech.
        </h1>

        <div className="shrink-0 justify-self-end">
          <motion.img
            src="/photome.jpg"
            alt="Саша"
            width={280}
            height={280}
            style={{ objectFit: "cover" }}
            className="grayscale"
            whileHover={{ rotate: 6, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </div>
      </div>
    </section>
  );
}
