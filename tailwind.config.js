/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          "k-navey": "#3A4266",
          "k-navey-blue": "#292F7C",
          "k-steel-blue": "#C5D9E7",
          "k-blue": "#00B2E2",
          "k-white-auth": "#F9F9F9",
          "k-divider-blue": "#0092D4",
          "k-disabled": "#CADADE",
          "k-white": "#FFFFFF",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          "candy-red-err": "#F93549",
          "candy-fill-err": "#FDEDED",
          "green-succses": "#00CE7C",
          "yallow-warn": "#EFBE12",
          "k-purple": "#520F8B",
          "k-black-txt": "#343434",
          "paragraph-txt": "#5B5E6A",
          "blue-link": "#0D5ACD",
          "navey-blue-txt": "#313756",
          "gray-text": "#848589",
          "gray-input": "#F5F6F7",
          "k-gray-tab": "#CCD0D5",
          "second-text-color": "#737373",
          "muted-color": "#BDBDBD",
          "k-gray-arrow": "#C7C7C7",
          "k-gray-bullet": "#E9E9E9",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
