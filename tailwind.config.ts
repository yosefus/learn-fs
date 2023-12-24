/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx}",
    "./react-tailwind-components/***/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
        primary: "#ff77e9",
        bgColor: '#000',
        textColor: '#fff',
        textLight: '#f3f3f3'
      },
    },
  },
  safelist: [
    "bg-red-700",
    {

      pattern: /(border|bg|p|m|text)-[^/]+$/,
      variants: [
        'dark',
        'hover',
        'focus',
        'md',
        'lg',
        'sm',
        'xl',
        'dark:hover',
        'dark:focus',
        ,
      ],
    },
  ],
  plugins: [],
}
