/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#E8E6DD',
        surface: '#F4F0E6',
        rail: '#D5D8CD',
        ink: '#101814',
        muted: '#5F665F',
        faint: '#8D9389',
        accent: '#C8DE3A',
        transit: '#AFC926',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 42px rgba(20, 28, 25, 0.12)',
        lift: '0 28px 70px rgba(20, 28, 25, 0.22)',
      },
    },
  },
  plugins: [],
};
