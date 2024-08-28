/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-bg': '#F4F5F7',
        'gray-50': '#C8C8CC',
        'gray-100': '#57575C',
        'gray-500': '#333333',
        aqua: '#008B90',
        'light-yellow': '#FFF3DB',
        yellow: '#D99F2C',
        'highlight-yellow': '#FDB933'
      },
      keyframes: {
        slidein: {
          from: {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        slidein: 'slidein 1s ease 300ms'
      }
    }
  },
  plugins: []
};
