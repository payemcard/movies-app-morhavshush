/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["lg:w-4/12", "lg:w-6/12", "h-full", "lg:text-4xl"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1900px",
    },
    extend: {
      fontFamily: {
        custom: ["ploni", "normal", "sans-serif"],
      },
      colors: {
        purple: "#5961FF",
        primary: "hsl(var(--primary))",
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
    plugins: [],
  },
};
