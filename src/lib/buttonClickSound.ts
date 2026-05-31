import { unlockAudio } from "@/lib/audioUnlock";

const CLICK_SOUND_URL = "/click.wav";
const CLICK_VOLUME = 0.4;

let clickAudio: HTMLAudioElement | null = null;
let useSynthetic = false;
let audioContext: AudioContext | null = null;

function playSyntheticClick() {
  if (typeof window === "undefined") return;

  if (!audioContext) {
    audioContext = new AudioContext();
  }

  if (audioContext.state === "suspended") {
    void audioContext.resume();
  }

  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(720, audioContext.currentTime);
  osc.frequency.exponentialRampToValueAtTime(280, audioContext.currentTime + 0.06);

  gain.gain.setValueAtTime(0.12, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.07);

  osc.connect(gain);
  gain.connect(audioContext.destination);

  osc.start();
  osc.stop(audioContext.currentTime + 0.07);
}

export function playButtonClickSound() {
  if (typeof window === "undefined") return;

  void unlockAudio();

  if (useSynthetic) {
    playSyntheticClick();
    return;
  }

  if (!clickAudio) {
    clickAudio = new Audio(CLICK_SOUND_URL);
    clickAudio.volume = CLICK_VOLUME;
    clickAudio.preload = "auto";
  }

  clickAudio.currentTime = 0;
  void clickAudio.play().catch(() => {
    useSynthetic = true;
    playSyntheticClick();
  });
}
