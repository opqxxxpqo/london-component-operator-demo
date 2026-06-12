/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#D7E4E8',
        surface: '#EEF5F5',
        rail: '#BED0D7',
        ink: '#06111A',
        muted: '#52636B',
        faint: '#81949E',
        accent: '#E8FF00',
        transit: '#0099D1',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 42px rgba(6, 17, 26, 0.14)',
        lift: '0 28px 70px rgba(6, 17, 26, 0.24)',
      },
    },
  },
  plugins: [],
};
