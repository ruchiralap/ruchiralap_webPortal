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
      backgroundImage: {
        "commitment-bg": "url('/src/assets/commit-bg.png')",
      },
      keyframes: {
        expand: {
          "0%": { clipPath: "circle(0% at 90% 10%)" },
          "100%": { clipPath: "circle(150% at 90% 10%)" },
        },
        collapse: {
          "0%": { clipPath: "circle(150% at 90% 10%)" },
          "100%": { clipPath: "circle(0% at 90% 10%)" },
        },
      },
      animation: {
        expand: "expand 1s forwards",
        collapse: "collapse 1s forwards",
      },
    },
  },
  plugins: [require("daisyui")],
};
