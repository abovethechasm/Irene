export default {
  darkMode: "class", // or 'media' or 'class'
  safelist: [

  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
        "10xl": "110rem",
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        maid: "#ff00c3"
      },
      translate: {
        110: "30rem",
        120: "40rem",
        "-110": "-30rem",
        "-120": "-40rem",
      },
      margin: {
        110: "30rem",
        120: "40rem",
        130: "50rem",
        140: "60rem",
        "-110": "-30rem",
        "-120": "-40rem",
      },
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      25: 25,
      30: 30,
      40: 40,
      45: 45,
      50: 50,
      75: 75,
      100: 100,
      auto: "auto",
    },
  },
  plugins: [],
};
