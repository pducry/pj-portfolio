"use client";

import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { WorksFooter } from "@/components/works-footer";
import { asset } from "@/lib/asset";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

function UxEvolveContent() {
  const { lang } = useLang();
  const t = translations[lang];
  const ux = t.pages.uxEvolve;

  return (
    <div className="animate-fade-in">
      <SiteHeader />

      {/* Back */}
      <div className="px-6 pt-1 pb-4">
        <Link
          href="/mercado-pago"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
        >
          {t.common.backToMP}
        </Link>
      </div>

      {/* Title + meta */}
      <div className="px-6 border-t border-border py-4 flex flex-wrap items-baseline gap-x-10 gap-y-1">
        <span className="text-base text-foreground whitespace-nowrap">UxEvolve 2026</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.categories["Culture"]}</span>
        <span className="text-sm text-muted whitespace-nowrap">2026</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.roles["Design Manager"]}</span>
      </div>

      {/* Intro */}
      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">{ux.intro1}</p>
          <p className="text-base leading-snug text-foreground/70">{ux.intro2}</p>
        </div>
      </div>

      {/* Hosts */}
      <Reveal>
        <div className="mt-16">
          <div className="px-6 py-3 border-t border-b border-border">
            <span className="text-sm text-foreground/30">{ux.hostsLabel}</span>
          </div>
          <div className="divide-y divide-border">
            {ux.hosts.map((host) => (
              <div key={host.name} className="px-6 py-5 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-2 lg:gap-12">
                <p className="text-base text-foreground">{host.name}</p>
                <p className="text-sm text-muted leading-snug">{host.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Highlight reel */}
      <Reveal>
        <div className="mt-16 border-t border-b border-border">
          <video
            src={asset("/videos/uxevolve/close-all.mp4")}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto"
          />
        </div>
      </Reveal>

      {/* Agenda */}
      <Reveal>
        <div className="mt-16">
          <div className="px-6 py-3 border-t border-b border-border">
            <span className="text-sm text-foreground/30">{ux.agendaLabel}</span>
          </div>
          <div className="divide-y divide-border">
            {ux.talks.map((talk, i) => (
              <div key={i} className="px-6 py-5 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-2 lg:gap-12">
                <p className="text-base text-foreground">{talk.label}</p>
                <p className="text-sm text-muted leading-snug">{talk.speakers}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Visual identity */}
      <div className="mt-16 border-t border-border">
        <Reveal>
          <div className="px-6 py-3 border-b border-border">
            <span className="text-sm text-foreground/30">{ux.visualLabel}</span>
          </div>
        </Reveal>

        {/* Separator videos, two columns */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
            <div className="border-b lg:border-b-0 lg:border-r border-border">
              <video
                src={asset("/videos/uxevolve/separator-01.mp4")}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
              />
            </div>
            <div>
              <video
                src={asset("/videos/uxevolve/separator-03.mp4")}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
              />
            </div>
          </div>
        </Reveal>

        {/* Slide backgrounds, four columns */}
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-border">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`${i < 4 ? "border-r border-border" : ""} ${i === 1 || i === 2 ? "border-b lg:border-b-0 border-border" : ""}`}
              >
                <Image
                  src={asset(`/images/uxevolve/bg-${i}.jpg`)}
                  alt={`UxEvolve 2026, background ${i}`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <WorksFooter current="Mercado Pago" />

      <p className="px-6 pb-8 text-sm text-muted">{t.copyright}</p>
    </div>
  );
}

export default function UxEvolvePage() {
  return <UxEvolveContent />;
}
