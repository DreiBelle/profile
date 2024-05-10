/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#111D13",
        fontWhite: "#F5F5F5",
        fontGrey: "#8F9490",
        fontBlack: "#242E25",
        gainsboro: "#D9D9D9",
        smoke: "#797F7A",
        hunter: "#111D13", 
        darkerhunter: "#101210", 
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        oswald: ["Oswald" , "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        free: ["Freeman", "sans-serif"],
        teacher: ["Teachers", "sans-serif"],
      },
    },
    screens: {
      xs: "375px",
      ss: "425px",
      sm: "768px",
      md: "1024px",
      lg: "1440px",
      xl: "1700px",
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#242E25",
          "secondary": "#F5F5F5"
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};