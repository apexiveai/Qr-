import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        panel: "#111B2D",
        gold: "#D6B46A",
        muted: "#91A0B8"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(2, 8, 23, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
