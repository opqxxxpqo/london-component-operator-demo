/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#B7D8EA',
        surface: '#E8F5FA',
        rail: '#83AFC4',
        ink: '#05080C',
        muted: '#334B57',
        faint: '#6E8895',
        accent: '#67F04D',
        transit: '#12A76C',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 42px rgba(5, 8, 12, 0.16)',
        lift: '0 28px 70px rgba(5, 8, 12, 0.28)',
      },
    },
  },
  plugins: [],
};
