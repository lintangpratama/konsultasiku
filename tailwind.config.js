/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#FF6347',
        'main-blur': 'rgba(255, 99, 71, 0.3)',
        'background-main': '#F1F1F1',
        'black': '#2F2F2F',
        'success': '#4E9D64',
      },
      height: {
        'jumbotron': '156px',
        'search': '33px'
      },
      borderRadius: {
        'search': '12px'
      },
      fontSize: {
        'search': '9px'
      }
    },
  },
  plugins: [],
}