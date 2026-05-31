"use client";

import { motion } from "framer-motion";
import { scrollReveal } from "@/components/ScrollReveal";

export function PhotoCollage() {
  return (
    <motion.div
      id="photo-collage"
      className="photo-collage relative mx-auto w-full"
      initial={scrollReveal.initial}
      whileInView={scrollReveal.whileInView}
      transition={scrollReveal.transition}
      viewport={scrollReveal.viewport}
      style={{ transformOrigin: "center" }}
    >
      <img
        src="/collageblock.png?v=5"
        alt=""
        loading="eager"
        decoding="async"
        className="block h-auto w-full"
      />
    </motion.div>
  );
}
