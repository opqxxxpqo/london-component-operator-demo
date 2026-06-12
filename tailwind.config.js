/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#04110D',
        surface: '#0A231B',
        rail: '#1E6A45',
        ink: '#DDE8E3',
        muted: '#9DB6AB',
        faint: '#5F7F72',
        accent: '#C7F000',
        transit: '#49B26B',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 16px 36px rgba(0, 0, 0, 0.42), 0 0 20px rgba(183, 255, 0, 0.05)',
        lift: '0 30px 80px rgba(0, 0, 0, 0.52), 0 0 28px rgba(199, 240, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
