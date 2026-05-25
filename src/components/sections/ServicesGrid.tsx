"use client";

import FadeIn from "@/components/FadeIn";
import { Globe, Cpu, ShoppingCart, LayoutDashboard, MessageCircle, Palette, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const accentMap: Record<string, { bg: string; line: string; color: string }> = {
  primary: {
    bg: "bg-primary/[0.07]",
    line: "group-hover:bg-primary/15",
    color: "text-primary/80",
  },
  secondary: {
    bg: "bg-secondary/[0.07]",
    line: "group-hover:bg-secondary/15",
    color: "text-secondary/80",
  },
  tertiary: {
    bg: "bg-tertiary/[0.07]",
    line: "group-hover:bg-tertiary/15",
    color: "text-tertiary/80",
  },
  accent: {
    bg: "bg-accent/[0.07]",
    line: "group-hover:bg-accent/15",
    color: "text-accent/80",
  },
};

const services = [
  { key: "card01", icon: Globe, accent: "primary" },
  { key: "card02", icon: Cpu, accent: "secondary" },
  { key: "card03", icon: ShoppingCart, accent: "tertiary" },
  { key: "card04", icon: LayoutDashboard, accent: "accent" },
  { key: "card05", icon: MessageCircle, accent: "primary" },
  { key: "card06", icon: Palette, accent: "secondary" },
];

export default function ServicesGrid() {
  const t = useTranslations("services");

  return (
    <div>
      <FadeIn>
        <div className="flex flex-col gap-3 mb-16 relative">
          <span className="text-secondary/60 font-label text-[11px] tracking-[0.25em] uppercase font-medium">
            {t("tagline")}
          </span>
          <div className="flex items-center gap-4">
            <div className="neon-dot" />
            <h2 className="text-on-surface text-[2rem] font-extrabold font-headline tracking-[-0.02em]">
              {t("title")}
            </h2>
          </div>
          <p className="text-on-surface-variant/60 text-[14px] max-w-[480px] leading-[1.7] mt-1">
            {t("subtitle")}
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => {
          const colors = accentMap[service.accent];
          const Icon = service.icon;
          return (
            <FadeIn key={service.key} delay={0.1 + i * 0.08}>
              <div className="group relative p-6 md:p-9 rounded-2xl glass-panel transition-all duration-[700ms] ease-[var(--ease-out)] hover:-translate-y-1">
                <div
                  className={`size-12 rounded-xl ${colors.bg} flex items-center justify-center mb-6 md:mb-8 ${colors.color} transition-all duration-[500ms]`}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-on-surface text-lg font-bold mb-3 font-headline tracking-[-0.01em]">
                  {t(`${service.key}`)}
                </h3>
                <p className="text-on-surface-variant/70 text-[13px] leading-[1.7] mb-8">
                  {t(`${service.key}Desc`)}
                </p>
                <div className={`w-full h-[0.5px] bg-white/[0.04] ${colors.line} transition-all duration-[600ms]`} />
                <div className="absolute bottom-7 right-8 opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-all duration-[500ms] md:translate-x-3 md:group-hover:translate-x-0">
                  <ArrowRight className={colors.color} size={16} strokeWidth={1.5} />
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
