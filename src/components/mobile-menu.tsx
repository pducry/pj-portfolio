"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "./language-provider";
import { useTheme } from "./theme-provider";
import { useFont } from "./font-provider";
import { translations } from "@/lib/translations";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { lang, toggle: toggleLang } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const { font, toggle: toggleFont } = useFont();
  const t = translations[lang];
  const scrollY = useRef(0);

  const links = [
    { href: "/works",      label: t.nav.bio },
    { href: "/playground", label: t.nav.playground },
    { href: "/contact",    label: t.nav.contact },
  ];

  const close = () => setOpen(false);

  // Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // iOS-safe scroll lock
  useEffect(() => {
    if (open) {
      scrollY.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY.current}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY.current);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [open]);

  return (
    <>
      {/* Hamburger — 44×44 touch target, mobile only */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-[6px]"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
      >
        <span className={`block h-px w-5 bg-foreground origin-center transition-all duration-300 ${open ? "translate-y-[9px] rotate-45" : ""}`} />
        <span className={`block h-px bg-foreground transition-all duration-300 ${open ? "w-0 opacity-0" : "w-5"}`} />
        <span className={`block h-px w-5 bg-foreground origin-center transition-all duration-300 ${open ? "-translate-y-[9px] -rotate-45" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          /* Overlay — bg-background uses the CSS variable, always correct regardless of hydration */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[200] bg-background flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border shrink-0">
              <Link href="/works" onClick={close} className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                <span className="text-sm font-medium text-foreground">Pedro Julien</span>
              </Link>
              <button
                onClick={close}
                className="flex h-11 w-11 items-center justify-center text-2xl leading-none text-foreground"
                aria-label="Fechar menu"
              >
                ×
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col flex-1 px-6 overflow-y-auto">
              {links.map(({ href, label }, i) => {
                const isActive = pathname === href;
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.2, ease: "easeOut" }}
                  >
                    <Link
                      href={href}
                      onClick={close}
                      className={`flex items-center justify-between py-6 border-b border-border text-2xl transition-colors ${
                        isActive ? "text-foreground font-medium" : "text-muted"
                      }`}
                    >
                      {label}
                      <span className={`text-base ${isActive ? "text-foreground" : "text-muted"}`}>
                        {isActive ? "●" : "→"}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom controls */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.2 }}
              className="px-6 pt-6 pb-10 flex flex-wrap items-center gap-3 shrink-0 border-t border-border"
            >
              {/* Lang */}
              <div className="flex items-center gap-1 bg-foreground/[0.06] rounded-full p-0.5">
                <button onClick={() => lang !== "en" && toggleLang()} className={`text-xs px-4 py-2 rounded-full transition-all ${lang === "en" ? "bg-background text-foreground shadow-sm" : "text-muted"}`}>EN</button>
                <button onClick={() => lang !== "pt" && toggleLang()} className={`text-xs px-4 py-2 rounded-full transition-all ${lang === "pt" ? "bg-background text-foreground shadow-sm" : "text-muted"}`}>PT</button>
              </div>

              {/* Font */}
              <div className="flex items-center gap-1 bg-foreground/[0.06] rounded-full p-0.5">
                <button onClick={() => font !== "sans" && toggleFont()} className={`text-xs px-4 py-2 rounded-full transition-all ${font === "sans" ? "bg-background text-foreground shadow-sm" : "text-muted"}`}>Sans</button>
                <button onClick={() => font !== "serif" && toggleFont()} className={`text-xs px-4 py-2 rounded-full transition-all ${font === "serif" ? "bg-background text-foreground shadow-sm" : "text-muted"}`} style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Serif</button>
              </div>

              {/* Theme */}
              <div className="flex items-center gap-1 bg-foreground/[0.06] rounded-full p-0.5">
                <button onClick={() => theme !== "light" && toggleTheme()} className={`text-xs px-4 py-2 rounded-full transition-all ${theme === "light" ? "bg-background text-foreground shadow-sm" : "text-muted"}`}>Light</button>
                <button onClick={() => theme !== "dark" && toggleTheme()} className={`text-xs px-4 py-2 rounded-full transition-all ${theme === "dark" ? "bg-background text-foreground shadow-sm" : "text-muted"}`}>Dark</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
