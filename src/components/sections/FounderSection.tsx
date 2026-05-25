"use client";

import Image from "next/image";
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
          <span className="text-secondary/60 font-label text-[11px] tracking-[0.25em] uppercase font-medium">
            {t("tagline")}
          </span>
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-white/10">
            <Image
              src="/images/founder.webp"
              alt="Prabhakar Kumar"
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="neon-dot" />
            <h2 className="text-on-surface text-[2rem] md:text-[2.5rem] font-extrabold font-headline tracking-[-0.02em]">
            {t("name")}
          </h2>
          </div>
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
