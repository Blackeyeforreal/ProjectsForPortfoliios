/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // If you are using src directory, uncomment the line below:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617", // Background color from requirements
        card: "#0F172A",     // Card background color
        'electric-cyan': "hsl(183, 100%, 60%)", // Neon cyan accent
        'vibrant-magenta': "hsl(320, 90%, 65%)", // High contrast magenta accent
        'lime-green': "hsl(100, 95%, 60%)",     // Electric green highlight
        border: "hsl(214.3 31.8% 76.8%)", // Standard border color for dark mode
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-color-background), var(--tw-color-foreground))',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Aceternity UI and other custom plugins will be added here later.
  ],
};