"use client";

import FadeIn from "@/components/FadeIn";
import { Search, LayoutDashboard, Code, Activity, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

const steps = [
  { icon: Search, key: "step01", accent: "text-primary/80", line: "bg-primary/30" },
  { icon: LayoutDashboard, key: "step02", accent: "text-secondary/80", line: "bg-secondary/30" },
  { icon: Code, key: "step03", accent: "text-tertiary/80", line: "bg-tertiary/30" },
  { icon: Activity, key: "step04", accent: "text-accent/80", line: "bg-accent/30" },
  { icon: TrendingUp, key: "step05", accent: "text-primary/80", line: "bg-primary/30" },
];

export default function SystemArchitecture() {
  const t = useTranslations("architecture");

  return (
    <div>
      <FadeIn>
        <div className="flex flex-col gap-3 mb-12 md:mb-16">
          <span className="text-tertiary/60 font-label text-[11px] tracking-[0.25em] uppercase font-medium">
            {t("tagline")}
          </span>
          <div className="flex items-center gap-4">
            <div className="neon-dot" />
            <h2 className="text-on-surface text-[2rem] font-extrabold font-headline tracking-[-0.02em]">
              {t("title")}
            </h2>
          </div>
          <div className="neon-line mt-2 opacity-15" />
        </div>
      </FadeIn>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0">
        {steps.map((step, i) => (
          <FadeIn key={step.key} delay={0.08 + i * 0.1} className="w-full md:w-auto md:flex-1">
            <div className="flex items-center gap-4 md:flex-col md:text-center group">
              <div className={`shrink-0 size-12 md:size-14 rounded-2xl glass-panel flex items-center justify-center ${step.accent} transition-all duration-[600ms] group-hover:-translate-y-1`}>
                <step.icon size={22} strokeWidth={1.5} />
              </div>
              <div className="md:mt-3 min-w-0">
                <h3 className="text-on-surface text-[14px] font-bold font-headline mb-1 tracking-[-0.01em]">
                  {t(`${step.key}`)}
                </h3>
                <p className="text-on-surface-variant/60 text-[11px] leading-[1.6] max-w-[200px] md:mx-auto">
                  {t(`${step.key}Desc`)}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className={`hidden md:block flex-1 h-[1px] ${step.line} opacity-30 mx-4`} />
              )}
            </div>
            {i < steps.length - 1 && (
              <div className={`md:hidden ml-6 w-[1px] h-8 ${step.line} opacity-20 mx-auto`} />
            )}
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
