import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: {
          primary: '#121212',   // Dark Gray
          secondary: '#1c1c1e', // Slightly darker gray for cards, sections
        },
        border: '#2c2c2e',       // Border color
        primary: '#007aff',      // Vivid Blue
        secondary: '#5856d6',    // Electric Purple
        tertiary: '#5ac8fa',     // Turquoise
        text: {
          primary: '#ffffff',    // White
          secondary: '#8e8e93',  // Light Gray
          muted: '#aeaeb2',      // Silver
        },
        success: '#34c759',      // Success Green
        error: '#ff3b30',        // Error Red
        warning: '#ff9500',      // Amber
        special: '#ff2d55',      // Pink'
        disabled: '#e0e0e0',     // Light Gray for disabled buttons
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'base': '16px',    // Body text
        'sm': '14px',      // Small text
        'lg': '18px',      // Large text
        'h1': '32px',      // Heading 1
        'h2': '24px',      // Heading 2
        'h3': '20px',      // Heading 3
        'h4': '18px',      // Heading 4
        'h5': '16px',      // Heading 5
        'h6': '14px',      // Heading 6
      },
    },
  },
  plugins: [],
};
export default config;
