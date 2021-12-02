module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        dark: 'var(--color-dark)',
        light: 'var(--color-light)',
        blood: 'var(--color-blood)',
      },
      fontFamily: {
        sans: ['Road Rage', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
