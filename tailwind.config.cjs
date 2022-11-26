/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '1024px',
      lg: '1280px',
      xl: '1440px',
    },
    extend: {
      spacing: {
        15: '3.75rem',
        25: '6.25rem',
      },
      colors: {
        primary: '#061A56',
      },
      minHeight: {
        '10': '2.5rem',
        '740': '740px',
      },
      maxWidth: {
        '540': '540px',
        '1074': '1074px',
        '1200': '1200px',
        '1440': '1440px',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      opacity: {
        65: '0.65',
        80: '0.80',
      }
    },
  },
  plugins: [],
}
