"use client";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="relative h-5 w-9 rounded-full border border-border bg-card transition-colors duration-300 hover:border-foreground/30"
    >
      <span
        className={`absolute top-1/2 block h-3 w-3 -translate-y-1/2 rounded-full bg-foreground/80 transition-all duration-300 ${
          theme === "dark" ? "left-[calc(100%-16px)]" : "left-0.5"
        }`}
      />
    </button>
  );
}
