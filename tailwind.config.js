/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E94057",
        secondary: "#FFB400",
        background: "#F9F9F9",
        text: "#333",
      },
    },
  },
  plugins: [],
}