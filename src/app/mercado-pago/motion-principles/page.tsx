"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { PasswordGate } from "@/components/password-gate";
import { Reveal } from "@/components/reveal";
import { asset } from "@/lib/asset";

const principles = [
  {
    id: "immediacy",
    label: "Immediacy",
    description:
      "The shortest path between intent and action. Motion that gets out of the way and lets the product breathe.",
    video: "/videos/mp/01_TransicionPantalla-Inmediatez.mp4",
    sharedVideo: "/videos/mp/01_TransicionPantalla-SharedElement-Inmediatez.mp4",
  },
  {
    id: "focus",
    label: "Focus",
    description:
      "Motion as a guide. When something matters, animation makes sure the eye knows where to go.",
    video: "/videos/mp/02_TransicionPantalla-Foco.mp4",
    sharedVideo: "/videos/mp/02_TransicionPantalla-SharedElement-Foco.mp4",
  },
  {
    id: "immersion",
    label: "Immersion",
    description:
      "Deep transitions that build a sense of place. The product feels like somewhere, not just something.",
    video: "/videos/mp/03_TransicionPantalla-Inmersion.mp4",
    sharedVideo: "/videos/mp/03_TransicionPantalla-SharedElement-Inmersion.mp4",
  },
];

const microVideos = [
  { label: "Focus", file: "/videos/mp/02_Microinteraccion-Foco-2.mp4" },
  { label: "Expressive", file: "/videos/mp/expresivo2.mp4" },
];

const flowVideos = [
  { label: "Home & Transfers", file: "/videos/mp/02_Home-Transferencias-Flow-MLA_1.mp4" },
  { label: "Cards", file: "/videos/mp/05_Tarjetas-SolicitudFisica-Flow-MLA.mp4" },
  { label: "Payments", file: "/videos/mp/08-Pagos-Flow-MLA.mp4" },
];

function VideoClip({ src, label }: { src: string; label?: string }) {
  return (
    <div className="space-y-3">
      <video
        src={asset(src)}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto bg-foreground/5"
      />
      {label && <p className="text-xs text-muted">{label}</p>}
    </div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="px-6 py-3 border-t border-b border-border">
      <span className="text-sm text-foreground/30">{label}</span>
    </div>
  );
}

function MotionPrinciplesContent() {
  return (
    <div className="animate-fade-in">
      <SiteHeader />

      {/* Back */}
      <div className="px-6 pt-1 pb-4">
        <Link
          href="/mercado-pago"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
        >
          ← Mercado Pago
        </Link>
      </div>

      {/* Title + meta */}
      <div className="px-6 border-t border-border py-4 flex flex-wrap items-baseline gap-x-10 gap-y-1">
        <span className="text-base text-foreground whitespace-nowrap">Motion Principles</span>
        <span className="text-sm text-muted whitespace-nowrap">Design System</span>
        <span className="text-sm text-muted whitespace-nowrap">2026</span>
        <span className="text-sm text-muted whitespace-nowrap">Design Manager</span>
      </div>

      {/* Intro */}
      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">
            How Mercado Pago moves. A shared language of motion built for a product that operates
            across 11 verticals and 7 countries — so that every transition, micro-interaction, and
            expressive moment feels like it comes from the same place.
          </p>
          <p className="text-base leading-snug text-foreground/70">
            Three principles. Each one a different relationship between the product and the person
            using it.
          </p>
        </div>
      </div>

      {/* Screen Transitions — 3 principles */}
      <Reveal>
        <div className="mt-16">
          <SectionDivider label="Screen Transitions" />
          <div className="px-6 pt-8 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
            {principles.map((p) => (
              <div key={p.id} className="space-y-5">
                <VideoClip src={p.video} />
                <div className="space-y-1.5">
                  <p className="text-sm text-foreground">{p.label}</p>
                  <p className="text-sm text-muted leading-snug">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Shared Element Transitions */}
      <Reveal>
        <div>
          <SectionDivider label="Shared Element" />
          <div className="px-6 pt-8 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
            {principles.map((p) => (
              <div key={p.id} className="space-y-5">
                <VideoClip src={p.sharedVideo} />
                <p className="text-sm text-foreground">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Micro-interactions & Expressive */}
      <Reveal>
        <div>
          <SectionDivider label="Micro-interactions" />
          <div className="px-6 pt-8 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 max-w-2xl">
            {microVideos.map((v) => (
              <div key={v.label} className="space-y-5">
                <VideoClip src={v.file} />
                <p className="text-sm text-foreground">{v.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* App Flows */}
      <Reveal>
        <div>
          <SectionDivider label="In-App" />
          <div className="px-6 pt-8 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
            {flowVideos.map((v) => (
              <div key={v.label} className="space-y-5">
                <VideoClip src={v.file} />
                <p className="text-sm text-foreground">{v.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <p className="px-6 pb-8 text-sm text-muted">© Pedro Julien 2026</p>
    </div>
  );
}

export default function MotionPrinciplesPage() {
  return (
    <PasswordGate password="mpmp" storageKey="mp-auth">
      <MotionPrinciplesContent />
    </PasswordGate>
  );
}
