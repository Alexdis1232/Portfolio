import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sexsmith: ["Sexsmith", "Georgia", "serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        gray: {
          pill: "#f0f0f0",
          label: "#E0E0E0",
          divider: "#E0E0E0",
          caption: "#707070",
        },
        pink: {
          card: "#f8e8ee",
        },
      },
    },
  },
  plugins: [],
};

export default config;
