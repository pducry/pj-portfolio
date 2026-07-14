import { SiteHeader } from "@/components/site-header";

type Entry = {
  company: string;
  role: string;
  years: string;
  description?: string;
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
          "Conducted thorough industry research to determine the direction of branding experiences and digital products. Created and led the first branding refresh, setting new positioning and values. Designed and built design systems, modular and scalable design patterns, hired and built design teams, set process and culture.",
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
          "Led the design team to push conventional boundaries with unique concepts and identities. Responsible for the digital global soccer account of Adidas, creating part of the design modular system structure. Developed the global design system for Royal Canin, including photography, iconography, and digital assets.",
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

      <main className="px-6 pb-24">
        {/* Intro */}
        <div className="grid grid-cols-1 gap-8 pt-8 pb-12 border-b border-border lg:grid-cols-[180px_1fr] lg:gap-16">
          <div>
            <p className="text-[13px] text-foreground/40">About</p>
          </div>
          <div className="space-y-4 max-w-2xl">
            <p className="text-[14px] leading-relaxed text-foreground/70">
              With 18+ years of professional experience, Pedro is a Brazilian/Swiss
              designer and creative director working at the intersection of digital
              products and branding experience. He plays a central and strategic role
              across all stages of a project — from understanding business strategy to
              delivering final prototypes. A team player, believer in the power of
              collaboration and team diversity. Also an enthusiast of creative
              frameworks between men and machines.
            </p>
            <p className="text-[14px] leading-relaxed text-foreground/70">
              Fueled by curiosity, Pedro finds himself in a process of continuous
              iteration and experimentation. Founder of{" "}
              <span className="text-foreground font-medium">FFForma</span>, a studio
              crafting new motion and visual solutions using GenAI for the creative
              industry.
            </p>
            <blockquote className="border-l border-border pl-4 pt-1">
              <p className="text-[13px] leading-relaxed text-foreground/40 italic">
                "I do believe in the power of craft leading by business needs, always
                collaborating with teams to achieve better results. Whether it's concept
                design, a user-centered approach or leading creative teams, I am always
                excited by the challenges of balancing creative, strategic and management
                skills to successfully deliver solutions as part of a team."
              </p>
            </blockquote>
          </div>
        </div>

        {/* Experience */}
        <div id="experience">
          {experience.map((section) =>
            section.entries.map((entry, i) => (
              <div
                key={entry.company}
                className="grid items-start border-b border-border py-5 transition-colors hover:bg-foreground/[0.02] lg:grid-cols-[180px_1fr]"
              >
                <div className="hidden lg:block">
                  <p className="text-[13px] text-foreground/40">{i === 0 ? section.label : ""}</p>
                  <p className="text-[13px] text-foreground/40 mt-0.5">{entry.years}</p>
                </div>
                <div>
                  <p className="text-[14px] font-medium text-foreground">{entry.company}</p>
                  <p className="text-[13px] text-foreground/40 mt-0.5 mb-3">{entry.role}</p>
                  {entry.description && (
                    <p className="text-[13px] leading-relaxed text-foreground/55 max-w-2xl">
                      {entry.description}
                    </p>
                  )}
                  {i === 0 && (
                    <p className="text-[13px] text-foreground/40 mt-2 lg:hidden">{section.label}</p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer grid */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-12 lg:grid-cols-4 lg:gap-12">
          <div>
            <p className="text-[11px] text-foreground/30 uppercase tracking-widest mb-6">
              Skills
            </p>
            <div className="space-y-2.5">
              {skills.map((s) => (
                <p key={s} className="text-[13px] text-foreground/60">{s}</p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] text-foreground/30 uppercase tracking-widest mb-6">
              Recognition
            </p>
            <div className="space-y-2.5">
              {recognition.map((r) => (
                <p key={r} className="text-[13px] text-foreground/60">{r}</p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] text-foreground/30 uppercase tracking-widest mb-6">
              Clients
            </p>
            <div className="space-y-2.5">
              {clients.map((c) => (
                <p key={c} className="text-[13px] text-foreground/60">{c}</p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] text-foreground/30 uppercase tracking-widest mb-6">
              Contact
            </p>
            <div className="space-y-2.5">
              {contactLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="block text-[13px] text-foreground/60 transition-colors hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 text-[12px] text-foreground/30">© Pedro Julien 2026</p>
      </main>
    </div>
  );
}
