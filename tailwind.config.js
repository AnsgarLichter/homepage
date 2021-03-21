const oDefaultTheme = require('tailwindcss/defaultTheme');
const oFontFamily = oDefaultTheme.fontFamily;
oFontFamily['sans'] = ['Calibre', 'San Francisco', 'SF Pro Text', '-apple-system', 'system-ui', 'sans-serif'];

module.exports = {
  purge: [],
  //purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: oFontFamily,
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '156': '40rem',
        '172': '44rem',
        '174': '46rem'
      },
      height: {
        '1/20': '5%'
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10/10': '100%'
      },
      minWidth: {
        '200': '200px'
      },
      colors: {
        bg: {
          grey: '#343a40',
          blue: '#003049',
          red: '#d62828',
          orange: '#f77f00',
          yellow: '#fcbf49',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
