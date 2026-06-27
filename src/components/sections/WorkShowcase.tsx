"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import FadeIn from "@/components/FadeIn";
import { ArrowUpRight } from "lucide-react";
import { featuredCaseStudies } from "@/data/case-studies";
import type { CaseStudy } from "@/data/case-studies";
import { useTranslations } from "next-intl";
import { useParallaxTilt } from "@/hooks/useParallaxTilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WorkShowcase() {
  const t = useTranslations("work");
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const scrollWidth = track.scrollWidth - section.clientWidth;
      if (scrollWidth <= 0) return;

      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          pin: true,
          anticipatePin: 1,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <FadeIn>
        <div className="flex justify-between items-end mb-14">
          <div className="flex flex-col gap-3">
            <span className="text-secondary/60 font-label text-[11px] tracking-[0.25em] uppercase font-medium">
              {t("showcase")}
            </span>
            <div className="flex items-center gap-4">
              <div className="neon-dot" />
              <h2 className="text-on-surface text-[2rem] font-extrabold font-headline tracking-[-0.02em]">
                {t("title")}
              </h2>
            </div>
          </div>
          <a
            href="/work"
            className="text-on-surface-variant/50 hover:text-primary transition-all duration-[500ms] ease-[var(--ease-out)] flex items-center gap-2 group text-[13px]"
          >
            {t("viewArchive")}
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-[400ms]"
            />
          </a>
        </div>
      </FadeIn>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto no-scrollbar pb-6 snap-x md:overflow-x-visible md:pb-0"
      >
        {featuredCaseStudies.map((project) => (
          <WorkCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

function WorkCard({ project }: { project: CaseStudy }) {
  const t = useTranslations("work");
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const tiltAttach = useParallaxTilt({ maxTilt: 3, scale: 1.02 });

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView]);

  const combinedRef = useCallback(
    (el: HTMLDivElement | null) => {
      tiltAttach(el);
      cardRef.current = el;
    },
    [tiltAttach]
  );

  return (
    <FadeIn>
      <Link
        href={`/work/${project.slug}`}
        className="min-w-[300px] md:min-w-[380px] lg:min-w-[560px] snap-start group block shrink-0"
      >
        <div
          ref={combinedRef}
          className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.04] cursor-pointer"
          style={{ willChange: "transform" }}
        >
          {project.status === "wip" && (
            <div className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[9px] font-label uppercase tracking-[0.15em] backdrop-blur-sm">
              {t("inProgress")}
            </div>
          )}
          <Image
            src={project.images.hero}
            alt={project.client}
            fill
            className="object-cover grayscale max-md:grayscale-0 group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-[2000ms] ease-[var(--ease-out)]"
            sizes="(max-width: 768px) 380px, 560px"
          />
          {project.video && (
            <video
              ref={videoRef}
              src={project.video}
              muted
              playsInline
              loop
              preload="metadata"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                isInView ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-surface/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-[800ms]" />
        </div>
        <div className="mt-5 px-1">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h4 className="text-xl font-bold font-headline text-on-surface mb-1 tracking-[-0.01em] group-hover:text-primary/90 transition-colors duration-[500ms] truncate">
                {project.client}
              </h4>
              <p className="text-on-surface-variant/60 text-[13px]">{project.category}</p>
            </div>
            <div className="px-3.5 py-1 rounded-full border border-white/[0.06] text-[10px] font-label uppercase tracking-[0.15em] text-on-surface-variant/40 shrink-0">
              {project.year}
            </div>
          </div>
          <p className="text-on-surface-variant/40 text-[12px] mt-2 line-clamp-2 leading-[1.6]">
            {project.subtitle}
          </p>
          <p className="text-primary/50 text-[10px] font-label uppercase tracking-[0.12em] mt-1.5">
            {project.role}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full bg-white/[0.03] text-[9px] font-label uppercase tracking-[0.12em] text-primary/50 border border-white/[0.04]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}
