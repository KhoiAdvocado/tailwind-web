/** @type {import('tailwindcss').Config} */
const plugins = require("tailwindPlugin/index");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [...plugins],
};
