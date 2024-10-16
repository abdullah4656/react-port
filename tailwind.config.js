/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '90vh': '90vh',
      },
      fill: {
        linkedin: '#0077B5',
        twitter: '#1DA1F2',
        github: '#181717', // GitHub's color
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
      },
      backgroundColor: {
        linkedin: '#0077B5',
        twitter: '#1DA1F2',
        github: '#181717',
        'custom-blue': 'rgb(43, 107, 226)', // Corrected custom color
      },
      borderColor: {
        twitter: '#1DA1F2',
      },
    },
  },
  plugins: [],
}
