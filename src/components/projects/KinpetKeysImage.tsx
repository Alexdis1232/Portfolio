const KINPET_KEYS_MOBILE_SRC = "/cover%20mobile.png";
const KINPET_KEYS_DESKTOP_SRC = "/kinpetkeys.png?v=2";

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
        src={KINPET_KEYS_MOBILE_SRC}
        alt="Kinpet — главный экран сервиса"
        width={900}
        height={900}
        loading="eager"
        decoding="async"
        className="block h-full w-full object-cover object-center sm:hidden"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={KINPET_KEYS_DESKTOP_SRC}
        alt="Kinpet — главный экран сервиса"
        width={890}
        height={536}
        loading="eager"
        decoding="async"
        className="hidden h-auto w-full sm:block"
      />
    </div>
  );
}
