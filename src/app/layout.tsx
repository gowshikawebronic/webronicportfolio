import type { Metadata } from "next";
// import { Sora } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Configure Sora font globally
// const sora = Sora({
//   subsets: ["latin"],
//   variable: "--font-sora",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Webronic | Technical Solutions",
  description: "Intelligent digital solutions designed to scale, automate, and future-proof your business.",
  icons: {
    icon: "/favicon.png", 
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

        {/* Providers wrapped around children. 
            Added min-h-screen to main to ensure footer stays at bottom 
        */}
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