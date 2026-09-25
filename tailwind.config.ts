import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#131316",
        "ink-soft": "#1E1E22",
        paper: "#F7F6F2",
        "paper-dim": "#EDEBE4",
        indigo: "#4B3BFF",
        lime: "#D8FF3E",
        coral: "#FF6A4D",
        mid: "#8A8A8E",
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
