module.exports = {
  purge: [],
  //purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
      colors: {
        bg:{
          grey: '#343a40'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
