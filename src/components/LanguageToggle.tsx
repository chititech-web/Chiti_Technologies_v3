"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition } from "react";

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "hi" : "en";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="px-2.5 py-1.5 rounded-full text-[10px] font-bold font-label uppercase tracking-[0.15em] text-on-surface-variant/50 hover:text-primary hover:bg-primary/[0.06] transition-all duration-[400ms] disabled:opacity-50 cursor-pointer"
      aria-label={locale === "en" ? "Switch to Hindi" : "Switch to English"}
    >
      {locale === "en" ? "HI" : "EN"}
    </button>
  );
}
