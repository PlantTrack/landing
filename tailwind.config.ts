import type { Config } from 'tailwindcss';

// Colours are CSS variables (app/globals.css) so the light and dark pages
// share one set of names. Forest stays forest in both; paper turns dark.
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: v('forest'),
        paper: v('paper'),
        ink: v('ink'),
        'ink-soft': v('ink-soft'),
        line: v('line'),
        accent: v('accent'),
        'on-accent': v('on-accent'),
        cream: v('cream'),
        mint: v('mint'),
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      maxWidth: {
        page: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
