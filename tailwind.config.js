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
    },
  },
  plugins: [],
}