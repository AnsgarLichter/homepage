const defaultTheme = require("tailwindcss/defaultTheme");
const fontFamily = defaultTheme.fontFamily;
fontFamily["sans"] = [
  "Calibre",
  "San Francisco",
  "SF Pro Text",
  "-apple-system",
  "system-ui",
  "sans-serif"
];

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: fontFamily,
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        156: "40rem",
        172: "44rem",
        174: "46rem"
      },
      height: {
        "1/20": "5%",
        "1/10": "10%",
        "3/20": "15%",
        "2/10": "20%",
        "5/20": "25%",
        "3/10": "30%",
        "7/20": "35%",
        "4/10": "40%",
        "9/20": "45%",
        "5/10": "50%",
        "11/20": "55%",
        "6/10": "60%",
        "13/20": "65%",
        "7/10": "70%",
        "15/20": "75%",
        "8/10": "80%",
        "17/20": "85%",
        "9/10": "90%",
        "19/20": "95%",
        "10/10": "100%"
      },
      width: {
        "1/20": "5%",
        "1/10": "10%",
        "3/20": "15%",
        "2/10": "20%",
        "5/20": "25%",
        "3/10": "30%",
        "7/20": "35%",
        "4/10": "40%",
        "9/20": "45%",
        "5/10": "50%",
        "11/20": "55%",
        "6/10": "60%",
        "13/20": "65%",
        "7/10": "70%",
        "15/20": "75%",
        "8/10": "80%",
        "17/20": "85%",
        "9/10": "90%",
        "19/20": "95%",
        "10/10": "100%"
      },
      minWidth: {
        200: "200px"
      },
      colors: {
        bg: {
          grey: "#343a40",
          blue: "#003049",
          red: "#d62828",
          orange: "#f77f00",
          yellow: "#fcbf49"
        }
      }
    }
  },
  plugins: []
};
