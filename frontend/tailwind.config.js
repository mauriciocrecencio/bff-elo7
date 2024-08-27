/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-50': '#C8C8CC',
        'gray-500': '#333333',
        'aqua': '#008B90'
      }
    },
  },
  plugins: [],
}

