import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nias: {
          50: "#f8fafc",
          500: "#3b82f6",
          900: "#1e3a8a",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
