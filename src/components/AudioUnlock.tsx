"use client";

import { useEffect } from "react";
import { primeButtonClickSound } from "@/lib/buttonClickSound";

export function AudioUnlock() {
  useEffect(() => {
    const unlock = () => {
      primeButtonClickSound();
    };

    window.addEventListener("pointerdown", unlock, { capture: true });
    window.addEventListener("keydown", unlock, { once: true });
    window.addEventListener("touchstart", unlock, { capture: true, passive: true });

    return () => {
      window.removeEventListener("pointerdown", unlock, { capture: true });
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock, { capture: true });
    };
  }, []);

  return null;
}
