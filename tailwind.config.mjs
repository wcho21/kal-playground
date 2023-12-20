const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        "mono-display": ['"Fira Code"', ...defaultTheme.fontFamily.mono],
        "mono": ['"Nanum Gothic Coding"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}
