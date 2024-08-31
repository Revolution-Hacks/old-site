/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gray: "#887972",
        tan: {
          50: "#fcf9f0",
          100: "#f7f0dd",
          200: "#eeddba",
          300: "#e1c289",
          400: "#d6a661",
          500: "#cd8e42",
          600: "#bf7937",
          700: "#9f5f2f",
          800: "#804c2c",
          900: "#674027",
          950: "#372013",
        },

        brown: {
          50: "#f8f5ee",
          100: "#efe7d2",
          200: "#e0cfa8",
          300: "#cfae75",
          400: "#c0934f",
          500: "#a7793e",
          600: "#986536",
          700: "#7a4c2e",
          800: "#67402c",
          900: "#59372a",
          950: "#331c15",
        },

        maroon: {
          50: "#fef3f2",
          100: "#ffe5e1",
          200: "#ffcfc9",
          300: "#feaea3",
          400: "#fb7f6e",
          500: "#f25641",
          600: "#e03822",
          700: "#bc2c19",
          800: "#9c2818",
          900: "#81271b",
          950: "#461009",
        },
      },
    },
  },
  plugins: [],
};
