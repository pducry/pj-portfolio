"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";
import { SiteHeader } from "@/components/site-header";
import { asset } from "@/lib/asset";

const carouselImages = [
  "/gallery/pj_001.png", "/gallery/pj_002.png", "/gallery/pj_003.png",
  "/gallery/pj_004.png", "/gallery/pj_005.png", "/gallery/pj_006.png",
  "/gallery/pj_007.png", "/gallery/pj_008.png", "/gallery/pj_009.png",
  "/gallery/pj_010.png", "/gallery/pj_011.png", "/gallery/pj_012.png",
  "/gallery/pj_013.png", "/gallery/pj_014.png", "/gallery/pj_015.png",
  "/gallery/pj_016.png", "/gallery/pj_017.png", "/gallery/pj_018.png",
  "/gallery/pj_020.png", "/gallery/pj_021.png", "/gallery/pj_023.png",
  "/gallery/pj_026.png", "/gallery/pj_027.png", "/gallery/pj_028.png",
];

function WorksCarousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % carouselImages.length), 350);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
      {carouselImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-150"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={asset(src)}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
}

type Translation = (typeof translations)[keyof typeof translations];

function ProjectRow({ project, t }: { project: Project; t: Translation }) {
  const inner = (
    <>
      <div className="min-w-0">
        <p className="text-base text-foreground group-hover:text-background leading-snug truncate">{project.name}</p>
        <p className="text-sm text-muted group-hover:text-background mt-1 leading-snug whitespace-nowrap">
          {t.categories[project.category as keyof typeof t.categories]} · {project.year} · {t.roles[project.role as keyof typeof t.roles]}
        </p>
      </div>
      <span className={`text-base transition-colors shrink-0 mt-0.5 ${project.href ? "text-foreground/40 group-hover:text-background" : "text-muted/40"}`}>→</span>
    </>
  );

  const cls = `grid items-start grid-cols-[1fr_auto] gap-3 border-b border-border px-6 py-6 lg:py-10 ${project.href ? "group transition-colors hover:bg-foreground cursor-pointer" : ""}`;

  return project.href ? (
    <Link href={project.href} className={cls}>{inner}</Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

type Entry = { company: string; role: string; years: string };

const experience: Entry[] = [
  { company: "Mercado Pago",            role: "Design Manager",   years: "2020—"      },
  { company: "Rise New York & Partners",role: "Creative Director",years: "2018—2020"  },
  { company: "Meiuca",                  role: "Head of Design",   years: "2017—2018"  },
  { company: "Descomplica",             role: "Design Manager",   years: "2015—2017"  },
  { company: "DDB Unlimited",           role: "Design Director",  years: "2013—2015"  },
  { company: "Work & Co",               role: "Senior Designer",  years: "2011—2013"  },
  { company: "Google Brand Studio",     role: "Senior Designer",  years: "2010—2011"  },
  { company: "Y Dreams",                role: "Senior Designer",  years: "2008—2010"  },
  { company: "Koi Factory",             role: "Senior Designer",  years: "2006—2008"  },
];

type Project = { category: string; year: string; name: string; role: string; href?: string };

const craftProjects: Project[] = [
  { category: "Digital Product", year: "2026", name: "Artas",                     role: "Designer"       },
  { category: "Brand Identity",  year: "2020", name: "FFForma",                   role: "Founder"        },
  { category: "Brand Identity",  year: "2020", name: "My Phone",                  role: "Designer"       },
  { category: "Design System",   year: "2018", name: "Royal Canin Design System", role: "Head of Design" },
];

const buildProjects: Project[] = [
  { category: "Digital Product", year: "2026", name: "Mercado Pago",              role: "Design Manager" },
  { category: "Digital Product", year: "2025", name: "Sute",                      role: "Head of Design", href: "/sute" },
  { category: "Digital Product", year: "2024", name: "Caju",                      role: "Head of Design" },
  { category: "Digital Product", year: "2024", name: "Mude",                      role: "Head of Design" },
];

const clients = [
  "Mercado Pago","Google","Facebook","Nike","Isadore","Royal Canin",
  "KLM","Heineken","Globosat","Adidas","Shutterstock",
  "Art Directors Club","Cisco","Descomplica","Neom",
];

const TOP      = "lg:grid-cols-[180px_110px_1fr_auto]";
const PROJ_COL = "lg:grid-cols-[220px_110px_260px_1fr_32px]";

export default function Bio() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="animate-fade-in">
      {/* ── Header — idêntico em todas as páginas ── */}
      <SiteHeader />

      {/* ── Intro text ── */}
      <div className="px-6 pt-6 pb-8">
        <div className="space-y-5 max-w-xl">
          <p className="text-[30px] leading-snug text-foreground/75">{t.bio.p1}</p>
          <p className="text-[30px] leading-snug text-foreground/75">
            {t.bio.p2a}{" "}
            <a href="https://ffforma.design/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition-colors">FFForma</a>
            {t.bio.p2b}
          </p>
          <a href="mailto:pducry@gmail.com" className="inline-flex items-center gap-2 text-[30px] text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground transition-colors">
            {t.bio.cta} →
          </a>
        </div>
      </div>

      {/* ── Spacer ── */}
      <div className="h-[120px] lg:h-[200px]" />

      {/* ── Projects — Craft | Build (full-bleed) ── */}
      <div id="projects" className="border-t border-border">
        {/* Module sub-headers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
          <div className="px-6 py-3 lg:border-r lg:border-border">
            <span className="text-sm text-foreground/30 whitespace-nowrap">Craft</span>
          </div>
          <div className="hidden lg:block px-6 py-3">
            <span className="text-sm text-foreground/30 whitespace-nowrap">Build</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Craft column */}
          <div className="lg:border-r lg:border-border">
            {craftProjects.map((project) => (
              <ProjectRow key={project.name} project={project} t={t} />
            ))}
          </div>

          {/* Build column — mobile header inline */}
          <div>
            <div className="lg:hidden px-6 py-3 border-t border-border">
              <span className="text-sm text-foreground/30 whitespace-nowrap">Build</span>
            </div>
            {buildProjects.map((project) => (
              <ProjectRow key={project.name} project={project} t={t} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Experience (full-bleed) ── */}
      <div id="experience" className="mt-16 lg:mt-20">
        {/* Module header */}
        <div className="px-6 py-3 border-t border-b border-border">
          <span className="text-sm text-foreground/30 whitespace-nowrap">{t.experience.past}</span>
        </div>

        {experience.map((entry) => (
          <div
            key={entry.company}
            className={`grid items-center border-b border-border ${PROJ_COL} gap-x-8 px-6 py-3 lg:py-3`}
          >
            <span className="hidden text-base text-muted lg:block whitespace-nowrap">
              {t.roles[entry.role as keyof typeof t.roles]}
            </span>
            <span className="hidden lg:block" />
            <span className="hidden text-base text-muted lg:block whitespace-nowrap">{entry.years}</span>
            <p className="hidden text-base text-foreground lg:block whitespace-nowrap truncate">{entry.company}</p>
            <span className="hidden lg:block" />
            <div className="lg:hidden flex items-start justify-between gap-3 w-full">
              <div className="min-w-0">
                <p className="text-base text-foreground leading-snug">{entry.company}</p>
                <p className="text-sm text-muted mt-1 leading-snug">{t.roles[entry.role as keyof typeof t.roles]} · {entry.years}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Footer (full-bleed) ── */}
      <div className="mt-16 lg:mt-20">
        {/* Desktop module header — one continuous line spanning all 3 columns */}
        <div className="hidden lg:block border-t border-b border-border">
          <div className="grid grid-cols-3 gap-24 px-6 py-3">
            <span className="text-sm text-foreground/30 whitespace-nowrap">{t.footer.skills}</span>
            <span className="text-sm text-foreground/30 whitespace-nowrap">{t.footer.clients}</span>
            <span className="text-sm text-foreground/30 whitespace-nowrap">{t.footer.contact}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-24 lg:mt-3 px-6 lg:px-6">
          <div>
            <div className="lg:hidden -mx-6 px-6 py-3 border-t border-b border-border mb-6">
              <span className="text-sm text-foreground/30 whitespace-nowrap">{t.footer.skills}</span>
            </div>
            <div className="space-y-3 lg:space-y-4">
              {t.skills.map((s) => (
                <p key={s} className="text-base text-foreground/60">{s}</p>
              ))}
            </div>
          </div>
          <div>
            <div className="lg:hidden -mx-6 px-6 py-3 border-t border-b border-border mb-6">
              <span className="text-sm text-foreground/30 whitespace-nowrap">{t.footer.clients}</span>
            </div>
            <div className="space-y-3 lg:space-y-4">
              {clients.map((c) => (
                <p key={c} className="text-base text-foreground/60">{c}</p>
              ))}
            </div>
          </div>
          <div>
            <div className="lg:hidden -mx-6 px-6 py-3 border-t border-b border-border mb-6">
              <span className="text-sm text-foreground/30 whitespace-nowrap">{t.footer.contact}</span>
            </div>
            <div className="space-y-3 lg:space-y-4">
              {[
                { label: "Email",      href: "mailto:pducry@gmail.com" },
                { label: "Instagram",  href: "https://www.instagram.com/pedro_julien" },
                { label: "LinkedIn",   href: "https://www.linkedin.com/in/pedro_julien" },
                { label: "Foundation", href: "https://foundation.app/@ixaser" },
                { label: "Objkt",      href: "https://objkt.com/users/tz1VZcpNZW6W8D2hGXvTDqJqwGjmjPKRYwRM" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="block text-base text-foreground/60 transition-colors hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16"><WorksCarousel /></div>

      <p className="mt-16 px-6 text-sm text-muted pb-8">{t.copyright}</p>
    </div>
  );
}
