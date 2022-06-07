module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        sans: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#64DC0D",
          50: "#CAFAA7",
          100: "#BEF994",
          200: "#A7F66D",
          300: "#8FF447",
          400: "#78F220",
          500: "#64DC0D",
          600: "#4CA70A",
          700: "#347207",
          800: "#1C3D04",
          900: "#040800",
        },
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ["hover", "focus"],
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
