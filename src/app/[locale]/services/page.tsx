"use client";

import Container from "@/components/Container";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CTASection from "@/components/sections/CTASection";
import {
  Palette,
  Globe,
  PenTool,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("services");

  const services = [
    {
      title: t("brandStrategy"),
      description: t("brandStrategyDesc"),
      icon: Palette,
      accent: "primary" as const,
      features: t.raw("featuresBrand") as string[],
    },
    {
      title: t("digitalCuration"),
      description: t("digitalCurationDesc"),
      icon: Globe,
      accent: "secondary" as const,
      features: t.raw("featuresDigital") as string[],
    },
    {
      title: t("visualIdentity"),
      description: t("visualIdentityDesc"),
      icon: PenTool,
      accent: "tertiary" as const,
      features: t.raw("featuresVisual") as string[],
    },
    {
      title: t("experienceDesign"),
      description: t("experienceDesignDesc"),
      icon: Lightbulb,
      accent: "primary" as const,
      features: t.raw("featuresExperience") as string[],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: t("process01"),
      description: t("process01Desc"),
      hasImage: true,
    },
    {
      number: "02",
      title: t("process02"),
      description: t("process02Desc"),
      hasImage: false,
    },
    {
      number: "03",
      title: t("process03"),
      description: t("process03Desc"),
      hasImage: false,
    },
  ];

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
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="md" href="/work">
                {t("cta")}
              </Button>
              <Button variant="secondary" size="md" href="#process">
                {t("ctaProcess")}
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>

      <Container>
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={0.08 + i * 0.1}>
                <Card accent={service.accent} className="h-full p-7">
                  <div
                    className={`size-11 rounded-xl flex items-center justify-center mb-7 ${
                      service.accent === "primary"
                        ? "bg-primary/[0.07] text-primary/80"
                        : service.accent === "secondary"
                        ? "bg-secondary/[0.07] text-secondary/80"
                        : "bg-tertiary/[0.07] text-tertiary/80"
                    }`}
                  >
                    <service.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-on-surface text-[15px] font-bold font-headline mb-2.5 tracking-[-0.01em]">
                    {service.title}
                  </h3>
                  <p className="text-on-surface-variant/60 text-[13px] leading-[1.7] mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.features.map((feature: string) => (
                      <span
                        key={feature}
                        className="px-2.5 py-1 rounded-full text-[9px] font-label uppercase tracking-[0.12em] bg-white/[0.03] text-on-surface-variant/40 border border-white/[0.04]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Section>
      </Container>

      <Container size="narrow">
        <Section>
          <FadeIn>
            <div className="text-center">
              <span className="text-primary/60 font-label text-[11px] tracking-[0.25em] uppercase mb-4 block font-medium">
                {t("investmentTag")}
              </span>
              <h2 className="text-on-surface text-[2rem] font-extrabold font-headline mb-5 tracking-[-0.02em]">
                {t("investmentTitle")}
              </h2>
              <p className="text-on-surface-variant/60 text-[14px] max-w-[520px] mx-auto leading-[1.7] mb-8">
                {t("investmentDesc")}
              </p>
              <div className="inline-block px-6 py-3 rounded-full border border-primary/20 text-primary/80 text-[14px] font-bold font-headline">
                {t("investmentMin")}
              </div>
            </div>
          </FadeIn>
        </Section>
      </Container>

      <Container>
        <Section id="process" bordered>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            <div className="lg:col-span-4">
              <FadeIn>
                <div className="lg:sticky lg:top-32">
                  <span className="text-tertiary/60 font-label text-[11px] tracking-[0.3em] uppercase block mb-4 font-medium">
                    {t("methodology")}
                  </span>
                  <h2 className="text-on-surface text-[2rem] font-extrabold font-headline mb-5 tracking-[-0.02em]">
                    {t("methodologyTitle")}
                  </h2>
                  <p className="text-on-surface-variant/60 text-[14px] leading-[1.7]">
                    {t("methodologyDesc")}
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-8 space-y-16">
              {processSteps.map((step, i) => (
                <FadeIn key={step.number} delay={0.1 + i * 0.12}>
                  <div className="flex gap-7 items-start relative group">
                    <div className="w-11 h-11 rounded-full glass-panel flex items-center justify-center shrink-0 text-primary/70 font-bold text-[13px]">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold font-headline text-on-surface mb-3 tracking-[-0.01em]">
                        {step.title}
                      </h4>
                      <p className="text-on-surface-variant/65 text-[14px] leading-[1.7] mb-6">
                        {step.description}
                      </p>
                      {step.hasImage && (
                        <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/[0.04]">
                          <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEYxlpbwhzO2KzP9BV4zTUfCNXlfvSEvENAxa-IV1AE_AdsQNlLUII7VO6xub8uqyEZqaoguMRIoNdDuV48qdRfsmwjlmXpBkpqGA8vqy0D-i7BQDmnsM4bvoWeINFuSTqSUqT6G2GJxvb5gDCqgHWW5rGff6aHDWL2lVG0R38QWFvuMaaRrLWd4PdWSHnhEfVJMBnevK9BHw80vr6AoNrO7s7Tmkky73Y5VG5iioAd7lyrKOZdpNwQZDj2V1VMr8U1_bt-HMgR5Q"
                            alt="Minimalist design audit setup"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-[1500ms] ease-[var(--ease-out)]"
                            sizes="(max-width: 1024px) 100vw, 600px"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Section>
      </Container>

      <Container>
        <Section>
          <FadeIn>
            <div className="glass-panel rounded-[2rem] p-10 md:p-16 relative overflow-hidden border border-white/[0.03]">
              <div
                className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(153,102,255,0.04) 0%, transparent 70%)",
                }}
              />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <span className="text-secondary/60 font-label text-[11px] tracking-[0.25em] uppercase block mb-5 font-medium">
                    {t("caseStudy")}
                  </span>
                  <h3 className="text-on-surface text-[1.75rem] font-extrabold font-headline mb-5 tracking-[-0.02em]">
                    {t("caseStudyTitle")}
                  </h3>
                  <p className="text-on-surface-variant/65 text-[14px] leading-[1.75] mb-8">
                    {t("caseStudyDesc")}
                  </p>
                  <div className="flex gap-10 mb-8 pt-6 border-t border-white/[0.04]">
                    <div>
                      <p className="text-xl font-extrabold font-headline text-primary/80 tracking-[-0.02em]">
                        2
                      </p>
                      <p className="text-[10px] text-on-surface-variant/40 font-label uppercase tracking-[0.15em] mt-1">
                        {t("caseStudyViews")}
                      </p>
                    </div>
                    <div>
                      <p className="text-xl font-extrabold font-headline text-secondary/80 tracking-[-0.02em]">
                        4
                      </p>
                      <p className="text-[10px] text-on-surface-variant/40 font-label uppercase tracking-[0.15em] mt-1">
                        {t("caseStudyGroups")}
                      </p>
                    </div>
                    <div>
                      <p className="text-xl font-extrabold font-headline text-tertiary/80 tracking-[-0.02em]">
                        5
                      </p>
                      <p className="text-[10px] text-on-surface-variant/40 font-label uppercase tracking-[0.15em] mt-1">
                        {t("caseStudyLayers")}
                      </p>
                    </div>
                  </div>
                  <Button variant="primary" size="sm" href="/work/netq-command">
                    {t("viewCaseStudy")} <ArrowRight size={14} strokeWidth={1.5} className="ml-2" />
                  </Button>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.04]">
                  <Image
                    src="/case-studies/netq/overview-screen.svg"
                    alt="NetQ Command — Operations Dashboard Concept"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
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
