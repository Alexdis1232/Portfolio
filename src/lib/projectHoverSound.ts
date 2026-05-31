import { unlockAudio } from "@/lib/audioUnlock";

const HOVER_SOUND_URL = "/whoosh.wav";
const HOVER_VOLUME = 0.35;

let hoverAudio: HTMLAudioElement | null = null;

export function playProjectHoverSound() {
  if (typeof window === "undefined") return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  void unlockAudio();

  if (!hoverAudio) {
    hoverAudio = new Audio(HOVER_SOUND_URL);
    hoverAudio.volume = HOVER_VOLUME;
    hoverAudio.preload = "auto";
  }

  hoverAudio.currentTime = 0;
  void hoverAudio.play().catch(() => {});
}
