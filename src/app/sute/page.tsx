import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";

const images = [
  { src: "/sute/1.png",  alt: "Sute — 1"  },
  { src: "/sute/3.png",  alt: "Sute — 3"  },
  { src: "/sute/4.png",  alt: "Sute — 4"  },
  { src: "/sute/5.png",  alt: "Sute — 5"  },
  { src: "/sute/6.jpg",  alt: "Sute — 6"  },
  { src: "/sute/7.png",  alt: "Sute — 7"  },
  { src: "/sute/8.png",  alt: "Sute — 8"  },
  { src: "/sute/10.png", alt: "Sute — 10" },
];

export default function SutePage() {
  return (
    <div className="animate-fade-in">
      <SiteHeader />

      {/* Back */}
      <div className="px-6 pt-1 pb-4">
        <Link href="/works" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors">
          ← Works
        </Link>
      </div>

      {/* Title + meta */}
      <div className="px-6 border-t border-border py-4 flex flex-wrap items-baseline gap-x-10 gap-y-1">
        <span className="text-base text-foreground whitespace-nowrap">Sute</span>
        <span className="text-sm text-muted whitespace-nowrap">Branding</span>
        <span className="text-sm text-muted whitespace-nowrap">2025</span>
        <span className="text-sm text-muted whitespace-nowrap">Head of Design</span>
      </div>

      {/* Description */}
      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">
            Sute is a digital product built to bring order to complex information
            landscapes — taking what is normally dense, fragmented data and making it
            feel calm, navigable, and human.
          </p>
          <p className="text-base leading-snug text-foreground/70">
            I led the design end-to-end alongside a small, focused team. The work spanned
            foundational research and product strategy, information architecture, the full
            UI system, motion principles, and the editorial tone that runs through every
            screen.
          </p>
          <p className="text-base leading-snug text-foreground/70">
            Restrained type, deliberate negative space, and a quiet palette anchor the
            product. The visual language stays intentionally subdued so that the data,
            decisions, and the people using it remain the loudest voices in the room.
          </p>
        </div>
      </div>

      {/* Images */}
      <div className="px-6 py-6 space-y-6">
        {images.map((img) => (
          <div key={img.src} className="relative w-full overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              width={1600}
              height={900}
              className="w-full h-auto"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      <p className="px-6 pb-8 text-sm text-muted">© Pedro Julien 2026</p>
    </div>
  );
}
