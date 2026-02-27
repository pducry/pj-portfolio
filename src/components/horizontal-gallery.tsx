"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  { src: "/gallery/2.png", alt: "Project 1" },
  { src: "/gallery/11.png", alt: "Project 2" },
  { src: "/gallery/15b.png", alt: "Project 3" },
  { src: "/gallery/19.png", alt: "Project 4" },
  { src: "/gallery/21.png", alt: "Project 5" },
  { src: "/gallery/23.png", alt: "Project 6" },
  { src: "/gallery/27.png", alt: "Project 7" },
  { src: "/gallery/31.png", alt: "Project 8" },
  { src: "/gallery/41.png", alt: "Project 9" },
  { src: "/gallery/43.png", alt: "Project 10" },
  { src: "/gallery/47.png", alt: "Project 11" },
  { src: "/gallery/50b.png", alt: "Project 12" },
  { src: "/gallery/51.png", alt: "Project 13" },
  { src: "/gallery/56.png", alt: "Project 14" },
  { src: "/gallery/61.png", alt: "Project 15" },
  { src: "/gallery/62.png", alt: "Project 16" },
  { src: "/gallery/63.png", alt: "Project 17" },
  { src: "/gallery/63b.png", alt: "Project 18" },
  { src: "/gallery/64.png", alt: "Project 19" },
  { src: "/gallery/65.png", alt: "Project 20" },
  { src: "/gallery/66.png", alt: "Project 21" },
  { src: "/gallery/67.png", alt: "Project 22" },
  { src: "/gallery/68.png", alt: "Project 23" },
  { src: "/gallery/69.png", alt: "Project 24" },
  { src: "/gallery/70.png", alt: "Project 25" },
  { src: "/gallery/71.png", alt: "Project 26" },
  { src: "/gallery/72.png", alt: "Project 27" },
  { src: "/gallery/73.png", alt: "Project 28" },
  { src: "/gallery/74.png", alt: "Project 29" },
  { src: "/gallery/75.png", alt: "Project 30" },
];

export function HorizontalGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorSide, setCursorSide] = useState<"left" | "right">("right");
  const [onImage, setOnImage] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setSelected(null), []);

  const prev = useCallback(
    () => setSelected((s) => (s !== null ? (s - 1 + images.length) % images.length : null)),
    [],
  );
  const next = useCallback(
    () => setSelected((s) => (s !== null ? (s + 1) % images.length : null)),
    [],
  );

  useEffect(() => {
    if (selected === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [selected, close, prev, next]);

  return (
    <section className="px-8 py-16 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-center">
        {images.map((img, i) => (
          <div
            key={i}
            className="group overflow-hidden cursor-pointer"
            onClick={() => setSelected(i)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              className="w-full h-auto object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm cursor-none select-none"
          onMouseDown={(e) => e.preventDefault()}
          onMouseMove={(e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
            setCursorSide(e.clientX < window.innerWidth / 2 ? "left" : "right");
            if (imageRef.current) {
              const rect = imageRef.current.getBoundingClientRect();
              setOnImage(
                e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom
              );
            }
          }}
          onClick={(e) => {
            if (imageRef.current) {
              const rect = imageRef.current.getBoundingClientRect();
              const isOver =
                e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom;
              if (isOver) {
                if (e.clientX < window.innerWidth / 2) prev();
                else next();
                return;
              }
            }
            close();
          }}
        >
          {/* Custom cursor */}
          <div
            className="pointer-events-none fixed z-[60]"
            style={{ left: cursorPos.x - 16, top: cursorPos.y - 16 }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {onImage ? (
                cursorSide === "left"
                  ? <polyline points="15 18 9 12 15 6" />
                  : <polyline points="9 6 15 12 9 18" />
              ) : (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              )}
            </svg>
          </div>

          {/* Image */}
          <div
            ref={imageRef}
            className="pointer-events-none flex items-center justify-center"
            style={{ maxWidth: "90vw", maxHeight: "80vh" }}
          >
            <Image
              src={images[selected].src}
              alt={images[selected].alt}
              width={1600}
              height={1200}
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
              sizes="90vw"
              priority
              draggable={false}
            />
          </div>

          {/* Hint bar */}
          <div className="pointer-events-none mt-8 flex items-center gap-8 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <kbd className="inline-flex items-center justify-center rounded border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-xs leading-none">←</kbd>
              <kbd className="inline-flex items-center justify-center rounded border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-xs leading-none">→</kbd>
              <span className="ml-1">navigate</span>
            </span>
            <span className="flex items-center gap-2">
              <kbd className="inline-flex items-center justify-center rounded border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-xs leading-none">esc</kbd>
              <span className="ml-1">close</span>
            </span>
            <span className="text-white/30">
              {selected + 1} / {images.length}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
