import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steven Universo — Portal Interativo",
  description: "Explore personagens, história, lugares, fusões, jogos, músicas, curiosidades e a obra de Rebecca Sugar.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://steven-universo-next.vercel.app"),
  openGraph: {
    title: "Steven Universo — Portal Interativo",
    description: "Explore um universo de histórias, Gems e conexões",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Steven Universo — Portal Interativo" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
