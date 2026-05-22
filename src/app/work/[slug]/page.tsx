"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import CTASection from "@/components/sections/CTASection";
import { caseStudies } from "@/data/case-studies";
import {
  ArrowLeft,
  ExternalLink,
  Clock,
  Layers,
  CheckCircle2,
} from "lucide-react";

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = caseStudies.find((c) => c.slug === slug);

  if (!project) {
    return (
      <Container className="pt-36">
        <div className="text-center py-32">
          <h1 className="text-on-surface text-2xl font-bold mb-4">Case study not found</h1>
          <Button variant="primary" size="md" href="/work">
            Back to Work
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <>
      {/* Hero */}
      <Container className="pt-28">
        <FadeIn>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-on-surface-variant/50 hover:text-primary transition-colors duration-[400ms] text-[13px] mb-8 mt-8"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Back to Work
          </Link>
        </FadeIn>

        <FadeIn>
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/[0.04] mb-12">
            <Image
              src={project.images.hero}
              alt={project.client}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
          </div>
        </FadeIn>
      </Container>

      {/* Title & Meta */}
      <Container size="narrow">
        <FadeIn>
          <div className="mb-14">
            <span className="text-primary/60 font-label text-[11px] tracking-[0.25em] uppercase mb-5 block font-medium">
              Case Study
            </span>
            <h1 className="text-on-surface text-[2.5rem] md:text-[3.5rem] font-extrabold font-headline tracking-[-0.04em] leading-[1.08] mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-white/[0.06] text-[10px] font-label uppercase tracking-[0.12em] text-primary/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-8 pt-6 border-t border-white/[0.04]">
              <div className="flex items-center gap-3 text-on-surface-variant/60 text-[13px]">
                <Clock size={14} strokeWidth={1.5} className="text-primary/60" />
                {project.timeline}
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant/60 text-[13px]">
                <Layers size={14} strokeWidth={1.5} className="text-secondary/60" />
                {project.engagement}
              </div>
              <Link
                href={project.liveUrl}
                target="_blank"
                className="flex items-center gap-2 text-primary/80 hover:text-primary transition-colors duration-[400ms] text-[13px]"
              >
                <ExternalLink size={14} strokeWidth={1.5} />
                Visit Live Site
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Metrics */}
      <Container>
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="glass-panel rounded-2xl p-6 text-center"
              >
                <p className="text-on-surface text-[1.5rem] font-extrabold font-headline mb-1 tracking-[-0.02em]">
                  {metric.value}
                </p>
                <p className="text-on-surface-variant/40 text-[10px] font-label uppercase tracking-[0.18em]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>

      {/* Challenge & Approach */}
      <Container size="narrow">
        <Section bordered>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn>
              <div>
                <span className="text-secondary/60 font-label text-[10px] tracking-[0.3em] uppercase mb-4 block font-medium">
                  The Challenge
                </span>
                <p className="text-on-surface-variant/70 text-[15px] leading-[1.8]">
                  {project.challenge}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <span className="text-tertiary/60 font-label text-[10px] tracking-[0.3em] uppercase mb-4 block font-medium">
                  Our Approach
                </span>
                <p className="text-on-surface-variant/70 text-[15px] leading-[1.8]">
                  {project.approach}
                </p>
              </div>
            </FadeIn>
          </div>
        </Section>
      </Container>

      {/* Key Features */}
      <Container size="narrow">
        <Section>
          <FadeIn>
            <span className="text-primary/60 font-label text-[10px] tracking-[0.3em] uppercase mb-6 block font-medium">
              Key Features
            </span>
            <h2 className="text-on-surface text-[2rem] font-extrabold font-headline tracking-[-0.02em] mb-10">
              What We Delivered
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.keyFeatures.map((feature, i) => (
              <FadeIn key={feature} delay={0.05 + i * 0.06}>
                <div className="flex items-start gap-4 glass-panel rounded-xl p-5 group hover:-translate-y-0.5 transition-all duration-[500ms]">
                  <div className="p-1.5 rounded-full bg-primary/[0.06] shrink-0 mt-0.5">
                    <CheckCircle2 className="text-primary/70" size={14} strokeWidth={1.5} />
                  </div>
                  <p className="text-on-surface-variant/70 text-[13px] leading-[1.7]">
                    {feature}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>
      </Container>

      {/* Results */}
      <Container size="narrow">
        <Section bordered>
          <FadeIn>
            <div className="glass-panel rounded-[2rem] p-10 md:p-14 relative overflow-hidden border border-white/[0.03]">
              <div
                className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(77,208,225,0.04) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <span className="text-primary/60 font-label text-[10px] tracking-[0.3em] uppercase mb-4 block font-medium">
                  The Results
                </span>
                <p className="text-on-surface-variant/65 text-[15px] leading-[1.8] mb-8">
                  {project.results}
                </p>
                {project.testimonial && (
                  <div className="pt-6 border-t border-white/[0.04]">
                    <p className="text-on-surface text-[14px] italic leading-[1.7] mb-4">
                      &ldquo;{project.testimonial.quote}&rdquo;
                    </p>
                    <div>
                      <p className="text-on-surface text-[13px] font-bold">
                        {project.testimonial.author}
                      </p>
                      <p className="text-on-surface-variant/40 text-[11px]">
                        {project.testimonial.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        </Section>
      </Container>

      {/* Tech Stack */}
      <Container size="narrow">
        <Section>
          <FadeIn>
            <span className="text-secondary/60 font-label text-[10px] tracking-[0.3em] uppercase mb-6 block font-medium">
              Tech Stack
            </span>
          </FadeIn>
          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech) => (
              <FadeIn key={tech} delay={0.03}>
                <span className="px-4 py-2 rounded-full border border-white/[0.06] text-[11px] text-on-surface-variant/60 bg-white/[0.02]">
                  {tech}
                </span>
              </FadeIn>
            ))}
          </div>
        </Section>
      </Container>

      {/* CTA */}
      <Container>
        <Section>
          <CTASection />
        </Section>
      </Container>
    </>
  );
}
