import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

type Project = {
  name: string;
  role: string;
  year: string;
  category: "craft" | "ai";
  href?: string;
};

const projects: Project[] = [
  { category: "ai",    year: "2026", name: "Mercado Pago",              role: "Design Manager"  },
  { category: "ai",    year: "2025", name: "Sute",                      role: "Head of Design",  href: "/sute" },
  { category: "ai",    year: "2024", name: "Caju",                      role: "Head of Design"  },
  { category: "ai",    year: "2024", name: "Mude",                      role: "Head of Design"  },
  { category: "craft", year: "2026", name: "Artas",                     role: "Designer"        },
  { category: "craft", year: "2020", name: "FFForma",                   role: "Founder"         },
  { category: "craft", year: "2020", name: "My Phone",                  role: "Designer"        },
  { category: "craft", year: "2018", name: "Royal Canin Design System", role: "Head of Design"  },
];

const PILL_LABELS = {
  ai:    "AI Digital Artifacts",
  craft: "Craft Design",
} as const;

type Entry = {
  company: string;
  role: string;
  period?: string;
};

type ResumeSection = {
  label: string;
  entries: Entry[];
};

const experience: ResumeSection[] = [
  {
    label: "Current",
    entries: [
      { company: "Mercado Pago", role: "Design Manager", period: "2020–" },
    ],
  },
  {
    label: "Past experience",
    entries: [
      { company: "Rise New York & Partners", role: "Creative Director" },
      { company: "Meiuca", role: "Head of Design" },
      { company: "Descomplica", role: "Design Manager" },
      { company: "DDB Unlimited", role: "Design Director" },
      { company: "Work & Co", role: "Senior Designer" },
      { company: "Google Brand Studio", role: "Senior Designer" },
      { company: "Y Dreams", role: "Senior Designer" },
      { company: "Koi Factory", role: "Senior Designer" },
    ],
  },
];

const skills = [
  "Team Management",
  "User Experience Design",
  "Branding",
  "Visual Design",
  "Product Envisioning",
  "Design Process Consulting",
  "Team Growth & Leadership",
  "Strong Sales Experience",
  "Entrepreneurial Background",
];

const clients = [
  "Google",
  "Facebook",
  "Nike",
  "Isadore",
  "Royal Canin",
  "KLM",
  "Heineken",
  "Globosat",
  "Adidas",
  "Shutterstock",
  "Art Directors Club",
  "Cisco",
  "Descomplica",
  "Neom",
];

export default function Bio() {
  return (
    <div className="animate-fade-in">
      <SiteHeader />

      <main className="px-8 pb-24 md:px-12 lg:px-20">
        {/* Intro — two-column */}
        <div className="grid grid-cols-1 gap-12 pt-8 pb-16 border-b border-border lg:grid-cols-[200px_1fr] lg:gap-20">
          <div>
            <p className="text-sm text-muted">Bio</p>
          </div>
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-foreground/80">
              Designer based in São Paulo, Brazil. Pedro is a Brazilian/Swiss
              designer and creative director working at the intersection of
              digital products and branding experience. With 18+ years of
              professional experience, he plays a central and strategic role
              across all stages of a project — from understanding business
              strategy to delivering final prototypes.
            </p>
            <p className="text-sm leading-relaxed text-foreground/80">
              Fueled by curiosity, Pedro finds himself in a process of
              continuous iteration and experimentation. Founder of{" "}
              <span className="text-foreground font-medium">FFForma</span>, a
              studio crafting new motion and visual solutions using GenAI for
              the creative industry.
            </p>
            <div className="pt-2">
              <a href="#experience" className="text-sm text-muted hover:text-foreground transition-colors">
                ↓
              </a>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div id="projects" className="pt-0">
          <div className="py-3 border-b border-border">
            <p className="text-xs text-muted">Projects</p>
          </div>
          {projects.map((project) => {
            const row = (
              <div className="group flex items-center gap-4 border-b border-border py-4 transition-colors hover:bg-foreground/[0.02]">
                <span className="shrink-0 text-xs px-2 py-0.5 border border-border rounded-full text-muted whitespace-nowrap">
                  {PILL_LABELS[project.category]}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground">{project.name}</p>
                  <p className="text-xs text-muted mt-0.5">{project.role} · {project.year}</p>
                </div>
                {project.href && (
                  <span className="text-sm text-muted transition-colors group-hover:text-foreground shrink-0">→</span>
                )}
              </div>
            );
            return project.href ? (
              <Link key={project.name} href={project.href}>{row}</Link>
            ) : (
              <div key={project.name}>{row}</div>
            );
          })}
        </div>

        {/* Experience table */}
        <div id="experience" className="pt-8">
          {experience.map((section) => (
            <div key={section.label}>
              {section.entries.map((entry, i) => (
                <div
                  key={entry.company}
                  className="group grid items-baseline border-b border-border py-4 transition-colors hover:bg-foreground/[0.02] lg:grid-cols-[200px_120px_1fr_24px]"
                >
                  {/* Section label — only first row */}
                  <span className="hidden text-xs text-muted lg:block">
                    {i === 0 ? section.label : ""}
                  </span>

                  {/* Period */}
                  <span className="hidden text-sm text-muted lg:block">
                    {entry.period ?? ""}
                  </span>

                  {/* Company + role */}
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {entry.company}
                    </p>
                    <p className="text-xs text-muted mt-0.5">{entry.role}</p>
                    {/* Mobile-only label */}
                    {i === 0 && (
                      <p className="text-xs text-muted mt-1 lg:hidden">
                        {section.label}
                      </p>
                    )}
                  </div>

                  {/* Arrow */}
                  <span className="hidden text-sm text-muted transition-colors group-hover:text-foreground lg:block">
                    →
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Footer grid: Skills · Clients · Contact */}
        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-border pt-16 lg:grid-cols-3 lg:gap-20">
          <div>
            <p className="text-xs text-muted uppercase tracking-widest mb-8">
              Professional Skills
            </p>
            <div className="space-y-3">
              {skills.map((s) => (
                <p key={s} className="text-sm text-foreground/70">
                  {s}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-muted uppercase tracking-widest mb-8">
              Clients
            </p>
            <div className="space-y-3">
              {clients.map((c) => (
                <p key={c} className="text-sm text-foreground/70">
                  {c}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-muted uppercase tracking-widest mb-8">
              Contact
            </p>
            <div className="space-y-3">
              {[
                { label: "Email", href: "mailto:pducry@gmail.com" },
                { label: "Instagram", href: "https://www.instagram.com/pedro_julien" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/pedro_julien" },
                { label: "Foundation", href: "https://foundation.app/@ixaser" },
                { label: "Objkt", href: "https://objkt.com/users/tz1VZcpNZW6W8D2hGXvTDqJqwGjmjPKRYwRM" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="block text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-16 text-xs text-muted">© Pedro Julien 2026</p>
      </main>
    </div>
  );
}
