"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export function PhotoCollage() {
  return (
    <div
      id="photo-collage"
      className="bg-white"
      style={{
        width: "100vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        marginTop: -65,
      }}
    >
      <ScrollReveal>
        <img
          src="/collageblock.png?v=3"
          alt=""
          loading="lazy"
          decoding="async"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />
      </ScrollReveal>
    </div>
  );
}
