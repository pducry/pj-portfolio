"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { CustomCursor } from "@/components/custom-cursor";
import { HorizontalGallery } from "@/components/horizontal-gallery";

function DribbbleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84C17.16 11.03 13.29 12.35 8.59 16.99" />
      <path d="M8.56 2.75C12.93 8.55 14.72 13.79 15.79 21.53" />
    </svg>
  );
}

function FigmaIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Home() {
  const [easterEgg, setEasterEgg] = useState(false);
  const [flashVisible, setFlashVisible] = useState(true);

  const handleEnter = useCallback(() => setEasterEgg(true), []);
  const handleLeave = useCallback(() => setEasterEgg(false), []);

  useEffect(() => {
    if (!easterEgg) return;
    const id = setInterval(() => setFlashVisible((v) => !v), 50);
    return () => clearInterval(id);
  }, [easterEgg]);

  return (
    <div>
      <CustomCursor />

      {/* Easter Egg Flash */}
      {easterEgg && (
        <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center">
          <Image
            src="/easter-egg.png"
            alt=""
            width={192}
            height={192}
            className="object-cover transition-none"
            style={{ opacity: flashVisible ? 1 : 0 }}
            priority
          />
        </div>
      )}

      {/* Hero Section */}
      <div className="flex min-h-svh flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-8 pt-8 md:px-12 md:pt-10 lg:px-20">
          <div className="flex items-center gap-2.5">
            <span
              className="relative flex h-2 w-2"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            <span className="text-sm font-medium tracking-widest text-foreground">
              PJ&thinsp;&mdash;&thinsp;26
            </span>
          </div>
          <ThemeToggle />
        </header>

        {/* Main Content */}
        <main className="flex flex-1 flex-col justify-end px-8 pb-[17px] md:px-12 lg:px-20">
        <section className="mb-[50px] max-w-lg space-y-6">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Hey, I&apos;m Pedro Julien &ndash;
            <br />
            Creative Director fueld by AI.
          </h1>

          <p className="max-w-md text-sm leading-relaxed text-muted">
            I&apos;m a builder at heart: 20+ of professional experience
            working from product design ~ branding experiences. I prototype
            fast, iterate with intention, and translate insights into design
            that feels clear, human and purposeful. Design is where I balance
            exploration, craft and make my world possible.
          </p>

          <p className="text-xs text-muted">
            Building cool stuff with{" "}
            <a href="https://landscape.productions/" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground transition-opacity hover:opacity-70">Landscape</a>
            {" "}&amp;{" "}
            <span className="font-semibold text-foreground">MAAR</span>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-muted">
            <a
              href="#"
              aria-label="Dribbble"
              className="transition-colors hover:text-foreground"
            >
              <DribbbleIcon />
            </a>
            <a
              href="#"
              aria-label="Figma"
              className="transition-colors hover:text-foreground"
            >
              <FigmaIcon />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <LinkedInIcon />
            </a>
          </div>
        </section>
      </main>

        {/* Footer */}
        <footer className="mb-[50px] px-8 pb-8 text-xs text-muted md:px-12 lg:px-20">
          <span>&copy; Pedro Julien 2026</span>
        </footer>
      </div>

      {/* Horizontal Gallery */}
      <HorizontalGallery />
    </div>
  );
}
