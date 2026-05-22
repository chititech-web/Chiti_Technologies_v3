"use client";

import { cn } from "../lib/utils";
import { type ReactNode } from "react";

export type CardAccent = "primary" | "secondary" | "tertiary";
export type CardElevation = "sm" | "md" | "lg";

export interface CardProps {
  children: ReactNode;
  className?: string;
  accent?: CardAccent;
  elevation?: CardElevation;
  tilt?: boolean;
}

const accentBorder: Record<CardAccent, string> = {
  primary: "border-primary/10 hover:border-primary/20",
  secondary: "border-secondary/10 hover:border-secondary/20",
  tertiary: "border-tertiary/10 hover:border-tertiary/20",
};

export default function Card({
  children,
  className,
  accent = "primary",
  elevation = "md",
  tilt = false,
}: CardProps) {
  const elevationShadow = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  };

  return (
    <div
      className={cn(
        "glass-panel rounded-2xl p-8 transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)]",
        tilt && "hover:-translate-y-1",
        accentBorder[accent],
        elevationShadow[elevation],
        className
      )}
    >
      {children}
    </div>
  );
}
