"use client";

import { cn } from "../lib/utils";

export interface SkeletonProps {
  className?: string;
  lines?: number;
  width?: string | number;
  height?: string | number;
}

export default function Skeleton({ className, lines, width, height }: SkeletonProps) {
  if (lines) {
    return (
      <div className="space-y-3" aria-busy="true" aria-label="Loading content">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-4 rounded-md bg-surface-variant/40 animate-pulse",
              i === lines - 1 ? "w-3/4" : "w-full",
              className
            )}
            style={{ width: i === lines - 1 ? undefined : width }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      aria-busy="true"
      aria-label="Loading"
      className={cn(
        "rounded-md bg-surface-variant/40 animate-pulse",
        className
      )}
      style={{ width, height }}
    />
  );
}
