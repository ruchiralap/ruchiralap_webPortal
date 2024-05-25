/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightCream: "#FFFBE8",
      },
      fontFamily: {
        libre: ['"Libre Baskerville"', "serif"],
      },
      keyframes: {
        zoomOut: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.95)" },
        },
      },
      animation: {
        zoomOut: "zoomOut 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [require("daisyui")],
};
