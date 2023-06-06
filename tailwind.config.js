/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontWeight: {
      "light": "300",
      "medium": "600",
      "bold": "800"
    },
    colors: {

      'Dark-Blue-D-Elements': '#2b3945',
      'Very-Dark-Blue-D-Bg': '#202c37',
      'Very-Dark-Blue-L-Text': '#111517',
      'Dark-Gray-L-Input': '#858585',
      'Very-Light-Gray-L-Bg': '#fafafa',
      'White': '#ffffff',
      // ...
    },
  },
  plugins: [],

}

