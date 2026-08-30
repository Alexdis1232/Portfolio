const KINPET_KEYS_SRC = "/kinpetkeys.webp";

type KinpetKeysImageProps = {
  className?: string;
};

export function KinpetKeysImage({ className = "" }: KinpetKeysImageProps) {
  return (
    <div
      className={`aspect-square overflow-hidden sm:aspect-auto ${className}`.trim()}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={KINPET_KEYS_SRC}
        alt="Kinpet — главный экран сервиса"
        width={890}
        height={536}
        loading="eager"
        decoding="async"
        className="block h-full w-full object-cover object-center sm:h-auto sm:w-full"
      />
    </div>
  );
}
