/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gris-canva': '#598242',
        'background-color': '#598242',
        'gris-canva-osc': '#2D302D',
      },
      fontFamily: {
        rem: ["REM", "sans-serif"],
        gowun_dodum: ["Gowun Dodum", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        asap: ["Asap", "sans-serif"],
      },
    },
  },
  plugins: [],
};
