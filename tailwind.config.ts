import type { Config } from 'tailwindcss'
import colors from './src/common/constants/colors'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'ui-serif', 'serif'],
        signature: ['Segoe Script', 'Brush Script MT', 'cursive'],
      },
      keyframes: {
        'fade-zoom-out': {
          from: { opacity: '0', transform: 'scale(1.04)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'question-enter': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-zoom-out': 'fade-zoom-out 0.9s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'question-enter': 'question-enter 280ms ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config
