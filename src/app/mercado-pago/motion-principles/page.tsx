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
    tagline: "Functional experiences.",
    description:
      "Adds clarity and efficiency to the task, acting as a silent guide with immediate feedback. Motion gets out of the way and lets the product breathe.",
    duration: "150–500ms",
    rule: "",
    examples: [
      {
        label: "Screen Transition",
        context: "Payments hub, the transition feels agile and reacts in real time.",
        duration: "300ms",
        file: "/videos/mp/01_TransicionPantalla-Inmediatez.mp4",
      },
      {
        label: "Shared Element",
        context: "Payment list detail, the avatar travels seamlessly between screens.",
        duration: "350ms",
        file: "/videos/mp/01_TransicionPantalla-SharedElement-Inmediatez.mp4",
      },
      {
        label: "In-App Flow",
        context: "Quick transfer, agile action with immediate confirmation.",
        duration: "Full flow",
        file: "/videos/mp/02_Home-Transferencias-Flow-MLA_1.mp4",
      },
    ],
  },
  {
    id: "focus",
    label: "Focus",
    tagline: "Balanced experiences.",
    description:
      "Organizes motion around the protagonist element to create hierarchy and guide attention. When something matters, the animation makes sure the eye knows where to go.",
    duration: "500–3000ms",
    rule: "The shared element is reserved for transitions where it reinforces a real relationship between screens.",
    examples: [
      {
        label: "Screen Transition",
        context: "Cards, carousel with 180° card rotation.",
        duration: "950ms",
        file: "/videos/mp/02_TransicionPantalla-Foco.mp4",
      },
      {
        label: "Shared Element",
        context: "Banking tab, the piggy bank guides the transition between screens.",
        duration: "700ms",
        file: "/videos/mp/02_TransicionPantalla-SharedElement-Foco.mp4",
      },
      {
        label: "Micro-interaction",
        context: "Activity detail, expansion with chevron feedback.",
        duration: "350ms",
        file: "/videos/mp/02_Microinteraccion-Foco-2.mp4",
      },
      {
        label: "In-App Flow",
        context: "Card request, immersive full-screen experience up to final confirmation.",
        duration: "Full flow",
        file: "/videos/mp/05_Tarjetas-SolicitudFisica-Flow-MLA.mp4",
      },
    ],
  },
  {
    id: "immersion",
    label: "Immersion",
    tagline: "Expressive experiences.",
    description:
      "Becomes the story, using cinematic resources to generate presence and depth. For high-value emotional moments: onboarding, celebrations, premium product reveals.",
    duration: "1000–5000ms",
    rule: "Expressive illustration can take center stage and fill the entire screen in celebrations, special states, or high emotional-value moments.",
    examples: [
      {
        label: "Screen Transition",
        context: "Scoring, the transition highlights and celebrates the user's milestone.",
        duration: "2500ms",
        file: "/videos/mp/03_TransicionPantalla-Inmersion.mp4",
      },
      {
        label: "Shared Element",
        context: "Credit card onboarding, the card expands creating an atmosphere of prestige.",
        duration: "3000ms",
        file: "/videos/mp/03_TransicionPantalla-SharedElement-Inmersion.mp4",
      },
      {
        label: "In-App Flow",
        context: "Bill payment, accompanying the user through to final confirmation.",
        duration: "Full flow",
        file: "/videos/mp/08-Pagos-Flow-MLA.mp4",
      },
    ],
  },
];

const foundations = [
  {
    label: "Gestures",
    body: "Motion responds to user gestures, confirming punctual actions and accompanying continuous interactions. Tap, long press, swipe, scroll: each gesture type has its own motion response.",
  },
  {
    label: "Stagger",
    body: "Components move in sequence to create rhythm, hierarchy, and focus. Stagger adds small delays between elements, 50ms steps for simple components, 2–3 steps for complex experiences.",
  },
  {
    label: "Skeleton",
    body: "Skeletons maintain structure and hierarchy during content loading. They appear only for dynamic content; static content loads directly on screen.",
  },
];

function VideoClip({
  file,
  label,
  context,
  duration,
}: {
  file: string;
  label: string;
  context: string;
  duration: string;
}) {
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
      <div className="space-y-1 border-t border-border pt-3">
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-sm text-foreground">{label}</p>
          <span className="text-xs text-muted tabular-nums shrink-0">{duration}</span>
        </div>
        <p className="text-xs text-muted leading-snug">{context}</p>
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
            How Mercado Pago moves. A shared language of motion built for a product operating across
            11 verticals and 7 countries, so that every transition, micro-interaction, and
            expressive moment feels like it comes from the same place.
          </p>
          <p className="text-base leading-snug text-foreground/70">
            Motion should feel agile and reliable, starting with speed, ending with serenity.
            Three typologies translate design principles into behavior. The typology is chosen by
            the intention of the screen, not by style or technique.
          </p>
        </div>
      </div>

      {/* Foundations */}
      <Reveal>
        <div className="mt-16">
          <div className="px-6 py-3 border-t border-b border-border">
            <span className="text-sm text-foreground/30">Foundations</span>
          </div>
          <div className="px-6 pt-6 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 max-w-4xl">
            {foundations.map((f) => (
              <div key={f.label} className="space-y-1.5">
                <p className="text-sm text-foreground">{f.label}</p>
                <p className="text-sm text-muted leading-snug">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Principles */}
      {principles.map((principle) => (
        <Reveal key={principle.id}>
          <div className="mt-8">
            {/* Principle header */}
            <div className="px-6 py-5 border-t border-b border-border">
              <div className="max-w-2xl space-y-2">
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
                  <h2 className="text-base text-foreground">{principle.label}</h2>
                  <span className="text-sm text-muted">{principle.tagline}</span>
                  <span className="text-xs text-muted/60 tabular-nums">{principle.duration}</span>
                </div>
                <p className="text-sm text-muted leading-snug">{principle.description}</p>
                {principle.rule && (
                  <p className="text-xs text-foreground/35 leading-snug border-l border-border pl-3 mt-1">
                    {principle.rule}
                  </p>
                )}
              </div>
            </div>

            {/* Videos grid */}
            <div
              className={`px-6 pt-8 pb-12 grid grid-cols-1 gap-10 lg:gap-6 ${
                principle.examples.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
              }`}
            >
              {principle.examples.map((ex) => (
                <VideoClip
                  key={ex.label}
                  file={ex.file}
                  label={ex.label}
                  context={ex.context}
                  duration={ex.duration}
                />
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
