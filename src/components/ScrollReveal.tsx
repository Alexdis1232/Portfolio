"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

/** Scale + fade при скролле */
export const scrollReveal = {
  initial: { opacity: 0, scale: 0.9, y: 16 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

/** Только fade при первой загрузке (Hero, навбар и т.п.) */
export const loadFadeIn = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

type ScrollRevealProps = HTMLMotionProps<"div"> & {
  children?: ReactNode;
};

export function ScrollReveal({
  children,
  className,
  style,
  ...rest
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      style={{ transformOrigin: "center", ...style }}
      {...scrollReveal}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function LoadFadeIn({
  children,
  className,
  style,
  ...rest
}: ScrollRevealProps) {
  return (
    <motion.div
      className={`reveal-fade-in ${className ?? ""}`.trim()}
      style={style}
      {...loadFadeIn}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type HeadingProps = HTMLMotionProps<"h1"> & { children: ReactNode };

export function ScrollRevealH1({ children, className, style, ...rest }: HeadingProps) {
  return (
    <motion.h1
      className={className}
      style={{ transformOrigin: "center", ...style }}
      {...scrollReveal}
      {...rest}
    >
      {children}
    </motion.h1>
  );
}

export function LoadFadeInH1({ children, className, style, ...rest }: HeadingProps) {
  return (
    <motion.h1
      className={`reveal-fade-in ${className ?? ""}`.trim()}
      style={style}
      {...loadFadeIn}
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
  return (
    <motion.h2
      className={className}
      style={{ transformOrigin: "center", ...style }}
      {...scrollReveal}
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
  return (
    <motion.p
      className={className}
      style={{ transformOrigin: "center", ...style }}
      {...scrollReveal}
      {...rest}
    >
      {children}
    </motion.p>
  );
}
