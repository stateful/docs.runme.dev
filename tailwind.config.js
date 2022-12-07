/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [],
  theme: {
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2000px",
      "4xl": "2250px",
      "5xl": "3000px",
    },
    extend: {
      colors: {
        covey: {
          50: "#FFF4F7",
          100: "#FEE9EE",
          200: "#FDC8D6",
          300: "#FBA7BD",
          400: "#F9668B",
          500: "#F62459",
          600: "#DD2050",
          700: "#941635",
          800: "#6F1028",
          900: "#4A0B1B",
        },
      },
    },
  },
};
