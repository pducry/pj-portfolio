"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navigation } from "@/components/navigation";
import { HorizontalGallery } from "@/components/horizontal-gallery";
import { GridControls } from "@/components/grid-controls";
import { useEntrance } from "@/components/entrance-provider";

export default function Works() {
  const animate = useEntrance();
  const [easterEgg, setEasterEgg] = useState(false);
  const [flashVisible, setFlashVisible] = useState(true);
  const [columns, setColumns] = useState(3);
  const [gap, setGap] = useState(8);
  const [galleryInView, setGalleryInView] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleEnter = useCallback(() => setEasterEgg(true), []);
  const handleLeave = useCallback(() => setEasterEgg(false), []);

  useEffect(() => {
    if (!easterEgg) return;
    const id = setInterval(() => setFlashVisible((v) => !v), 50);
    return () => clearInterval(id);
  }, [easterEgg]);

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setGalleryInView(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
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

      {/* Header */}
      <header className={`${animate ? "animate-fade-in-down" : ""} sticky top-0 z-40 flex items-center justify-between px-8 py-4 md:px-12 lg:px-20 backdrop-blur-xl bg-background/70 border-b border-transparent transition-colors duration-300`}>
        <Link href="/" className="flex items-center gap-2.5">
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
        </Link>

        <div className="flex items-center gap-8">
          <Navigation />
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <div className="flex min-h-[calc(100svh-56px)] flex-col">
        <main className="flex flex-1 flex-col justify-end px-8 pb-[50px] md:px-12 lg:px-20">
          <section className="max-w-lg space-y-6">
            <h1 className={`${animate ? "animate-fade-in-up" : ""} text-3xl font-semibold leading-tight tracking-tight md:text-4xl`} style={animate ? { animationDelay: "0.2s" } : undefined}>
              Hey, I&apos;m Pedro Julien &ndash;
              <br />
              Ux Manager in Mercado Pago.
            </h1>

            <p className={`${animate ? "animate-fade-in-up" : ""} max-w-md text-sm leading-relaxed text-muted`} style={animate ? { animationDelay: "0.4s" } : undefined}>
              I&apos;m a builder at heart, with 20+ years shaping products
              and branding experiences. I chase what&apos;s new, but always
              grounded in what&apos;s real. Prototyping fast, iterating with
              intention and turn insights into visuals that&apos;s clear,
              human and purposeful.
            </p>

            <p className={`${animate ? "animate-fade-in-up" : ""} text-xs text-muted`} style={animate ? { animationDelay: "0.6s" } : undefined}>
              Building cool stuff to <span className="font-semibold text-foreground">people</span> using <span className="font-semibold text-foreground">AI</span>.
            </p>

            <p className={`${animate ? "animate-fade-in-up" : ""} text-xs text-muted`} style={animate ? { animationDelay: "0.8s" } : undefined}>
              &copy; Pedro Julien 2026
            </p>
          </section>
        </main>

        {/* Scroll indicator */}
        <div className={`${animate ? "animate-fade-in-up" : ""} flex justify-end px-8 pb-6 md:px-12 lg:px-20`} style={animate ? { animationDelay: "1s" } : undefined}>
          <div className="animate-bounce">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-muted">
              <path d="M8 2v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Horizontal Gallery */}
      <div ref={galleryRef}>
        <HorizontalGallery columns={columns} gap={gap} />
      </div>

      {/* Floating grid controls */}
      <GridControls
        visible={galleryInView}
        columns={columns}
        gap={gap}
        onColumnsChange={setColumns}
        onGapChange={setGap}
      />
    </div>
  );
}
