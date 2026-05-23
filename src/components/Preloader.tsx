"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [ready, setReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cacheKey = "chiti_preloader_seen";
    if (sessionStorage.getItem(cacheKey) && !params.has("preview")) {
      setReady(true);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem(cacheKey, "1");
          setReady(true);
        },
      });

      tl.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      )
        .to(textRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        })
        .to(
          counterRef.current,
          {
            textContent: 100,
            duration: 1.8,
            ease: "power3.out",
            snap: { textContent: 1 },
            onUpdate: () => {
              if (counterRef.current) {
                const val = parseInt(counterRef.current.textContent || "0");
                counterRef.current.textContent = val + "%";
              }
            },
          },
          "-=1.2"
        )
        .to(lineRef.current, { scaleX: 1, duration: 1.5, ease: "power3.out" }, "-=1.8")
        .to(containerRef.current, { opacity: 0, duration: 0.5, delay: 0.2 });
    });

    return () => ctx.revert();
  }, []);

  if (ready) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-surface"
    >
      <div className="flex flex-col items-center gap-8">
        <span
          ref={textRef}
          className="text-on-surface text-[11px] font-mono tracking-[0.3em] uppercase opacity-0"
        >
          CHITI STUDIO SYSTEMS v2.4
        </span>
        <div className="w-48 h-[1px] bg-white/[0.06] relative overflow-hidden rounded-full">
          <div
            ref={lineRef}
            className="absolute inset-0 bg-primary origin-left scale-x-0 rounded-full"
          />
        </div>
        <span
          ref={counterRef}
          className="text-on-surface-variant/50 text-[10px] font-mono tracking-[0.2em]"
        >
          0%
        </span>
      </div>
    </div>
  );
}
