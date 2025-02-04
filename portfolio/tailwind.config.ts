import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'DarkGreenCustom': '#ACBD83',
        'greenCustom': '#c1cd88',
        'OtherGreenCustom': '#dfe4c8',
        'ClearBlueCustom': '#7DCCDB',
      },
      fontFamily: {
        kiera: ["Kiera", "sans-serif"],
        Cinematografica: ["Cinematografica", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

