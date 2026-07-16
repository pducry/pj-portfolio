"use client";

import { SiteHeader } from "@/components/site-header";
import Link from "next/link";
import { asset } from "@/lib/asset";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

const links = [
  { href: "https://www.goforacle.com/", external: true },
];

// Each section defines how many columns and which images
const sections: { columns: number; images: string[] }[] = [
  {
    columns: 1,
    images: [
      "/projects/foracle/Foracle00.png",
      "/projects/foracle/Foracle01.png",
      "/projects/foracle/Foracle02.png",
      "/projects/foracle/Foracle03.png",
      "/projects/foracle/Foracle05.png",
      "/projects/foracle/Foracle06.png",
    ],
  },
];

export default function ForaclePage() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="animate-fade-in">
      <SiteHeader />

      {/* Back */}
      <div className="px-6 pt-1 pb-4">
        <Link
          href="/works"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
        >
          {t.common.backToWorks}
        </Link>
      </div>

      {/* Title + meta */}
      <div className="px-6 border-t border-border py-4 flex flex-wrap items-baseline gap-x-10 gap-y-1">
        <span className="text-base text-foreground whitespace-nowrap">Foracle</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.categories["Digital Product"]}</span>
        <span className="text-sm text-muted whitespace-nowrap">2025</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.roles["Design Director"]}</span>
      </div>

      {/* Description */}
      <div className="px-6 border-t border-b border-border py-6">
        <p className="text-base leading-snug text-foreground/70 max-w-xl">
          {t.pages.foracle.desc}
        </p>
      </div>

      {/* Links */}
      <div className="border-b border-border">
        {links.map(({ href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-6 py-5 border-b border-border last:border-b-0 transition-colors hover:bg-foreground hover:text-background"
          >
            <span className="text-sm text-foreground group-hover:text-background transition-colors">{t.common.liveProject}</span>
            <span className="text-sm text-muted group-hover:text-background transition-colors">↗</span>
          </a>
        ))}
      </div>

      {/* Image sections */}
      <div className="px-6 pt-3 pb-16 space-y-3">
        {sections.map((section, si) => (
          <div
            key={si}
            className="grid gap-3"
            style={{ gridTemplateColumns: `repeat(${section.columns}, 1fr)` }}
          >
            {section.images.map((src, ii) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={ii}
                src={asset(src)}
                alt={`Foracle, ${si + 1}.${ii + 1}`}
                className="w-full h-auto object-contain block"
              />
            ))}
          </div>
        ))}
      </div>

      <p className="px-6 pb-8 text-sm text-muted">{t.copyright}</p>
    </div>
  );
}
