/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-bg': '#F4F5F7',
        'gray-50': '#C8C8CC',
        'gray-100': '#57575C',
        'gray-500': '#333333',
        'aqua': '#008B90',
        'yellow': '#D99F2C',
      }
    },
  },
  plugins: [],
}

