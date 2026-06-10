"use client";

import { useEffect, useRef } from "react";

const CURSOR_SIZE = 15;

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

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

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="custom-cursor-root pointer-events-none fixed left-0 top-0 z-[9999] will-change-transform"
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/road.svg"
        alt=""
        width={CURSOR_SIZE}
        height={CURSOR_SIZE}
        draggable={false}
        decoding="async"
        className="block"
        style={{
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
        }}
      />
    </div>
  );
}
