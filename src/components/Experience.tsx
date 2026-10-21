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
    role: "Project Developer & Team Contributor",
    organization: "Collaborative Team & Open-Source Projects (@SuyashBorse)",
    location: "Shirpur, Maharashtra",
    period: "2024 — Present",
    badge: "10+ Repositories",
    badgeColor: "bg-cyan-950/50 text-cyan-400 border-cyan-800/40",
    points: [
      "Collaborated with the team to build EcoTrack, an intelligent carbon footprint tracker featuring Supabase PostgreSQL 17 with RLS, Google Gemini AI sustainability coaching, and Chart.js analytics.",
      "Worked with team members to engineer VILP (Verified Internship Lifecycle Platform) integrating Spring Boot backend routines, PostgreSQL data modeling, and role-based access control.",
      "Collaboratively developed responsive, accessible web tools like Currency Converter using modern JavaScript (ES6+), async/await Fetch API integration, and dynamic DOM manipulation.",
    ],
    skills: ["Team Collaboration", "JavaScript", "Spring Boot", "Supabase", "PostgreSQL", "Next.js", "Git"],
  },
  {
    role: "Hackathon Researcher & Team Collaborator",
    organization: "Smart India Hackathon (SIH '26) · Team PARSU",
    location: "RCPIT, Shirpur",
    period: "2025 — 2026",
    badge: "SIH '26 Qualifier",
    badgeColor: "bg-emerald-950/50 text-emerald-400 border-emerald-800/40",
    points: [
      "Conducted in-depth technical and clinical literature research for the SIH 2026 problem statement on Diabetic Retinopathy telemedicine screening (VisionRaksha).",
      "Studied and explored MATLAB & Simulink modeling to assist with healthcare resource logistics simulations and system flow analysis for the project.",
      "Collaborated with teammates to co-present the working prototype and findings to the faculty judging panel, successfully clearing the college internal screening round.",
    ],
    skills: ["Literature Research", "Simulink & MATLAB", "Team Collaboration", "Technical Presentation", "Testing & QA"],
  },
  {
    role: "DSA Practitioner & Problem Solver",
    organization: "CodeChef & LeetCode Coding Platforms",
    location: "Remote / Online",
    period: "2024 — Present",
    badge: "1000+ on CodeChef",
    badgeColor: "bg-purple-950/50 text-purple-400 border-purple-800/40",
    points: [
      "Solved 1,000+ foundational practice problems on CodeChef, and recently started solving algorithmic challenges on LeetCode to expand problem-solving abilities.",
      "Strengthening core Java Data Structures with primary focus on Arrays, Strings, ArrayList, Stack, and Queue implementations.",
      "Practicing structured Java code daily to build intuitive problem-solving logic and master fundamental computer science concepts.",
    ],
    skills: ["Java", "Arrays", "Strings", "ArrayList", "Stack", "Queue", "CodeChef", "LeetCode"],
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
