/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gumball-blue': '#00A3E0',
        'darwin-orange': '#FF6600',
        'elmore-bg': '#F8F9FA',
        'vacuum-purple': '#1A0B2E',
        'banana-yellow': '#FFD100',
        'dark-text': '#212529',
      },
      fontFamily: {
        display: ['"Comic Sans MS"', 'ui-rounded', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
