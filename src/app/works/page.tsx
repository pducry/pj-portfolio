import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

type Project = {
  category: string;
  year: string;
  name: string;
  href?: string;
};

const projects: Project[] = [
  { category: "AI Digital Artifacts", year: "2026", name: "Mercado Pago"             },
  { category: "AI Digital Artifacts", year: "2025", name: "Sute",       href: "/sute" },
  { category: "AI Digital Artifacts", year: "2024", name: "Caju"                      },
  { category: "AI Digital Artifacts", year: "2024", name: "Mude"                      },
  { category: "Craft Design",         year: "2026", name: "Artas"                     },
  { category: "Craft Design",         year: "2020", name: "FFForma"                   },
  { category: "Craft Design",         year: "2020", name: "My Phone"                  },
  { category: "Craft Design",         year: "2018", name: "Royal Canin Design System" },
];

export default function Works() {
  return (
    <div className="animate-fade-in">
      <SiteHeader />

      <main className="px-8 pb-24 md:px-12 lg:px-20">
        <div className="border-b border-border py-3">
          <p className="text-xs text-muted">Works</p>
        </div>

        {projects.map((project) => {
          const row = (
            <div className="group border-b border-border py-4 transition-colors hover:bg-foreground/[0.02]">
              {/* Mobile */}
              <div className="lg:hidden">
                <p className="text-sm font-medium text-foreground">{project.name}</p>
                <p className="text-xs text-muted mt-0.5">{project.category} · {project.year}</p>
              </div>
              {/* Desktop */}
              <div className="hidden lg:grid lg:grid-cols-[220px_64px_1fr_24px] lg:items-baseline lg:gap-x-4">
                <p className="text-xs text-muted">{project.category}</p>
                <p className="text-xs text-muted tabular-nums">{project.year}</p>
                <p className="text-sm font-medium text-foreground">{project.name}</p>
                <span className={`text-sm transition-colors ${project.href ? "text-muted group-hover:text-foreground" : "invisible"}`}>→</span>
              </div>
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
