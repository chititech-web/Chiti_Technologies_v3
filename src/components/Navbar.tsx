"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("navbar");

  const navLinks = [
    { href: "/" as const, label: t("home") },
    { href: "/work" as const, label: t("work") },
    { href: "/services" as const, label: t("services") },
    { href: "/about" as const, label: t("about") },
    { href: "/contact" as const, label: t("contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-[600ms] ease-[var(--ease-out)]",
        scrolled
          ? "bg-surface-container/80 backdrop-blur-xl border-b border-white/[0.04] py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[13px] font-medium transition-colors duration-[400ms] relative group",
                  pathname === link.href
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[0.5px] bg-primary transition-all duration-[400ms]",
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
            <div className="flex items-center gap-1">
              <ThemeToggle />
              <LanguageToggle />
            </div>
            <Link
              href="/contact"
              data-magnetic
              data-cursor-text="Inquire →"
              className="px-5 py-2.5 rounded-full bg-primary/10 text-primary text-[12px] font-semibold hover:bg-primary/20 transition-colors duration-[400ms]"
            >
              {t("startProject")}
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden p-2 text-on-surface z-10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface-container/95 backdrop-blur-xl border-b border-white/[0.04]">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-3 text-[14px] font-medium rounded-lg transition-colors",
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-on-surface-variant hover:bg-white/[0.02]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 px-4 py-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
            <Link
              href="/contact"
              data-magnetic
              className="mt-2 px-4 py-3 text-center rounded-lg bg-primary text-on-primary font-semibold text-[13px]"
            >
              {t("startProject")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
