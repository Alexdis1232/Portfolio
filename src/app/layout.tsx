import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import dynamic from "next/dynamic";
import { AudioUnlock } from "@/components/AudioUnlock";
import { CustomCursor } from "@/components/CustomCursor";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const GradualBlur = dynamic(() => import("@/components/GradualBlur"), { ssr: false });

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Саша — Продуктовый дизайнер",
  description: "Портфолио продуктового дизайнера",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Саша",
  jobTitle: "Продуктовый дизайнер",
  description:
    "Продуктовый дизайнер mobile-first с 3 годами опыта в B2C и B2B продуктах и уклоном в работу с AI-инструментами.",
  url: "https://portfolio-mu-sepia-70.vercel.app",
  knowsAbout: [
    "Продуктовый дизайн",
    "UX/UI дизайн",
    "Mobile-first дизайн",
    "AI-инструменты",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen bg-white font-sans text-[15px] text-black antialiased sm:text-base`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <AudioUnlock />
        <CustomCursor />
        <Navbar />
        <Container>
          <main className="pt-[88px] sm:pt-28">{children}</main>
        </Container>
        <GradualBlur
          target="page"
          position="bottom"
          height="72px"
          strength={2}
          divCount={4}
          curve="bezier"
          exponential={false}
          animated="scroll"
          opacity={0.85}
        />
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "744f21b732f5487f97cb70615cc5fc85"}'
        />
      </body>
    </html>
  );
}
