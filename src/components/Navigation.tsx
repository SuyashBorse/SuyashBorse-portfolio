"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, Search, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="flex justify-center sticky top-0 z-50 w-full transition-all duration-200">
      <div
        className={`flex h-16 w-full justify-center px-4 transition-all duration-300 ${
          scrolled
            ? "bg-[#09090b]/65 backdrop-blur-2xl border-b border-white/[0.08] shadow-lg shadow-black/30"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex w-full max-w-5xl items-center justify-between gap-4">
          {/* Left: Brand Monogram */}
          <div className="flex min-w-0 items-center">
            <a
              href="#"
              className="flex items-center gap-2.5 text-zinc-100 hover:text-white transition-transform duration-150 motion-safe:hover:scale-105 group"
              aria-label="Suyash Borse home"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-200 group-hover:border-cyan-400/60 transition-colors shadow-xs">
                <span className="font-mono font-bold text-xs tracking-tight bg-gradient-to-tr from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                  SB
                </span>
              </div>
              <span className="font-medium text-sm tracking-tight hidden sm:inline-block text-zinc-200">
                Suyash Borse
              </span>
            </a>
          </div>

          {/* Center: Desktop Navigation with Frosted Capsule and Dotted Underline on Hover */}
          <nav aria-label="Main navigation" className="hidden md:flex shrink-0 justify-center">
            <ul className="flex items-center gap-1 sm:gap-1.5 bg-zinc-900/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/[0.07] shadow-inner">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex h-8 items-center justify-center rounded-md px-3 py-1.5 text-sm font-mono tracking-tight uppercase text-zinc-400 hover:text-white transition-colors decoration-dotted underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: Quick Action Pill (Dino Search-Style Pill) */}
          <div className="flex min-w-0 items-center justify-end gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center whitespace-nowrap text-xs font-mono tracking-tight uppercase transition-all duration-150 ease-out border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white h-8 rounded-md px-3 gap-2 shadow-xs"
            >
              <span>Get in touch</span>
              <kbd className="inline-flex items-center gap-0.5 bg-zinc-800 text-zinc-400 rounded px-1.5 py-0.5 font-sans text-[10px]">
                <ArrowUpRight className="w-3 h-3" />
              </kbd>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex md:hidden p-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-4 h-4 text-cyan-400" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="md:hidden fixed top-16 left-0 right-0 border-b border-zinc-800 bg-[#09090b]/95 backdrop-blur-[20px] px-6 py-5 shadow-2xl"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2.5 rounded-md text-sm font-mono uppercase tracking-tight text-zinc-300 hover:text-white hover:bg-zinc-900/80 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-zinc-600">→</span>
                </a>
              ))}
              <div className="pt-3 border-t border-zinc-800/80">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-mono uppercase tracking-wider rounded-md bg-zinc-100 text-zinc-950 font-bold"
                >
                  <span>Contact Me</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
