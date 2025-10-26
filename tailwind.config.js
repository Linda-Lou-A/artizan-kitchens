/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // Looks for HTML files directly in the root (like index.html)
    './src/**/*.{html,js}', // You can adjust this if your HTML/JS is in a different structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



