/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#1DD1E1',
        'pink': '#D5006D',
        'orange': '#FF6B00',
        'gradient-start': '#1DD1E1',
        'gradient-end': '#FF6B00',
        'custome':'#64bbb3',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
