module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        '12': '3rem',
       },
       fontFamily: {
        'open-sans': [' "Open Sans" ', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
