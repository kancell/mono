module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'zero': '0'
      },
      width: {
        '23.25':'5.8125rem',
        '72.5':'18.125rem',
        '73.5':'18.375rem',
        '75':'18.75rem',
        '90.75': '22.6875rem', 
      },
      height: {
        '4.75': '1.1875rem',
        '23.25': '5.8125rem',
        '72.5': '18.125',
        '95.5': '24rem'
      },
      opacity: {
        '4': '0.04',
        '8': '0.08',
        '32': '0.32',
        '92': '0.92',
       },
      margin: {
        '20vh': '20vh',
        '2.7':'0.675rem',
        '4.5':'1.125rem',
        '5.5':'1.375rem',
        '7.5':'1.875rem'
      },
      colors: {
        blue: {
          'middle':'#0096FA'
        }
      },
      backgroundSize: {
        '6':'1.5rem'
      }
    },
  },
  variants: {
    extend: {
      width: ['hover'],
    },
  },
  plugins: [],
}
