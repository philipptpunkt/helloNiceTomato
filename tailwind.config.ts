import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/design-system/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: {
        //   DEFAULT: "#E73806",
        //   50: "#fff5f6",
        //   100: "#fecccf",
        //   200: "#fda3a5",
        //   300: "#fc797a",
        //   400: "#fa5450",
        //   500: "#f93227",
        //   600: "#e73806",
        //   700: "#c63005",
        //   800: "#9d2604",
        //   900: "#741c03",
        //   950: "#4b1202",
        // },
        // secondary: {
        //   DEFAULT: "#5fb306",
        //   50: "#fdfff5",
        //   100: "#f3fdcc",
        //   200: "#e7fca3",
        //   300: "#d9fb7a",
        //   400: "#c9f951",
        //   500: "#b6f828",
        //   600: "#9fee08",
        //   700: "#5fb306",
        //   800: "#539c05",
        //   900: "#3d7304",
        //   950: "#274a02",
        // },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config
