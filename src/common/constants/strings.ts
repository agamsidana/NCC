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
  science: {
    title: 'The Science Behind Ceylon Cinnamon',
    intro:
      "Ceylon cinnamon has been the subject of hundreds of peer-reviewed studies. Here's an honest summary of what the research says, and what it doesn't.",
    disclaimer:
      'These statements have not been evaluated by the MHRA. This product is not intended to diagnose, treat, cure, or prevent any disease.',
    sections: [
      {
        heading: 'Ceylon vs. Cassia: Why Species Matters',
        paragraphs: [
          'Cassia (Cinnamomum cassia) and Ceylon (Cinnamomum verum) are botanically different plants. Ceylon is lighter in colour, more delicate in flavour, and critically different in its coumarin content. Cassia contains 1–5% coumarin. Authenticated Ceylon contains approximately 0.04%, more than 25x less.',
          "The European Food Safety Authority has set tolerable daily intake limits specifically because of Cassia's coumarin levels. If you're consuming cinnamon regularly, species matters.",
        ],
        note: null,
        source: 'Source: European Food Safety Authority (EFSA).',
      },
      {
        heading: 'Metabolic Health Research',
        paragraphs: [
          "Over 40 peer-reviewed studies have examined cinnamon's relationship with glucose metabolism, insulin sensitivity, and post-meal blood sugar response. Several randomised controlled trials have shown statistically significant reductions in fasting blood glucose and HbA1c in participants supplementing with cinnamon regularly.",
        ],
        note: 'Important note: Ceylon cinnamon is a complementary addition to a healthy lifestyle, not a treatment or cure for any medical condition. If you have a health condition, speak to a healthcare professional before supplementing.',
        source: 'Source: PubMed, 2010–2024.',
      },
      {
        heading: 'Why Grade Matters Scientifically',
        paragraphs: [
          'Essential oil concentration varies significantly by grade. C1 grade contains roughly 0.5–1% volatile oil, while C5 Heritage contains 2.5–3%, and Alba Reserve tests highest of all. The bioactive compounds most studied are concentrated in the essential oil, which is why grade — not just species — determines potency.',
        ],
        note: null,
        source: 'Source: ISO 6539 grading standard.',
      },
    ],
  },
  recipes: {
    title: 'Recipes and Rituals',
    posts: [
      {
        slug: 'ncc-metabolic-morning-tonic',
        title: 'The NCC Metabolic Morning Tonic: Cinnamon, Lemon & Ginger',
        date: 'July 3, 2026',
        excerpt:
          'A 60-second morning drink using three ingredients with functional history: Ceylon cinnamon, fresh lemon, and ginger. Zero caffeine.',
      },
      {
        slug: 'sri-lankan-red-dal-with-ceylon-cinnamon',
        title: 'Sri Lankan Red Dal with Ceylon Cinnamon',
        date: 'June 28, 2026',
        excerpt:
          'Cinnamon in dal is traditional in Sri Lanka — it adds a background warmth that deepens as it cooks. A simple weeknight red lentil dal using C4 Daily.',
      },
      {
        slug: 'golden-chai-french-toast',
        title: 'Golden Chai French Toast: A Weekend Breakfast Ritual',
        date: 'June 21, 2026',
        excerpt:
          "The Golden Chai Latte blend — cinnamon, cardamom, ginger, black pepper — makes one of the best French toast batters we've tried.",
      },
      {
        slug: 'iced-ceylon-cinnamon-coffee',
        title: 'Iced Ceylon Cinnamon Coffee: The Cold Brew Upgrade',
        date: 'June 14, 2026',
        excerpt:
          'Cold brew steeped with NCC C5 Heritage Ceylon cinnamon, poured over ice, finished with oat milk. Takes 12 hours to prepare, 2 minutes to serve.',
      },
      {
        slug: 'ceylon-cinnamon-rolls-with-alba-reserve-glaze',
        title: 'Ceylon Cinnamon Rolls with Alba Reserve Glaze',
        date: 'June 7, 2026',
        excerpt:
          "Using NCC's Alba Reserve — the most delicate grade in our range — gives the filling a floral warmth that's genuinely different to any cinnamon roll you've had before.",
      },
      {
        slug: 'ceylon-cinnamon-cardamom-energy-balls',
        title: 'Ceylon Cinnamon and Cardamom Energy Balls: A No-Bake Snack',
        date: 'May 31, 2026',
        excerpt:
          'No-bake energy balls made from dates, oats, true Ceylon cinnamon, and cardamom. A genuinely satisfying snack that takes ten minutes to make.',
      },
    ],
    pagination: { currentPage: 1, totalPages: 5 },
  },
  notFound: {
    title: '404',
    message: "The page you're looking for doesn't exist.",
    backHome: 'Back to home',
  },
} as const

export type Strings = typeof strings

export default strings
