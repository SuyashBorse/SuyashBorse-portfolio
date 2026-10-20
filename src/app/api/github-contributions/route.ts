import { NextResponse } from "next/server";

export const revalidate = 1800; // revalidate every 30 minutes

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export async function GET() {
  try {
    const res = await fetch("https://github-contributions-api.jogruber.de/v4/SuyashBorse?y=last", {
      next: { revalidate: 1800 },
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch GitHub contributions: ${res.statusText}`);
    }

    const data = await res.json();
    const contributions: ContributionDay[] = data.contributions || [];

    // Calculate metrics
    let totalCommits = 0;
    let longestStreak = 0;
    let tempStreak = 0;
    let currentStreak = 0;

    for (let i = 0; i < contributions.length; i++) {
      totalCommits += contributions[i].count;
      if (contributions[i].count > 0) {
        tempStreak++;
        if (tempStreak > longestStreak) {
          longestStreak = tempStreak;
        }
      } else {
        tempStreak = 0;
      }
    }

    // Calculate current active streak backwards from latest day
    for (let i = contributions.length - 1; i >= 0; i--) {
      if (contributions[i].count > 0) {
        currentStreak++;
      } else if (i === contributions.length - 1 && contributions[i].count === 0) {
        // Today might have 0 commits so far; allow yesterday's streak
        continue;
      } else {
        break;
      }
    }

    return NextResponse.json({
      success: true,
      username: "SuyashBorse",
      total: totalCommits,
      currentStreak,
      longestStreak,
      contributions,
    });
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch live contribution data",
        username: "SuyashBorse",
        total: 379,
        currentStreak: 31,
        longestStreak: 31,
        contributions: [],
      },
      { status: 500 }
    );
  }
}
