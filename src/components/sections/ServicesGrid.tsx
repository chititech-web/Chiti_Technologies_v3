"use client";

import FadeIn from "@/components/FadeIn";
import { Brush, Terminal, Box, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const accentMap: Record<string, { bg: string; line: string }> = {
  primary: {
    bg: "bg-primary/[0.07]",
    line: "group-hover:bg-primary/15",
  },
  secondary: {
    bg: "bg-secondary/[0.07]",
    line: "group-hover:bg-secondary/15",
  },
  tertiary: {
    bg: "bg-tertiary/[0.07]",
    line: "group-hover:bg-tertiary/15",
  },
};

export default function ServicesGrid() {
  const t = useTranslations("services");

  const services = [
    {
      title: t("brandStrategy"),
      description: t("brandStrategyDesc"),
      icon: Box,
      accent: "primary",
      iconColor: "text-primary/80",
    },
    {
      title: t("digitalCuration"),
      description: t("digitalCurationDesc"),
      icon: Terminal,
      accent: "secondary",
      iconColor: "text-secondary/80",
    },
    {
      title: t("visualIdentity"),
      description: t("visualIdentityDesc"),
      icon: Brush,
      accent: "tertiary",
      iconColor: "text-tertiary/80",
    },
  ];

  return (
    <div>
      <FadeIn>
        <div className="flex flex-col gap-3 mb-16 relative">
          <span className="text-secondary/60 font-label text-[11px] tracking-[0.25em] uppercase font-medium">
            Capabilities
          </span>
          <div className="flex items-center gap-4">
            <div className="neon-dot" />
            <h2 className="text-on-surface text-[2rem] font-extrabold font-headline tracking-[-0.02em]">
              Our Services
            </h2>
          </div>
          <div className="neon-line mt-2 opacity-15" />
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => {
          const colors = accentMap[service.accent];
          return (
            <FadeIn key={service.title} delay={0.1 + i * 0.12}>
              <div className="group relative p-6 md:p-9 rounded-2xl glass-panel transition-all duration-[700ms] ease-[var(--ease-out)] hover:-translate-y-1">
                <div
                  className={`size-12 rounded-xl ${colors.bg} flex items-center justify-center mb-6 md:mb-8 ${service.iconColor} transition-all duration-[500ms]`}
                >
                  <service.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-on-surface text-lg font-bold mb-3 font-headline tracking-[-0.01em]">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant/70 text-[13px] leading-[1.7] mb-8">
                  {service.description}
                </p>
                <div className={`w-full h-[0.5px] bg-white/[0.04] ${colors.line} transition-all duration-[600ms]`} />
                <div className="absolute bottom-7 right-8 opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-all duration-[500ms] md:translate-x-3 md:group-hover:translate-x-0">
                  <ArrowRight className={service.iconColor} size={16} strokeWidth={1.5} />
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
