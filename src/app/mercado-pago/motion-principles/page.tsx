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
    tagline: "For functional experiences.",
    description:
      "Adds clarity and efficiency to the task — acting as a silent guide with immediate feedback. Motion gets out of the way and lets the product breathe.",
    examples: [
      {
        label: "Screen Transition",
        sublabel: "Direct. No ceremony.",
        file: "/videos/mp/01_TransicionPantalla-Inmediatez.mp4",
      },
      {
        label: "Shared Element",
        sublabel: "Object continuity across screens.",
        file: "/videos/mp/01_TransicionPantalla-SharedElement-Inmediatez.mp4",
      },
      {
        label: "In-App — Home & Transfers",
        sublabel: "Principle applied at product scale.",
        file: "/videos/mp/02_Home-Transferencias-Flow-MLA_1.mp4",
      },
    ],
  },
  {
    id: "focus",
    label: "Focus",
    tagline: "For balanced experiences.",
    description:
      "Organizes motion around the protagonist element to create hierarchy and guide attention. When something matters, animation makes sure the eye knows where to go.",
    examples: [
      {
        label: "Screen Transition",
        sublabel: "Intentional. Attention-led.",
        file: "/videos/mp/02_TransicionPantalla-Foco.mp4",
      },
      {
        label: "Shared Element",
        sublabel: "The focal object leads the transition.",
        file: "/videos/mp/02_TransicionPantalla-SharedElement-Foco.mp4",
      },
      {
        label: "Micro-interaction",
        sublabel: "Component-level response to user action.",
        file: "/videos/mp/02_Microinteraccion-Foco-2.mp4",
      },
      {
        label: "In-App — Cards",
        sublabel: "Principle applied at product scale.",
        file: "/videos/mp/05_Tarjetas-SolicitudFisica-Flow-MLA.mp4",
      },
    ],
  },
  {
    id: "immersion",
    label: "Immersion",
    tagline: "For expressive experiences.",
    description:
      "Becomes the story — using cinematic resources to generate presence and depth. Transitions that build a sense of place.",
    examples: [
      {
        label: "Screen Transition",
        sublabel: "Deep. Builds a sense of place.",
        file: "/videos/mp/03_TransicionPantalla-Inmersion.mp4",
      },
      {
        label: "Shared Element",
        sublabel: "Continuity as a storytelling device.",
        file: "/videos/mp/03_TransicionPantalla-SharedElement-Inmersion.mp4",
      },
      {
        label: "Expressive",
        sublabel: "Motion as character.",
        file: "/videos/mp/expresivo2.mp4",
      },
      {
        label: "In-App — Payments",
        sublabel: "Principle applied at product scale.",
        file: "/videos/mp/08-Pagos-Flow-MLA.mp4",
      },
    ],
  },
];

function VideoClip({ file, label, sublabel }: { file: string; label: string; sublabel: string }) {
  return (
    <div className="space-y-3">
      <video
        src={asset(file)}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto bg-foreground/5"
      />
      <div className="space-y-0.5">
        <p className="text-sm text-foreground">{label}</p>
        <p className="text-xs text-muted">{sublabel}</p>
      </div>
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
            using it. The typology is chosen by the intention of the screen, not by style or
            technique.
          </p>
        </div>
      </div>

      {/* Principles */}
      {principles.map((principle) => (
        <Reveal key={principle.id}>
          <div className="mt-16">
            {/* Principle header */}
            <div className="px-6 py-5 border-t border-b border-border">
              <div className="max-w-xl space-y-1">
                <div className="flex items-baseline gap-4">
                  <h2 className="text-base text-foreground">{principle.label}</h2>
                  <span className="text-sm text-muted">{principle.tagline}</span>
                </div>
                <p className="text-sm text-muted leading-snug">{principle.description}</p>
              </div>
            </div>

            {/* Videos grid */}
            <div className={`px-6 pt-8 pb-12 grid grid-cols-1 gap-10 lg:gap-6 ${principle.examples.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
              {principle.examples.map((ex) => (
                <VideoClip key={ex.label} file={ex.file} label={ex.label} sublabel={ex.sublabel} />
              ))}
            </div>
          </div>
        </Reveal>
      ))}

      <p className="mt-8 px-6 pb-8 text-sm text-muted">© Pedro Julien 2026</p>
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
