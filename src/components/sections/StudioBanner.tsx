"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function StudioBanner() {
  return (
    <FadeIn>
      <div className="relative overflow-hidden rounded-[2rem] aspect-video min-h-[280px] md:min-h-[400px]">
        <Image
          src="/images/about/studio-banner.png"
          alt="Chiti Technologies studio workspace"
          fill
          className="object-cover"
          sizes="100vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/40 to-surface/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
          <div className="flex flex-col gap-3 max-w-[480px]">
            <span className="text-primary/60 font-label text-[11px] tracking-[0.25em] uppercase font-medium">
              The Studio
            </span>
            <h2 className="text-on-surface text-[1.75rem] md:text-[2.5rem] font-extrabold font-headline leading-[1.12] tracking-[-0.02em]">
              Thoughtful systems built by a small independent team.
            </h2>
            <p className="text-on-surface-variant/70 text-[14px] md:text-[16px] leading-[1.7] max-w-[400px]">
              A small systems studio combining design, engineering, and business thinking.
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
