"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        transition: "transform 0.1s",
      }}
    >
      <img src="/road.svg" alt="" width={15} height={15} />
    </div>
  );
}
