/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FAFAFA',
        ink: '#1A1A1A',
        muted: '#6B6B6B',
        faint: '#A0A0A0',
        accent: '#1F4D3F',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 24px rgba(26, 26, 26, 0.05)',
      },
    },
  },
  plugins: [],
};
