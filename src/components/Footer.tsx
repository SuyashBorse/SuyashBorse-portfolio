"use client";

import React from "react";
import { ArrowUp, ExternalLink } from "lucide-react";
import { socialLinksData } from "@/data/socialLinks";
import { GithubIcon, LinkedinIcon, CodeChefIcon, LeetCodeIcon } from "@/components/SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <GithubIcon className="w-3.5 h-3.5" />;
      case "linkedin":
        return <LinkedinIcon className="w-3.5 h-3.5" />;
      case "codechef":
        return <CodeChefIcon className="w-3.5 h-3.5" />;
      case "leetcode":
        return <LeetCodeIcon className="w-3.5 h-3.5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-[#0c0c0e] text-zinc-400 py-12 relative z-10" aria-label="Site footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          {/* Brand info */}
          <div className="text-center md:text-left">
            <span className="text-lg font-bold text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
              Suyash Anil Borse
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            </span>
            <p className="text-xs font-mono text-zinc-400 mt-1">
              Java Developer | Web Engineer | Algorithmic Problem Solver
            </p>
          </div>

          {/* Social Links List */}
          <div className="flex flex-wrap items-center justify-center gap-3" aria-label="Social profiles">
            {socialLinksData.map((social) => {
              if (social.url) {
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                    aria-label={`Visit Suyash's ${social.name} profile (opens in new tab)`}
                  >
                    {renderIcon(social.iconName)}
                    <span>{social.name}</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                );
              } else {
                return (
                  <span
                    key={social.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-500 bg-zinc-900/50 border border-zinc-900 cursor-not-allowed select-none"
                    title={`${social.name} link will be added by Suyash`}
                    aria-label={`${social.name} (profile link pending configuration)`}
                  >
                    {renderIcon(social.iconName)}
                    <span>{social.name}</span>
                    <span className="text-[10px] text-zinc-400 bg-zinc-800/80 px-1 rounded">Soon</span>
                  </span>
                );
              }
            })}
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>© {new Date().getFullYear()} Suyash Anil Borse. All rights reserved.</p>
          <p className="font-mono text-zinc-400 text-center sm:text-right">
            Designed with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
