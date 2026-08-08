import { useEffect, useRef } from "react";

/** Plays a muted video only while it's scrolled into view, pausing it off-screen so a
 *  page with several background videos isn't decoding all of them at once. */
export function useAutoplayInView<T extends HTMLVideoElement>(threshold = 0.35) {
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
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
