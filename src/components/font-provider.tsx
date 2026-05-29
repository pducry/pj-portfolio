"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type FontMode = "sans" | "serif";

const FontContext = createContext<{ font: FontMode; toggle: () => void }>({
  font: "sans",
  toggle: () => {},
});

export function FontProvider({ children }: { children: React.ReactNode }) {
  const [font, setFont] = useState<FontMode>("sans");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("font") as FontMode | null;
    if (stored === "serif") setFont("serif");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("font-serif-mode", font === "serif");
    localStorage.setItem("font", font);
  }, [font, mounted]);

  const toggle = useCallback(() => {
    setFont((prev) => (prev === "sans" ? "serif" : "sans"));
  }, []);

  return (
    <FontContext.Provider value={{ font, toggle }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFont() {
  return useContext(FontContext);
}
