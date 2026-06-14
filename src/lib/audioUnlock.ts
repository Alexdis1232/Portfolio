import { isButtonSoundUnlocked, primeButtonClickSound } from "@/lib/buttonClickSound";

export function isAudioUnlocked() {
  return isButtonSoundUnlocked();
}

export function unlockAudio(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();

  primeButtonClickSound();
  return Promise.resolve();
}
