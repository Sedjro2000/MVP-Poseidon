// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           50: '#eef2ff',
//           100: '#e0e7ff',
//           200: '#c7d2fe',
//           300: '#a5b4fc',
//           400: '#818cf8',
//           500: '#6366f1', // primaire
//           600: '#4f46e5',
//           700: '#4338ca',
//           800: '#3730a3',
//           900: '#312e81',
//         },
//       },
//     },
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/app/pages/**/*.{ts,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B5E3C",   // bleu principal #2563eb 
        secondary: "#9333ea", // violet secondaire
        accent: "##05073C",    // accent (orange) f59e0b 
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          800: "#262626",
          900: "#171717",
        },
        brown: {
          50: "#F5EFEA",
          100: "#E8DCD1",
          200: "#D3BCA6",
          300: "#BE9B7B",
          400: "#A77A57",
          500: "#8C5A33", // tu peux choisir cette valeur comme "par défaut"
          600: "#734826",
          700: "#59361A",
          800: "#40240E",
          900: "#271305",
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // texte courant
        heading: ["Poppins", "sans-serif"],            // titres
      },
      fontSize: {
        base: ["1rem", { lineHeight: "1.5rem" }],   // 16px
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.75rem" }],  // 20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }],   // 24px
      },
      boxShadow: {
        card: "0 4px 8px rgba(0,0,0,0.05)",  // pour cartes
        nav: "0 2px 6px rgba(0,0,0,0.08)",   // pour navbar
      },
    },
  },
  plugins: [],
}
