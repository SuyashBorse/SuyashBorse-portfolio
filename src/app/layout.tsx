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
      <body className="antialiased bg-[#0a0a0a] text-zinc-100 min-h-screen selection:bg-indigo-500/30 selection:text-cyan-300 relative overflow-x-hidden">
        {/* Page Load / Buffering Preloader */}
        <Preloader />

        {/* Accessibility: Skip to main content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2.5 rounded-lg bg-indigo-600 text-white font-medium shadow-2xl border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-transform"
        >
          Skip to main content
        </a>

        {/* Ambient atmospheric background glows */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px]"></div>
          <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px]"></div>
          <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-indigo-800/10 rounded-full blur-[128px]"></div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
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
