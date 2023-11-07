/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        grey: "#5C5B5F",
        lightgrey: "#ededee",
        gold: "#c89d2d",
        silver: "#adabaa",
        yellow: "#C5A971",
        "deep-blue": "#010026",
        "deep-grey": "#222126",
        "dark-grey": "#757575",
        night: "#111111",
        translucent: "rgba(0,0,0,0.75)",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg,#000B5EE 7.21%,#FF45A4 45.05%,#FFBA00 78.07%)",
        "gradient-rainyellow":
          "linear-gradient(90deg,#c89d2d 14.53%,#A48461 70%,#C5A971 120%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        firasans: ["Fira Sans", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush01.png')",
        person1: "url('./assets/person-4.png')",
        person2: "url('./assets/person-5.png')",
        person3: "url('./assets/person-6.png')",
      },
      text: {
        "gradient-gold":
          "linear-gradient(90deg,#24CBFF 12.53%,FC59FF 70%,#FFBD0C 120%)",
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
  },
  plugins: [],
};
