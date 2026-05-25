"use client";

import FadeIn from "@/components/FadeIn";
import { useTranslations } from "next-intl";

export default function FounderSection() {
  const t = useTranslations("founder");

  return (
    <FadeIn>
      <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-center glass-panel">
        <div
          className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(153, 102, 255, 0.06) 0%, transparent 70%)",
            animation: "drift 20s ease-in-out infinite alternate",
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-[600px] mx-auto">
          <span className="text-primary/50 font-label text-[11px] tracking-[0.25em] uppercase font-medium">
            {t("tagline")}
          </span>
          <h2 className="text-on-surface text-[2rem] md:text-[2.5rem] font-extrabold font-headline tracking-[-0.02em]">
            {t("name")}
          </h2>
          <p className="text-on-surface-variant/70 text-[15px] md:text-[17px] leading-[1.75]">
            {t("copy")}
          </p>
          <div className="w-12 h-[1px] bg-white/[0.06]" />
          <p className="text-on-surface-variant/40 text-[12px] font-label tracking-[0.05em]">
            {t("title")}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
