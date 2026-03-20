"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { LayoutGroup, motion, AnimatePresence, useInView } from "framer-motion";

const images = [
  { src: "/gallery/2.png", alt: "2" },
  { src: "/gallery/3b.png", alt: "3b" },
  { src: "/gallery/11.png", alt: "11" },
  { src: "/gallery/11b.png", alt: "11b" },
  { src: "/gallery/12.png", alt: "12" },
  { src: "/gallery/13b.png", alt: "13b" },
  { src: "/gallery/15b.png", alt: "15b" },
  { src: "/gallery/19.png", alt: "19" },
  { src: "/gallery/21.png", alt: "21" },
  { src: "/gallery/23.png", alt: "23" },
  { src: "/gallery/27.png", alt: "27" },
  { src: "/gallery/31.png", alt: "31" },
  { src: "/gallery/41.png", alt: "41" },
  { src: "/gallery/43.png", alt: "43" },
  { src: "/gallery/47.png", alt: "47" },
  { src: "/gallery/50b.png", alt: "50b" },
  { src: "/gallery/51.png", alt: "51" },
  { src: "/gallery/56.png", alt: "56" },
  { src: "/gallery/61.png", alt: "61" },
  { src: "/gallery/62.png", alt: "62" },
  { src: "/gallery/63b.png", alt: "63b" },
  { src: "/gallery/64.png", alt: "64" },
  { src: "/gallery/65.png", alt: "65" },
  { src: "/gallery/66.png", alt: "66" },
  { src: "/gallery/67.png", alt: "67" },
  { src: "/gallery/68.png", alt: "68" },
  { src: "/gallery/69.png", alt: "69" },
  { src: "/gallery/70.png", alt: "70" },
  { src: "/gallery/71.png", alt: "71" },
  { src: "/gallery/72.png", alt: "72" },
  { src: "/gallery/73.png", alt: "73" },
  { src: "/gallery/74.png", alt: "74" },
  { src: "/gallery/75.png", alt: "75" },
  { src: "/gallery/76b.png", alt: "76b" },
  { src: "/gallery/77.png", alt: "77" },
  { src: "/gallery/78.png", alt: "78" },
  { src: "/gallery/79.png", alt: "79" },
  { src: "/gallery/80.png", alt: "80" },
  { src: "/gallery/81.png", alt: "81" },
  { src: "/gallery/82.png", alt: "82" },
  { src: "/gallery/83.png", alt: "83" },
  { src: "/gallery/84.png", alt: "84" },
  { src: "/gallery/85.png", alt: "85" },
  { src: "/gallery/86.png", alt: "86" },
  { src: "/gallery/87.png", alt: "87" },
  { src: "/gallery/88.png", alt: "88" },
  { src: "/gallery/89.png", alt: "89" },
  { src: "/gallery/93.png", alt: "93" },
  { src: "/gallery/94.png", alt: "94" },
  { src: "/gallery/95.png", alt: "95" },
  { src: "/gallery/96c.png", alt: "96c" },
  { src: "/gallery/97.png", alt: "97" },
  { src: "/gallery/98.png", alt: "98" },
  { src: "/gallery/99c.png", alt: "99c" },
  { src: "/gallery/100.png", alt: "100" },
  { src: "/gallery/101.png", alt: "101" },
  { src: "/gallery/102.png", alt: "102" },
  { src: "/gallery/103.png", alt: "103" },
  { src: "/gallery/104.png", alt: "104" },
  { src: "/gallery/105.png", alt: "105" },
  { src: "/gallery/106.png", alt: "106" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function GalleryItem({
  img,
  index,
  columns,
  onClick,
}: {
  img: { src: string; alt: string };
  index: number;
  columns: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const colIndex = index % columns;

  return (
    <motion.div
      ref={ref}
      key={img.src}
      layout
      layoutId={img.src}
      className="group overflow-hidden cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
        delay: colIndex * 0.08,
        layout: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
      }}
    >
      <Image
        src={img.src}
        alt={img.alt}
        width={1920}
        height={1440}
        className="w-full h-auto object-contain"
        sizes={`(max-width: 640px) 100vw, ${Math.round(100 / columns)}vw`}
      />
    </motion.div>
  );
}

interface HorizontalGalleryProps {
  columns?: number;
  gap?: number;
}

export function HorizontalGallery({ columns = 3, gap = 12 }: HorizontalGalleryProps) {
  const [shuffled, setShuffled] = useState(images);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setShuffled(shuffle(images));
  }, []);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorSide, setCursorSide] = useState<"left" | "right">("right");
  const [onImage, setOnImage] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setSelected(null), []);

  const prev = useCallback(
    () => setSelected((s) => (s !== null ? (s - 1 + shuffled.length) % shuffled.length : null)),
    [shuffled],
  );
  const next = useCallback(
    () => setSelected((s) => (s !== null ? (s + 1) % shuffled.length : null)),
    [shuffled],
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
      <LayoutGroup>
        <motion.div
          layout
          className="grid items-center"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: `${gap}px`,
          }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        >
          {shuffled.map((img, i) => (
            <GalleryItem
              key={img.src}
              img={img}
              index={i}
              columns={columns}
              onClick={() => setSelected(i)}
            />
          ))}
        </motion.div>
      </LayoutGroup>

      {/* Lightbox */}
      <AnimatePresence>
      {selected !== null && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
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
              src={shuffled[selected].src}
              alt={shuffled[selected].alt}
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
              {selected + 1} / {shuffled.length}
            </span>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </section>
  );
}
