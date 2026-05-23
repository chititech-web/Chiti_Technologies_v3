"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeIn from "@/components/FadeIn";
import { useTranslations } from "next-intl";

const metrics = [
  { labelKey: "projects", valueKey: "value", suffix: "+" },
  { labelKey: "clients", valueKey: "valueClients", suffix: "+" },
  { labelKey: "uptime", valueKey: "valueUptime", suffix: "%" },
  { labelKey: "awards", valueKey: "valueAwards", suffix: "" },
];

const sparklines = [
  "M0,20 Q10,10 20,15 T40,5 T60,18 T80,8 T100,12",
  "M0,8 Q10,18 20,12 T40,20 T60,6 T80,15 T100,10",
  "M0,15 Q10,8 20,18 T40,10 T60,16 T80,4 T100,14",
  "M0,12 Q10,16 20,8 T40,14 T60,10 T80,18 T100,6",
];

export default function MetricsStrip() {
  const t = useTranslations("metrics");
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    gsap.registerPlugin(ScrollTrigger);
    initialized.current = true;

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const items = container.querySelectorAll<HTMLElement>("[data-metric]");
      items.forEach((item, i) => {
        const valueEl = item.querySelector<HTMLElement>("[data-value]");
        if (!valueEl) return;

        const raw = valueEl.getAttribute("data-raw") || "0";
        const num = parseFloat(raw.replace(/[^0-9.]/g, "")) || 0;
        const isPercent = raw.includes("%");
        valueEl.textContent = "0" + (isPercent ? "%" : "");

        gsap.to(valueEl, {
          textContent: num,
          duration: 2,
          ease: "power3.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            const val = parseInt(valueEl.textContent || "0");
            const suffixEl = item.querySelector<HTMLElement>("[data-suffix]");
            valueEl.textContent = val + (isPercent ? "%" : "");
            if (suffixEl) {
              suffixEl.style.display = val > 0 ? "inline" : "none";
            }
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <FadeIn delay={0.15}>
      <div
        ref={containerRef}
        className="flex flex-wrap gap-px p-px bg-white/[0.03] rounded-2xl overflow-hidden glass"
      >
        <div className="w-full px-6 pt-6 pb-2 flex items-center gap-3 text-on-surface-variant/30">
          <span className="w-2 h-2 rounded-full bg-secondary/60 animate-pulse" />
          <span className="text-[9px] font-mono tracking-[0.15em] uppercase">
            [SYSTEM] chiti@studio ~ %
          </span>
          <span className="w-[2px] h-4 bg-primary/50 animate-pulse" />
        </div>
        {metrics.map((metric, i) => {
          const rawValue = t(metric.valueKey);
          return (
            <div
              key={metric.labelKey}
              data-metric
              className="flex min-w-[160px] flex-1 flex-col gap-3 p-6 sm:p-8 bg-black/10 transition-all duration-[600ms] ease-[var(--ease-out)] hover:bg-white/[0.03] cursor-default group relative overflow-hidden"
            >
              <p className="text-on-surface-variant/50 text-[10px] font-label tracking-[0.18em] uppercase">
                {t(metric.labelKey)}
              </p>
              <p className="text-on-surface text-[1.5rem] sm:text-[2rem] font-extrabold font-headline tracking-[-0.02em] tabular-nums">
                <span data-value data-raw={rawValue}>
                  0
                </span>
                <span data-suffix className={`text-[1.5rem] font-bold ${i === 0 ? "text-primary/70" : i === 1 ? "text-secondary/70" : i === 2 ? "text-tertiary/70" : "text-on-surface-variant/50"}`}>
                  {metric.suffix}
                </span>
              </p>
              <svg
                viewBox="0 0 100 24"
                className="w-full h-6 opacity-0 group-hover:opacity-40 transition-opacity duration-[600ms]"
              >
                <path
                  d={sparklines[i]}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-primary/60"
                  style={{
                    strokeDasharray: 200,
                    strokeDashoffset: 200,
                    animation: "sparkline-draw 2s ease-out forwards",
                  }}
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms] pointer-events-none" />
            </div>
          );
        })}
      </div>
    </FadeIn>
  );
}
