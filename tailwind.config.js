module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '90.75': '22.6875rem',
      },
      height: {
        '95.5': '24rem'
      },
      opacity: {
        '92': '0.92',
       },
       margin: {
        '20vh': '20vh',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
