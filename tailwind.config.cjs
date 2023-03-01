/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg1: { max: "2800px" },
      lg2: { max: "1680px" },
      lg3: { max: "1250px" },
      lg4: { max: "1030px" },
      lg5: { max: "650px" },
      lg6: { max: "490px" },
      lg7: { max: "425px" },
    },
    fontFamily: {
      rbsans: ["Roboto", "sans-serif"],
    },
    fontSize: {
      sm: "0.875",
      lg: "1rem",
      base: "2.625rem",
      xl: "3.125rem",
    },
    extend: {
      colors: {
        "blue-20": "#EEF9FF",
        "blue-gray-40": "#7b97cc",
        "blue-100": "#0E6E9B",
        "blue-200": "#094967",
        "white-100": "#FAFAFA",
        "black-100": "#333333",
        "black-50": "#2d2525",
        "orange-100": "#E44D26",
        "orange-200": "#b13b1d",
      },
    },
  },
  plugins: [],
};
