/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },

      screens: {
        375: "375px",
        480: "480px",
        540: "540px",
        600: "600px",
        768: "768px",
        800: "800px",
        1024: "1024px",
        1280: "1280px",
        1440: "1440px",
        1920: "1920px",
      },

      maxWidth: {
        "nav-mobile": "calc(100% - 40px)",
        "nav-tablet": "calc(100% - 80px)",
      },

      colors: {
        primary: "#333333",
        secondary: "#FF7EA4",
      },
    },
  },
  plugins: [],
};
