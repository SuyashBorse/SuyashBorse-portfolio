"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  badge?: string;
  badgeColor?: string;
  points: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Full-Stack Developer & Backend Engineer",
    organization: "Academic Projects & Independent Development",
    location: "Shirpur, Maharashtra",
    period: "2024 — Present",
    badge: "Current Focus",
    badgeColor: "bg-cyan-950/50 text-cyan-400 border-cyan-800/40",
    points: [
      "Architecting and developing scalable full-stack applications with Spring Boot, Next.js, TypeScript, and modern relational & cloud databases.",
      "Designing clean RESTful microservices with Spring Security, robust CRUD operations, and database integrations (PostgreSQL, MySQL, Supabase).",
      "Crafting performant, accessible UI interfaces using Tailwind CSS and Framer Motion, focusing on responsive design and seamless interaction.",
    ],
    skills: ["Java", "Spring Boot", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
  {
    role: "Hackathon Competitor & Technical Lead",
    organization: "Smart India Hackathon (SIH '26) & Collegiate Hackathons",
    location: "RCPIT, Shirpur",
    period: "2025 — 2026",
    badge: "SIH '26 Qualifier",
    badgeColor: "bg-emerald-950/50 text-emerald-400 border-emerald-800/40",
    points: [
      "Led a multidisciplinary engineering team through the rigorous SIH '26 internal evaluation round, qualifying with a high-impact technical solution.",
      "Spearheaded technical architecture, data schema design, and rapid agile development to deliver a working prototype under tight deadlines.",
      "Delivered live technical demonstrations, effectively communicating system feasibility, business value, and scalability to judging panels.",
    ],
    skills: ["Rapid Prototyping", "System Design", "Java Backend", "Team Leadership", "Agile Execution"],
  },
  {
    role: "Algorithmic Problem Solver & DSA Practitioner",
    organization: "CodeChef & LeetCode Coding Platforms",
    location: "Remote / Online",
    period: "2023 — Present",
    badge: "1000+ Problems",
    badgeColor: "bg-purple-950/50 text-purple-400 border-purple-800/40",
    points: [
      "Solved over 1,000+ problems on CodeChef and consistent algorithmic challenges on LeetCode, mastering Data Structures & Algorithms in Java.",
      "Deep expertise across Dynamic Programming, Graph Traversals, Trees, Binary Search, Greedy Paradigms, and Object-Oriented Programming.",
      "Maintained unbroken daily coding practice, refining time & space complexity optimization techniques applicable to real-world software.",
    ],
    skills: ["DSA in Java", "Competitive Programming", "CodeChef", "OOP", "Complexity Optimization"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mt-20 sm:mt-32 max-w-5xl mx-auto px-4 scroll-mt-20 w-full"
      aria-label="Experience & Journey"
    >
      {/* Section Header */}
      <div className="mb-8 sm:mb-10">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-cyan-400" />
          <h3 className="font-semibold tracking-tighter text-2xl sm:text-3xl text-white">
            Experience &amp; Leadership
          </h3>
        </div>
        <p className="text-zinc-500 font-mono text-xs sm:text-sm mt-1">
          Practical engineering, hackathon leadership, and technical journey
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative border-l border-zinc-800/90 ml-3 sm:ml-4 space-y-8 sm:space-y-10">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.1 }}
            className="relative pl-6 sm:pl-8 group"
          >
            {/* Timeline node */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#09090b] border-2 border-zinc-700 group-hover:border-cyan-400 transition-colors flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-cyan-400 transition-colors" />
            </div>

            {/* Experience Card */}
            <div className="glass-card rounded-xl p-5 sm:p-6 border border-zinc-800/80 hover:border-zinc-700 transition-all">
              {/* Header: Role, Organization, Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-3">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    {exp.role}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-mono mt-0.5">
                    <span className="text-zinc-200">{exp.organization}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                  {exp.badge && (
                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded border ${
                        exp.badgeColor || "bg-zinc-800 text-zinc-300 border-zinc-700"
                      }`}
                    >
                      {exp.badge}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 rounded">
                    <Calendar className="w-3 h-3 text-zinc-500" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 my-4">
                {exp.points.map((point, pIdx) => (
                  <li
                    key={`point-${idx}-${pIdx}`}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/80 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/80">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900/80 text-zinc-300 border border-zinc-800 hover:border-zinc-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
