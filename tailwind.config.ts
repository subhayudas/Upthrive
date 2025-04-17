import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3a3f4a', // Muted dark blue-gray
          light: '#5a5f6a',
          dark: '#23262b',
        },
        accent: {
          DEFAULT: '#b0b8c1', // Soft gray-blue
          light: '#d1d5db',
          dark: '#8a929b',
        },
        background: {
          DEFAULT: '#f5f6fa', // Very light gray
          dark: '#e5e7eb',
        },
        muted: {
          DEFAULT: '#a0aec0', // Muted gray
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
