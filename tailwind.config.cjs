/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: "#191825",
        violet:"#865DFF",
        purple: {
          950:"#E384FF"
        },
        pink: "#FFA3FD",
        white: 'white',
      },
      fontFamily: {
        'DotGothic16': ["'DotGothic16'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
