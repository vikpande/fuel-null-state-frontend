/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src//*.{js,jsx,ts,tsx}", // Adjust paths based on your file structure
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Include pages folder
    "./src/components/**/*.{js,ts,jsx,tsx}", // Include components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
