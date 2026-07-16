"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

export function WorksFooter({ current }: { current: string }) {
  const { lang } = useLang();
  const t = translations[lang];

  const others = projects.filter((p) => p.name !== current);
  const linked = (p: (typeof projects)[0]) => !!p.href;

  return (
    <div className="mt-16 border-t border-border">
      <div className="px-6 py-3 border-b border-border">
        <span className="text-sm text-foreground/30">{t.common.worksSection}</span>
      </div>

      {others.map((project) => {
        const isLinked = linked(project);

        const row = (
          <div
            className={[
              "group grid items-baseline gap-x-6 border-b border-border px-6 py-5 transition-colors",
              "grid-cols-[48px_1fr_auto] lg:grid-cols-[64px_200px_180px_1fr_24px]",
              isLinked ? "hover:bg-foreground cursor-pointer" : "",
            ].join(" ")}
          >
            <span className={`text-sm tabular-nums whitespace-nowrap transition-colors ${isLinked ? "text-muted group-hover:text-background" : "text-muted"}`}>
              {project.year}
            </span>

            {/* Mobile: name + category */}
            <div className="lg:hidden">
              <span className={`text-sm whitespace-nowrap transition-colors ${isLinked ? "text-foreground group-hover:text-background" : "text-foreground"}`}>
                {project.name}
              </span>
              <p className={`text-xs mt-0.5 transition-colors ${isLinked ? "text-muted group-hover:text-background" : "text-muted"}`}>
                {t.categories[project.category as keyof typeof t.categories] ?? project.category}
              </p>
            </div>

            {/* Desktop columns */}
            <span className={`hidden lg:block text-sm whitespace-nowrap transition-colors ${isLinked ? "text-muted group-hover:text-background" : "text-muted"}`}>
              {t.categories[project.category as keyof typeof t.categories] ?? project.category}
            </span>
            <span className={`hidden lg:block text-sm whitespace-nowrap transition-colors ${isLinked ? "text-muted group-hover:text-background" : "text-muted"}`}>
              {t.roles[project.role as keyof typeof t.roles] ?? project.role}
            </span>
            <span className={`hidden lg:block text-base whitespace-nowrap transition-colors ${isLinked ? "text-foreground group-hover:text-background" : "text-foreground"}`}>
              {project.name}
            </span>

            <span className={`text-sm justify-self-end transition-colors ${isLinked ? "text-muted/40 group-hover:text-background" : "invisible"}`}>
              →
            </span>
          </div>
        );

        return isLinked ? (
          <Link key={project.name} href={project.href!}>{row}</Link>
        ) : (
          <div key={project.name}>{row}</div>
        );
      })}
    </div>
  );
}
