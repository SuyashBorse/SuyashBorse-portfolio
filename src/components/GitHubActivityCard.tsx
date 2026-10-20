"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { GitBranch, Flame, Trophy, ExternalLink, Calendar, GitCommit, Star, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import fallbackData from "@/data/githubContributionsFallback.json";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionsResponse {
  total: { [year: string]: number };
  contributions: ContributionDay[];
}

export default function GitHubActivityCard() {
  const [data, setData] = useState<ContributionsResponse>(fallbackData as ContributionsResponse);
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number; x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchGitHubData() {
      try {
        const res = await fetch("https://github-contributions-api.jogruber.de/v4/SuyashBorse");
        if (!res.ok) return;
        const json = await res.json();
        if (isMounted && json?.contributions?.length) {
          setData(json);
        }
      } catch (err) {
        // Silently keep fallback data on network failure
        console.warn("Could not refresh live GitHub data, using cached snapshot.", err);
      }
    }
    fetchGitHubData();
    return () => {
      isMounted = false;
    };
  }, []);

  // Compute metrics from contributions data
  const { totalCommits, currentStreak, longestStreak, weeks } = useMemo(() => {
    const rawDays = [...(data.contributions || [])];
    rawDays.sort((a, b) => a.date.localeCompare(b.date));

    // Calculate streaks
    let tempStreak = 0;
    let maxStreak = 0;
    for (let i = 0; i < rawDays.length; i++) {
      if (rawDays[i].count > 0) {
        tempStreak++;
        if (tempStreak > maxStreak) maxStreak = tempStreak;
      } else {
        tempStreak = 0;
      }
    }

    // Current streak working backwards from today
    let currStreak = 0;
    // Find the latest day with count or end of array
    const todayIndex = rawDays.findLastIndex((d) => d.count > 0);
    if (todayIndex >= 0) {
      for (let i = todayIndex; i >= 0; i--) {
        if (rawDays[i].count > 0) {
          currStreak++;
        } else {
          break;
        }
      }
    }

    // Total commits in current year (2026 or latest)
    const total = data.total?.["2026"] || data.total?.[Object.keys(data.total || {}).pop() || ""] || 375;

    // Filter to the last ~30 weeks (approx 210 days) to fit cleanly and elegantly inside the card
    const pastDays = rawDays.slice(-210);

    // Group into 7-day columns (Sunday to Saturday)
    const groupedWeeks: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    // Pad first week so Sunday is at index 0
    if (pastDays.length > 0) {
      const firstDayOfWeek = new Date(pastDays[0].date).getDay();
      for (let i = 0; i < firstDayOfWeek; i++) {
        currentWeek.push({ date: "", count: -1, level: -1 });
      }
    }

    pastDays.forEach((day) => {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        groupedWeeks.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      groupedWeeks.push(currentWeek);
    }

    return {
      totalCommits: total,
      currentStreak: currStreak,
      longestStreak: maxStreak,
      weeks: groupedWeeks,
    };
  }, [data]);

  // Color mapper for GitHub levels
  const getLevelColor = (level: number, count: number) => {
    if (level === -1) return "opacity-0 pointer-events-none"; // Padding placeholder
    if (count === 0 || level === 0) return "bg-zinc-800/70 border border-zinc-700/30";
    if (level === 1) return "bg-emerald-950 border border-emerald-800/80";
    if (level === 2) return "bg-emerald-700 border border-emerald-600/70";
    if (level === 3) return "bg-emerald-500 border border-emerald-400/80";
    return "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.65)] border border-emerald-300";
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-").map(Number);
    const d = new Date(year, month - 1, day);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div
      ref={containerRef}
      className="border border-zinc-800 bg-[#09090b] rounded-lg p-4 sm:p-5 drop-shadow-sm flex flex-col justify-between w-full hover:border-zinc-700 transition-colors relative"
    >
      {/* 1. Card Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <GithubIcon className="w-4 h-4 text-zinc-300" />
            <h4 className="truncate font-medium text-white text-sm sm:text-base">GitHub Activity</h4>
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live
            </span>
          </div>

          <a
            href="https://github.com/SuyashBorse"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors group/link"
            title="Open GitHub Profile"
          >
            <span>@SuyashBorse</span>
            <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 2. Top Stats Grid (4 Metric Tiles) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
          {/* Total Contributions */}
          <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-md p-2.5 flex flex-col">
            <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] font-mono">
              <GitCommit className="w-3.5 h-3.5 text-emerald-400" />
              <span>Total Commits</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">
              {totalCommits}
            </span>
            <span className="text-[10px] font-mono text-zinc-500 mt-0.5">2026 Year to Date</span>
          </div>

          {/* Current Streak */}
          <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-md p-2.5 flex flex-col">
            <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] font-mono">
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span>Current Streak</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">
              {currentStreak} <span className="text-xs font-normal text-zinc-400">days</span>
            </span>
            <span className="text-[10px] font-mono text-emerald-400 mt-0.5">Active streak 🔥</span>
          </div>

          {/* Longest Streak */}
          <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-md p-2.5 flex flex-col">
            <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] font-mono">
              <Trophy className="w-3.5 h-3.5 text-yellow-400" />
              <span>Longest Streak</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">
              {longestStreak} <span className="text-xs font-normal text-zinc-400">days</span>
            </span>
            <span className="text-[10px] font-mono text-zinc-500 mt-0.5">Personal best</span>
          </div>

          {/* Public Repositories */}
          <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-md p-2.5 flex flex-col">
            <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] font-mono">
              <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Repositories</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">
              10
            </span>
            <span className="text-[10px] font-mono text-zinc-500 mt-0.5">Public projects</span>
          </div>
        </div>

        {/* 3. Heatmap Calendar Container */}
        <div className="bg-zinc-900/40 border border-zinc-800/70 rounded-md p-3 mb-5">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2.5">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-zinc-200 font-medium">Contribution Heatmap</span>
            </div>
            <span className="text-[11px] text-zinc-500">Past 30 Weeks</span>
          </div>

          {/* Heatmap Grid */}
          <div className="overflow-x-auto pb-1 scrollbar-thin">
            <div className="flex gap-[3px] min-w-max">
              {weeks.map((week, wIdx) => (
                <div key={`week-${wIdx}`} className="flex flex-col gap-[3px]">
                  {week.map((day, dIdx) => (
                    <div
                      key={`day-${wIdx}-${dIdx}-${day.date}`}
                      onMouseEnter={(e) => {
                        if (day.count >= 0) {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredDay({
                            date: day.date,
                            count: day.count,
                            x: rect.left + rect.width / 2,
                            y: rect.top,
                          });
                        }
                      }}
                      onMouseLeave={() => setHoveredDay(null)}
                      className={`w-[11px] h-[11px] sm:w-3 sm:h-3 rounded-[2.5px] cursor-pointer transition-transform hover:scale-125 ${getLevelColor(
                        day.level,
                        day.count
                      )}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-zinc-800/60 text-[10px] font-mono text-zinc-500">
            <span>Learn &amp; build consistently</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-[2px] bg-zinc-800/70 border border-zinc-700/30" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-950 border border-emerald-800/80" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-700 border border-emerald-600/70" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500 border border-emerald-400/80" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400 border border-emerald-300" />
              <span>More</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Pinned / Featured Repositories Showcase */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
            <GitBranch className="w-3.5 h-3.5 text-zinc-400" />
            <span className="font-medium text-zinc-300">Featured Repositories</span>
          </div>
          <span className="text-[11px] font-mono text-zinc-500">Open Source</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {/* Repo 1: EcoTrack */}
          <a
            href="https://github.com/SuyashBorse/ecotrack"
            target="_blank"
            rel="noopener noreferrer"
            className="group/repo p-2.5 rounded bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-white group-hover/repo:text-cyan-300 transition-colors">
                <span className="font-semibold truncate">EcoTrack</span>
                <ExternalLink className="w-3 h-3 text-zinc-500 group-hover/repo:text-cyan-300 transition-colors" />
              </div>
              <p className="text-zinc-400 text-[11px] mt-1 line-clamp-2 leading-relaxed">
                Smart Environmental Monitoring &amp; carbon footprint analytics platform.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2 pt-1.5 border-t border-zinc-800/50 text-[10px] font-mono text-zinc-400">
              <span className="inline-flex items-center gap-1 text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                TypeScript
              </span>
              <span>· Next.js</span>
            </div>
          </a>

          {/* Repo 2: RetinAI VisionRaksha */}
          <a
            href="https://github.com/SuyashBorse/RetinAI-VisionRaksha"
            target="_blank"
            rel="noopener noreferrer"
            className="group/repo p-2.5 rounded bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-white group-hover/repo:text-emerald-300 transition-colors">
                <span className="font-semibold truncate">RetinAI (VisionRaksha)</span>
                <ExternalLink className="w-3 h-3 text-zinc-500 group-hover/repo:text-emerald-300 transition-colors" />
              </div>
              <p className="text-zinc-400 text-[11px] mt-1 line-clamp-2 leading-relaxed">
                AI deep learning diagnostic platform for early Diabetic Retinopathy screening.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2 pt-1.5 border-t border-zinc-800/50 text-[10px] font-mono text-zinc-400">
              <span className="inline-flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Python
              </span>
              <span>· PyTorch / Flask</span>
            </div>
          </a>
        </div>
      </div>

      {/* 5. Tooltip Portal for Hovered Day */}
      {hoveredDay && (
        <div
          className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-full -mt-2 bg-zinc-900 text-zinc-100 text-[11px] font-mono px-2.5 py-1 rounded shadow-xl border border-zinc-700 whitespace-nowrap"
          style={{
            left: `${hoveredDay.x}px`,
            top: `${hoveredDay.y}px`,
          }}
        >
          <div className="font-semibold text-white">
            {hoveredDay.count === 0 ? "No contributions" : `${hoveredDay.count} contribution${hoveredDay.count > 1 ? "s" : ""}`}
          </div>
          <div className="text-zinc-400 text-[10px]">{formatDate(hoveredDay.date)}</div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900 w-0 h-0" />
        </div>
      )}
    </div>
  );
}
