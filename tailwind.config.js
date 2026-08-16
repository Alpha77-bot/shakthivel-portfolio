/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0F14",
          soft: "#11161D",
          line: "#1E2733",
          raised: "#161C24",
        },
        mist: {
          DEFAULT: "#8A97A6",
          bright: "#C4CDD8",
        },
        signal: {
          listen: "#4CC9F0",
          process: "#F5B942",
          speak: "#7CE0A8",
          idle: "#5B6779",
        },
        ivory: {
          DEFAULT: "#F8F3E9",
          deep: "#F1E9D8",
        },
        saffron: {
          DEFAULT: "#E38B29",
          deep: "#C96F1A",
        },
        peacock: {
          DEFAULT: "#0E5A63",
          deep: "#0A3F46",
        },
        gold: {
          DEFAULT: "#C79A3E",
        },
        clay: "#2B231C",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        warm: ["'Fraunces'", "serif"],
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(76,201,240,0.15), 0 8px 40px -8px rgba(76,201,240,0.25)",
        warm: "0 8px 30px -8px rgba(43,35,28,0.18)",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.5, transform: "scale(0.85)" },
        },
        wave: {
          "0%, 100%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        pulseDot: "pulseDot 1.8s ease-in-out infinite",
        wave: "wave 1s ease-in-out infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};
