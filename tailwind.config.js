/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#060E1E',
          800: '#0A1628',
          700: '#0F2040',
          600: '#162B55',
        },
        teal: {
          400: '#2DDBBF',
          500: '#00C9A7',
          600: '#00B896',
        },
        gold: {
          400: '#F5C842',
          500: '#E8A838',
          600: '#D4922A',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

