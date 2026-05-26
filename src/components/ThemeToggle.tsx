"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      const clip = document.getElementById("theme-clip");
      if (!clip) {
        setTheme(theme === "dark" ? "light" : "dark");
        return;
      }

      const { clientX, clientY } = e;
      const duration = 500;
      let startTime: number | null = null;
      let themeSwitched = false;

      clip.style.clipPath = `circle(0% at ${clientX}px ${clientY}px)`;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const eased = 1 - Math.pow(1 - progress, 3);
        const radius = eased * 150;

        clip.style.clipPath = `circle(${radius}% at ${clientX}px ${clientY}px)`;

        if (!themeSwitched && progress >= 0.3) {
          setTheme(theme === "dark" ? "light" : "dark");
          themeSwitched = true;
        }

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          rafRef.current = null;
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    },
    [theme, setTheme]
  );

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-full text-on-surface-variant/50 hover:text-primary hover:bg-primary/[0.06] transition-all duration-[400ms]"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
    </button>
  );
}
