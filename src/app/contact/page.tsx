"use client";

import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";

type Entry = {
  company: string;
  role: string;
  years: string;
  description: string;
};

type Section = { label: string; entries: Entry[] };

const experience: Section[] = [
  {
    label: "Current",
    entries: [
      {
        company: "Mercado Pago",
        role: "Design Manager",
        years: "2020–",
        description:
          "Responsible for elevating design quality standards and driving creative excellence across teams. Acts as both leader and team player, fostering collaboration between design, product, and business areas. With a strong focus on visual craft and creativity, guiding the team to deliver cohesive, innovative, and impactful experiences that strengthen Mercado Livre's and Mercado Pago's brand and digital product presence.",
      },
    ],
  },
  {
    label: "Past",
    entries: [
      {
        company: "Rise New York & Partners",
        role: "Creative Director",
        years: "2024–2025",
        description:
          "Shaped the agency's creative vision and brought innovative concepts to life. Oversaw the strategic direction of projects, ensuring alignment with client objectives while pushing boundaries to deliver cutting-edge solutions. Led and inspired a multidisciplinary team, fostering collaboration and maintaining high creative standards.",
      },
      {
        company: "Descomplica",
        role: "Design Manager",
        years: "2019–2024",
        description:
          "Conducted thorough industry research to determine the direction of branding experiences and digital products. Created and led the first branding refresh, setting new positioning and values. Designed and built design systems, modular and scalable design patterns — hired and built design teams, setting process and culture.",
      },
      {
        company: "Meiuca",
        role: "Head of Design",
        years: "2024",
        description:
          "Pushed the boundaries of digital design and product vision, creating visually stunning and functional products that resonate with users. Led the team in delivering exceptional digital experiences through a strategic mindset and collaborative creative environment.",
      },
      {
        company: "DDB Unlimited",
        role: "Design Director",
        years: "2017–2019",
        description:
          "Led the design team to push conventional boundaries with unique concepts and identities. Responsible for the digital global soccer account of Adidas, creating part of the design modular system. Developed the global design system for Royal Canin, including photography, iconography, and digital assets.",
      },
      {
        company: "Work & Co",
        role: "Senior Designer",
        years: "2015–2017",
        description:
          "Led digital product design projects for clients including Facebook and Santander. Responsible for ensuring the team's work communicates effectively with the highest quality, solving business challenges and meeting user needs across all stages of design development.",
      },
      {
        company: "Google Brand Studio",
        role: "Senior Designer",
        years: "2015",
        description:
          "Created interactive digital projects for Google's Cultural Institute, including Performing Arts With Google — a fully immersive 360° experience allowing anyone to step on stage with world-renowned actors, singers, and dancers.",
      },
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

const recognition = [
  "Cannes Lions",
  "Webby Awards",
  "SxSW Digital Design",
  "Adobe's Cutting Edge",
  "D&AD",
  "Behance Portfolio Review",
  "Brasil Design Awards",
  "FastCo. Most Innovative Companies 2021",
  "Computer Arts",
  "Awwwards",
  "FWA",
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

const contactLinks = [
  { label: "Email",      href: "mailto:pducry@gmail.com" },
  { label: "Instagram",  href: "https://www.instagram.com/pedro_julien" },
  { label: "LinkedIn",   href: "https://www.linkedin.com/in/pedro_julien" },
  { label: "Foundation", href: "https://foundation.app/@ixaser" },
  { label: "Objkt",      href: "https://objkt.com/users/tz1VZcpNZW6W8D2hGXvTDqJqwGjmjPKRYwRM" },
];

export default function Contact() {
  return (
    <div className="animate-fade-in">
      <SiteHeader />

      {/* Intro */}
      <div className="px-6 pt-6 pb-8">
        <div className="max-w-xl space-y-5">
          <p className="text-2xl lg:text-[30px] leading-snug text-foreground/75">
            With 18+ years of professional experience, Pedro is a Brazilian/Swiss
            designer and creative director working at the intersection of digital
            products and branding experience — from understanding business strategy
            to delivering final prototypes.
          </p>
          <p className="text-2xl lg:text-[30px] leading-snug text-foreground/75">
            Fueled by curiosity, founder of{" "}
            <span className="text-foreground font-medium">FFForma</span>, a studio
            crafting new motion and visual solutions using GenAI for the creative
            industry.
          </p>
          <blockquote className="border-l border-border pl-4 pt-1">
            <p className="text-lg lg:text-[22px] leading-relaxed text-muted italic">
              "I do believe in the power of craft leading by business needs, always
              collaborating with teams to achieve better results — whether it's concept
              design, a user-centered approach or leading creative teams."
            </p>
          </blockquote>
        </div>
      </div>

      <div className="h-8 lg:h-16" />

      {/* Experience */}
      <div id="experience" className="border-t border-border">
        <Reveal>
          <div className="px-6 py-3 border-b border-border">
            <span className="text-sm text-foreground/30">Experience</span>
          </div>
        </Reveal>

        {experience.map((section) =>
          section.entries.map((entry, i) => (
            <Reveal key={entry.company}>
              <div className="grid items-start gap-x-6 border-b border-border px-6 py-6 grid-cols-[80px_1fr] lg:grid-cols-[120px_180px_1fr]">
                {/* Years + section label */}
                <div>
                  <span className="text-sm text-muted tabular-nums whitespace-nowrap">
                    {entry.years}
                  </span>
                  {i === 0 && (
                    <p className="text-xs text-muted mt-1">{section.label}</p>
                  )}
                </div>

                {/* Role — desktop only */}
                <span className="hidden lg:block text-sm text-muted whitespace-nowrap">
                  {entry.role}
                </span>

                {/* Company + description */}
                <div>
                  <p className="text-base text-foreground">{entry.company}</p>
                  <p className="text-xs text-muted mt-0.5 lg:hidden">{entry.role}</p>
                  {entry.description && (
                    <p className="text-sm text-muted mt-2 leading-relaxed max-w-prose">
                      {entry.description}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))
        )}
      </div>

      {/* Footer: Skills · Recognition · Clients · Contact */}
      <div className="mt-16 lg:mt-20">
        <Reveal>
          <div className="hidden lg:grid grid-cols-4 gap-16 px-6 py-3 border-t border-b border-border">
            <span className="text-sm text-foreground/30">Skills</span>
            <span className="text-sm text-foreground/30">Recognition</span>
            <span className="text-sm text-foreground/30">Clients</span>
            <span className="text-sm text-foreground/30">Contact</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-16 lg:mt-3 lg:px-6">

          {/* Skills */}
          <Reveal>
            <div className="lg:hidden px-6 py-3 border-t border-b border-border">
              <span className="text-sm text-foreground/30">Skills</span>
            </div>
            <div className="px-6 lg:px-0 py-6 lg:py-0 space-y-3 lg:space-y-4">
              {skills.map((s) => (
                <p key={s} className="text-base text-foreground/60">{s}</p>
              ))}
            </div>
          </Reveal>

          {/* Recognition */}
          <Reveal delay={0.06}>
            <div className="lg:hidden px-6 py-3 border-t border-b border-border">
              <span className="text-sm text-foreground/30">Recognition</span>
            </div>
            <div className="px-6 lg:px-0 py-6 lg:py-0 space-y-3 lg:space-y-4">
              {recognition.map((r) => (
                <p key={r} className="text-base text-foreground/60">{r}</p>
              ))}
            </div>
          </Reveal>

          {/* Clients */}
          <Reveal delay={0.12}>
            <div className="lg:hidden px-6 py-3 border-t border-b border-border">
              <span className="text-sm text-foreground/30">Clients</span>
            </div>
            <div className="px-6 lg:px-0 py-6 lg:py-0 space-y-3 lg:space-y-4">
              {clients.map((c) => (
                <p key={c} className="text-base text-foreground/60">{c}</p>
              ))}
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.18}>
            <div className="lg:hidden px-6 py-3 border-t border-b border-border">
              <span className="text-sm text-foreground/30">Contact</span>
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
          </Reveal>
        </div>
      </div>

      <Reveal>
        <p className="mt-16 px-6 text-sm text-muted pb-8">© Pedro Julien 2026</p>
      </Reveal>
    </div>
  );
}
