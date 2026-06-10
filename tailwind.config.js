/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#020A07',
        surface: '#05130F',
        rail: '#10241C',
        ink: '#F7FAF8',
        muted: '#B8C4C6',
        faint: '#71878C',
        accent: '#9CF22A',
        transit: '#D4F45A',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 38px rgba(0, 0, 0, 0.28)',
        lift: '0 26px 70px rgba(0, 0, 0, 0.38)',
      },
    },
  },
  plugins: [],
};
