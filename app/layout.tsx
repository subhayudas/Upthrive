import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./gradient-animation.css";
import SpotlightBackground from "@/components/main/SpotlightBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.Upthrive.xyz/'),
  title: {
    default: "Welcome to Upthrive",
    template: "We're your secret weapon in the digital arena",
  },
  description: "We're your secret weapon in the digital arena",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: '/opengraph-image.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        style={{ cursor: 'auto' }}
      >
        <SmoothCursor />
        <SpotlightBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
