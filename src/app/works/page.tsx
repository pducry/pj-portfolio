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

function ProjectRow({ project }: { project: Project }) {

  const inner = (
    <div className="group grid items-baseline gap-x-6 border-b border-border px-6 py-5 transition-colors hover:bg-foreground/[0.02] grid-cols-[48px_1fr_auto] lg:grid-cols-[64px_200px_180px_1fr_24px]">
      <span className="text-sm text-muted tabular-nums whitespace-nowrap">{project.year}</span>
      <span className="text-sm text-muted whitespace-nowrap lg:hidden">{project.name}</span>
      <span className="hidden lg:block text-sm text-muted whitespace-nowrap">{project.category}</span>
      <span className="hidden lg:block text-sm text-muted whitespace-nowrap">{project.role}</span>
      <span className="hidden lg:block text-base text-foreground whitespace-nowrap">{project.name}</span>
      <span className={`text-sm transition-colors justify-self-end ${project.href ? "text-muted/40 group-hover:text-foreground" : "invisible"}`}>→</span>
    </div>
  );

  return project.href ? (
    <Link href={project.href}>{inner}</Link>
  ) : (
    <div>{inner}</div>
  );
}

type Entry = { company: string; role: string; years: string };

const experience: Entry[] = [
  { company: "Mercado Pago",            role: "Design Manager",   years: "2025—"      },
  { company: "Rise New York & Partners",role: "Creative Director",years: "2024—2025"  },
  { company: "Meiuca",                  role: "Head of Design",   years: "2024—2024"  },
  { company: "Descomplica",             role: "Design Manager",   years: "2019—2024"  },
  { company: "DDB Unlimited",           role: "Design Director",  years: "2017—2019"  },
  { company: "Work & Co",               role: "Senior Designer",  years: "2015—2017"  },
  { company: "Google Brand Studio",     role: "Senior Designer",  years: "2015—2015"  },
  { company: "Y Dreams",                role: "Senior Designer",  years: "2014—2015"  },
];

type Project = { category: string; year: string; name: string; role: string; href?: string };

const projects: Project[] = [
  { category: "Product Design", year: "2026", name: "Mercado Pago",              role: "Design Manager" },
  { category: "Product Design", year: "2025", name: "Sute",                      role: "Head of Design", href: "/sute" },
  { category: "Product Design", year: "2024", name: "Caju",                      role: "Head of Design" },
  { category: "Product Design", year: "2024", name: "Mude",                      role: "Head of Design" },
  { category: "Digital Product", year: "2026", name: "Artas",                    role: "Designer"       },
  { category: "Branding",       year: "2020", name: "FFForma",                   role: "Founder"        },
  { category: "Branding",       year: "2020", name: "My Phone",                  role: "Designer"       },
  { category: "Design System",  year: "2018", name: "Royal Canin Design System", role: "Head of Design" },
];

const clients = [
  "Mercado Pago","Google","Facebook","Nike","Isadore","Royal Canin",
  "KLM","Heineken","Globosat","Adidas","Shutterstock",
  "Art Directors Club","Cisco","Descomplica","Neom",
];


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
          <p className="text-[30px] leading-snug text-foreground/75">{t.bio.p2}</p>
          <p className="text-[30px] leading-snug text-foreground/75">
            {t.bio.p3a}{" "}
            <a href="https://ffforma.design/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition-colors">FFForma</a>
            {t.bio.p3b}
          </p>
          <a href="mailto:pducry@gmail.com" className="inline-flex items-center gap-2 text-[30px] text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground transition-colors">
            {t.bio.cta} →
          </a>
        </div>
      </div>

      {/* ── Spacer ── */}
      <div className="h-[120px] lg:h-[200px]" />

      {/* ── Works ── */}
      <div id="projects" className="border-t border-border">
        <div className="px-6 py-3 border-b border-border">
          <span className="text-sm text-foreground/30">Works</span>
        </div>
        {projects.map((project) => (
          <ProjectRow key={project.name} project={project} />
        ))}
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
            className="grid items-baseline gap-x-6 border-b border-border px-6 py-5 grid-cols-[80px_1fr] lg:grid-cols-[120px_200px_1fr]"
          >
            <span className="text-sm text-muted tabular-nums whitespace-nowrap">{entry.years}</span>
            <span className="hidden lg:block text-sm text-muted whitespace-nowrap">{t.roles[entry.role as keyof typeof t.roles]}</span>
            <p className="text-base text-foreground whitespace-nowrap">{entry.company}</p>
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
