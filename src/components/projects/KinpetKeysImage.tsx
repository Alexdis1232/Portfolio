const KINPET_KEYS_SRC = "/kinpetkeys.png?v=2";

type KinpetKeysImageProps = {
  className?: string;
};

export function KinpetKeysImage({ className = "" }: KinpetKeysImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={KINPET_KEYS_SRC}
      alt="Kinpet — главный экран сервиса"
      width={890}
      height={536}
      loading="eager"
      decoding="async"
      className={`block h-auto w-full max-w-full ${className}`.trim()}
    />
  );
}
