/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gris-canva': '#5F7553',
        'background-color': '#5F7553',
        'gris-canva-osc': '#2D302D',
      },
      fontFamily: {
        rem: ["REM", "sans-serif"],
        gowun_dodum: ["Gowun Dodum", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        montserrat: ["Montserrat, sans-serif"],
      },
    },
  },
  plugins: [],
};
