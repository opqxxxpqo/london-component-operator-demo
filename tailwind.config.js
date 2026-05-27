/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F6F2EA',
        surface: '#FFFCF7',
        rail: '#E3DDD1',
        ink: '#1A1A1A',
        muted: '#6B6B6B',
        faint: '#A0A0A0',
        accent: '#1F4D3F',
        transit: '#B8742A',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 14px 34px rgba(48, 42, 32, 0.07)',
        lift: '0 22px 60px rgba(48, 42, 32, 0.11)',
      },
    },
  },
  plugins: [],
};
