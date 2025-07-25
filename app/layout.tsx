import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.sass";
import './tailwind.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LexendFont = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Consentfillers | Home",
  description: "Digitise Clinic Forms Effortlessly & Securely",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${LexendFont.variable}`}>
        <div className="container">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
