/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AB8F36",
        "primary-light": "#E1CD8D",
        secondary: "#9B414B",
        "secondary-light": "#F7EAE4",
        tertiary: "#0E3150",
      },
      keyframes: {
        'bounce-color': {
          '0%, 100%': {
            transform: 'translateY(-30%)',
            color: '#E1CD8D', // primary-light
          },
          '50%': {
            transform: 'none',
            color: '#9B414B', // secondary
          },
        }
      },
      animation: {
        'bounce-color': 'bounce-color 1.6s infinite',
      },
    },
  },
  plugins: [],
}
