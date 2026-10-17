import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suyash Anil Borse | Developer Portfolio",
  description: "Portfolio of Suyash Anil Borse — Java Developer, Web Engineer, and Algorithmic Problem Solver.",
  keywords: ["Suyash Anil Borse", "Java Developer", "Web Engineer", "Portfolio", "Data Structures", "Algorithms", "Next.js", "React"],
  authors: [{ name: "Suyash Anil Borse" }],
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
      <body className="antialiased bg-[#0a0a0a] text-zinc-100 min-h-screen selection:bg-indigo-500/30 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
