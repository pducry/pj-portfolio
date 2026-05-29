import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

type Project = {
  type: "craft" | "ai";
  year: string;
  name: string;
  role: string;
  href?: string;
};

const projects: Project[] = [
  { type: "ai",    year: "2026", name: "Mercado Pago",              role: "Design Manager"  },
  { type: "ai",    year: "2025", name: "Sute",                      role: "Head of Design",  href: "/sute" },
  { type: "ai",    year: "2024", name: "Caju",                      role: "Head of Design"  },
  { type: "ai",    year: "2024", name: "Mude",                      role: "Head of Design"  },
  { type: "craft", year: "2026", name: "Artas",                     role: "Designer"        },
  { type: "craft", year: "2020", name: "FFForma",                   role: "Founder"         },
  { type: "craft", year: "2020", name: "My Phone",                  role: "Designer"        },
  { type: "craft", year: "2018", name: "Royal Canin Design System", role: "Head of Design"  },
];

const PILL: Record<Project["type"], string> = {
  ai:    "AI Digital Artifacts",
  craft: "Craft Design",
};

export default function Works() {
  return (
    <div className="animate-fade-in">
      <SiteHeader />

      <main className="px-8 pb-24 md:px-12 lg:px-20">
        <div className="border-b border-border py-3 mb-0">
          <p className="text-xs text-muted">Works</p>
        </div>

        {projects.map((project) => {
          const row = (
            <div className="group flex items-center gap-4 border-b border-border py-4 transition-colors hover:bg-foreground/[0.02]">
              <span className="shrink-0 text-xs px-2 py-0.5 border border-border rounded-full text-muted whitespace-nowrap">
                {PILL[project.type]}
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
      </main>
    </div>
  );
}
