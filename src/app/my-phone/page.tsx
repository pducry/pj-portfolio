import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { WorksFooter } from "@/components/works-footer";
import { asset } from "@/lib/asset";

const images = [
  { src: "/my-phone/1.png", alt: "My Phone, 1" },
  { src: "/my-phone/2.png", alt: "My Phone, 2" },
  { src: "/my-phone/3.png", alt: "My Phone, 3" },
  { src: "/my-phone/4.png", alt: "My Phone, 4" },
  { src: "/my-phone/5.png", alt: "My Phone, 5" },
  { src: "/my-phone/6.png", alt: "My Phone, 6" },
  { src: "/my-phone/7.jpg", alt: "My Phone, 7" },
  { src: "/my-phone/8.jpg", alt: "My Phone, 8" },
];

export default function MyPhonePage() {
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
        <span className="text-base text-foreground whitespace-nowrap">My Phone</span>
        <span className="text-sm text-muted whitespace-nowrap">Branding</span>
        <span className="text-sm text-muted whitespace-nowrap">2020</span>
        <span className="text-sm text-muted whitespace-nowrap">Designer</span>
      </div>

      {/* Description */}
      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">
            My Phone is a branding project exploring the visual identity of a personal device brand, built around the idea that technology should feel human, tactile, and distinctly yours.
          </p>
          <p className="text-base leading-snug text-foreground/70">
            The work covers brand identity, visual language, typography, and art direction, designed to feel bold and minimal at the same time.
          </p>
        </div>
      </div>

      {/* Images */}
      <div className="px-6 py-6 space-y-6">
        {images.map((img) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={img.src}
            src={asset(img.src)}
            alt={img.alt}
            className="w-full h-auto"
          />
        ))}
      </div>

      <WorksFooter current="My Phone" />

      <p className="px-6 pb-8 text-sm text-muted">© Pedro Julien 2026</p>
    </div>
  );
}
