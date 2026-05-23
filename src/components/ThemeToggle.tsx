"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      const clip = document.getElementById("theme-clip");
      if (!clip) {
        setTheme(theme === "dark" ? "light" : "dark");
        return;
      }
      const { clientX, clientY } = e;
      clip.style.clipPath = `circle(0% at ${clientX}px ${clientY}px)`;
      clip.classList.remove("active");
      requestAnimationFrame(() => {
        clip.style.clipPath = `circle(150% at ${clientX}px ${clientY}px)`;
        clip.classList.add("active");
      });
      setTimeout(() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }, 50);
      setTimeout(() => {
        clip.classList.remove("active");
      }, 700);
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
