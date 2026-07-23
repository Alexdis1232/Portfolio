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
const MIN_MEDIA_SIZE = 140; // мелкие иконки/логотипы не увеличиваем

type ZoomMedia = { type: "image" | "video"; src: string };

/**
 * Оборачивает область: долгое нажатие на любой достаточно большой <img> или
 * <video> внутри открывает его на весь экран. Отпускание/прокрутка — закрывает.
 */
export function ZoomableArea({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const [media, setMedia] = useState<ZoomMedia | null>(null);
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

  const close = useCallback(() => setMedia(null), []);

  useEffect(() => {
    if (!media) return;
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
  }, [media, close]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = (e.target as HTMLElement).closest("img, video");
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (Math.min(rect.width, rect.height) < MIN_MEDIA_SIZE) return;
    start.current = { x: e.clientX, y: e.clientY };
    cancel();
    timer.current = setTimeout(() => {
      if (el.tagName === "VIDEO") {
        const v = el as HTMLVideoElement;
        setMedia({ type: "video", src: v.currentSrc || v.src });
      } else {
        const img = el as HTMLImageElement;
        setMedia({ type: "image", src: img.currentSrc || img.src });
      }
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
        if ((e.target as HTMLElement).closest("img, video")) e.preventDefault();
      }}
      style={{ WebkitTouchCallout: "none" }}
    >
      {children}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {media && (
              <motion.div
                className="fixed inset-0 z-[999] flex cursor-zoom-out items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="pointer-events-none max-h-full max-w-full"
                  initial={{ scale: 0.94, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.94, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {media.type === "video" ? (
                    <video
                      src={media.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="max-h-[88vh] max-w-full rounded-[20px] object-contain"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={media.src}
                      alt=""
                      className="max-h-[88vh] max-w-full rounded-[20px] object-contain"
                    />
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
