/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Libre Baskerville'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'julius': ['Julius Sans One', 'sans-serif'],
    },
    extend: {
      colors: {
        'k-green': '#BCD5C7',
        'k-design-selection': '#616857'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
