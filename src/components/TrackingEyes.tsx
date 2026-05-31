"use client";

import { useEffect, useRef } from "react";

const VIEWBOX = { width: 74, height: 23 };
const PUPIL_MAX_OFFSET = 2.2;

const LEFT_EYE_PATH =
  "M1.07812 1.98535C12.7978 -0.518263 19.7809 2.3265 23.7461 6.56641C27.6137 10.702 28.7919 16.3493 28.4863 20.3311C17.7686 22.4517 10.7487 19.6966 6.51465 15.5371C2.38232 11.4775 0.798175 5.98822 1.07812 1.98535Z";

const RIGHT_EYE_PATH =
  "M72.4941 1.98535C60.7745 -0.518263 53.7913 2.3265 49.8262 6.56641C45.9586 10.702 44.7804 16.3493 45.0859 20.3311C55.8037 22.4517 62.8236 19.6966 67.0576 15.5371C71.1899 11.4775 72.7741 5.98822 72.4941 1.98535Z";

/** Центры зрачков в координатах viewBox (подогнать под твой eyes.svg при необходимости) */
const LEFT_PUPIL_CENTER = { x: 14.5, y: 11.2 };
const RIGHT_PUPIL_CENTER = { x: 59.5, y: 11.2 };

/** Вертикальные зрачки как в макете; замени path, если добавишь свои в SVG */
const LEFT_PUPIL_PATH = "M13.4 7.2h2.2v8h-2.2z";
const RIGHT_PUPIL_PATH = "M58.4 7.2h2.2v8h-2.2z";

function clampPupilOffset(
  anchorX: number,
  anchorY: number,
  targetX: number,
  targetY: number,
  max: number,
) {
  const dx = targetX - anchorX;
  const dy = targetY - anchorY;
  const dist = Math.hypot(dx, dy) || 1;
  const factor = Math.min(max, dist * 0.35);

  return {
    x: (dx / dist) * factor,
    y: (dy / dist) * factor,
  };
}

function clientToViewBox(svg: SVGSVGElement, clientX: number, clientY: number) {
  const point = svg.createSVGPoint();
  point.x = clientX;
  point.y = clientY;
  const matrix = svg.getScreenCTM();
  if (!matrix) return { x: 0, y: 0 };
  const local = point.matrixTransform(matrix.inverse());
  return { x: local.x, y: local.y };
}

export function TrackingEyes() {
  const svgRef = useRef<SVGSVGElement>(null);
  const leftPupilRef = useRef<SVGPathElement>(null);
  const rightPupilRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const handlePointerMove = (event: MouseEvent | TouchEvent) => {
      const svg = svgRef.current;
      const leftPupil = leftPupilRef.current;
      const rightPupil = rightPupilRef.current;
      if (!svg || !leftPupil || !rightPupil) return;

      const point =
        "touches" in event ? event.touches[0] : (event as MouseEvent);
      if (!point) return;

      const cursor = clientToViewBox(svg, point.clientX, point.clientY);

      const left = clampPupilOffset(
        LEFT_PUPIL_CENTER.x,
        LEFT_PUPIL_CENTER.y,
        cursor.x,
        cursor.y,
        PUPIL_MAX_OFFSET,
      );
      const right = clampPupilOffset(
        RIGHT_PUPIL_CENTER.x,
        RIGHT_PUPIL_CENTER.y,
        cursor.x,
        cursor.y,
        PUPIL_MAX_OFFSET,
      );

      leftPupil.setAttribute(
        "transform",
        `translate(${left.x} ${left.y})`,
      );
      rightPupil.setAttribute(
        "transform",
        `translate(${right.x} ${right.y})`,
      );
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed bottom-3 left-1/2 z-[10001] -translate-x-1/2 sm:bottom-4"
      aria-hidden
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}
        className="h-[46px] w-[148px] sm:h-[56px] sm:w-[180px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="left-eye-mask">
            <path d={LEFT_EYE_PATH} />
          </clipPath>
          <clipPath id="right-eye-mask">
            <path d={RIGHT_EYE_PATH} />
          </clipPath>
        </defs>

        <g clipPath="url(#left-eye-mask)">
          <path ref={leftPupilRef} d={LEFT_PUPIL_PATH} fill="black" />
        </g>
        <g clipPath="url(#right-eye-mask)">
          <path ref={rightPupilRef} d={RIGHT_PUPIL_PATH} fill="black" />
        </g>

        <path
          d={LEFT_EYE_PATH}
          fill="white"
          stroke="black"
          strokeWidth={2.09331}
        />
        <path
          d={RIGHT_EYE_PATH}
          fill="white"
          stroke="black"
          strokeWidth={2.09331}
        />
      </svg>
    </div>
  );
}
