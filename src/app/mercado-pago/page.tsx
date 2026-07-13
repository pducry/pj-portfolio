"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { PasswordGate } from "@/components/password-gate";
import { Reveal } from "@/components/reveal";

const subProjects = [
  {
    year: "2026",
    category: "Design System",
    name: "Motion Principles",
    role: "Design Manager",
    href: "/mercado-pago/motion-principles",
  },
  {
    year: "2026",
    category: "Creative",
    name: "Artificial Intelligence Art Direction",
    role: "Design Manager",
    href: "",
  },
];

function MercadoPagoContent() {
  return (
    <div className="animate-fade-in">
      <SiteHeader />

      {/* Back */}
      <div className="px-6 pt-1 pb-4">
        <Link
          href="/works"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
        >
          ← Works
        </Link>
      </div>

      {/* Title + meta */}
      <div className="px-6 border-t border-border py-4 flex flex-wrap items-baseline gap-x-10 gap-y-1">
        <span className="text-base text-foreground whitespace-nowrap">Mercado Pago</span>
        <span className="text-sm text-muted whitespace-nowrap">Product Design</span>
        <span className="text-sm text-muted whitespace-nowrap">2025—</span>
        <span className="text-sm text-muted whitespace-nowrap">Design Manager</span>
      </div>

      {/* Description */}
      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">
            Leading design for Mercado Pago — Latin America&apos;s largest fintech, operating across
            11 products and 7 countries. Responsible for the design craft and strategic direction
            across product design, design systems, and motion — working at the intersection of scale,
            speed, and quality.
          </p>
          <p className="text-base leading-snug text-foreground/70">
            Hands-on by nature: prototyping, building tools with Claude Code, and staying close to
            the craft while growing and directing the team.
          </p>
        </div>
      </div>

      {/* Projects list */}
      <div className="border-t border-border mt-16">
        <Reveal>
          <div className="px-6 py-3 border-b border-border">
            <span className="text-sm text-foreground/30">Projects</span>
          </div>
        </Reveal>

        {subProjects.map((p) => {
          const linked = !!p.href;
          const row = (
            <div className={`group grid items-baseline gap-x-6 border-b border-border px-6 py-5 transition-colors grid-cols-[48px_1fr_auto] lg:grid-cols-[64px_200px_180px_1fr_24px] ${linked ? "hover:bg-foreground cursor-pointer" : ""}`}>
              <span className={`text-sm tabular-nums whitespace-nowrap text-muted ${linked ? "transition-colors group-hover:text-background" : ""}`}>
                {p.year}
              </span>
              <div className="lg:hidden">
                <span className={`text-sm whitespace-nowrap text-foreground ${linked ? "transition-colors group-hover:text-background" : ""}`}>
                  {p.name}
                </span>
                <p className={`text-xs mt-0.5 text-muted ${linked ? "transition-colors group-hover:text-background" : ""}`}>
                  {p.category}
                </p>
              </div>
              <span className={`hidden lg:block text-sm whitespace-nowrap text-muted ${linked ? "transition-colors group-hover:text-background" : ""}`}>
                {p.category}
              </span>
              <span className={`hidden lg:block text-sm whitespace-nowrap text-muted ${linked ? "transition-colors group-hover:text-background" : ""}`}>
                {p.role}
              </span>
              <span className={`hidden lg:block text-base whitespace-nowrap text-foreground ${linked ? "transition-colors group-hover:text-background" : ""}`}>
                {p.name}
              </span>
              <span className={`text-sm justify-self-end ${linked ? "text-muted/40 transition-colors group-hover:text-background" : "invisible"}`}>
                →
              </span>
            </div>
          );
          return (
            <Reveal key={p.name}>
              {linked ? <Link href={p.href}>{row}</Link> : <div>{row}</div>}
            </Reveal>
          );
        })}
      </div>

      <p className="mt-16 px-6 pb-8 text-sm text-muted">© Pedro Julien 2026</p>
    </div>
  );
}

export default function MercadoPagoPage() {
  return (
    <PasswordGate password="mpmp" storageKey="mp-auth">
      <MercadoPagoContent />
    </PasswordGate>
  );
}
