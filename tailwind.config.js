/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "50": "#0051ba",
          "100": "#0049a7",
          "200": "#004195",
          "300": "#003982",
          "400": "#003170",
          "500": "#00295d",
          "600": "#00204a",
          "700": "#001838",
          "800": "#001025",
          "900": "#000713",
        },
        "secondary": "#ffcc29",
        'transparent-slate': 'rgba(112, 128, 144, 0.5)',
      },
      fontFamily: {
        "manrope": ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
}