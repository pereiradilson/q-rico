module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "custom-dark": "#111214",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
