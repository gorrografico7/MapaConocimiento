/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-gray": "#f2eeee",
        "custom-gray2" : "#e7e1e1",
      },
      boxShadow: {
        'custom-shadow': '4px 4px 8px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}

