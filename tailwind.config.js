import type { Config } from 'tailwindcss';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { typography } from './src/theme/typography';
import { shadows } from './src/theme/shadows';
import { breakpoints } from './src/theme/breakpoints';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Keeping this just in case, but we won't use dark variants in our components
  theme: {
    screens: breakpoints,
    extend: {
      colors: {
        brand: colors.primary,
        secondary: colors.secondary,
        accent: colors.accent,
        background: colors.background,
        status: colors.status,
      },
      fontFamily: typography.fontFamily,
      boxShadow: shadows,
      // We extend spacing rather than replacing it to keep standard Tailwind spacing available
      spacing: spacing,
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};

export default config;
