/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // EXACT colors from PDF
        'cyan': '#00CFFF',      // Primary Cyan
        'violet': '#5B00FF',    // Primary Violet  
        'charcoal': '#1A1A1A',  // Charcoal Base
        'light-gray': '#F2F2F2', // Light Gray
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(45deg, #00CFFF 0%, #5B00FF 100%)',
      }
    },
  },
  plugins: [],
}