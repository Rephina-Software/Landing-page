/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rephina: {
          blue: '#1e3a8a', // Dark blue based on your enterprise theme
          light: '#f3f4f6',
        }
      },
    },
  },
  plugins: [],
}
