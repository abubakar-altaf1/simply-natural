/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      textColor : {
        "font-color" : "#fc5f5f",
        "icn-color" : "#75c32c",
      },
      backgroundColor : {
        "bg-color" : "#fc5f5f",
      }
    },
  },
  plugins: [],
}