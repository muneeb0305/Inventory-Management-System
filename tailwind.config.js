/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs:'370px',
      sm: '520px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
          },
      extend:{
        colors: {
          "light-white": "rgba(255,255,255,0.17)",
          //navbar and table headers
          "dark1":"#1a6985",
          //sidebar icons + text + card borders + chart
          "dark2":"#134b5f",
          //Side bar
          "dark10":"#165a72",
          //background
          "dark3":"#1a6985",
          //card background
          "dark4":"#d3eaf2",
          //Hover
          "dark5":"#a8d5e5",
          //Lines
          "dark6":"#3ba1c5",
          //searchbar
          "dark7":"#d3eaf2",
          //button
          "dark8":"#2187ab",
          //button Hover
          "dark9":"#1a6985",
        },
      }
  },
  plugins: [
  ],
}
