/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
        mono: ["Rokkitt", "monospace"],
      },
    },
  },
  plugins: [],
};
