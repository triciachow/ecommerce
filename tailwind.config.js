/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        main: "url('/src/assets/hero.jpeg')",
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
