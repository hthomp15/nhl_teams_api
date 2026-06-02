/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        // Dark "broadcast" theme palette (NHL Zone redesign).
        ice: {
          DEFAULT: "#38BDF8", // primary accent (links, active states, highlights)
          bright: "#7DD3FC", // hover/active accent
        },
        rink: {
          950: "#0A0E14", // app background (near-black navy/charcoal)
          900: "#0F1622", // nav / page gradient
          850: "#141C2B", // base surface
          800: "#1B2536", // card surface
          700: "#26334A", // raised surface / table header
          border: "#2C3A52", // hairline borders
        },
        goal: "#F43F5E", // losses / worst rank
        gold: "#FBBF24", // top-5 rank highlight
        // Legacy keys kept so any not-yet-migrated component still compiles.
        blue: {
          100: "#A3CEF1",
          DEFAULT: "#6096BA",
          200: "#274C77",
        },
        white: "#E7ECEF",
        grey: "#8B8C89",
        yellow: "#FFCB00",
        red: "#FF0000",
        green: "#00FF00",
        purple: "#FF00FF",
        pink: "#FF00FF",
        orange: "#FFA500",
        teal: "#008080",
        cyan: "#00FFFF",
        indigo: "#4B0082",
        violet: "#EE82EE",
        dark: "#000000",
        light: "#FFFFFF",
      },
      fontFamily: {
        display: ['"Saira Condensed"', '"Oswald"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.04), 0 8px 24px -12px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
}