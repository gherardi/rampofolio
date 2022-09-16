/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montreal: ['Neue Montreal', ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
