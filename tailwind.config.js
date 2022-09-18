/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/brooke-cagle-cb4Dv50LN1Y-unsplash 1.png')",
        'img1': "url('/src/assets/images/ooto Meetings 1.png')",
        'img2': "url('/src/assets/images/brooke-cagle-JBwcenOuRCg-unsplash (1) 1 (1).png')",
        'img3': "url('/src/assets/images/brooke-cagle-JBwcenOuRCg-unsplash (1) 1.png')",
      }
    },
  },
  plugins: [],
}
