"use client";

import { useEffect, useRef, useState } from "react";

const CURSOR_SIZE_DEFAULT = 50;
const CURSOR_SIZE_HOVER = 50;
const CURSOR_SRC = "/cat.png.png";

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [cursorSrc, setCursorSrc] = useState(CURSOR_SRC);

  useEffect(() => {
    const root = rootRef.current;
    const img = imgRef.current;
    if (!root || !img) return;

    let x = 0;
    let y = 0;
    let rafId = 0;

    const paint = () => {
      rafId = 0;
      root.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const handleMouseMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!rafId) rafId = requestAnimationFrame(paint);
    };

    const handleEnter = () => {
      img.style.width = `${CURSOR_SIZE_HOVER}px`;
      img.style.height = `${CURSOR_SIZE_HOVER}px`;
    };

    const handleLeave = () => {
      img.style.width = `${CURSOR_SIZE_DEFAULT}px`;
      img.style.height = `${CURSOR_SIZE_DEFAULT}px`;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const clickables = document.querySelectorAll<HTMLElement>("a, button");
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="custom-cursor-root pointer-events-none fixed left-0 top-0 z-[9999] will-change-transform"
      style={{ pointerEvents: "none" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={cursorSrc}
        alt=""
        width={CURSOR_SIZE_DEFAULT}
        height={CURSOR_SIZE_DEFAULT}
        draggable={false}
        decoding="async"
        onError={() => {
          setCursorSrc((current) => {
            if (current === "/cat.png.png") return "/cat.png";
            if (current === "/cat.png") return "/road.svg";
            return current;
          });
        }}
        style={{
          width: CURSOR_SIZE_DEFAULT,
          height: CURSOR_SIZE_DEFAULT,
          transform: "rotate(-10deg)",
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
    </div>
  );
}
