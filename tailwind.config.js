/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))'
      },
      gridRow: {
        'span-9': 'span 9 / span 9',
      },
      
    },
  },
  plugins: [],
}