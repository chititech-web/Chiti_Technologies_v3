"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { useTranslations } from "next-intl";

export default function AboutPreview() {
  const t = useTranslations("about");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
      <FadeIn direction="left" className="order-2 md:order-1">
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.04]">
          <Image
            src="/images/about/about-studio.png"
            alt="Creative team"
            fill
            className="object-cover grayscale max-md:grayscale-0 hover:grayscale-0 transition-all duration-[2500ms] ease-[var(--ease-out)]"
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </div>
      </FadeIn>

      <FadeIn direction="right" delay={0.15} className="order-1 md:order-2">
        <div className="flex flex-col gap-8">
          <span className="text-secondary/60 font-label text-[11px] tracking-[0.25em] uppercase font-medium">
            {t("tagline")}
          </span>
          <div className="flex items-center gap-4">
            <div className="neon-dot" />
            <h2 className="text-on-surface text-[2rem] md:text-[2.5rem] font-extrabold font-headline leading-[1.12] tracking-[-0.02em]">
            Clean interfaces.{" "}
            <span className="gradient-text-aurora">Strong systems.</span>{" "}
            Better results.
          </h2>
          </div>
          <p className="text-on-surface-variant/70 text-[16px] leading-[1.75] max-w-[420px]">
            Chiti Technologies is a small digital systems company. We partner with brands that need more than templates — they need systems that operate, sell, and scale.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-4 pt-8 border-t border-white/[0.04]">
            <div className="flex flex-col gap-1.5">
              <span className="text-on-surface text-2xl font-extrabold font-headline tracking-[-0.02em]">
                12+
              </span>
              <span className="text-on-surface-variant/40 text-[10px] font-label uppercase tracking-[0.18em]">
                Disciplines
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
                <span className="text-on-surface text-2xl font-extrabold font-headline tracking-[-0.02em]">
                  45+
                </span>
                <span className="text-on-surface-variant/40 text-[10px] font-label uppercase tracking-[0.18em]">
                  Projects Shipped
                </span>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
