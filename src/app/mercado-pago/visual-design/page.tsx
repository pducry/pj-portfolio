"use client";

import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { WorksFooter } from "@/components/works-footer";
import { asset } from "@/lib/asset";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden w-full">
      <Image
        src={asset(src)}
        alt={alt}
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
        sizes="100vw"
      />
    </div>
  );
}

function VisualDesignContent() {
  const { lang } = useLang();
  const t = translations[lang];
  const vd = t.pages.visualDesign;

  return (
    <div className="animate-fade-in">
      <SiteHeader />

      <div className="px-6 pt-1 pb-4">
        <Link
          href="/mercado-pago"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
        >
          {t.common.backToMP}
        </Link>
      </div>

      <div className="px-6 border-t border-border py-4 flex flex-wrap items-baseline gap-x-10 gap-y-1">
        <span className="text-base text-foreground whitespace-nowrap">Visual Design</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.categories["Creative"]}</span>
        <span className="text-sm text-muted whitespace-nowrap">2026</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.roles["Design Manager"]}</span>
      </div>

      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">{vd.intro1}</p>
          <p className="text-base leading-snug text-foreground/70">{vd.intro2}</p>
        </div>
      </div>

      <div className="mt-16 border-t border-border">
        <Reveal>
          <div className="border-b border-border">
            <GalleryImage
              src="/projects/visual-design/vd_01.png"
              alt="Visual Design — Mercado Pago rates hero"
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="border-b border-border">
            <GalleryImage
              src="/projects/visual-design/vd_02.png"
              alt="Visual Design — progressive rates system"
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="border-b border-border">
            <GalleryImage
              src="/projects/visual-design/vd_03.png"
              alt="Visual Design — Point device lineup"
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="border-b border-border">
            <GalleryImage
              src="/projects/visual-design/vd_04.png"
              alt="Visual Design — Point Smart 2 product page"
            />
          </div>
        </Reveal>
      </div>

      <WorksFooter current="Mercado Pago" />

      <p className="px-6 pb-8 text-sm text-muted">{t.copyright}</p>
    </div>
  );
}

export default function VisualDesignPage() {
  return <VisualDesignContent />;
}
