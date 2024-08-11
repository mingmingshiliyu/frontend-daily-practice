/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend:{
      colors: {
        primary: "#aa6d6b",
        brandDark: "#151616",
        },
        fontFamily: {
          varela: ["Varela", "sans-serif"],
          }
    }
  },
  plugins: [],
}

