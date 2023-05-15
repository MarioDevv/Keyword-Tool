/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mon: ['Montserrat', 'sans-serif'],
    }, brightness: {
      25: '.35',
    },
    extend: {},
  },
  plugins: [],
});