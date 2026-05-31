"use client";

import { useEffect, useRef, useState } from "react";

type TypingAnimationProps = {
  children: string;
  className?: string;
  speed?: number;
  start?: boolean;
  onType?: () => void;
  onComplete?: () => void;
};

export function TypingAnimation({
  children,
  className,
  speed = 70,
  start = true,
  onType,
  onComplete,
}: TypingAnimationProps) {
  const [typedText, setTypedText] = useState(start ? "" : children);
  const onCompleteRef = useRef(onComplete);
  const onTypeRef = useRef(onType);

  useEffect(() => {
    onCompleteRef.current = onComplete;
    onTypeRef.current = onType;
  }, [onComplete, onType]);

  useEffect(() => {
    if (!start) {
      setTypedText(children);
      return;
    }

    setTypedText("");
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setTypedText(children.slice(0, index));
      onTypeRef.current?.();

      if (index >= children.length) {
        window.clearInterval(interval);
        onCompleteRef.current?.();
      }
    }, speed);

    return () => window.clearInterval(interval);
  }, [children, speed, start]);

  return <span className={className}>{typedText}</span>;
}
