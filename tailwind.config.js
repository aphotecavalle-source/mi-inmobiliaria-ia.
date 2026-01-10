/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ahora puedes usar 'font-luxury' en tu código
        'luxury': ['Montserrat', 'sans-serif'],
        'elegant': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}