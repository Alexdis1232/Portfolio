"use client";

import { useEffect, useState } from "react";

type ResponsiveVideoProps = {
  mobileSrc: string;
  desktopSrc: string;
  className?: string;
};

export function ResponsiveVideo({ mobileSrc, desktopSrc, className }: ResponsiveVideoProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  if (isMobile === null) return null;

  return (
    <video
      key={isMobile ? mobileSrc : desktopSrc}
      src={isMobile ? mobileSrc : desktopSrc}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className={className ?? "block h-auto w-full max-w-full"}
    />
  );
}
