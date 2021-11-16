module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        '12': '3rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
