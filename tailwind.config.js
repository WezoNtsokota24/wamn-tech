/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./js/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'w-green': '#76B900',
        'w-dark': '#000000',
        'w-gray': '#1a1a1a',
        'w-light-gray': '#e0e0e0'
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

