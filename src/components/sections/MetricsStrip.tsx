"use client";

import FadeIn from "@/components/FadeIn";
import { useTranslations } from "next-intl";

export default function MetricsStrip() {
  const t = useTranslations("metrics");

  const metrics = [
    { label: t("projects"), value: t("value"), suffix: "+", accent: "text-primary/70" },
    { label: t("clients"), value: t("valueClients"), suffix: "+", accent: "text-secondary/70" },
    { label: t("uptime"), value: t("valueUptime"), suffix: "%", accent: "text-tertiary/70" },
    { label: t("awards"), value: t("valueAwards"), suffix: "", accent: "text-on-surface-variant/50" },
  ];

  return (
    <FadeIn delay={0.15}>
      <div className="flex flex-wrap gap-px p-px bg-white/[0.03] rounded-2xl overflow-hidden glass">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex min-w-[160px] flex-1 flex-col gap-2 p-6 sm:p-8 bg-black/10 transition-all duration-[600ms] ease-[var(--ease-out)] hover:bg-white/[0.03] cursor-default group"
          >
            <p className="text-on-surface-variant/50 text-[10px] font-label tracking-[0.18em] uppercase">
              {metric.label}
            </p>
            <p className="text-on-surface text-[1.5rem] sm:text-[2rem] font-extrabold font-headline tracking-[-0.02em]">
              {metric.value}
              <span className={`${metric.accent} text-[1.5rem] font-bold`}>{metric.suffix}</span>
            </p>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
