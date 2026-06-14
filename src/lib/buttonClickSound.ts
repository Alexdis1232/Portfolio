const CLICK_SOUND_URL = "/click.wav";
const CLICK_VOLUME = 0.65;

let audioContext: AudioContext | null = null;
let clickAudio: HTMLAudioElement | null = null;
let unlocked = false;

function getAudioContext() {
  if (typeof window === "undefined") return null;

  if (!audioContext) {
    const AudioCtx =
      window.AudioContext ||
      (window as typeof window & { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;

    if (!AudioCtx) return null;
    audioContext = new AudioCtx();
  }

  return audioContext;
}

function getClickAudio() {
  if (!clickAudio) {
    clickAudio = new Audio(CLICK_SOUND_URL);
    clickAudio.volume = CLICK_VOLUME;
    clickAudio.preload = "auto";
    clickAudio.load();
  }

  return clickAudio;
}

export function isButtonSoundUnlocked() {
  return unlocked;
}

export function primeButtonClickSound() {
  if (typeof window === "undefined") return;

  const ctx = getAudioContext();
  if (ctx?.state === "suspended") {
    void ctx.resume();
  }

  getClickAudio();

  if (unlocked) return;

  const probe = new Audio(CLICK_SOUND_URL);
  probe.volume = 0.001;
  probe.preload = "auto";

  void probe
    .play()
    .then(() => {
      unlocked = true;
      probe.pause();
      probe.currentTime = 0;
    })
    .catch(() => {});
}

function playSyntheticClick() {
  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === "suspended") {
    void ctx.resume();
  }

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(720, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(280, ctx.currentTime + 0.06);

  gain.gain.setValueAtTime(0.22, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.07);
}

export function playButtonClickSound() {
  if (typeof window === "undefined") return;

  const ctx = getAudioContext();
  if (ctx?.state === "suspended") {
    void ctx.resume();
  }

  const audio = getClickAudio();
  audio.currentTime = 0;

  void audio.play().then(() => {
    unlocked = true;
  }).catch(() => {
    playSyntheticClick();
  });
}
