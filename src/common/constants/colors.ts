/**
 * Single source of truth for the color palette.
 * Consumed by tailwind.config.ts (as Tailwind's `theme.extend.colors`) and
 * importable directly in TS/TSX for cases Tailwind classes can't reach
 * (canvas/SVG charts, <meta name="theme-color">, inline styles, etc).
 *
 * Palette matches the NCC (Natural Ceylon Cinnamon) Shopify theme design:
 * warm cream backgrounds, terracotta/rust CTAs, gold accents, and near-black
 * espresso sections (hero banners, footer). Adjust hex values here only —
 * never hardcode colors elsewhere.
 */
const colors = {
  // Terracotta / rust — primary CTA & brand accent (buttons, links, star ratings)
  primary: {
    50: '#fbf0e7',
    100: '#f6dfc7',
    200: '#edc098',
    300: '#e2a16b',
    400: '#d28d56',
    500: '#c17a4e',
    600: '#a8663e',
    700: '#86502f',
    800: '#623a22',
    900: '#3d2415',
  },
  // Gold — secondary accent (icon fills, badges, small highlights)
  secondary: {
    50: '#fbf7ea',
    100: '#f2e6c4',
    200: '#e4cd91',
    300: '#d3b166',
    400: '#c29b4a',
    500: '#a98038',
    600: '#87652b',
    700: '#654b20',
    800: '#453317',
    900: '#271c0d',
  },
  // Cream through espresso — page backgrounds, body/heading text, dark sections
  neutral: {
    50: '#fdfbf6',
    100: '#f7f1e4',
    200: '#f0e6d2',
    300: '#e6d6b8',
    400: '#c7b48c',
    500: '#9c8763',
    600: '#6b5d47',
    700: '#453a2c',
    800: '#2a2015',
    900: '#150f0a',
  },
  success: {
    50: '#f2f7ec',
    500: '#6b8e4e',
    600: '#57733e',
    700: '#435a30',
  },
  warning: {
    50: '#fbf3e6',
    500: '#c9902f',
    600: '#a87526',
    700: '#835b1e',
  },
  error: {
    50: '#faeeec',
    500: '#b8503e',
    600: '#9a4132',
    700: '#7a3327',
  },
} as const

export type ColorPalette = typeof colors

export default colors
