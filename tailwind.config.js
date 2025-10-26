/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // Looks for HTML files directly in the root (like index.html)
    './src/**/*.{html,js}', // Adjust if your source code is elsewhere
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


