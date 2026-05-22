"use client";

import { cn } from "../lib/utils";
import { type InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="group relative">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-[11px] font-medium font-label text-on-surface-variant/50 mb-1.5 tracking-[0.12em] uppercase"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            "w-full h-12 px-4 rounded-lg bg-surface-container border text-on-surface text-[14px]",
            "placeholder:text-on-surface-variant/30 placeholder:text-[14px]",
            "transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)]",
            "focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(153,102,255,0.15)]",
            "focus:placeholder:-translate-y-0.5 focus:placeholder:opacity-60",
            error
              ? "border-error focus:border-error focus:shadow-[0_0_0_3px_rgba(255,82,82,0.15)]"
              : "border-white/[0.06] hover:border-white/[0.12]",
            className
          )}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-[11px] text-error" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="mt-1.5 text-[11px] text-on-surface-variant/40">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
