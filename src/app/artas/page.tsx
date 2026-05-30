"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { WorksFooter } from "@/components/works-footer";
import { asset } from "@/lib/asset";

const stack = ["Three.js", "WebGL", "ES Modules", "Firebase Auth", "Firestore", "Cloud Storage"];

const links = [
  {
    label: "Live project",
    href: "https://artas-experience.web.app",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/pducry/artas",
    external: true,
  },
];

export default function ArtasPage() {
  return (
    <div className="animate-fade-in">
      <SiteHeader />

      {/* Back */}
      <div className="px-6 pt-1 pb-4">
        <Link href="/works" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors">
          ← Works
        </Link>
      </div>

      {/* Title + meta */}
      <div className="px-6 border-t border-border py-4 flex flex-wrap items-baseline gap-x-10 gap-y-1">
        <span className="text-base text-foreground whitespace-nowrap">Artas</span>
        <span className="text-sm text-muted whitespace-nowrap">Product Design</span>
        <span className="text-sm text-muted whitespace-nowrap">2026</span>
        <span className="text-sm text-muted whitespace-nowrap">Designer</span>
      </div>

      {/* Stack */}
      <div className="px-6 border-t border-border py-4 flex flex-wrap items-center gap-2">
        {stack.map((tag) => (
          <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
            {tag}
          </span>
        ))}
        <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
          Claude Code
        </span>
      </div>

      {/* Description */}
      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">
            Artas is a social art platform that reimagines how visual art is discovered and shared online.
            Instead of a flat grid gallery, it opens with an immersive 3D spatial navigation experience —
            a starfield universe where artworks float as explorable nodes.
          </p>
          <p className="text-base leading-snug text-foreground/70">
            Built with Three.js and Unreal Bloom post-processing — full WebGL pipeline with a 10,000-particle
            starfield. 6,100+ lines of handcrafted vanilla JS, modular ES6 architecture, Firebase backend.
            Zero frameworks, zero bundlers.
          </p>
          <p className="text-base leading-snug text-foreground/70">
            The entire project was designed and built using <span className="text-foreground font-medium">AI and Claude Code</span> as
            the primary development tool — an experiment in human + AI co-creation at every stage, from
            concept to shipped product.
          </p>
        </div>
      </div>

      {/* Links */}
      <div className="border-b border-border">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-6 py-5 border-b border-border last:border-b-0 transition-colors hover:bg-foreground hover:text-background"
          >
            <span className="text-sm text-foreground group-hover:text-background transition-colors">{label}</span>
            <span className="text-sm text-muted group-hover:text-background transition-colors">↗</span>
          </a>
        ))}
      </div>

      {/* Video */}
      <div className="px-6 py-6">
        <video
          src={asset("/videos/ARTAS.mp4")}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto"
        />
      </div>

      <WorksFooter current="Artas" />

      <p className="px-6 pb-8 text-sm text-muted">© Pedro Julien 2026</p>
    </div>
  );
}
