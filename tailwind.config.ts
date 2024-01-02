/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./react-tailwind-components/form/**/*.{js,ts,jsx,tsx}",
    "./react-tailwind-components/hooks/**/*.{js,ts,jsx,tsx}",
    "./react-tailwind-components/table/**/*.{js,ts,jsx,tsx}",
    "./react-tailwind-components/ui/**/*.{js,ts,jsx,tsx}",
    "./utils/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
        primary: "blue",
        bgColor: '#000',
        textColor: '#fff',
        textLight: '#f3f3f3'
      },
    },
  },
  safelist: [  ],
  plugins: [],
}
