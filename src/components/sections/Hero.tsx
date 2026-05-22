"use client";

import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import { Cpu, BarChart3, Workflow, Database, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

const systemModules = [
  { icon: Database, labelKey: "crmCore", position: "left-0 -translate-x-4 top-1/4" },
  { icon: Workflow, labelKey: "automation", position: "right-0 translate-x-4 top-1/3" },
  { icon: BarChart3, labelKey: "analytics", position: "left-0 -translate-x-2 bottom-1/3" },
  { icon: Cpu, labelKey: "aiEngine", position: "right-0 translate-x-2 bottom-1/4" },
];

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <div className="@container">
      <div className="flex flex-col gap-16 px-4 py-24 @[864px]:flex-row @[864px]:items-center @[864px]:gap-20">
        <div className="flex flex-col gap-10 flex-1 relative">
          <div className="hidden @[1024px]:block absolute inset-0 pointer-events-none">
            {systemModules.map((module, i) => (
              <motion.div
                key={module.labelKey}
                className={`absolute ${module.position} opacity-20`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.2, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
              >
                <div className="system-module rounded-xl p-4 float-slow">
                  <module.icon size={28} strokeWidth={1} className="text-primary" />
                  <span className="text-[10px] uppercase tracking-[0.15em] text-on-surface-variant/60 mt-2 block">
                    {t(`modules.${module.labelKey}`)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <FadeIn direction="none" delay={0.15}>
            <div className="flex flex-col gap-6 text-left relative z-10">
              <div className="flex items-center gap-3">
                <div className="neon-dot" />
                <span className="text-secondary/70 font-label text-[11px] tracking-[0.25em] uppercase font-medium">
                  {t("tagline")}
                </span>
              </div>
              <h1 className="text-on-surface text-[2.75rem] font-extrabold leading-[1.08] tracking-[-0.035em] @[480px]:text-[4rem] font-headline">
                {t("headline")}
              </h1>
              <p className="text-on-surface-variant/70 text-[17px] max-w-[480px] leading-[1.65]">
                {t("subtitle")}
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="none" delay={0.35}>
            <div className="flex flex-wrap gap-4 relative z-10">
              <Button variant="primary" size="md" href="/contact">
                {t("cta")}
              </Button>
              <Button variant="secondary" size="md" href="/work">
                {t("ctaSecondary")}
              </Button>
            </div>
          </FadeIn>

          <motion.div
            className="absolute top-20 right-10 w-2 h-2 bg-primary/30 rounded-full"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-1 h-1 bg-secondary/40 rounded-full"
            animate={{ y: [0, -15, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-10 left-20 w-1.5 h-1.5 bg-tertiary/30 rounded-full"
            animate={{ y: [0, -25, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <FadeIn direction="right" delay={0.25} duration={1.2}>
          <div className="relative w-full aspect-square @[864px]:w-[480px] @[864px]:h-[480px]">
            <div
              className="absolute -inset-20 bg-gradient-to-tr from-primary/20 via-secondary/15 to-tertiary/10 blur-[120px] rounded-full"
              style={{ animation: "drift 20s ease-in-out infinite alternate" }}
            />
            
            <div className="relative w-full h-full glass-panel rounded-3xl overflow-hidden p-8 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant/40">
                  <Sparkles size={14} />
                  <span className="text-[10px] uppercase tracking-[0.15em]">{t("systemActive")}</span>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 border border-primary/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-4 border border-secondary/15 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-8 border border-tertiary/10 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-surface/50" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.04]">
                <div className="text-center">
                  <p className="text-on-surface text-xl font-bold font-headline">99.9%</p>
                  <p className="text-on-surface-variant/40 text-[9px] uppercase tracking-[0.12em]">{t("uptime")}</p>
                </div>
                <div className="text-center">
                  <p className="text-on-surface text-xl font-bold font-headline">12ms</p>
                  <p className="text-on-surface-variant/40 text-[9px] uppercase tracking-[0.12em]">{t("latency")}</p>
                </div>
                <div className="text-center">
                  <p className="text-on-surface text-xl font-bold font-headline">256</p>
                  <p className="text-on-surface-variant/40 text-[9px] uppercase tracking-[0.12em]">{t("encryption")}</p>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2 float"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.15em]">{t("live")}</span>
            </motion.div>
            <motion.div
              className="absolute -bottom-3 -left-3 glass rounded-xl px-3 py-2 float-medium"
              style={{ animationDelay: "1s" }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.15em]">{t("version")}</span>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
