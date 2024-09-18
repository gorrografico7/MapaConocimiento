/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-purple": "#44194d",
        "custom-purple2" : "#58345f",
      },
      boxShadow: {
        'custom-shadow': '4px 4px 8px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}

