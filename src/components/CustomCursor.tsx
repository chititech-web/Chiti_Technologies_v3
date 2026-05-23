"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!matchMedia("(hover: hover)").matches) return;

    document.documentElement.style.cursor = "none";

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = document.elementFromPoint(mouseX, mouseY);
      if (!target) return;

      const el = (target as HTMLElement).closest("[data-magnetic]") as HTMLElement | null;

      if (el) {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 80;

        if (dist < maxDist) {
          const strength = 1 - dist / maxDist;
          const pullX = dx * strength * 0.3;
          const pullY = dy * strength * 0.3;
          el.style.transform = `translate3d(${pullX}px, ${pullY}px, 0)`;

          if (ringRef.current) {
            ringRef.current.style.transform = `translate3d(${mouseX - 16}px, ${mouseY - 16}px, 0) scale(1.5)`;
          }

          const cursorText = el.getAttribute("data-cursor-text");
          if (cursorText && textRef.current) {
            textRef.current.textContent = cursorText;
            textRef.current.style.opacity = "1";
          }
          return;
        }
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${mouseX - 16}px, ${mouseY - 16}px, 0) scale(1)`;
      }
      if (textRef.current) {
        textRef.current.style.opacity = "0";
      }

      const magneticEls = document.querySelectorAll<HTMLElement>("[data-magnetic]");
      magneticEls.forEach((el) => {
        el.style.transform = "";
      });
    };

    const lerp = () => {
      dotX += (mouseX - dotX) * 0.15;
      dotY += (mouseY - dotY) * 0.15;
      ringX += (mouseX - ringX) * 0.08;
      ringY += (mouseY - ringY) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX - 4}px, ${dotY - 4}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      }

      rafId = requestAnimationFrame(lerp);
    };

    window.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(lerp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] flex items-center justify-center"
        style={{
          border: "1px solid rgba(255,255,255,0.3)",
          transition: "transform 0.15s ease-out, border-color 0.3s",
        }}
      >
        <span
          ref={textRef}
          className="text-[8px] font-mono uppercase tracking-[0.15em] text-white opacity-0 transition-opacity duration-[400ms] select-none whitespace-nowrap"
        />
      </div>
    </>
  );
}
