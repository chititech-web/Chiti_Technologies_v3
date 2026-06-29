"use client";

import FadeIn from "@/components/FadeIn";
import { Search, LayoutDashboard, Monitor, Cog, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

const colorMap: Record<string, string> = {
  step01: "#9966ff",
  step02: "#5c7cfa",
  step03: "#00bfa5",
  step04: "#00bcd4",
  step05: "#9966ff",
};

const iconMap: Record<string, React.ElementType> = {
  step01: Search,
  step02: LayoutDashboard,
  step03: Monitor,
  step04: Cog,
  step05: TrendingUp,
};

export default function Process() {
  const t = useTranslations("process");

  return (
    <div>
      <FadeIn>
        <div className="flex flex-col gap-3 mb-16 text-center @[864px]:text-left items-center @[864px]:items-start">
          <span className="text-secondary/60 font-label text-[11px] tracking-[0.25em] uppercase font-medium">
            {t("tagline")}
          </span>
          <div className="flex items-center gap-4 justify-center @[864px]:justify-start">
            <div className="neon-dot" />
            <h2 className="text-on-surface text-[2rem] font-extrabold font-headline tracking-[-0.02em]">
              {t("title")}
            </h2>
          </div>
          <p className="text-on-surface-variant/60 text-[14px] max-w-[480px] leading-[1.7] mt-1">
            Discovery → Architecture → Interface → Automation → Growth
          </p>
          <p className="text-on-surface-variant/40 text-[13px] italic leading-[1.7] mt-6 max-w-[600px]">
            "{t("quote")}"
          </p>
        </div>
      </FadeIn>

      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0">
        {["step01", "step02", "step03", "step04", "step05"].map((step, i) => {
          const Icon = iconMap[step];
          return (
            <FadeIn key={step} delay={0.08 + i * 0.1} className="w-full md:w-auto md:flex-1 relative">
              <div className="flex items-center gap-4 md:flex-col md:text-center group relative z-10">
                <div
                  className="shrink-0 size-12 md:size-14 rounded-2xl glass-panel flex items-center justify-center transition-all duration-[600ms] group-hover:-translate-y-1"
                  style={{ color: colorMap[step] }}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div className="md:mt-3 min-w-0">
                  <h3 className="text-on-surface text-[14px] font-bold font-headline mb-1 tracking-[-0.01em]">
                    {t(`${step}`)}
                  </h3>
                  <p className="text-on-surface-variant/60 text-[11px] leading-[1.6] max-w-[200px] md:mx-auto">
                    {t(`${step}Desc`)}
                  </p>
                </div>
                {i < 4 && (
                  <div className="hidden md:block flex-1 h-[0.5px] bg-white/[0.06] mx-4" />
                )}
              </div>
              {i < 4 && (
                <div className="md:hidden absolute left-[23px] top-12 bottom-[-12px] w-[0.5px] bg-white/[0.04]" />
              )}
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
