/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/components/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    theme: {
      boxShadow: {
        top: '0px -4px 4px rgba(0, 0, 0, 0.25)',
        'top-sm': '0px -3px 6px rgba(0, 0, 0, 0.1)',
        surrounding: '0 0 0 99999px rgba(0, 0, 0, .8)',
      },
      colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#000000',
        blue: {
          10: '#EBF1FA',
          20: '#D5E0F1',
          30: '#14448C',
        },
        primary: 'var(--primary, #14448C)',
      },
      extend: {
        fontFamily: {
          barlow: ['"Barlow"', ...defaultTheme.fontFamily.sans],
        },
      },
    },
    extend: {},
  },
  plugins: [],
};
