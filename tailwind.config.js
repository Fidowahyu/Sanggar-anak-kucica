module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // playful brand colors for PAUD Kucica
        'kucica-yellow': '#FFD23F',
        'kucica-yellow-light': '#FFE680',
        'kucica-blue': '#3B82F6',
        'kucica-blue-light': '#93C5FD',
        'kucica-blue-dark': '#2563EB',
      },
      fontFamily: {
        display: ['Baloo 2', 'Poppins', 'ui-sans-serif', 'system-ui'],
        sans: ['Quicksand', 'Nunito', 'Segoe UI', 'system-ui'],
      },
      borderRadius: {
        'xl-2': '1.25rem',
      },
    },
  },
  plugins: [],
};