import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientParallaxWrapper from "@/components/ClientParallaxWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Ludivine Rameaux",
  description: "Portfolio de Ludivine Rameaux, designer.",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="fr">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ClientParallaxWrapper>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </ClientParallaxWrapper>
    </body>
  </html>
);

export default RootLayout;
