"use client";

import Container from "@/components/Container";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import CTASection from "@/components/sections/CTASection";
import { Globe, Cpu, ShoppingCart, LayoutDashboard, MessageCircle, Palette, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const accentMap: Record<string, { bg: string; color: string }> = {
  primary: { bg: "bg-primary/[0.07]", color: "text-primary/80" },
  secondary: { bg: "bg-secondary/[0.07]", color: "text-secondary/80" },
  tertiary: { bg: "bg-tertiary/[0.07]", color: "text-tertiary/80" },
  accent: { bg: "bg-accent/[0.07]", color: "text-accent/80" },
};

const services = [
  { key: "card01", icon: Globe, accent: "primary" },
  { key: "card02", icon: Cpu, accent: "secondary" },
  { key: "card03", icon: ShoppingCart, accent: "tertiary" },
  { key: "card04", icon: LayoutDashboard, accent: "accent" },
  { key: "card05", icon: MessageCircle, accent: "primary" },
  { key: "card06", icon: Palette, accent: "secondary" },
];

export default function ServicesPage() {
  const t = useTranslations("services");

  return (
    <>
      <Container className="pt-36">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-secondary/60 font-label text-[11px] tracking-[0.25em] uppercase mb-6 block font-medium">
              {t("tagline")}
            </span>
            <h1 className="text-on-surface text-[2.5rem] md:text-[3.5rem] font-extrabold font-headline tracking-[-0.04em] leading-[1.08] mb-8">
              {t("title")}
            </h1>
            <p className="text-on-surface-variant/70 text-[17px] max-w-[520px] mx-auto leading-[1.7] mb-12">
              {t("subtitle")}
            </p>
            <Button variant="primary" size="md" href="/contact">
              Start a Project
            </Button>
          </div>
        </FadeIn>
      </Container>

      <Container>
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const colors = accentMap[service.accent];
              const Icon = service.icon;
              return (
                <FadeIn key={service.key} delay={0.08 + i * 0.08}>
                  <div className="group relative p-8 rounded-2xl glass-panel transition-all duration-[700ms] ease-[var(--ease-out)] hover:-translate-y-1">
                    <div
                      className={`size-12 rounded-xl ${colors.bg} flex items-center justify-center mb-6 ${colors.color} transition-all duration-[500ms]`}
                    >
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-on-surface text-lg font-bold mb-3 font-headline tracking-[-0.01em]">
                      {t(`${service.key}`)}
                    </h3>
                    <p className="text-on-surface-variant/70 text-[13px] leading-[1.7] mb-8">
                      {t(`${service.key}Desc`)}
                    </p>
                    <div className="flex items-center gap-2 text-primary/50 text-[12px] font-semibold group-hover:text-primary transition-colors duration-[400ms]">
                      Learn more <ArrowRight size={14} strokeWidth={1.5} />
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Section>
      </Container>

      <Container>
        <Section>
          <CTASection />
        </Section>
      </Container>
    </>
  );
}
