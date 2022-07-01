/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        card: "0px 0px 32px 2px rgba(38, 46, 51, 0.1)",
      },
      colors: {
        aurora: {
          green: "#A3BE8C",
          orange: "#D08770",
          purple: "#B48EAD",
          red: "#BF616A",
          yellow: "#EBCB8B",
        },
        frost: {
          100: "#8FBCBB",
          200: "#88C0D0",
          300: "#81A1C1",
          400: "#5E81AC",
        },
        night: {
          100: "#4C566A",
          200: "#434C5E",
          300: "#3B4252",
          400: "#2E3440",
        },
        snow: {
          100: "#ECEFF4",
          200: "#E5E9F0",
          300: "#D8DEE9",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
};
