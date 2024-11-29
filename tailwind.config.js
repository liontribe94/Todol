/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Update your content paths accordingly
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out', // Fade-in effect for animals
        'scale-up': 'scaleUp 0.3s ease-out', // Scale-up effect for the Add Animal button
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
