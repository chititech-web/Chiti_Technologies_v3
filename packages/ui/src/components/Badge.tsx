"use client";

import { cn } from "../lib/utils";
import { type ReactNode } from "react";

export type BadgeVariant = "default" | "success" | "warn" | "error";

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-white/[0.03] text-on-surface-variant/60 border border-white/[0.04]",
  success:
    "bg-success/10 text-success border border-success/20",
  warn:
    "bg-warning/10 text-warning border border-warning/20",
  error:
    "bg-error/10 text-error border border-error/20",
};

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-[9px] font-label uppercase tracking-[0.12em]",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
