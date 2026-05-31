import type { Metadata } from "next";
import { Instrument_Sans, Lora } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Pedro Julien — Creative Director",
  description:
    "Brazilian/Swiss designer and creative director with 18+ years of experience in digital products and branding.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}var f=localStorage.getItem('font');if(f==='serif'){document.documentElement.classList.add('font-serif-mode');}}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className={`${instrumentSans.variable} ${lora.variable} ${instrumentSans.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
