import { useEffect, useRef } from "react";

/** Plays a muted video only while it's scrolled into view, pausing it off-screen so a
 *  page with several background videos isn't decoding all of them at once. The
 *  rootMargin starts playback (and therefore buffering, since preload is only
 *  "metadata") before the video is actually on screen, so it has already
 *  started loading by the time it becomes visible instead of visibly stalling. */
export function useAutoplayInView<T extends HTMLVideoElement>(
  threshold = 0.35,
  rootMargin = "600px 0px",
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
