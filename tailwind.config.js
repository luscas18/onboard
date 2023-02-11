/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        fontSize: {
          'h1': '40px',
          'h1Mob': '25px',
          'h2': '30px',
          'h2Mob': '20px',
          'h3': '20px',
          'h3Mob': '15px',
        }
      }
    },
  },
  plugins: [],
}