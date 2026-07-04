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
    trustBar: {
      items: [
        { label: '4.9 Average Rating', sublabel: '200+ Verified Buyers', icon: 'mdi:star-outline' },
        { label: '30-Day Money-Back', sublabel: 'No Questions Asked', icon: 'mdi:shield-check-outline' },
        { label: 'Zero Artificial Additives', sublabel: 'Pure Ceylon Only', icon: 'mdi:leaf-outline' },
        { label: 'Dispatched Within 24h', sublabel: 'From UK Warehouse', icon: 'mdi:truck-fast-outline' },
        {
          label: 'Batch Reports Published',
          sublabel: 'Full Transparency',
          icon: 'mdi:file-document-check-outline',
        },
      ],
    },
    whyProduct: {
      eyebrow: 'Your Daily Ritual',
      heading: 'Why Cinnamon, Why Now',
      paragraphs: [
        "Most cinnamon sold in the UK isn't actually cinnamon. It's Cassia, a cheaper bark loaded with coumarin that can cause issues at high doses. True Ceylon is different.",
        'Ceylon cinnamon has been studied for its role in supporting healthy metabolic function, particularly insulin sensitivity and blood sugar management after meals. NCC sources only authenticated Ceylon, graded by oil content, and verified by third-party testing. Your morning ritual deserves better ingredients.',
      ],
      stats: [
        { value: 'C1–C5', label: 'Heritage grade range' },
        { value: '0.04%', label: 'Coumarin in true Ceylon (vs 1–3% in Cassia)' },
        { value: '100%', label: 'Traceable to origin' },
      ],
      badge: 'True Ceylon Certified',
      cta: 'Explore the Science',
    },
    grade: {
      eyebrow: 'The NCC Difference',
      heading: 'Why Serious About Cinnamon Means Being Serious About Grade',
      subheading:
        'Every detail, from soil to grading to your cup, shapes the potency and purity of what you consume.',
      cards: [
        {
          icon: 'mdi:water-outline',
          title: 'Graded by Oil Content',
          description:
            'Ceylon is graded C0–C5 by essential oil concentration. Higher grade = greater potency. Most brands never disclose this.',
        },
        {
          icon: 'mdi:map-marker-outline',
          title: 'Single-Origin Sri Lanka',
          description:
            'Every batch is traceable to a specific growing region in Sri Lanka, the only country that produces true Ceylon cinnamon at scale.',
        },
        {
          icon: 'mdi:flask-outline',
          title: 'Third-Party Lab Verified',
          description:
            "We don't ask you to trust the label. Every batch is independently tested for purity, coumarin levels, and heavy metals.",
        },
        {
          icon: 'mdi:tree-outline',
          title: 'True Ceylon, Not Cassia',
          description:
            'Cassia is cheap. Ceylon is the real thing. We use only Cinnamomum verum: authentic, low-coumarin, genuine Ceylon.',
        },
        {
          icon: 'mdi:eye-outline',
          title: 'Transparent Sourcing',
          description:
            "We share our testing reports. You can see exactly what's in your cinnamon: no marketing fluff, no hidden corners.",
        },
      ],
    },
    gradeSystem: {
      eyebrow: 'Choose Your Grade',
      heading: 'The NCC Grade System',
      subheading: 'Every grade is authentic Ceylon. Choose by your goals and how your palate leans.',
      products: [
        {
          title: 'C5 Heritage Ceylon Cinnamon 100g',
          description:
            'Higher essential oil concentration than C4. More aromatic, slightly sweeter. The most popular NCC grade.',
          price: '£10.95',
          href: '/shop/c5-heritage',
        },
        {
          title: 'C4 Daily Ceylon Cinnamon 100g',
          description:
            'The everyday workhorse. Consistent, clean, and reliable for daily use in coffee, oats, or cooking.',
          price: '£8.95',
          href: '/shop/c4-daily',
        },
        {
          title: 'Alba Reserve Ceylon Cinnamon 100g',
          description:
            'The most delicate grade. The innermost quill of the first-flush harvest. Ideal for finishing lattes, gifting, and serious cooks.',
          price: '£12.95',
          href: '/shop/alba-reserve',
        },
      ],
      exploreCta: 'Explore',
      viewAllCta: 'View All Products',
    },
    rituals: {
      eyebrow: 'How To Use',
      heading: 'Two Rituals. One Ingredient.',
      subheading:
        'Ceylon cinnamon works as well in your morning coffee as it does in your afternoon chai.',
      morning: {
        tag: 'Morning Coffee',
        tagIcon: 'mdi:coffee-outline',
        heading: 'The Morning Ritual',
        description: 'Premium Arabica coffee blended with grade C5 Heritage Ceylon cinnamon.',
        steps: [
          'Measure ½ tsp NCC cinnamon',
          'Add to grounds before brewing, or stir into cup',
          'Enjoy immediately, no need to strain',
        ],
        cta: 'Shop Cinnamon Coffee',
        href: '/shop/cinnamon-coffee',
      },
      afternoon: {
        tag: 'Afternoon Chai',
        tagIcon: 'mdi:tea-outline',
        heading: 'The Afternoon Ritual',
        description:
          'One heaped teaspoon into hot oat milk. A deeply warming Sri Lankan spice blend.',
        steps: [
          'Add 1 tsp Ceylon Golden Chai to your cup',
          'Pour over hot oat milk or water. Stir well.',
          'Froth for a café-style finish. Sweeten if needed.',
        ],
        cta: 'Shop Golden Chai Latte',
        href: '/shop/golden-chai-latte',
      },
    },
    albaReserve: {
      eyebrow: 'Alba Reserve',
      heading: 'The Rarest Grade. Reserved for the Serious.',
      intro: 'Alba is the inner quill of the first-flush cinnamon harvest.',
      description: 'This is cinnamon at its finest expression.',
      points: [
        'Highest essential oil concentration in the NCC range',
        'Harvested once annually from select Sri Lankan farms',
        'Limited batch: no reformulation, no substitution',
      ],
      cta: 'Explore Alba Reserve',
      shareLabel: 'Share Alba',
      href: '/shop/alba-reserve',
    },
    ourStory: {
      eyebrow: 'Our Story',
      heading: 'From Sri Lanka to Your Morning Cup',
      quote: "I couldn't find cinnamon in the UK that I'd actually trust. So I went back to the source.",
      authorName: 'Ruwan Senavirathna',
      authorTitle: 'Founder, Natural Ceylon Cinnamon',
      cta: 'Read Our Full Story',
      href: '/about-ncc',
    },
    science: {
      eyebrow: 'The Research',
      heading: 'Backed by Peer-Reviewed Science',
      subheading: 'Ceylon cinnamon has been the subject of hundreds of studies.',
      stats: [
        {
          icon: 'mdi:pulse',
          value: '40+',
          label: 'Peer-reviewed studies on Ceylon cinnamon and blood sugar management',
          source: 'PubMed, 2010–2024',
        },
        {
          icon: 'mdi:lightning-bolt-outline',
          value: '0.04%',
          label: 'Coumarin content in true Ceylon vs. up to 1–3% in Cassia',
          source: 'European Food Safety Authority',
        },
        {
          icon: 'mdi:water-outline',
          value: '3x',
          label: 'Higher essential oil concentration in grade C5 vs. C1 grade',
          source: 'ISO 6539 grading standard',
        },
      ],
      disclaimer: '* These statements refer to complementary wellness support.',
      cta: 'Read The Science Page',
      href: '/the-science',
    },
    reviews: {
      eyebrow: 'What Customers Say',
      heading: 'The Ritual Has Changed Their Mornings',
      ratingScore: '4.9',
      ratingCount: '200+ verified buyers',
      items: [
        {
          title: 'Finally, cinnamon that actually tastes like something',
          body: "I'd been adding generic supermarket cinnamon to my coffee for years. Swapped to NCC C5 grade and the difference is remarkable.",
          author: 'Sarah M.',
        },
        {
          title: 'I check the label on everything now',
          body: 'NCC was the only UK brand I found that actually grades their product and publishes their test results.',
          author: 'James T.',
        },
        {
          title: 'The Chai powder is my new morning ritual',
          body: 'Oat milk chai with the NCC Golden Chai powder has replaced my second coffee.',
          author: 'Priya K.',
        },
      ],
      cta: 'Read All Reviews',
      href: '/reviews',
    },
    newsletter: {
      eyebrow: 'Join The Ritual',
      heading: 'Make Your Daily Cup Do More',
      subheading:
        'Coffee rituals, tea rituals, ingredient guides, new reserve drops — direct to your inbox.',
      points: [
        'Coffee & tea ritual guides',
        'Ingredient deep-dives & recipes',
        'New reserve drops, early access',
      ],
      placeholder: 'Your email address',
      cta: 'Join The Ritual List',
      disclaimer: 'No spam. Unsubscribe any time.',
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
  shop: {
    title: 'Shop',
    description: 'Every grade is authentic Ceylon. Choose by your goals and how your palate leans.',
    exploreCta: 'Explore',
    products: [
      {
        slug: 'c5-heritage',
        name: 'C5 Heritage Ceylon Cinnamon 100g',
        category: 'cinnamon',
        description:
          'Higher essential oil concentration than C4. More aromatic, slightly sweeter. The most popular NCC grade.',
        price: '£10.95',
      },
      {
        slug: 'c4-daily',
        name: 'C4 Daily Ceylon Cinnamon 100g',
        category: 'cinnamon',
        description:
          'The everyday workhorse. Consistent, clean, and reliable for daily use in coffee, oats, or cooking.',
        price: '£8.95',
      },
      {
        slug: 'alba-reserve',
        name: 'Alba Reserve Ceylon Cinnamon 100g',
        category: 'cinnamon',
        description:
          'The most delicate grade. The smallest cut of the first-flush harvest. Ideal for finishing lattes, gifting, and serious cinnamon lovers.',
        price: '£13.95',
      },
      {
        slug: 'ceylon-reserve-coffee',
        name: 'Ceylon Reserve Coffee',
        category: 'ritual',
        description: 'Premium Arabica coffee blended with grade C5 Heritage Ceylon cinnamon.',
        price: '£12.95',
      },
      {
        slug: 'golden-chai-latte',
        name: 'Golden Chai Latte',
        category: 'ritual',
        description: 'One heaped teaspoon into hot oat milk. A deeply warming Sri Lankan spice blend.',
        price: '£19.95',
      },
      {
        slug: 'spice-of-kings-set-a',
        name: 'Spice of Kings Set A',
        category: 'gift-set',
        description: null,
        price: '£34.95',
      },
      {
        slug: 'queen-of-spices-reserve-set-b',
        name: 'Queen of Spices Reserve Set B',
        category: 'gift-set',
        description: null,
        price: '£69.00',
      },
      {
        slug: 'morning-ritual-duo',
        name: 'Morning Ritual Duo',
        category: 'gift-set',
        description: null,
        price: '£19.95',
      },
      {
        slug: 'chai-and-ceylon-set',
        name: 'Chai & Ceylon Set',
        category: 'gift-set',
        description: null,
        price: '£25.95',
      },
      {
        slug: 'daily-ritual-trio',
        name: 'Daily Ritual Trio',
        category: 'gift-set',
        description: null,
        price: '£37.00',
      },
      {
        slug: 'discovery-and-reserve-bridge',
        name: 'Discovery & Reserve Bridge',
        category: 'gift-set',
        description: null,
        price: '£39.95',
      },
    ],
  },
  giftSets: {
    title: 'Gift Sets',
    description:
      'Curated Sri Lankan ritual gift sets. Premium packaging, provenance-led ingredients, and a story worth giving.',
  },
  notFound: {
    title: '404',
    message: "The page you're looking for doesn't exist.",
    backHome: 'Back to home',
  },
} as const

export type Strings = typeof strings

export default strings
