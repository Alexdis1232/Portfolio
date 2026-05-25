"use client";

import { useEffect, useState } from "react";

const CURSOR_SIZE_DEFAULT = 15;
const CURSOR_SIZE_HOVER = 20;

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(CURSOR_SIZE_DEFAULT);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleEnter = () => setSize(CURSOR_SIZE_HOVER);
    const handleLeave = () => setSize(CURSOR_SIZE_DEFAULT);

    const clickables = document.querySelectorAll<HTMLElement>("a, button");
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        transition: "transform 0.1s",
        pointerEvents: "none",
      }}
    >
      <img
        src="/road.svg"
        alt=""
        width={size}
        height={size}
        style={{
          width: size,
          height: size,
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
    </div>
  );
}
