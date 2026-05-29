"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "./language-provider";
import { useTheme } from "./theme-provider";
import { translations } from "@/lib/translations";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { lang, toggle: toggleLang } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const t = translations[lang];

  const links = [
    { href: "/works",      label: t.nav.bio },
    { href: "/playground", label: t.nav.playground },
    { href: "/contact",    label: t.nav.contact },
  ];

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const bg = theme === "dark" ? "#000000" : "#ffffff";

  return (
    <>
      {/* Hamburger — 44×44 touch target */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-[6px]"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
      >
        <span className={`block h-px w-5 bg-foreground origin-center transition-all duration-300 ease-in-out ${open ? "translate-y-[9px] rotate-45" : ""}`} />
        <span className={`block h-px bg-foreground transition-all duration-300 ease-in-out ${open ? "w-0 opacity-0" : "w-5"}`} />
        <span className={`block h-px w-5 bg-foreground origin-center transition-all duration-300 ease-in-out ${open ? "-translate-y-[9px] -rotate-45" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-[100] lg:hidden flex flex-col px-6"
            style={{ backgroundColor: bg }}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between py-5 border-b border-border">
              <Link
                href="/works"
                onClick={close}
                className="flex items-center gap-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                <span className="text-sm font-medium text-foreground">Pedro Julien</span>
              </Link>
              <button
                onClick={close}
                className="flex h-11 w-11 items-center justify-center text-2xl text-foreground hover:opacity-60 transition-opacity"
                aria-label="Fechar menu"
              >
                ×
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col flex-1">
              {links.map(({ href, label }, i) => {
                const isActive = pathname === href;
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={href}
                      onClick={close}
                      className={`flex items-center justify-between py-5 border-b border-border text-2xl transition-colors ${
                        isActive
                          ? "text-foreground font-medium"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {label}
                      {isActive
                        ? <span className="text-base text-foreground">●</span>
                        : <span className="text-muted text-xl">→</span>
                      }
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom controls */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28, duration: 0.2 }}
              className="pb-10 pt-6 flex items-center justify-between"
            >
              {/* Lang toggle */}
              <div className="flex items-center gap-1 bg-foreground/[0.06] rounded-full p-0.5">
                <button
                  onClick={() => { lang !== "en" && toggleLang(); }}
                  className={`text-xs px-3 py-1.5 rounded-full transition-all min-w-[44px] ${
                    lang === "en" ? "bg-background text-foreground shadow-sm" : "text-muted"
                  }`}
                >EN</button>
                <button
                  onClick={() => { lang !== "pt" && toggleLang(); }}
                  className={`text-xs px-3 py-1.5 rounded-full transition-all min-w-[44px] ${
                    lang === "pt" ? "bg-background text-foreground shadow-sm" : "text-muted"
                  }`}
                >PT</button>
              </div>

              {/* Theme toggle */}
              <div className="flex items-center gap-1 bg-foreground/[0.06] rounded-full p-0.5">
                <button
                  onClick={() => { theme !== "light" && toggleTheme(); }}
                  className={`text-xs px-3 py-1.5 rounded-full transition-all min-w-[44px] ${
                    theme === "light" ? "bg-background text-foreground shadow-sm" : "text-muted"
                  }`}
                >Light</button>
                <button
                  onClick={() => { theme !== "dark" && toggleTheme(); }}
                  className={`text-xs px-3 py-1.5 rounded-full transition-all min-w-[44px] ${
                    theme === "dark" ? "bg-background text-foreground shadow-sm" : "text-muted"
                  }`}
                >Dark</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
