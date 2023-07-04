/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#e4e6e9',
          100: '#d6d8dc',
          200: '#b5bbc0',
          300: '#949aa5',
          400: '#6b6d7b',
          500: '#63616b',
          600: '#4f5158',
          700: '#3f4247',
          800: '#313337',
          900: '#232429',
        },
        primary: '#5865F2',
        secondary: '#57F287',
      },
    },
  },
  plugins: [],
}
