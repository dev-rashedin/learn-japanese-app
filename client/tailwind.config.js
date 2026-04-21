/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppins: "'Poppins', sans-serif",
      yujiMai: "'Yuji Mai', serif",
      playwrite: "'Playwrite HU', cursive",
      rockNroll: "'RocknRoll One', serif"
    },
    extend: {
      colors: {
        'zen-serenity': '#E0DBD6',
        'blossom-haze': '#FED6FC',
        'amber-glow': '#FE9230',
        'green-heaven': '#034003',
        'autumn-ember': '#993300',
        'crimson-gate': '#ff0066',
        'zen-charcoal': '#1C1C1C',
      },
    },
  },
  plugins: [require('daisyui')],
};
