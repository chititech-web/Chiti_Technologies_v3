"use client";

import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { forwardRef, type ElementType, type ReactNode } from "react";
import Link from "next/link";
import { useAudioHaptic } from "../hooks/useAudioHaptic";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  loading?: boolean;
  audioHapticTick?: boolean;
  disabled?: boolean;
  as?: ElementType;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-primary to-primary-dim text-on-primary " +
    "hover:shadow-[0_0_30px_rgba(153,102,255,0.3),0_0_80px_rgba(153,102,255,0.08)] " +
    "active:shadow-[0_0_16px_rgba(153,102,255,0.35)] " +
    "btn-primary-wrap",
  secondary:
    "border border-white/[0.08] text-on-surface " +
    "bg-white/[0.03] backdrop-blur-sm " +
    "hover:bg-white/[0.06] hover:border-white/[0.12] " +
    "hover:shadow-[0_0_20px_rgba(153,102,255,0.06)]",
  ghost:
    "text-on-surface-variant bg-transparent " +
    "hover:text-on-surface",
  danger:
    "bg-gradient-to-r from-error to-error-dim text-on-error " +
    "hover:shadow-[0_0_30px_rgba(255,82,82,0.3),0_0_80px_rgba(255,82,82,0.08)] " +
    "active:shadow-[0_0_16px_rgba(255,82,82,0.35)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-6 text-[13px]",
  md: "h-[52px] px-8 text-[14px]",
  lg: "h-14 px-10 text-[15px]",
};

const motionTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className,
      href,
      onClick,
      type = "button",
      loading = false,
      disabled = false,
      audioHapticTick = false,
      as,
    },
    ref
  ) => {
    const { tick } = useAudioHaptic();

    const baseStyles =
      "relative inline-flex items-center justify-center rounded-full font-semibold font-headline tracking-[0.01em] cursor-pointer overflow-hidden " +
      "transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)]";

    const mergedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      (disabled || loading) && "opacity-50 pointer-events-none",
      className
    );

    const handleClick = () => {
      if (disabled || loading) return;
      if (audioHapticTick) tick();
      onClick?.();
    };

    const inner = (
      <>
        {variant === "primary" && (
          <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary-fixed to-primary-dim opacity-0 hover:opacity-100 transition-opacity duration-[var(--duration-normal)]" />
        )}
        <span className="relative z-10 truncate inline-flex items-center gap-2">
          {loading && (
            <span className="size-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
          )}
          {children}
        </span>
      </>
    );

    const motionProps = {
      whileHover: disabled || loading ? {} : { scale: 1.03 },
      whileTap: disabled || loading ? {} : { scale: 0.97 },
      transition: motionTransition,
    };

    if (href) {
      return (
        <Link href={href} onClick={handleClick} className="inline-flex" ref={ref as any}>
          <motion.span {...motionProps} className={mergedClassName}>
            {inner}
          </motion.span>
        </Link>
      );
    }

    const Tag = as || "button";

    return (
      <motion.span
        {...motionProps}
        className={cn("inline-flex", Tag !== "button" && "contents")}
      >
        <Tag
          type={Tag === "button" ? type : undefined}
          onClick={handleClick}
          disabled={disabled || loading}
          className={cn(Tag === "button" ? mergedClassName : undefined)}
          ref={ref as any}
        >
          {Tag === "button" ? null : inner}
        </Tag>
      </motion.span>
    );
  }
);

Button.displayName = "Button";
export default Button;
