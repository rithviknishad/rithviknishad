import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        manrope: ["var(--font-manrope)"],
      },
      colors: {
        primary: {
          DEFAULT: "#EEF35F",
          50: "#FFFFFF",
          100: "#FEFEF7",
          200: "#FAFCD1",
          300: "#F6F9AB",
          400: "#F2F685",
          500: "#EEF35F",
          600: "#E8EF2B",
          700: "#CBD210",
          800: "#999E0C",
          900: "#666A08",
          950: "#4D5006",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/bg-abstract.png')",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        normal: "0",
        wider: ".05em",
        widest: ".5em",
      },
    },
  },
  plugins: [],
};
export default config;
