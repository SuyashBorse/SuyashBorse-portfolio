"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
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
    <footer className="border-t border-zinc-800/80 bg-[#09090b] text-zinc-400 py-10 relative z-10 w-full" aria-label="Site footer">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-zinc-900">
          {/* Brand info */}
          <div className="text-center sm:text-left">
            <span className="text-sm font-semibold text-white tracking-tight flex items-center justify-center sm:justify-start gap-2">
              Suyash Borse
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            </span>
            <p className="text-xs font-mono text-zinc-500 mt-0.5">
              Java Developer · Web Engineer
            </p>
          </div>

          {/* Social Links List */}
          <div className="flex flex-wrap items-center justify-center gap-2" aria-label="Social profiles">
            {socialLinksData.map((social) => {
              if (social.url) {
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors"
                    aria-label={`Visit Suyash's ${social.name} profile`}
                  >
                    {renderIcon(social.iconName)}
                    <span>{social.name}</span>
                  </a>
                );
              }
              return (
                <span
                  key={social.name}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-zinc-600 bg-zinc-900/40 border border-zinc-900 cursor-not-allowed select-none"
                  title={`${social.name} link will be added by Suyash`}
                >
                  {renderIcon(social.iconName)}
                  <span>{social.name}</span>
                </span>
              );
            })}
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-3">
          <p>© {new Date().getFullYear()} Suyash Borse. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS &amp; Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
