"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/works", label: "Works" },
  { href: "/playground", label: "Playground" },
  { href: "/bio", label: "Bio" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`text-sm transition-colors ${
              isActive
                ? "font-medium text-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
