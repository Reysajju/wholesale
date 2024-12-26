/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f8',
          100: '#d9e1ed',
          200: '#b3c2db',
          300: '#8da4c9',
          400: '#6785b7',
          500: '#4167a5',
          600: '#345284',
          700: '#273e63',
          800: '#1a2942',
          900: '#0d1521',
        },
        gold: {
          50: '#fdf9e7',
          100: '#faf0c4',
          200: '#f5e08d',
          300: '#f0d056',
          400: '#ebc02f',
          500: '#d4a816',
          600: '#a88511',
          700: '#7c630d',
          800: '#504108',
          900: '#242004',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Times New Roman', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};