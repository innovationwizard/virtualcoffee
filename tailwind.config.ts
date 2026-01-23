import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          base: '#ffffff',    // White Background
          primary: '#ff6b6b', // The "Coral" from the Logo/Buttons (Approximate from PDF)
          text: '#333333',    // Body Text
          dark: '#000000',    // Headings
          accent: '#ff6b6b',  // Matching the primary for consistency
        },
        coffee: {
          50: '#fdf8f6',
          900: '#2b211b',
        }
      },
      fontFamily: {
        sans: ['var(--font-lato)', 'sans-serif'],
        serif: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;