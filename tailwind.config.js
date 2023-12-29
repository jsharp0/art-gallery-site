/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      primary: "#D5966C",
      "gray-dark": "#151515",
      "gray-light": "#444444",
      white: "#FFFFFF",
    },
    fontFamily: {
      heading: ["Big Shoulders Display", "sans-serif"],
      body: ["Outfit", "sans-serif"],
    },
    fontSize: {
      button: ["1.25rem", { letterSpacing: "0.22725rem" }],
      "mobile-sm": ["1rem", { lineHeight: "1.625rem" }],
      "mobile-base": ["1.125rem", { lineHeight: "1.75rem" }],
      "mobile-heading-4": ["2rem", { lineHeight: "2rem" }],
      "mobile-heading-3": ["3.125rem", { lineHeight: "2.8125rem" }],
      "mobile-heading-2": ["3.125rem", { lineHeight: "2.8125rem" }],
      "mobile-heading-1": ["3.75rem", { lineHeight: "3.4375rem" }],
      "tablet-sm": ["1rem", { lineHeight: "1.625rem" }],
      "tablet-heading-2": ["3.4375rem", { lineHeight: "3.125rem" }],
      sm: ["1.125rem", { lineHeight: "1.75rem" }],
      base: ["1.375rem", { lineHeight: "2rem" }],
      "heading-4": ["2.25rem", { lineHeight: "2.25rem" }],
      "heading-3": ["3.75rem", { lineHeight: "3.75rem" }],
      "heading-2": ["4.375rem", { lineHeight: "4.375rem" }],
      "heading-1": ["6rem", { lineHeight: "5.5rem" }],
    },
    screens: {
      mobile: "375px",
      tablet: "768px",
      desktop: "1200px",
    },
    extend: {},
  },
  plugins: [],
};
