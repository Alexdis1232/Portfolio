"use client";

import { useEffect } from "react";
import { unlockAudio } from "@/lib/audioUnlock";

export function AudioUnlock() {
  useEffect(() => {
    const unlock = () => {
      void unlockAudio();
    };

    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    window.addEventListener("mousemove", unlock, { once: true });
    window.addEventListener("touchstart", unlock, { once: true });

    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("mousemove", unlock);
      window.removeEventListener("touchstart", unlock);
    };
  }, []);

  return null;
}
