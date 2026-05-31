"use client";

import { useCallback } from "react";
import { playButtonClickSound } from "@/lib/buttonClickSound";

export function useButtonClickSound() {
  return useCallback(() => {
    playButtonClickSound();
  }, []);
}
