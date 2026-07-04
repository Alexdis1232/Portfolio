"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const CURSOR_SIZE = 15;
const CURSOR_VIEW_SIZE = 90;
export const CURSOR_VIEW_HOVER_EVENT = "cursor:view-hover";

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [viewHover, setViewHover] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setViewHover(false);
  }, [pathname]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    document.body.classList.add("custom-cursor-active");

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
      root.style.opacity = "1";
      if (!rafId) rafId = requestAnimationFrame(paint);
    };

    const handleViewHover = (event: Event) => {
      setViewHover(Boolean((event as CustomEvent<boolean>).detail));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener(CURSOR_VIEW_HOVER_EVENT, handleViewHover);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener(CURSOR_VIEW_HOVER_EVENT, handleViewHover);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="custom-cursor-root pointer-events-none fixed left-0 top-0 z-[99999] flex items-center justify-center opacity-0 will-change-transform"
      aria-hidden
    >
      <motion.div
        initial={false}
        animate={{
          width: viewHover ? CURSOR_VIEW_SIZE : CURSOR_SIZE,
          height: viewHover ? CURSOR_VIEW_SIZE : CURSOR_SIZE,
          backgroundColor: viewHover ? "#0F0F0F" : "rgba(15,15,15,0)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 15, mass: 0.7 }}
        className="relative flex items-center justify-center rounded-full"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src="/road.svg"
          alt=""
          width={CURSOR_SIZE}
          height={CURSOR_SIZE}
          draggable={false}
          decoding="async"
          initial={false}
          animate={{ opacity: viewHover ? 0 : 1, scale: viewHover ? 0.4 : 1 }}
          transition={{ duration: 0.15 }}
          className="absolute"
          style={{ width: CURSOR_SIZE, height: CURSOR_SIZE }}
        />

        <motion.span
          initial={false}
          animate={{ opacity: viewHover ? 1 : 0, scale: viewHover ? 1 : 0.4 }}
          transition={{ duration: 0.15, delay: viewHover ? 0.1 : 0 }}
          className="absolute whitespace-nowrap text-[12px] font-medium lowercase tracking-wide text-white"
        >
          перейти
        </motion.span>
      </motion.div>
    </div>
  );
}
