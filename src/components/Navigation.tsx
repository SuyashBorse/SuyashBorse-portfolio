"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Contact", href: "/#contact" },
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
        className={`flex h-14 sm:h-16 w-full justify-center px-4 sm:px-8 transition-all duration-300 ${
          scrolled
            ? "bg-[#09090b]/80 backdrop-blur-2xl border-b border-white/[0.08] shadow-lg shadow-black/30"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex w-full max-w-5xl items-center justify-between">
          {/* Left: Star + SB Brand Logo (Matching reference screenshot) */}
          <div className="flex-1 flex items-center justify-start">
            <a
              href="/"
              className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity"
              aria-label="Suyash Borse home"
            >
              <div className="flex items-center gap-2 select-none">
                <svg
                  width="70"
                  height="30"
                  viewBox="0 0 160 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 sm:h-8 w-auto"
                >
                  {/* Star Box */}
                  <rect x="0" y="0" width="68" height="68" rx="14" fill="#ffffff" />
                  <polygon
                    points="34,14 40,28 55,28 43,38 47,52 34,43 21,52 25,38 13,28 28,28"
                    fill="#09090b"
                  />
                  {/* Letters SB */}
                  <text
                    x="82"
                    y="52"
                    fill="#ffffff"
                    fontFamily="Inter, system-ui, sans-serif"
                    fontWeight="800"
                    fontSize="54"
                    letterSpacing="-2"
                  >
                    SB
                  </text>
                </svg>
              </div>
            </a>
          </div>

          {/* Center: Desktop Navigation with flat links & dotted underline */}
          <nav aria-label="Main navigation" className="hidden md:flex shrink-0 justify-center">
            <ul className="flex items-center gap-7 sm:gap-9">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm font-mono tracking-wider uppercase text-zinc-300 hover:text-white transition-colors decoration-dotted underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: Clean Spacer (No search bar per instruction) */}
          <div className="flex-1 flex items-center justify-end">
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
            className="md:hidden fixed top-14 left-0 right-0 border-b border-zinc-800 bg-[#09090b]/95 backdrop-blur-[20px] px-6 py-5 shadow-2xl"
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
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
