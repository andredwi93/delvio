/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
        mono: ["var(--font-avenir)"],
      },
      boxShadow: {
        '3xl': '0 2px 8px 0 rgba(26, 71, 50, 0.08)',
      }
    },
    fontSize: {
      "2xsm": "10px",
      xsm: "12px",
      sm: "13px",
      reg: "14px",
      med: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "36px",
      "4xl": "42px",
      "5xl": "48px",
    },
    colors: {
      black: "#000",
      white: "#fff",
      "dark-green": "#1A4732",
      "light-green": "#58B276",
      "soft-green": "#DEF2E6",
      "light-white": "#F5F4EF",
      "light-black": "#1F170F",
      grey: "#52504C",
      blue: "#3E6FE6",
      "dark-blue": "#132A6A",
      orange: "#F97D36",
    },
  },
  plugins: [],
};
