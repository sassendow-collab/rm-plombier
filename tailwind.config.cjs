/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1B4F8A',
        'primary-light': '#2563EB',
        'primary-dark': '#0F2D4F',
        accent: '#F59E0B',
        'accent-dark': '#D97706',
        surface: '#F8FAFC',
        'surface-alt': '#EFF6FF',
        success: '#059669',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
