import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./gradient-animation.css";
import "../styles/mobile-optimizations.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import LoadingAnimation from "@/components/main/LoadingAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.Upthrive.in/'),
  title: {
    default: "Welcome to Upthrive",
    template: "We're your secret weapon in the digital arena",
  },
  description: "We're your secret weapon in the digital arena",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: '/upthrive.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&family=Questrial&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        style={{ cursor: 'auto' }}
      >
        <LoadingAnimation />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

