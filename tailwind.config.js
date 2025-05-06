/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          'logo-orange': '#D27F49',       // Earthy Orange
          'logo-olive': '#8B864E',        // Olive Green
          'logo-yellow': '#E6B345',       // Golden Yellow
          'logo-brown': '#594A41',        // Dark Brown (or adjust)
          'logo-cream': '#F5F5DC',        // Cream/Off-White (NavajoWhite - adjust as needed)
        },
        fontFamily: {
          'logo-text': ['Arial', 'Helvetica', 'sans-serif'], // Example - match your logo font
        },
      },
    },
    plugins: [],
  }