"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import CTASection from "@/components/sections/CTASection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { Cpu, Shield, Layers } from "lucide-react";

const pillars = [
  { icon: Cpu, key: "pillar01", accent: "text-primary/80", bg: "bg-primary/[0.06]" },
  { icon: Shield, key: "pillar02", accent: "text-secondary/80", bg: "bg-secondary/[0.06]" },
  { icon: Layers, key: "pillar03", accent: "text-tertiary/80", bg: "bg-tertiary/[0.06]" },
];

const stats = [
  { value: "12+", key: "statsEngineers" },
  { value: "150+", key: "statsProjects" },
  { value: "99.9%", key: "statsUptime" },
];

export default function AboutPage() {
  const t = useTranslations("about");
  const sanskritRef = useRef<HTMLDivElement>(null);
  const consciousnessRef = useRef<HTMLSpanElement>(null);
  const pillarRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      pillarRefs.current.forEach((el, i) => {
        if (!el) return;
        const statEl = el.querySelector("[data-pillar-stat]");
        if (!statEl) return;

        gsap.fromTo(
          statEl,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      const consciousnessEl = consciousnessRef.current;
      if (consciousnessEl) {
        gsap.fromTo(
          consciousnessEl,
          { textShadow: "0 0 0px rgba(153, 102, 255, 0)" },
          {
            textShadow: "0 0 40px rgba(153, 102, 255, 0.4), 0 0 80px rgba(153, 102, 255, 0.2)",
            duration: 2,
            scrollTrigger: { trigger: consciousnessEl, start: "top 85%" },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const setPillarRef = (i: number) => (el: HTMLDivElement | null) => {
    pillarRefs.current[i] = el;
  };

  const bodyParts = t("philosophyBody").split("\n\n");

  return (
    <>
      <Container size="narrow" className="pt-36">
        <FadeIn>
          <div className="text-center mb-20 relative">
            <div
              ref={sanskritRef}
              className="absolute left-1/2 -translate-x-1/2 -top-16 text-[8rem] md:text-[12rem] font-headline font-black text-primary/[0.04] select-none pointer-events-none leading-none"
            >
              चिति
            </div>
            <span className="text-primary/60 font-label text-[11px] tracking-[0.3em] uppercase mb-6 block font-medium relative z-10">
              {t("tagline")}
            </span>
            <h1 className="text-on-surface text-[2.5rem] md:text-[3.5rem] font-extrabold font-headline tracking-[-0.04em] leading-[1.08] mb-8 relative z-10">
              {t("title")}
            </h1>
            <p className="text-on-surface-variant/65 text-[17px] max-w-[600px] mx-auto leading-[1.7] relative z-10">
              <span ref={consciousnessRef} className="text-primary/90 font-medium transition-all duration-[1000ms]">
                Chiti (चिति)
              </span>
              : {t("subtitle")}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-6 mb-24">
            {bodyParts.map((part, i) => (
              <p
                key={i}
                className="text-on-surface-variant/60 text-[15px] leading-[1.8] max-w-[640px] mx-auto"
              >
                {part}
              </p>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-3 gap-4 mb-24">
            {stats.map((stat) => (
              <div
                key={stat.key}
                className="glass-panel rounded-2xl p-6 sm:p-8 text-center group hover:-translate-y-1 transition-all duration-[600ms] ease-[var(--ease-out)] cursor-default"
              >
                <p className="text-on-surface text-[1.5rem] sm:text-[2rem] font-extrabold font-headline mb-2 tracking-[-0.02em]">
                  {stat.value}
                </p>
                <p className="text-on-surface-variant/40 text-[10px] font-label uppercase tracking-[0.18em]">
                  {t(stat.key)}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>

      <Container size="narrow">
        <Section>
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-secondary/60 font-label text-[11px] tracking-[0.3em] uppercase mb-4 block font-medium">
                {t("collectiveTitle")}
              </span>
              <p className="text-on-surface-variant/60 text-[15px] leading-[1.8] max-w-[640px] mx-auto">
                {t("collectiveBody")}
              </p>
            </div>
          </FadeIn>
        </Section>
      </Container>

      <Container>
        <Section>
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-on-surface text-[2rem] font-extrabold font-headline tracking-[-0.02em]">
                {t("pillarsTitle")}
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.key} delay={0.08 + i * 0.1}>
                <div
                  ref={setPillarRef(i)}
                  className="glass-panel rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-[600ms] ease-[var(--ease-out)] relative overflow-hidden"
                >
                  <div
                    className={`size-11 rounded-xl ${pillar.bg} flex items-center justify-center mb-6 ${pillar.accent}`}
                  >
                    <pillar.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-on-surface text-[16px] font-bold font-headline mb-2.5 tracking-[-0.01em]">
                    {t(pillar.key)}
                  </h3>
                  <p className="text-on-surface-variant/60 text-[13px] leading-[1.7] mb-6">
                    {t(`${pillar.key}Desc`)}
                  </p>
                  <div
                    data-pillar-stat
                    className="text-[10px] font-mono tracking-[0.15em] text-primary/40 uppercase opacity-0"
                  >
                    ● Live
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms]" />
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>
      </Container>

      <Container size="narrow">
        <Section>
          <FadeIn>
            <div className="glass-panel rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute -top-48 -left-48 w-[400px] h-[400px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(153, 102, 255, 0.06) 0%, transparent 70%)", animation: "drift 20s ease-in-out infinite alternate" }} />
              <div className="absolute -bottom-48 -right-48 w-[400px] h-[400px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(0, 188, 212, 0.06) 0%, transparent 70%)", animation: "drift-reverse 18s ease-in-out infinite alternate" }} />
              <div className="relative z-10">
                <h2 className="text-on-surface text-[1.75rem] md:text-[2.25rem] font-extrabold font-headline tracking-[-0.03em] mb-4">
                  {t("blueprintTitle")}
                </h2>
                <p className="text-on-surface-variant/60 text-[15px] max-w-[560px] mx-auto leading-[1.7] mb-6">
                  {t("blueprintBody")}
                </p>
                <span className="inline-block text-primary/70 text-[13px] font-semibold font-headline italic">
                  {t("blueprintTagline")}
                </span>
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
