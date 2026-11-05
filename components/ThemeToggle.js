"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved === "dark" || (!saved && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <button
        className="px-4 py-2 rounded-full bg-white/15 text-white text-sm font-semibold opacity-80"
        aria-label="Toggle theme"
      >
        Dark Mode
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      className="px-4 py-2 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white dark:text-slate-900 text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-md"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
