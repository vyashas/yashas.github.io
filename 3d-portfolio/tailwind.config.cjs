/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0c',
        card: '#141417',
        accent: '#3b82f6', // teal/blue accent
        textMain: '#e4e4e7',
        textMuted: '#a1a1aa',
      },
    },
  },
  plugins: [],
};
