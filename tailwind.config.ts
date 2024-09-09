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
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        background: "var(--background-color)",
        text: "var(--text-color)",
        sale: "var(--sale-color)",
        error: "var(--error-color)",
        header: "var(--bg-header-color)",
        footer: "var(--bg-footer-color)",
      },
      fontFamily: {
        base: ["var(--font-family)", "sans-serif"],
      },
      fontSize: {
        small: "var(--font-size-small)",
        base: "var(--font-size-base)",
        large: "var(--font-size-large)",
      },
      borderRadius: {
        default: "var(--border-radius)",
      },
      boxShadow: {
        small: "var(--shadow-small)",
        medium: "var(--shadow-medium)",
        large: "var(--shadow-large)",
      },
      spacing: {
        small: "var(--spacing-small)",
        medium: "var(--spacing-medium)",
        large: "var(--spacing-large)",
      },
      opacity: {
        disabled: "var(--opacity-disabled)",
        hover: "var(--opacity-hover)",
      },
      transitionDuration: {
        fast: "var(--transition-speed-fast)",
        medium: "var(--transition-speed-medium)",
        slow: "var(--transition-speed-slow)",
      },
      lineHeight: {
        normal: "var(--line-height-normal)",
        large: "var(--line-height-large)",
      },
      zIndex: {
        dropdown: "var(--z-index-dropdown)",
        modal: "var(--z-index-modal)",
        tooltip: "var(--z-index-tooltip)",
      },
    },
  },
  plugins: [],
};
export default config;
