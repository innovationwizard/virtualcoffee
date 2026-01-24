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
          navy: '#1a2332',    // Dark navy background (header, hero, footer)
          red: '#e74c3c',     // Red/coral accent (buttons, "coffee" text)
          beige: '#f4f3ef',   // Beige/tan section backgrounds
          white: '#ffffff',   // White backgrounds
          text: '#333333',    // Body text
          'text-light': '#666666', // Lighter body text
        },
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