/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#111D13",
        gainsboro: "#D9D9D9",
        smoke: "#797F7A",
        hunter: "#111D13", 
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        main: ["Bebas Neue", "sans-serif"], 
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};