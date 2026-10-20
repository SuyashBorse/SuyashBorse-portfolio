"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  Trophy,
  Flame,
  GitFork,
  GitCommit,
  ExternalLink,
  Award,
  Sparkles,
  FolderGit2,
} from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/SocialIcons";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface GitHubData {
  success: boolean;
  username: string;
  total: number;
  currentStreak: number;
  longestStreak: number;
  contributions: ContributionDay[];
}

export default function AchievementsAndActivity() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState<{
    day: ContributionDay;
    x: number;
    y: number;
  } | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const fetchContributions = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/github-contributions");
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (err) {
      console.error("Failed to fetch live GitHub contributions", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContributions();
  }, []);

  // Auto-scroll to the right (latest activity) on smaller screens
  useEffect(() => {
    if (scrollRef.current && data && data.contributions.length > 0) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [data]);

  // Format date helper: "Oct 20, 2026"
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Build 53 columns (weeks) of 7 rows (Sunday to Saturday)
  const buildWeeks = (contributions: ContributionDay[]) => {
    if (!contributions || contributions.length === 0) return [];

    const weeks: (ContributionDay | null)[][] = [];
    let currentWeek: (ContributionDay | null)[] = [];

    // Pad the start of the first week if not starting on Sunday
    const firstDayOfWeek = new Date(contributions[0].date + "T00:00:00").getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
      currentWeek.push(null);
    }

    contributions.forEach((day) => {
      const d = new Date(day.date + "T00:00:00");
      if (d.getDay() === 0 && currentWeek.length > 0) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      currentWeek.push(day);
    });

    // Pad the end of the last week if not ending on Saturday
    while (currentWeek.length > 0 && currentWeek.length < 7) {
      currentWeek.push(null);
    }
    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return weeks;
  };

  // Get month label positions
  const getMonthLabels = (weeks: (ContributionDay | null)[][]) => {
    const labels: { colIndex: number; label: string }[] = [];
    let lastMonth = -1;

    weeks.forEach((week, colIndex) => {
      const validDay = week.find((d) => d !== null);
      if (validDay) {
        const d = new Date(validDay.date + "T00:00:00");
        const month = d.getMonth();
        if (month !== lastMonth && colIndex < weeks.length - 1) {
          labels.push({
            colIndex,
            label: d.toLocaleString("en-US", { month: "short" }),
          });
          lastMonth = month;
        }
      }
    });

    return labels;
  };

  const weeks = data ? buildWeeks(data.contributions) : [];
  const monthLabels = getMonthLabels(weeks);

  // Intensity color styling
  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[#0e4429] border-[#006d32]/60 hover:bg-[#125835]";
      case 2:
        return "bg-[#006d32] border-[#26a641]/70 hover:bg-[#00863f]";
      case 3:
        return "bg-[#26a641] border-[#39d353]/80 hover:bg-[#2fc44e]";
      case 4:
        return "bg-[#39d353] border-[#56ff76] shadow-[0_0_8px_rgba(57,211,83,0.35)] hover:bg-[#48e663]";
      case 0:
      default:
        return "bg-zinc-900/90 border-zinc-800/70 hover:border-zinc-700";
    }
  };

  const daysOfWeek = ["", "Mon", "", "Wed", "", "Fri", ""];

  return (
    <section
      id="achievements"
      className="mt-20 sm:mt-32 max-w-5xl mx-auto px-4 scroll-mt-20 w-full"
      aria-label="Achievements & Activity"
    >
      {/* Section Header */}
      <div className="mb-8 sm:mb-10">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-400" />
          <h3 className="font-semibold tracking-tighter text-2xl sm:text-3xl text-white">
            Achievements &amp; Activity
          </h3>
        </div>
        <p className="text-zinc-500 font-mono text-xs sm:text-sm mt-1">
          Coding milestones, competitive programming records, and live GitHub consistency
        </p>
      </div>

      {/* 3 Main Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {/* Card 1: 1000+ Problems on CodeChef */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="glass-card rounded-xl p-5 sm:p-6 border border-zinc-800/80 hover:border-orange-500/40 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-lg bg-orange-950/40 border border-orange-800/40 text-orange-400 group-hover:scale-105 transition-transform">
                <Flame className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-950/50 text-orange-300 border border-orange-800/40 uppercase tracking-wider">
                Competitive DSA
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight mb-1">
              1,000+
            </div>
            <h4 className="text-base font-semibold text-zinc-100 tracking-tight mb-2">
              Problems Solved on CodeChef
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Mastered foundational to advanced Data Structures &amp; Algorithms in Java including Dynamic Programming, Graphs, and Trees.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>DSA in Java</span>
            <span className="text-orange-400 font-medium">Daily Consistency</span>
          </div>
        </motion.div>

        {/* Card 2: 10+ Repositories in GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="glass-card rounded-xl p-5 sm:p-6 border border-zinc-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 group-hover:scale-105 transition-transform">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/50 text-cyan-300 border border-cyan-800/40 uppercase tracking-wider">
                Open Source
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight mb-1">
              10+
            </div>
            <h4 className="text-base font-semibold text-zinc-100 tracking-tight mb-2">
              GitHub Repositories
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Built and published full-stack web applications, backend microservices, real-time utilities, and collaborative repositories.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Active Contributor</span>
            <a
              href="https://github.com/SuyashBorse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1 font-medium"
            >
              <span>Explore Code</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        {/* Card 3: SIH '26 Internal Round Clear */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="glass-card rounded-xl p-5 sm:p-6 border border-zinc-800/80 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 group-hover:scale-105 transition-transform">
                <Trophy className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/50 text-emerald-300 border border-emerald-800/40 uppercase tracking-wider">
                National Hackathon
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight mb-1 text-emerald-400">
              Cleared
            </div>
            <h4 className="text-base font-semibold text-zinc-100 tracking-tight mb-2">
              SIH &apos;26 Internal Round
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Qualified through the competitive Smart India Hackathon 2026 college internal round with an end-to-end working software prototype.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Team Lead &amp; Architect</span>
            <span className="text-emerald-400 font-medium">Smart India Hackathon</span>
          </div>
        </motion.div>
      </div>

      {/* GitHub Heatmap (Directly Below Achievements) */}
      <div className="border border-zinc-800 bg-[#09090b] rounded-xl p-4 sm:p-6 drop-shadow-sm hover:border-zinc-700 transition-colors">
        {/* Heatmap Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-800/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-white">
              <GithubIcon className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-sm sm:text-base text-white tracking-tight">
                  Live GitHub Contribution Graph
                </h4>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync
                </span>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                Tracking daily commit streaks and repository contributions
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded">
              <span className="text-emerald-400 font-semibold">{data?.total || 379}+</span> commits in last year
            </span>
            <span className="text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded">
              🔥 <span className="text-orange-400 font-semibold">{data?.currentStreak || 31}</span> day streak
            </span>
          </div>
        </div>

        {/* Heatmap Grid Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-800 select-none"
          >
            <div ref={gridRef} className="min-w-[780px] flex flex-col gap-1.5 pt-7 pb-1 pr-16 pl-1 relative">
              {/* Month Labels Row */}
              <div className="flex text-[10px] font-mono text-zinc-500 pl-7 h-4 relative">
                {monthLabels.map((m, idx) => (
                  <span
                    key={`${m.label}-${idx}`}
                    style={{ left: `${m.colIndex * 14}px` }}
                    className="absolute"
                  >
                    {m.label}
                  </span>
                ))}
              </div>

              {/* Grid: Weekday Column + Weeks Columns */}
              <div className="flex gap-1.5 items-start">
                {/* Weekday Names on Left */}
                <div className="flex flex-col gap-[3px] text-[9px] font-mono text-zinc-500 pr-1 select-none">
                  {daysOfWeek.map((dayName, idx) => (
                    <span key={`dayname-${idx}`} className="h-[11px] leading-[11px] block">
                      {dayName}
                    </span>
                  ))}
                </div>

                {/* Calendar Days Columns (Weeks) */}
                {isLoading ? (
                  /* Loading Shimmer Grid */
                  <div className="flex gap-[3px]">
                    {Array.from({ length: 53 }).map((_, wIdx) => (
                      <div key={`skeleton-week-${wIdx}`} className="flex flex-col gap-[3px]">
                        {Array.from({ length: 7 }).map((_, dIdx) => (
                          <div
                            key={`skeleton-day-${wIdx}-${dIdx}`}
                            className="w-[11px] h-[11px] rounded-[2px] bg-zinc-800/60 animate-pulse"
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Live Rendered Weeks Grid */
                  <div className="flex gap-[3px]">
                    {weeks.map((week, wIdx) => (
                      <div key={`week-${wIdx}`} className="flex flex-col gap-[3px]">
                        {week.map((day, dIdx) => {
                          if (!day) {
                            return (
                              <div
                                key={`empty-${wIdx}-${dIdx}`}
                                className="w-[11px] h-[11px] rounded-[2px] opacity-0"
                              />
                            );
                          }

                          return (
                            <div
                              key={day.date}
                              onMouseEnter={(e) => {
                                if (!gridRef.current) return;
                                const cellRect = e.currentTarget.getBoundingClientRect();
                                const gridRect = gridRef.current.getBoundingClientRect();
                                setHoveredDay({
                                  day,
                                  x: cellRect.left - gridRect.left + cellRect.width / 2,
                                  y: cellRect.top - gridRect.top,
                                });
                              }}
                              onMouseLeave={() => setHoveredDay(null)}
                              className={`w-[11px] h-[11px] rounded-[2px] border transition-all duration-100 cursor-pointer ${getCellColor(
                                day.level
                              )}`}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Floating Hover Tooltip: Pinned directly above the hovered square */}
              {hoveredDay && (
                <div
                  style={{
                    position: "absolute",
                    left: `${hoveredDay.x}px`,
                    top: `${hoveredDay.y - 6}px`,
                    transform: "translate(-50%, -100%)",
                  }}
                  className="pointer-events-none z-50 flex flex-col items-center animate-in fade-in duration-100"
                >
                  <div className="bg-white text-zinc-950 font-sans font-medium text-[11px] px-2.5 py-1 rounded shadow-xl whitespace-nowrap leading-tight">
                    <span className="font-semibold">
                      {hoveredDay.day.count === 0
                        ? "No contributions"
                        : `${hoveredDay.day.count} contribution${
                            hoveredDay.day.count > 1 ? "s" : ""
                          }`}
                    </span>{" "}
                    <span className="text-zinc-600">on {formatDate(hoveredDay.day.date)}</span>
                  </div>
                  <div className="w-0 h-0 border-x-[5px] border-x-transparent border-t-[5px] border-t-white -mt-[0.5px]" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Heatmap Footer: Legend & Direct Profile Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 pt-4 mt-3 border-t border-zinc-800/80 gap-2">
          <a
            href="https://github.com/SuyashBorse"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors inline-flex items-center gap-1.5 text-[11px]"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>github.com/SuyashBorse</span>
            <ExternalLink className="w-3 h-3 text-zinc-500" />
          </a>

          {/* Intensity Legend */}
          <div className="flex items-center gap-1.5 text-[11px]">
            <span>Less</span>
            <div className="flex gap-1 items-center">
              <span className="w-[11px] h-[11px] rounded-[2px] bg-zinc-900 border border-zinc-800/70" />
              <span className="w-[11px] h-[11px] rounded-[2px] bg-[#0e4429] border border-[#006d32]/60" />
              <span className="w-[11px] h-[11px] rounded-[2px] bg-[#006d32] border border-[#26a641]/70" />
              <span className="w-[11px] h-[11px] rounded-[2px] bg-[#26a641] border border-[#39d353]/80" />
              <span className="w-[11px] h-[11px] rounded-[2px] bg-[#39d353] border border-[#56ff76]" />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
