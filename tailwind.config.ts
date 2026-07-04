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
      },
    },
  },
  plugins: [],
} satisfies Config
