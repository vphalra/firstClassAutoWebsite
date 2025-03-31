/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        nunito: ['Nunito Sans', 'sans-serif'], // Add Nunito Sans
      },
    },
    fontFamily: {
      sans: ['Cinzel', 'serif'], // Keep Cinzel as the default
    },
  },
  plugins: [],
};