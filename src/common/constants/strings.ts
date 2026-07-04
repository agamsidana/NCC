/**
 * Single source of truth for hardcoded UI copy (nav labels, footer text,
 * page copy, button labels, etc). Import from here instead of inlining
 * strings in components so copy changes happen in one place.
 */
const strings = {
  layout: {
    siteName: 'NCC',
    tagline: 'NATURAL CEYLON CINNAMON',
    announcement: 'Authenticated Ceylon Cinnamon. C4 to Alba Reserve. Sourced Direct from Sri Lanka',
    nav: [
      { label: 'Shop', href: '/shop' },
      { label: 'The Science', href: '/the-science' },
      { label: 'About NCC', href: '/about-ncc' },
      { label: 'Find Your Ritual', href: '/find-your-ritual' },
      { label: 'Recipes', href: '/recipes' },
    ],
    search: 'Search',
    account: 'Account',
    cart: 'Cart',
    menu: 'Menu',
    closeMenu: 'Close menu',
    footer: {
      copyright: (year: number) => `© ${year} Natural Ceylon Cinnamon. All rights reserved.`,
    },
  },
  notFound: {
    title: '404',
    message: "The page you're looking for doesn't exist.",
    backHome: 'Back to home',
  },
} as const

export type Strings = typeof strings

export default strings
