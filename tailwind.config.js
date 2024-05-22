/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightCream: '#FFFBE8',
      },
    },
  },
  plugins: [require("daisyui")],
};
