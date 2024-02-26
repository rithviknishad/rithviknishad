import { Inter, Manrope } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/app/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Rithvik Nishad – software developer, electrical engineer, creator",
  description:
    "Passion for building scalable and distributed systems for the energy grid and contributing to open source digital public goods.",
};

export const viewport: Viewport = {
  themeColor: "black",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="text-white bg-black selection:text-black selection:bg-primary-500 font-manrope">
        {children}
        <Footer />
      </body>
    </html>
  );
}
