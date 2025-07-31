import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.sass";
import './tailwind.css'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Providers from "@/components/providers/Providers";

const LexendFont = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Consentfillers | Home",
  description: "Digitise Clinic Forms Effortlessly & Securely",
  keywords: [
    "Clinic forms",
    "Digital consent",
    "Healthcare automation",
    "Medical forms",
    "Consentfillers"
  ],
  authors: [{ name: "Consentfillers Team" }],
  applicationName: "Consentfillers",
  openGraph: {
    title: "Consentfillers — Digitise Clinic Forms Effortlessly & Securely",
    description: "Easily manage and digitise clinic forms with Consentfillers. Secure, fast, and compliant with healthcare standards.",
    url: "https://confil-landing.vercel.app",
    siteName: "Consentfillers landing",
    images: [
      {
        url: "https://confil-landing.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Consentfillers preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consentfillers — Digitise Clinic Forms Effortlessly & Securely",
    description: "Easily manage and digitise clinic forms with Consentfillers. Secure, fast, and compliant with healthcare standards.",
    images: ["https://confil-landing.vercel.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${LexendFont.variable}`}>
        <Header />
        {children}
        <Footer />
        <Providers />
      </body>
    </html>
  );
}
