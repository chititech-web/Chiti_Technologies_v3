"use client";

import { Link } from "@/i18n/routing";
import Logo from "@/components/Logo";
import { useTranslations } from "next-intl";

const socialLinks = [
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "Dribbble" },
  { href: "#", label: "Twitter" },
];

export default function Footer() {
  const t = useTranslations("footer");

  const footerLinks = {
    work: [
      { href: "/work" as const, label: t("portfolio") },
      { href: "/work#case-studies" as const, label: t("caseStudies") },
    ],
    services: [
      { href: "/services" as const, label: t("allServices") },
      { href: "/services#process" as const, label: t("ourProcess") },
    ],
    company: [
      { href: "/about" as const, label: t("about") },
      { href: "/contact" as const, label: t("contact") },
    ],
  };

  return (
    <footer className="border-t border-white/[0.04] bg-surface-container/50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-6 text-on-surface-variant/60 text-[14px] leading-[1.7] max-w-[320px]">
              {t("description")}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface/60 mb-5">
              {t("work")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.work.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant/50 hover:text-primary transition-colors duration-[400ms] text-[13px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface/60 mb-5">
              {t("services")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant/50 hover:text-primary transition-colors duration-[400ms] text-[13px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface/60 mb-5">
              {t("company")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant/50 hover:text-primary transition-colors duration-[400ms] text-[13px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant/40 text-[12px]">
            © {new Date().getFullYear()} Chiti Technologies. {t("rights")}
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-on-surface-variant/40 hover:text-primary transition-colors duration-[400ms] text-[14px] md:text-[12px]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
