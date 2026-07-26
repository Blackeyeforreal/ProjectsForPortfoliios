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
        background: "var(--background)",
        card: "var(--card)",
        border: "var(--border)",
        'accent-gold': "var(--accent-gold)",
        'accent-rose': "var(--accent-rose)",
        'accent-emerald': "var(--accent-emerald)",
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