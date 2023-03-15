/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin');
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        // center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("@tailwindcss/forms"),
  ],
};
