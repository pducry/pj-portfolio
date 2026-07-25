"use client";

import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { WorksFooter } from "@/components/works-footer";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

const images = [
  { src: "/projects/art-direction/ad_01.png", alt: "Art Direction, 1" },
  { src: "/projects/art-direction/ad_02.png", alt: "Art Direction, 2" },
  { src: "/projects/art-direction/ad_03.png", alt: "Art Direction, 3" },
  { src: "/projects/art-direction/ad_04.png", alt: "Art Direction, 4" },
  { src: "/projects/art-direction/ad_05.png", alt: "Art Direction, 5" },
  { src: "/projects/art-direction/ad_06.png", alt: "Art Direction, 6" },
  { src: "/projects/art-direction/ad_07.png", alt: "Art Direction, 7" },
  { src: "/projects/art-direction/ad_08.png", alt: "Art Direction, 8" },
];

function ArtDirectionContent() {
  const { lang } = useLang();
  const t = translations[lang];
  const ad = t.pages.artDirection;

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
        <span className="text-base text-foreground whitespace-nowrap">Art Direction</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.categories["Creative"]}</span>
        <span className="text-sm text-muted whitespace-nowrap">2025–2026</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.roles["Design Manager"]}</span>
      </div>

      {/* Intro */}
      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">{ad.intro1}</p>
          <p className="text-base leading-snug text-foreground/70">{ad.intro2}</p>
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-16">
        <Reveal>
          <div className="px-6 py-3 border-t border-b border-border">
            <span className="text-sm text-foreground/30">Photography</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {images.map((img, i) => (
            <Reveal key={i}>
              <div className="border-b border-border lg:border-r last:border-r-0 [&:nth-child(even)]:border-r-0 overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <WorksFooter current="Mercado Pago" />

      <p className="px-6 pb-8 text-sm text-muted">{t.copyright}</p>
    </div>
  );
}

export default function ArtDirectionPage() {
  return <ArtDirectionContent />;
}
