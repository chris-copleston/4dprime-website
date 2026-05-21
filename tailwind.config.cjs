/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ink: '#0A0B1F',
        void: '#06060F',
        iris: '#6366F1',
        violet: '#8B5CF6',
        cyan: '#22D3EE',
        plasma: '#F472B6',
        solar: '#FBBF24',
        bone: '#F5F5F7',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        glow: '0 0 80px -10px rgba(139, 92, 246, 0.55), 0 0 30px -5px rgba(34, 211, 238, 0.35)',
        'glow-sm': '0 0 30px -8px rgba(139, 92, 246, 0.45)',
        'glow-pink': '0 0 80px -10px rgba(244, 114, 182, 0.55)',
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
        'marquee-fast': 'marquee 30s linear infinite',
        'marquee-slow': 'marquee 80s linear infinite',
        'zoom-in': 'zoom-in 0.5s ease-in-out 0.5',
        float: 'float 8s ease-in-out infinite',
        'gradient-x': 'gradient-x 12s ease infinite',
        'spin-slow': 'spin 30s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 2.5rem))' },
        },
        'zoom-in': {
          '0%, 100%': { transform: 'scale(0.5)', opacity: '0' },
          '50%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-14px) rotate(0.5deg)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { 'background-position': '-200% 0' },
          '100%': { 'background-position': '200% 0' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
