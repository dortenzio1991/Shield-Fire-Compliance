import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand tokens — exact hex values from the Shield brand system.
        navy: "#15233F", // Brand Navy — primary: wordmark, shield, headlines, dark UI
        "deep-navy": "#0B1730", // Deep Navy — dark section backgrounds, app tiles, footer
        gold: "#E0A33B", // Verify Gold — ACCENT ONLY: check, CTAs, highlights, eyebrows
        paper: "#F7F9FB", // Paper — default page surface, light lockups
        slate: "#5B6472", // Slate — body text, captions, secondary labels
        hairline: "#DCE0E8", // Hairline — borders, dividers, table rules
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1160px",
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11, 23, 48, 0.04), 0 12px 32px -12px rgba(11, 23, 48, 0.12)",
        "card-hover":
          "0 2px 4px rgba(11, 23, 48, 0.06), 0 24px 48px -16px rgba(11, 23, 48, 0.20)",
        record:
          "0 24px 60px -20px rgba(11, 23, 48, 0.55), 0 2px 8px rgba(11, 23, 48, 0.30)",
        "gold-glow": "0 8px 24px -8px rgba(224, 163, 59, 0.5)",
      },
      keyframes: {
        "draw-check": {
          "0%": { strokeDashoffset: "48" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "draw-check": "draw-check 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
