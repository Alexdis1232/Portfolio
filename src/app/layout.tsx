import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";
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
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=112116149', 'ym');

              ym(112116149, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/112116149"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <Analytics />
      </body>
    </html>
  );
}
