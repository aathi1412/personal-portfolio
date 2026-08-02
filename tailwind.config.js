/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FAFAF9',
          dark: '#0B0E14',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#131720',
        },
        foreground: {
          light: '#14171F',
          dark: '#E7E9EE',
        },
        muted: {
          light: '#6B7280',
          dark: '#8B93A5',
        },
        accent: {
          DEFAULT: '#3B6FE0',
          light: '#3B6FE0',
          dark: '#5B8CFF',
        },
        border: {
          light: '#E5E7EB',
          dark: '#232838',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

