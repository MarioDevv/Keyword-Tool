/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mon: ["Montserrat", "sans-serif"],
    },
    brightness: {
      25: ".25",
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
        extend: {},
      },
      shake: {
        "0%": { transform: "translateX(0)" },
        "25%": { transform: "translateX(5px)" },
        "50%": { transform: "translateX(-5px)" },
        "75%": { transform: "translateX(5px)" },
        "100%": { transform: "translateX(0)" },
      },
    },
    animation: {
      wiggle: "wiggle 0.3s ease-in-out infinite",
      shake: "shake 0.3s ease-in-out",
    },
    extend: {},
  },
  plugins: [],
});
