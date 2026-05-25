"use client";

import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";
import { Globe, Server, TrendingUp } from "lucide-react";

const tiers = [
  { key: "tier01", icon: Globe, accent: "primary" },
  { key: "tier02", icon: Server, accent: "secondary" },
  { key: "tier03", icon: TrendingUp, accent: "tertiary" },
];

const accentMap: Record<string, { bg: string; border: string }> = {
  primary: { bg: "bg-primary/[0.04]", border: "border-primary/20" },
  secondary: { bg: "bg-secondary/[0.04]", border: "border-secondary/20" },
  tertiary: { bg: "bg-tertiary/[0.04]", border: "border-tertiary/20" },
};

export default function ServiceLadder() {
  const t = useTranslations("ladder");

  return (
    <div>
      <FadeIn>
        <div className="flex flex-col gap-3 mb-16">
          <span className="text-tertiary/60 font-label text-[11px] tracking-[0.25em] uppercase font-medium">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, i) => {
          const colors = accentMap[tier.accent];
          const Icon = tier.icon;
          return (
            <FadeIn key={tier.key} delay={0.1 + i * 0.12}>
              <div className={`relative p-8 rounded-2xl glass-panel ${colors.bg} ${colors.border} flex flex-col gap-5 h-full`}>
                <div className="size-12 rounded-xl bg-white/[0.03] flex items-center justify-center text-primary/80">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <span className="text-[10px] font-label uppercase tracking-[0.15em] text-primary/50">
                    {t(`${tier.key}Tag`)}
                  </span>
                  <h3 className="text-on-surface text-xl font-bold font-headline tracking-[-0.01em]">
                    {t(`${tier.key}`)}
                  </h3>
                  <p className="text-on-surface-variant/60 text-[13px] leading-[1.7]">
                    {t(`${tier.key}Desc`)}
                  </p>
                </div>
                <Button variant="secondary" size="sm" href="/contact" data-magnetic>
                  {t("cta")}
                </Button>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
