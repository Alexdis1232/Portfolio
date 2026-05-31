import { unlockAudio } from "@/lib/audioUnlock";

const TYPEWRITER_SOUND_URL = "/typewriter.wav";
const TYPEWRITER_VOLUME = 0.4;
const TYPEWRITER_DURATION_MS = 1000;

let typewriterAudio: HTMLAudioElement | null = null;
let stopTimer: ReturnType<typeof setTimeout> | null = null;

export function playContactHoverSound() {
  if (typeof window === "undefined") return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  void unlockAudio();

  if (!typewriterAudio) {
    typewriterAudio = new Audio(TYPEWRITER_SOUND_URL);
    typewriterAudio.volume = TYPEWRITER_VOLUME;
    typewriterAudio.preload = "auto";
  }

  if (stopTimer) {
    clearTimeout(stopTimer);
    stopTimer = null;
  }

  typewriterAudio.currentTime = 0;
  void typewriterAudio.play().catch(() => {});

  stopTimer = setTimeout(() => {
    if (!typewriterAudio) return;
    typewriterAudio.pause();
    typewriterAudio.currentTime = 0;
    stopTimer = null;
  }, TYPEWRITER_DURATION_MS);
}
