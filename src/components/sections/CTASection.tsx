"use client";

import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CTASection() {
  const t = useTranslations("cta");

  return (
    <FadeIn>
      <div className="relative overflow-hidden rounded-[2rem] p-8 md:p-14 lg:p-28 text-center glass-panel">
        <div
          className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(92, 124, 250, 0.06) 0%, transparent 70%)",
            animation: "drift 20s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(77, 208, 225, 0.06) 0%, transparent 70%)",
            animation: "drift-reverse 18s ease-in-out infinite alternate",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8">
          <h2 className="text-on-surface text-[2rem] md:text-[3.5rem] font-extrabold font-headline tracking-[-0.04em] max-w-[720px] leading-[1.08]">
            {t("headline")}
          </h2>
          <p className="text-on-surface-variant/60 text-[16px] max-w-[460px] leading-[1.7]">
            {t("subtitle")}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="lg" href="/contact" data-magnetic data-cursor-text="Send Inquiry">
              {t("button")}
            </Button>
            <a
              id="whatsapp-contact"
              href="https://wa.me/919972934937"
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              data-cursor-text={t("whatsapp")}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/[0.08] text-on-surface bg-white/[0.03] backdrop-blur-sm text-[15px] font-semibold font-headline hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-[500ms]"
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              {t("whatsapp")}
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
