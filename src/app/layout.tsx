import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Webronic | Technical Solutions",
  description: "Intelligent digital solutions designed to scale, automate, and future-proof your business.",
  icons: {
    icon: "./favicon.png", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={` font-sora antialiased bg-white text-slate-900`}
      >
        <header id="main-header" className="relative z-[100]">
          <Navbar />
        </header>

        <main className="min-h-screen">
          <Providers>{children}</Providers>
        </main>

        <footer id="main-footer">
          <Footer />
        </footer>
      </body>
    </html>
  );
}