import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: { white: '#FFFFFF', cream: '#FFE3B3' },
        brand: { gold: '#FBB931', orange: '#F88F22', deepOrange: '#EA6113', maroon: '#7A1212' },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'source-serif': ['"Source Serif 4"', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
