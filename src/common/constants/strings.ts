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
  },
  home: {
    hero: {
      eyebrow: 'Single-Origin Sri Lanka.',
      heading: 'Better coffee. Better tea. Better rituals.',
      description:
        "Not all cinnamon is created equal. NCC sources only true Ceylon: graded, tested, and traceable to its origin in Sri Lanka. Add it to your morning ritual. Feel the difference.",
      rating: { score: '4.9', reviewCount: '200+ verified buyers' },
      primaryCta: 'Shop Daily Rituals',
      secondaryCta: 'Why Ceylon Matters',
      badges: ['Certified True Ceylon', 'Third-Party Lab Tested', 'Single-Origin Sri Lanka'],
    },
  },
  footer: {
    tagline: 'Make your daily cup do more.',
    certifiedBadge: 'Certified True Ceylon Cinnamon (Cinnamomum verum)',
    columns: [
      {
        title: 'Shop',
        links: [
          { label: 'C4 Daily', href: '/shop/c4-daily' },
          { label: 'C5 Heritage', href: '/shop/c5-heritage' },
          { label: 'Alba Reserve', href: '/shop/alba-reserve' },
          { label: 'Ceylon Reserve Coffee', href: '/shop/ceylon-reserve-coffee' },
          { label: 'Golden Chai Latte', href: '/shop/golden-chai-latte' },
          { label: 'Gift Sets', href: '/shop/gift-sets' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About NCC', href: '/about-ncc' },
          { label: 'The Science', href: '/the-science' },
          { label: 'Why Ceylon Matters', href: '/why-ceylon-matters' },
          { label: 'Recipes', href: '/recipes' },
          { label: 'Find Your Ritual', href: '/find-your-ritual' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Shipping & Returns', href: '/shipping-returns' },
          { label: 'FAQ', href: '/faq' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '/privacy-policy' },
          { label: 'Terms of Service', href: '/terms-of-service' },
          { label: 'Cookie Policy', href: '/cookie-policy' },
        ],
      },
    ],
    trustBadges: ['Lab Tested', 'Single-Origin Sri Lanka', 'Shipped from UK'],
    copyright: (year: number) =>
      `© ${year} Natural Ceylon Cinnamon. All rights reserved. Make your daily cup do more.`,
    cookiePreferences: 'Cookie Preferences',
  },
  about: {
    title: 'About NCC',
    subtitle: 'From Sri Lanka to Your Morning Cup',
    founder: {
      name: 'Ruwan Senavirathna',
      role: 'Founder, Natural Ceylon Cinnamon',
      photoCaption: 'Ruwan Senavirathna, Founder — Natural Ceylon Cinnamon',
      quote: "I couldn't find cinnamon in the UK that I'd actually trust. So I went back to the source.",
      intro:
        'We work directly with growers in Sri Lanka, select each harvest by grade, test every batch independently, and ship directly to you.',
    },
    whyWeStarted: {
      heading: 'Why We Started',
      paragraphs: [
        "After years of buying cinnamon labelled as 'Ceylon' only to find it was Cassia, or poorly stored, or unlabelled in terms of grade, Natural Ceylon Cinnamon was built to fix the problem.",
        'We source directly from growers in Sri Lanka, the only country that produces true Ceylon cinnamon (Cinnamomum verum) at scale. Every harvest is graded by essential oil concentration, tested independently for purity, and shipped directly to you. No middlemen. No substitutions.',
      ],
    },
    differentiators: {
      heading: 'What Makes NCC Different',
      items: [
        {
          title: 'The grade system.',
          description:
            "Ceylon cinnamon is graded C0 to C5 by essential oil content. Higher grade means higher potency. Most brands don't disclose this. We built our entire product range around it.",
        },
        {
          title: 'Traceability.',
          description: 'Every batch is traceable to its growing region. Test reports available on request.',
        },
        {
          title: 'Honest copy.',
          description:
            'We will not tell you cinnamon cures anything. What we will tell you is that it has been studied extensively for its role in supporting healthy metabolic function, and that grade and origin matter more than any marketing claim.',
        },
      ],
    },
    products: {
      heading: 'Our Products',
      paragraph:
        'We offer true Ceylon cinnamon across three grades — C4 Daily, C5 Heritage, and Alba Reserve — alongside our Ritual Collection of coffee and chai formats. Every product uses authenticated Ceylon, with no Cassia blending.',
    },
    basedInUk: {
      heading: 'Based in the UK. Sourced in Sri Lanka.',
      paragraph:
        "Natural Ceylon Cinnamon ships across the United Kingdom. We're a small, focused brand, and we intend to stay that way. Quality over volume, always.",
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
