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
          DEFAULT: "#1e3a5f", // כחול מטאלי כהה
          light: "#2d4f7a",
          dark: "#152a4a",
          lighter: "#3d6b9f",
        },
        accent: {
          DEFAULT: "#d4af37", // זהב מטאלי
          light: "#e5c158",
          dark: "#b8941f",
          metallic: "#f4d03f", // זהב מטאלי בהיר יותר
        },
        blue: {
          metallic: "#4a90e2", // כחול מטאלי
          dark: "#1e3a5f",
          light: "#6ba3e8",
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
