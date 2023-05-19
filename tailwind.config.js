/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "786px",
    },
    extend: {
      screens: {
        xs: "300px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "786px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        bodyColor:"rgba(14, 4, 31, 1)",
        textGreen: "rgba(255, 243, 188, 1)",
        textLight: "rgba(255, 255, 255, 0.9)",
        textDark: "rgba(123, 151, 168, 1)",
        hoverColor: "rgba(255,255,255,0.3)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
