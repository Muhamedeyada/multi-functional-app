/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Bright Blue
        secondary: "#1E293B", // Dark Slate
        light: "#F8FAFC", // Light Grayish White
        dark: "#111827", // Dark Gray/Black
        hoverPrimary: "#1D4ED8", // Hover Color
      },
    },
  },
  plugins: [],
};
