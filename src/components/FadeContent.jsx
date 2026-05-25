'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeContent = ({
  children,
  blur = false,
  duration = 1000,
  ease = 'power2.out',
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = '',
  style = {},
  ...props
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const startPct = (1 - threshold) * 100;
    const getSeconds = (val) => (typeof val === 'number' && val > 10 ? val / 1000 : val);

    gsap.set(el, {
      autoAlpha: initialOpacity,
      filter: blur ? 'blur(10px)' : 'blur(0px)',
    });

    const tl = gsap.timeline({ paused: true, delay: getSeconds(delay) });
    tl.to(el, { autoAlpha: 1, filter: 'blur(0px)', duration: getSeconds(duration), ease });

    const playIfVisible = () => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * (startPct / 100) && rect.bottom > 0;
      if (inView) tl.play();
    };

    const st = ScrollTrigger.create({
      trigger: el,
      start: `top ${startPct}%`,
      once: false,
      onEnter: () => tl.restart(true),
      onEnterBack: () => tl.restart(true),
    });

    playIfVisible();
    ScrollTrigger.refresh();

    return () => {
      st.kill();
      tl.kill();
    };
  }, [blur, delay, duration, ease, initialOpacity, threshold]);

  return (
    <div ref={ref} className={className} style={style} {...props}>
      {children}
    </div>
  );
};

export default FadeContent;
