"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

const LONG_PRESS_MS = 350;
const MOVE_CANCEL_PX = 12;
const MIN_IMAGE_SIZE = 140; // мелкие иконки/логотипы не увеличиваем

/**
 * Оборачивает область: долгое нажатие на любой достаточно большой <img>
 * внутри открывает его на весь экран. Отпускание/прокрутка — закрывает.
 */
export function ZoomableArea({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const [src, setSrc] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const start = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => setMounted(true), []);

  const cancel = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    start.current = null;
  }, []);

  const close = useCallback(() => setSrc(null), []);

  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerup", close);
    window.addEventListener("pointercancel", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerup", close);
      window.removeEventListener("pointercancel", close);
    };
  }, [src, close]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const img = (e.target as HTMLElement).closest("img");
    if (!img) return;
    const rect = img.getBoundingClientRect();
    if (Math.min(rect.width, rect.height) < MIN_IMAGE_SIZE) return;
    start.current = { x: e.clientX, y: e.clientY };
    cancel();
    timer.current = setTimeout(() => {
      setSrc((img as HTMLImageElement).currentSrc || (img as HTMLImageElement).src);
    }, LONG_PRESS_MS);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!start.current) return;
    if (
      Math.abs(e.clientX - start.current.x) > MOVE_CANCEL_PX ||
      Math.abs(e.clientY - start.current.y) > MOVE_CANCEL_PX
    )
      cancel();
  };

  return (
    <div
      className={className}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={cancel}
      onPointerLeave={cancel}
      onContextMenu={(e) => {
        if ((e.target as HTMLElement).closest("img")) e.preventDefault();
      }}
      style={{ WebkitTouchCallout: "none" }}
    >
      {children}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {src && (
              <motion.div
                className="fixed inset-0 z-[999] flex cursor-zoom-out items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.img
                  src={src}
                  alt=""
                  className="pointer-events-none max-h-[88vh] max-w-full rounded-[20px] object-contain"
                  initial={{ scale: 0.94, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.94, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
