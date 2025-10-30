import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a1a2e",
          light: "#2a2a3e",
          dark: "#0a0a1e",
        },
        accent: {
          DEFAULT: "#d4af37",
          light: "#e5c158",
          dark: "#b8941f",
        },
      },
      fontFamily: {
        hebrew: ["Heebo", "Assistant", "Arial Hebrew", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
