"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
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
    { href: "/works",      label: t.nav.bio        },
    { href: "/playground", label: t.nav.playground  },
    { href: "/contact",    label: t.nav.contact     },
  ];

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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

  // explicit bg color — no CSS variable dependency
  const bg = theme === "dark" ? "#161616" : "#FFFAEA";
  const fg = theme === "dark" ? "#ededed" : "#0a0a0a";
  const border = theme === "dark" ? "#2a2a2a" : "#e5e5e5";

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-[6px]"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
      >
        <span className={`block h-px w-5 origin-center transition-all duration-300 ${open ? "translate-y-[9px] rotate-45" : ""}`} style={{ backgroundColor: fg }} />
        <span className={`block h-px origin-center transition-all duration-300 ${open ? "w-0 opacity-0" : "w-5"}`} style={{ backgroundColor: fg }} />
        <span className={`block h-px w-5 origin-center transition-all duration-300 ${open ? "-translate-y-[9px] -rotate-45" : ""}`} style={{ backgroundColor: fg }} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            style={{ backgroundColor: bg }}
            className="fixed inset-0 z-[999] flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-5 shrink-0" style={{ borderBottom: `1px solid ${border}` }}>
              <Link href="/works" onClick={close} className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                <span className="text-sm font-medium" style={{ color: fg }}>Pedro Julien</span>
              </Link>
              <button
                onClick={close}
                className="flex h-11 w-11 items-center justify-center text-3xl leading-none"
                style={{ color: fg }}
                aria-label="Fechar menu"
              >
                ×
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col flex-1 px-6">
              {links.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={close}
                    className="flex items-center justify-between py-7"
                    style={{ borderBottom: `1px solid ${border}` }}
                  >
                    <span
                      className="text-3xl font-medium"
                      style={{ color: isActive ? fg : `${fg}99` }}
                    >
                      {label}
                    </span>
                    <span className="text-lg" style={{ color: `${fg}66` }}>
                      {isActive ? "●" : "→"}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Bottom controls */}
            <div
              className="px-6 pt-5 pb-10 flex flex-wrap gap-3 shrink-0"
              style={{ borderTop: `1px solid ${border}` }}
            >
              {/* Lang */}
              <div className="flex items-center rounded-full p-0.5" style={{ backgroundColor: `${fg}10` }}>
                <button onClick={() => lang !== "en" && toggleLang()} className="text-xs px-4 py-2 rounded-full transition-all" style={{ backgroundColor: lang === "en" ? bg : "transparent", color: lang === "en" ? fg : `${fg}66` }}>EN</button>
                <button onClick={() => lang !== "pt" && toggleLang()} className="text-xs px-4 py-2 rounded-full transition-all" style={{ backgroundColor: lang === "pt" ? bg : "transparent", color: lang === "pt" ? fg : `${fg}66` }}>PT</button>
              </div>

              {/* Font */}
              <div className="flex items-center rounded-full p-0.5" style={{ backgroundColor: `${fg}10` }}>
                <button onClick={() => font !== "sans" && toggleFont()} className="text-xs px-4 py-2 rounded-full transition-all" style={{ backgroundColor: font === "sans" ? bg : "transparent", color: font === "sans" ? fg : `${fg}66` }}>Sans</button>
                <button onClick={() => font !== "serif" && toggleFont()} className="text-xs px-4 py-2 rounded-full transition-all" style={{ backgroundColor: font === "serif" ? bg : "transparent", color: font === "serif" ? fg : `${fg}66`, fontFamily: "var(--font-lora), Georgia, serif" }}>Serif</button>
              </div>

              {/* Theme */}
              <div className="flex items-center rounded-full p-0.5" style={{ backgroundColor: `${fg}10` }}>
                <button onClick={() => theme !== "light" && toggleTheme()} className="text-xs px-4 py-2 rounded-full transition-all" style={{ backgroundColor: theme === "light" ? bg : "transparent", color: theme === "light" ? fg : `${fg}66` }}>Light</button>
                <button onClick={() => theme !== "dark" && toggleTheme()} className="text-xs px-4 py-2 rounded-full transition-all" style={{ backgroundColor: theme === "dark" ? bg : "transparent", color: theme === "dark" ? fg : `${fg}66` }}>Dark</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
