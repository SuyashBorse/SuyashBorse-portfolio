"use client";

import React, { useEffect, useState, useRef } from "react";
import { GitCommit, Flame, Trophy, ExternalLink, RefreshCw } from "lucide-react";
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

export default function GitHubActivity() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState<{
    day: ContributionDay;
    x: number;
    y: number;
  } | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

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
      id="activity"
      className="mt-16 sm:mt-24 max-w-5xl mx-auto px-4 scroll-mt-20 w-full"
      aria-label="GitHub Contribution Heatmap"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-5 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold tracking-tighter text-2xl sm:text-3xl text-white">
              GitHub Activity
            </h3>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Sync
            </span>
          </div>
          <p className="text-zinc-500 font-mono text-xs sm:text-sm mt-1">
            Real-time contribution calendar &amp; daily coding consistency
          </p>
        </div>

        {/* GitHub Profile Link */}
        <a
          href="https://github.com/SuyashBorse"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 px-3 py-1.5 rounded-md self-start sm:self-auto"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>@SuyashBorse</span>
          <ExternalLink className="w-3 h-3 text-zinc-500" />
        </a>
      </div>

      {/* Main Heatmap Card */}
      <div className="border border-zinc-800 bg-[#09090b] rounded-lg p-4 sm:p-6 drop-shadow-sm hover:border-zinc-700 transition-colors">
        {/* Metric Summary Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 pb-5 border-b border-zinc-800/80">
          {/* Total Commits */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/70">
            <div className="p-2 rounded-md bg-emerald-950/40 border border-emerald-800/40 text-emerald-400">
              <GitCommit className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                Yearly Contributions
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
                {isLoading ? (
                  <span className="inline-block w-12 h-6 bg-zinc-800 animate-pulse rounded" />
                ) : (
                  `${data?.total || 379}+`
                )}
              </span>
            </div>
          </div>

          {/* Current Streak */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/70">
            <div className="p-2 rounded-md bg-orange-950/40 border border-orange-800/40 text-orange-400">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                Current Streak
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums flex items-center gap-1.5">
                {isLoading ? (
                  <span className="inline-block w-12 h-6 bg-zinc-800 animate-pulse rounded" />
                ) : (
                  <>
                    <span>{data?.currentStreak || 31}</span>
                    <span className="text-xs font-normal text-zinc-400">Days</span>
                  </>
                )}
              </span>
            </div>
          </div>

          {/* Longest Streak */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/70">
            <div className="p-2 rounded-md bg-amber-950/40 border border-amber-800/40 text-amber-400">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                Longest Streak
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums flex items-center gap-1.5">
                {isLoading ? (
                  <span className="inline-block w-12 h-6 bg-zinc-800 animate-pulse rounded" />
                ) : (
                  <>
                    <span>{data?.longestStreak || 31}</span>
                    <span className="text-xs font-normal text-zinc-400">Days</span>
                  </>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Heatmap Grid Container */}
        <div className="relative">
          {/* Scrollable calendar view */}
          <div
            ref={scrollRef}
            className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-800 select-none"
          >
            <div className="min-w-[760px] flex flex-col gap-1.5 py-1">
              {/* Month Labels Row */}
              <div className="flex text-[10px] font-mono text-zinc-500 pl-7 h-4 relative">
                {monthLabels.map((m, idx) => (
                  <span
                    key={`${m.label}-${idx}`}
                    style={{ left: `${m.colIndex * 14.2}px` }}
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
                                const rect = e.currentTarget.getBoundingClientRect();
                                setHoveredDay({
                                  day,
                                  x: rect.left + rect.width / 2,
                                  y: rect.top,
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
            </div>
          </div>

          {/* Floating Hover Tooltip matching custom marquee tooltip style */}
          {hoveredDay && (
            <div
              style={{
                position: "fixed",
                left: `${hoveredDay.x}px`,
                top: `${hoveredDay.y - 10}px`,
                transform: "translate(-50%, -100%)",
              }}
              className="pointer-events-none z-50 flex flex-col items-center animate-in fade-in zoom-in-95 duration-100"
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

        {/* Heatmap Footer: Legend & Refresh Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 pt-4 mt-3 border-t border-zinc-800/80 gap-2">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px]">Learn how we count contributions</span>
          </div>

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
