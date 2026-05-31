"use client";

import { useCallback } from "react";
import { playProjectHoverSound } from "@/lib/projectHoverSound";

export function useProjectHoverSound() {
  return useCallback(() => {
    playProjectHoverSound();
  }, []);
}
