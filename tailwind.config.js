/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
            secondary: "#2C3234",
            primary: "#1895d4",
        }
      }
    },
    plugins: []
  }