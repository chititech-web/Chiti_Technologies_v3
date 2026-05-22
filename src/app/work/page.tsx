"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/sections/CTASection";
import { caseStudies } from "@/data/case-studies";

const filters = [
  "All Cases",
  "Web Development",
  "Product Design",
  "UI/UX",
  "B2B",
  "Luxury",
  "E-Commerce",
  "Brand",
  "CMS",
  "SaaS",
];

const projectTags = caseStudies.flatMap((p) => p.tags);
const uniqueFilters = ["All Cases", ...Array.from(new Set(projectTags))];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All Cases");

  const filteredProjects =
    activeFilter === "All Cases"
      ? caseStudies
      : caseStudies.filter((p) => p.tags.includes(activeFilter));

  return (
    <>
      {/* Hero */}
      <Container className="pt-36">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end mb-20">
            <div>
              <span className="text-primary/60 font-label text-[11px] tracking-[0.25em] uppercase mb-5 block font-medium">
                Portfolio
              </span>
              <h1 className="text-on-surface text-[2.5rem] md:text-[3.5rem] font-extrabold font-headline tracking-[-0.04em] leading-[1.08]">
                Curating Digital{" "}
                <span className="gradient-text-aurora">Excellence</span>
              </h1>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <p className="text-on-surface-variant/60 text-[15px] leading-[1.7] max-w-[380px] md:text-right">
                A curated selection of projects where strategy meets craft, and
                ambition meets execution.
              </p>
              <div className="flex items-baseline gap-2 mt-6">
                <span className="text-5xl font-extrabold font-headline text-on-surface tracking-[-0.03em]">
                  {caseStudies.length}
                </span>
                <span className="text-on-surface-variant/20 text-2xl">—</span>
                <span className="text-5xl font-extrabold font-headline text-on-surface tracking-[-0.03em]">
                  {caseStudies.length * 2}
                </span>
              </div>
              <span className="text-[10px] font-label uppercase tracking-[0.18em] text-on-surface-variant/35 mt-1">
                Selected Cases
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.1}>
          <div className="neon-line mb-10 opacity-15" />
          <div className="flex flex-wrap gap-2.5 mb-20">
            {(filters.length > 0 ? filters : uniqueFilters).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-[12px] font-medium font-headline transition-all duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer ${
                  activeFilter === filter
                    ? "bg-primary/90 text-on-primary shadow-[0_0_16px_rgba(77,208,225,0.2)]"
                    : "border border-white/[0.06] text-on-surface-variant/50 hover:text-on-surface hover:border-white/[0.1] bg-white/[0.02]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </FadeIn>
      </Container>

      {/* Bento Grid Portfolio */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filteredProjects.map((project, i) => (
            <FadeIn key={project.slug} delay={0.08 + i * 0.1}>
              <Link href={`/work/${project.slug}`} className="group block h-full">
                <div className="h-full">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.04] mb-5">
                    <Image
                      src={project.images.hero}
                      alt={project.client}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-surface/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-[800ms]" />
                  </div>
                  <div className="px-1">
                    <div className="flex flex-wrap gap-2 mb-2.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-label uppercase tracking-[0.15em] text-primary/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold font-headline text-on-surface mb-1.5 tracking-[-0.01em] group-hover:text-primary/80 transition-colors duration-[500ms]">
                      {project.client}
                    </h3>
                    <p className="text-on-surface-variant/50 text-[12px] mb-4">
                      {project.category}
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.04]">
                      <div>
                        <p className="text-[9px] font-label uppercase tracking-[0.15em] text-on-surface-variant/30 mb-1.5">
                          Niche
                        </p>
                        <p className="text-[12px] text-on-surface-variant/60 leading-[1.6]">
                          {project.category}
                        </p>
                      </div>
                      <div>
                        <p className="text-[9px] font-label uppercase tracking-[0.15em] text-on-surface-variant/30 mb-1.5">
                          Role
                        </p>
                        <p className="text-[12px] text-on-surface-variant/60 leading-[1.6]">
                          {project.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* CTA */}
      <Container>
        <Section className="mt-20">
          <CTASection />
        </Section>
      </Container>
    </>
  );
}
