import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: {
          DEFAULT: "#171717",
          hover: "#222222",
          elevated: "#1e1e1e",
        },
        indigo: {
          electric: "#6366f1",
          deep: "#4f46e5",
          glow: "rgba(99, 102, 241, 0.15)",
        },
        cyan: {
          neon: "#06b6d4",
          deep: "#0891b2",
          glow: "rgba(6, 182, 212, 0.15)",
        },
        border: {
          subtle: "#262626",
          active: "#3f3f46",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-fira-code)", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-accent": "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
        "gradient-border": "linear-gradient(135deg, rgba(99,102,241,0.4) 0%, rgba(6,182,212,0.4) 100%)",
      },
      boxShadow: {
        "glow-indigo": "0 0 25px -5px rgba(99, 102, 241, 0.3)",
        "glow-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.3)",
        "card-hover": "0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 20px -2px rgba(99, 102, 241, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
