"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";
import { SiteHeader } from "@/components/site-header";
import { asset } from "@/lib/asset";

// ─── Carousel ───────────────────────────────────────────────────────────────

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
    const id = setInterval(() => setCurrent((c) => (c + 1) % carouselImages.length), 350);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
      {carouselImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-150"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image src={asset(src)} alt="" fill className="object-cover" sizes="100vw" priority={i === 0} />
        </div>
      ))}
    </div>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

type Project = { category: string; year: string; name: string; role: string; href?: string };

const projects: Project[] = [
  { category: "Product Design", year: "2026", name: "Mercado Pago",              role: "Design Manager"  },
  { category: "Product Design", year: "2025", name: "Sute",                      role: "Head of Design",  href: "/sute" },
  { category: "Product Design", year: "2024", name: "Caju",                      role: "Head of Design"  },
  { category: "Product Design", year: "2024", name: "Mude",                      role: "Head of Design"  },
  { category: "Digital Product", year: "2026", name: "Artas",                    role: "Designer"        },
  { category: "Branding",        year: "2020", name: "FFForma",                  role: "Founder"         },
  { category: "Branding",        year: "2020", name: "My Phone",                 role: "Designer"        },
  { category: "Design System",   year: "2018", name: "Royal Canin Design System",role: "Head of Design"  },
];

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

const clients = [
  "Mercado Pago", "Google", "Facebook", "Nike", "Isadore", "Royal Canin",
  "KLM", "Heineken", "Globosat", "Adidas", "Shutterstock",
  "Art Directors Club", "Cisco", "Descomplica", "Neom",
];

const contactLinks = [
  { label: "Email",      href: "mailto:pducry@gmail.com" },
  { label: "Instagram",  href: "https://www.instagram.com/pedro_julien" },
  { label: "LinkedIn",   href: "https://www.linkedin.com/in/pedro_julien" },
  { label: "Foundation", href: "https://foundation.app/@ixaser" },
  { label: "Objkt",      href: "https://objkt.com/users/tz1VZcpNZW6W8D2hGXvTDqJqwGjmjPKRYwRM" },
];

// ─── Components ──────────────────────────────────────────────────────────────

function ModuleHeader({ label }: { label: string }) {
  return (
    <div className="px-6 py-3 border-t border-b border-border">
      <span className="text-sm text-foreground/30">{label}</span>
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const linked = !!project.href;
  const cls = [
    "group grid items-baseline gap-x-6 border-b border-border px-6 py-5 transition-colors",
    "grid-cols-[48px_1fr_auto] lg:grid-cols-[64px_200px_180px_1fr_24px]",
    linked ? "hover:bg-foreground cursor-pointer" : "",
  ].join(" ");

  const txt = (prominent = false) =>
    linked
      ? `transition-colors group-hover:text-background ${prominent ? "text-foreground" : "text-muted"}`
      : prominent
      ? "text-foreground"
      : "text-muted";

  const inner = (
    <div className={cls}>
      <span className={`text-sm tabular-nums whitespace-nowrap ${txt()}`}>{project.year}</span>

      {/* Mobile: name + category below */}
      <div className="lg:hidden">
        <span className={`text-sm whitespace-nowrap ${txt(true)}`}>{project.name}</span>
        <p className={`text-xs mt-0.5 ${txt()}`}>{project.category}</p>
      </div>

      {/* Desktop columns */}
      <span className={`hidden lg:block text-sm whitespace-nowrap ${txt()}`}>{project.category}</span>
      <span className={`hidden lg:block text-sm whitespace-nowrap ${txt()}`}>{project.role}</span>
      <span className={`hidden lg:block text-base whitespace-nowrap ${txt(true)}`}>{project.name}</span>

      <span className={`text-sm justify-self-end transition-colors ${linked ? "text-muted/40 group-hover:text-background" : "invisible"}`}>→</span>
    </div>
  );

  return linked ? <Link href={project.href!}>{inner}</Link> : <div>{inner}</div>;
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Bio() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="animate-fade-in">
      <SiteHeader />

      {/* Intro */}
      <div className="px-6 pt-6 pb-8">
        <div className="max-w-xl space-y-6">
          <p className="text-2xl lg:text-[30px] leading-snug text-foreground/75">{t.bio.p1}</p>
          <p className="text-2xl lg:text-[30px] leading-tight text-foreground/75">
            {t.bio.p4a}{" "}
            <a
              href="https://ffforma.design/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-medium underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition-colors"
            >
              FFForma
            </a>
            {t.bio.p4b}
          </p>
          <a
            href="mailto:pducry@gmail.com"
            className="inline-flex items-center gap-2 text-2xl lg:text-[30px] text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground transition-colors"
          >
            {t.bio.cta} →
          </a>
        </div>
      </div>

      <div className="h-16 lg:h-[200px]" />

      {/* Works */}
      <div id="projects" className="border-t border-border">
        <div className="px-6 py-3 border-b border-border">
          <span className="text-sm text-foreground/30">Works</span>
        </div>
        {projects.map((p) => <ProjectRow key={p.name} project={p} />)}
      </div>

      {/* Experience */}
      <div id="experience" className="mt-16 lg:mt-20">
        <ModuleHeader label={t.experience.past} />
        {experience.map((entry) => (
          <div
            key={entry.company}
            className="grid items-baseline gap-x-6 border-b border-border px-6 py-5 grid-cols-[80px_1fr] lg:grid-cols-[120px_200px_1fr]"
          >
            <span className="text-sm text-muted tabular-nums whitespace-nowrap">{entry.years}</span>
            <div>
              <p className="text-base text-foreground whitespace-nowrap">{entry.company}</p>
              <p className="text-xs text-muted mt-0.5 lg:hidden">{t.roles[entry.role as keyof typeof t.roles]}</p>
            </div>
            <span className="hidden lg:block text-sm text-muted whitespace-nowrap self-center">{t.roles[entry.role as keyof typeof t.roles]}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 lg:mt-20">
        {/* Desktop header */}
        <div className="hidden lg:grid grid-cols-3 gap-24 px-6 py-3 border-t border-b border-border">
          <span className="text-sm text-foreground/30">{t.footer.skills}</span>
          <span className="text-sm text-foreground/30">{t.footer.clients}</span>
          <span className="text-sm text-foreground/30">{t.footer.contact}</span>
        </div>

        <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-24 lg:mt-3 lg:px-6">
          {/* Skills */}
          <div>
            <div className="lg:hidden px-6 py-3 border-t border-b border-border">
              <span className="text-sm text-foreground/30">{t.footer.skills}</span>
            </div>
            <div className="px-6 lg:px-0 py-6 lg:py-0 space-y-3 lg:space-y-4">
              {t.skills.map((s) => <p key={s} className="text-base text-foreground/60">{s}</p>)}
            </div>
          </div>

          {/* Clients */}
          <div>
            <div className="lg:hidden px-6 py-3 border-t border-b border-border">
              <span className="text-sm text-foreground/30">{t.footer.clients}</span>
            </div>
            <div className="px-6 lg:px-0 py-6 lg:py-0 space-y-3 lg:space-y-4">
              {clients.map((c) => <p key={c} className="text-base text-foreground/60">{c}</p>)}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="lg:hidden px-6 py-3 border-t border-b border-border">
              <span className="text-sm text-foreground/30">{t.footer.contact}</span>
            </div>
            <div className="px-6 lg:px-0 py-6 lg:py-0 space-y-3 lg:space-y-4">
              {contactLinks.map(({ label, href }) => (
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
