"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { RevealMedia, type MediaItem } from "@/components/reveal-media";
import { asset } from "@/lib/asset";

const carouselImages: string[] = [
  "/gallery/pj_021.png",
  "/gallery/pj_023.png",
  "/gallery/pj_026.png",
  "/gallery/pj_028.png",
  "/gallery/pj_031.png",
  "/gallery/pj_033.png",
];

const media: MediaItem[] = [
  { type: "image", src: "/gallery/pj_021.png", alt: "Sute — 1" },
  { type: "image", src: "/gallery/pj_023.png", alt: "Sute — 2" },
  { type: "image", src: "/gallery/pj_026.png", alt: "Sute — 3" },
  { type: "image", src: "/gallery/pj_027.png", alt: "Sute — 4" },
  { type: "image", src: "/gallery/pj_028.png", alt: "Sute — 5" },
  { type: "image", src: "/gallery/pj_031.png", alt: "Sute — 6" },
  { type: "image", src: "/gallery/pj_032.png", alt: "Sute — 7" },
  { type: "image", src: "/gallery/pj_033.png", alt: "Sute — 8" },
  { type: "image", src: "/gallery/pj_035.png", alt: "Sute — 9" },
];

function SuteCarousel() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % carouselImages.length);
    }, 650);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-card aspect-[16/9]">
      {carouselImages.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={asset(src)}
          alt={`Sute — slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {carouselImages.map((_, i) => (
          <span
            key={i}
            className={`h-1 rounded-full bg-white transition-all duration-500 ${
              i === idx ? "w-6 opacity-80" : "w-1 opacity-40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function SutePage() {
  return (
    <div className="animate-fade-in">
      <SiteHeader />

      {/* ── Back link ── */}
      <div className="px-6 pt-1 pb-4">
        <Link
          href="/works"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
        >
          ← Works
        </Link>
      </div>

      {/* ── Title + meta — same line ── */}
      <div className="px-6 border-t border-border py-4 flex flex-wrap items-baseline gap-x-10 gap-y-1">
        <span className="text-base text-foreground whitespace-nowrap">Sute</span>
        <span className="text-sm text-muted whitespace-nowrap">Digital Product</span>
        <span className="text-sm text-muted whitespace-nowrap">2025</span>
        <span className="text-sm text-muted whitespace-nowrap">Head of Design</span>
      </div>

      {/* ── Description ── */}
      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">
            Sute is a digital product built to bring order to complex information
            landscapes — taking what is normally dense, fragmented data and making it
            feel calm, navigable, and human.
          </p>
          <p className="text-base leading-snug text-foreground/70">
            I led the design end-to-end alongside a small, focused team. The work spanned
            foundational research and product strategy, information architecture, the full
            UI system, motion principles, and the editorial tone that runs through every
            screen.
          </p>
          <p className="text-base leading-snug text-foreground/70">
            Restrained type, deliberate negative space, and a quiet palette anchor the
            product. The visual language stays intentionally subdued so that the data,
            decisions, and the people using it remain the loudest voices in the room.
          </p>
        </div>
      </div>

      {/* ── Hero carousel ── */}
      <div className="px-6 pt-6">
        <SuteCarousel />
      </div>

      {/* ── Images stacked vertically ── */}
      <div className="px-6 py-6 space-y-6">
        {media.map((item, i) => (
          <RevealMedia key={i} item={item} />
        ))}
      </div>

      <p className="px-6 pb-8 text-sm text-muted">© Pedro Julien 2026</p>
    </div>
  );
}
