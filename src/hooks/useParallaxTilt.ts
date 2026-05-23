"use client";

import { useRef, useCallback } from "react";

interface Options {
  maxTilt?: number;
  scale?: number;
  perspective?: number;
}

export function useParallaxTilt(options: Options = {}) {
  const { maxTilt = 3, scale = 1.02, perspective = 800 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const rafId = useRef(0);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const tiltX = (y - 0.5) * maxTilt;
      const tiltY = (0.5 - x) * maxTilt;

      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        el.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`;
      });
    },
    [maxTilt, scale, perspective]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
  }, [perspective]);

  const attach = (el: HTMLDivElement | null) => {
    if (ref.current) {
      ref.current.removeEventListener("mousemove", handleMouseMove);
      ref.current.removeEventListener("mouseleave", handleMouseLeave);
    }
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
    }
    ref.current = el;
  };

  return attach;
}
