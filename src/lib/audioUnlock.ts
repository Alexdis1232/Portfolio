let unlocked = false;
let unlockPromise: Promise<void> | null = null;

export function isAudioUnlocked() {
  return unlocked;
}

export function unlockAudio(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (unlocked) return Promise.resolve();
  if (unlockPromise) return unlockPromise;

  unlockPromise = (async () => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as typeof window & { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        if (ctx.state === "suspended") {
          await ctx.resume();
        }
        const buffer = ctx.createBuffer(1, 1, 22050);
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        source.start(0);
      }
    } catch {
      // ignore
    }

    try {
      const probe = new Audio("/click.wav");
      probe.volume = 0.01;
      await probe.play();
      probe.pause();
      probe.currentTime = 0;
    } catch {
      // ignore
    }

    unlocked = true;
  })();

  return unlockPromise;
}
