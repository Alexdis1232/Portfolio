import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { AudioUnlock } from "@/components/AudioUnlock";
import { CustomCursor } from "@/components/CustomCursor";
import dynamic from "next/dynamic";

const GradualBlur = dynamic(() => import("@/components/GradualBlur"), { ssr: false });
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

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
      </body>
    </html>
  );
}
