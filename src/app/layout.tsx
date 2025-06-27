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
  title: "Manacá Partners - Consultoria de Performance Empresarial",
  description: "Consultoria de performance que auxilia negócios a alcançarem resultados através de abordagem personalizada. Especialistas em processos, pessoas e tecnologia.",
  keywords: "consultoria empresarial, performance empresarial, eficiência operacional, transformação digital, processos, gestão, tecnologia, Manacá Partners",
  authors: [{ name: "Manacá Partners" }],
  creator: "Manacá Partners",
  publisher: "Manacá Partners",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://manacapartners.com.br"),
  openGraph: {
    title: "Manacá Partners - Consultoria de Performance Empresarial",
    description: "Consultoria de performance que auxilia negócios a alcançarem resultados através de abordagem personalizada. Especialistas em processos, pessoas e tecnologia.",
    url: "https://manacapartners.com.br",
    siteName: "Manacá Partners",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Manacá Partners - Performance para sua empresa alcançar o próximo nível",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manacá Partners - Consultoria de Performance Empresarial",
    description: "Consultoria de performance que auxilia negócios a alcançarem resultados através de abordagem personalizada.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
