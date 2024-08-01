/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#024cdf',
          100: '#0241bf', 
        },
        contrast: '#ffffff',
      },
    },
  },
  plugins: [],
}

