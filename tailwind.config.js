/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "275px",
        ...defaultTheme.screens,
        xs: { max: "670px" },
      },
      fontSize: {
        12: "12px",
        14: "14px",
      },
      colors:{
        'firstColor': "#069c54",
        'altColor':'#0b9b55'
      },
      backgroundImage:{
        'my-image':'url(Assets/about.jpg)'
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "button": "#069c54",
        "button-alt": '#048654',
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
    
 
     
    },
  },
  plugins: [],
};
