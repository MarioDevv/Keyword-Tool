/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mon: ['Montserrat', 'sans-serif'],
    }, brightness: {
      25: '.25',
    }, keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
        extend: {},
      },
    }, animation: {
      wiggle: 'wiggle 0.3s ease-in-out infinite',
      extend: {},
    },
  },
      plugins: [],
    });