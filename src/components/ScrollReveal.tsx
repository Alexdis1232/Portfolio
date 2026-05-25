"use client";

import { useRef, useEffect, type ReactNode, type CSSProperties } from "react";
import {
  motion,
  useInView,
  useAnimation,
  type HTMLMotionProps,
} from "framer-motion";

const hidden = { opacity: 0.3, scale: 0.8, filter: "blur(8px)" };
const visible = { opacity: 1, scale: 1, filter: "blur(0px)" };
const transition = { duration: 0.6, ease: "easeOut" as const };

function useRepeatingReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (!isInView) return;

    controls.set(hidden);
    void controls.start({ ...visible, transition });
  }, [isInView, controls]);

  return { ref, controls };
}

type ScrollRevealProps = HTMLMotionProps<"div"> & {
  children?: ReactNode;
};

export function ScrollReveal({
  children,
  className,
  style,
  ...rest
}: ScrollRevealProps) {
  const { ref, controls } = useRepeatingReveal();

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={hidden}
      animate={controls}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type HeadingProps = HTMLMotionProps<"h1"> & { children: ReactNode };

export function ScrollRevealH1({ children, className, style, ...rest }: HeadingProps) {
  const { ref, controls } = useRepeatingReveal();

  return (
    <motion.h1
      ref={ref}
      className={className}
      style={style}
      initial={hidden}
      animate={controls}
      {...rest}
    >
      {children}
    </motion.h1>
  );
}

export function ScrollRevealH2({
  children,
  className,
  style,
  ...rest
}: HTMLMotionProps<"h2"> & { children: ReactNode }) {
  const { ref, controls } = useRepeatingReveal();

  return (
    <motion.h2
      ref={ref}
      className={className}
      style={style}
      initial={hidden}
      animate={controls}
      {...rest}
    >
      {children}
    </motion.h2>
  );
}

export function ScrollRevealP({
  children,
  className,
  style,
  ...rest
}: HTMLMotionProps<"p"> & { children: ReactNode }) {
  const { ref, controls } = useRepeatingReveal();

  return (
    <motion.p
      ref={ref}
      className={className}
      style={style}
      initial={hidden}
      animate={controls}
      {...rest}
    >
      {children}
    </motion.p>
  );
}
