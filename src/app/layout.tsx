import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "Suyash Anil Borse | Developer Portfolio",
  description: "Portfolio of Suyash Anil Borse — Java Developer, Web Engineer, and Algorithmic Problem Solver. Student at R. C. Patel Institute of Technology.",
  keywords: ["Suyash Anil Borse", "Java Developer", "Web Engineer", "Portfolio", "Data Structures", "Algorithms", "Next.js", "React", "CodeChef", "LeetCode"],
  authors: [{ name: "Suyash Anil Borse" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Suyash Anil Borse | Developer Portfolio",
    description: "Java Developer | Web Engineer | Algorithmic Problem Solver",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-[#09090b] text-zinc-100 min-h-screen selection:bg-zinc-800 selection:text-white relative overflow-x-hidden">
        {/* Page Load / Buffering Preloader */}
        <Preloader />

        {/* Accessibility: Skip to main content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 rounded-md bg-white text-zinc-950 font-mono text-xs uppercase tracking-wider font-semibold shadow-2xl focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Skip to main content
        </a>

        {/* Ambient subtle background glow */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-zinc-800/20 via-zinc-900/10 to-transparent rounded-full blur-[100px]"></div>
        </div>

        {/* Global Navigation */}
        <Navigation />

        {/* Main Content landmark */}
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
