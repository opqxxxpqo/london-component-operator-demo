/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#06141C',
        surface: '#081820',
        rail: '#0E6F97',
        ink: '#F7FFFF',
        muted: '#8EA4AE',
        faint: '#5E7884',
        accent: '#DFFF00',
        transit: '#0E6F97',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 42px rgba(0, 0, 0, 0.36)',
        lift: '0 30px 80px rgba(0, 0, 0, 0.48)',
      },
    },
  },
  plugins: [],
};
