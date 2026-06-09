"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  threshold?: number;
  as?: "div" | "span" | "li";
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  y = 16,
  duration = 0.6,
  threshold = 0.1,
  as = "div",
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -5% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const style: React.CSSProperties = {
    transition: `opacity ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : `translateY(${y}px)`,
    willChange: "opacity, transform",
  };

  const Tag = as as "div";
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      style={style}
      className={className}
    >
      {children}
    </Tag>
  );
}
