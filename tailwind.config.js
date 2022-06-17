/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "basic": "Roboto Condensed, sans-serif",
        "hand": "Dancing Script, cursive",
      },
      backgroundImage: {
        "news": "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),url('/src/images/news.jpg')",
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
