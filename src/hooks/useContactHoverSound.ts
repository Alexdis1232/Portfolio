"use client";

import { useCallback } from "react";
import { playContactHoverSound } from "@/lib/contactHoverSound";

export function useContactHoverSound() {
  return useCallback(() => {
    playContactHoverSound();
  }, []);
}
