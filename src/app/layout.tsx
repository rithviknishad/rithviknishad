import { Inter, Manrope } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/app/Footer";
import Nav from "@/components/Nav";
import Link from "next/link";

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
        <Nav>
          <div className="hidden md:block">
            <div className="flex items-center justify-end transition-all 2xl:pr-52">
              {[
                { label: "Home", href: "/#home" },
                { label: "Life 100", href: "/life-100" },
                { label: "Projects", href: "/#projects" },
                { label: "Know Me", href: "/#skills" },
                { label: "About", href: "/#about" },
              ].map(({ label, href }) => (
                <Link
                  href={href}
                  key={href}
                  className="sectionlink p-1 text-base font-bold text-zinc-100 sm:p-4 tracking-wider cursor-pointer"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </Nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
