import strings from "./strings";

export type ProductAudience = {
  icon: string;
  title: string;
  description: string;
  points: string[];
};

export type ProductReview = {
  author: string;
  date: string;
  rating: number;
  title: string;
  body: string;
};

export type ProductCrossSellItem = {
  title: string;
  price: string;
  href: string;
};

export type Product = {
  slug: string;
  vendor: string;
  title: string;
  price: string;
  category: string;
  categoryHref: string;
  variant: { label: string; value: string };
  description: string;
  details: string[];
  pairsWith: string;
  audiences: ProductAudience[];
  reviews: {
    heading: string;
    subheading: string;
    ratingCount: string;
    items: ProductReview[];
  };
  crossSell: {
    heading: string;
    items: ProductCrossSellItem[];
  };
};

type ProductDetail = {
  variant: { label: string; value: string };
  description: string;
  details: string[];
  pairsWith: string;
  audiences: ProductAudience[];
  reviews: { ratingCount: string; items: ProductReview[] };
  crossSellSlugs: string[];
};

/**
 * PDP-only content keyed by slug, layered on top of strings.shop.products
 * (the catalog's source of truth for slug/name/price/category). Add an
 * entry here for every slug in strings.shop.products so its product page
 * has real copy instead of the generic fallback.
 */
const productDetails: Record<string, ProductDetail> = {
  'c4-daily': {
    variant: { label: 'Size', value: '100g' },
    description:
      'The everyday workhorse. Consistent, clean, and reliable for daily use in coffee, oats, or cooking. C4 is graded for approachable warmth rather than intensity, so it never overpowers a dish — the grade most NCC customers reach for every single morning.',
    details: [
      'C4 grade: 1–1.5% essential oil concentration',
      'Single-origin Sri Lanka, Cinnamomum verum',
      'Approx. 0.04% coumarin, third-party lab tested',
      'No fillers, no anti-caking agents',
      'Resealable 100g pouch',
    ],
    pairsWith: 'Pairs well with: Ceylon Reserve Coffee, morning oats, weeknight cooking',
    audiences: [
      {
        icon: 'mdi:coffee-outline',
        title: 'You want an everyday cinnamon',
        description:
          'C4 is built for daily use — coffee, oats, baking — without the price tag of a reserve grade.',
        points: [
          'Consistent flavour, batch to batch',
          'Mild enough for daily use without overpowering',
          'The most affordable true Ceylon in our range',
        ],
      },
      {
        icon: 'mdi:magnify',
        title: "You're new to true Ceylon",
        description: "If you've only had supermarket Cassia before, C4 is the easiest place to start.",
        points: [
          'Noticeably lighter and more delicate than Cassia',
          'Low coumarin, safe for regular use',
          'A gateway into the NCC grade system',
        ],
      },
      {
        icon: 'mdi:pot-steam-outline',
        title: 'You cook more than you bake',
        description:
          'C4 holds its own in savoury dishes — dal, curries, and slow-cooked dishes — as well as sweet.',
        points: [
          'Balanced warmth for savoury cooking',
          "Doesn't dominate other spices",
          'Works hot or cold, brewed or baked',
        ],
      },
    ],
    reviews: {
      ratingCount: 'Based on 3 reviews',
      items: [
        {
          author: 'Liam O.',
          date: '05/02/2026',
          rating: 5,
          title: 'My daily coffee cinnamon now',
          body: 'Simple as that — I use this every single morning. Consistent and never bitter.',
        },
        {
          author: 'Priya D.',
          date: '22/01/2026',
          rating: 5,
          title: 'Better than I expected for the price',
          body: 'Assumed the "daily" grade would be a step down. Honestly can\'t tell the difference from C5 in my coffee.',
        },
        {
          author: 'Grace T.',
          date: '30/12/2025',
          rating: 4,
          title: 'Good everyday jar',
          body: 'Solid daily cinnamon. Would like a bigger size option for how often I use it.',
        },
      ],
    },
    crossSellSlugs: ['c5-heritage', 'alba-reserve', 'ceylon-reserve-coffee', 'daily-ritual-trio'],
  },
  'c5-heritage': {
    variant: { label: 'Size', value: '100g' },
    description:
      'Higher essential oil concentration than C4. More aromatic, slightly sweeter, and the most popular grade in the NCC range. C5 Heritage is where most customers land once they can taste the difference grade makes.',
    details: [
      'C5 grade: 2.5–3% essential oil concentration',
      'Single-origin Sri Lanka, Cinnamomum verum',
      'Approx. 0.04% coumarin, third-party lab tested',
      'No fillers, no anti-caking agents',
      'Resealable 100g pouch',
    ],
    pairsWith: 'Pairs well with: Golden Chai Latte, baking, finishing desserts',
    audiences: [
      {
        icon: 'mdi:star-outline',
        title: 'You want the most popular grade',
        description:
          "C5 Heritage is the grade most NCC customers settle on — noticeably more aromatic than C4 without Alba's price.",
        points: [
          'The most requested grade in the NCC range',
          'Visibly higher oil sheen on the quills',
          'A meaningful step up from C4 in aroma',
        ],
      },
      {
        icon: 'mdi:cake-variant-outline',
        title: 'You bake often',
        description:
          'Higher oil concentration means C5 holds its aroma through heat better than lower grades.',
        points: [
          'Stands up to oven temperatures',
          'Rounder, sweeter flavour in baked goods',
          'A favourite for cinnamon rolls and buns',
        ],
      },
      {
        icon: 'mdi:gift-outline',
        title: 'You want to gift real quality',
        description:
          "C5 is premium enough to gift, without being as rare (or as pricey) as Alba Reserve.",
        points: [
          'Feels like an upgrade, not a novelty',
          'Comes with full batch traceability',
          'A natural next step after trying C4',
        ],
      },
    ],
    reviews: {
      ratingCount: 'Based on 3 reviews',
      items: [
        {
          author: 'Naomi K.',
          date: '11/03/2026',
          rating: 5,
          title: 'The upgrade was worth it',
          body: 'Went from C4 to C5 and could taste the difference immediately. More aromatic, slightly sweeter.',
        },
        {
          author: 'Daniel P.',
          date: '19/02/2026',
          rating: 5,
          title: 'Now my go-to for baking',
          body: 'Cinnamon rolls have never smelled this good coming out of the oven.',
        },
        {
          author: 'Emma S.',
          date: '02/01/2026',
          rating: 4,
          title: 'Great everyday reserve grade',
          body: 'A nice middle ground between daily use and something special. Would buy again.',
        },
      ],
    },
    crossSellSlugs: ['c4-daily', 'alba-reserve', 'golden-chai-latte', 'spice-of-kings-set-a'],
  },
  'alba-reserve': {
    variant: { label: 'Size', value: '100g' },
    description:
      'The most delicate grade. The innermost quill of the first-flush harvest, harvested once annually from select Sri Lankan farms. Ideal for finishing lattes, gifting, and serious cooks who notice the difference.',
    details: [
      'Alba grade: highest essential oil concentration in the NCC range',
      'Harvested once annually, limited batch',
      'Single-origin Sri Lanka, Cinnamomum verum',
      'No reformulation, no substitution between batches',
      'Resealable 100g pouch',
    ],
    pairsWith: 'Pairs well with: Golden Chai Latte, finishing desserts, gifting',
    audiences: [
      {
        icon: 'mdi:trophy-outline',
        title: 'You want the rarest grade',
        description:
          'Alba is harvested once a year from select farms — there is no higher grade in our range.',
        points: [
          'Highest oil concentration we offer',
          'Limited batch, no reformulation',
          'The grade serious collectors ask for by name',
        ],
      },
      {
        icon: 'mdi:gift-outline',
        title: 'You are buying a serious gift',
        description: 'Alba Reserve is the grade that makes people ask where you found it.',
        points: [
          'Presented for gifting, not just daily use',
          'Full batch traceability included',
          'A genuinely rare, single-harvest product',
        ],
      },
      {
        icon: 'mdi:pot-steam-outline',
        title: 'You finish plates and drinks with it',
        description:
          'Alba is too delicate to waste in cooking — most customers use it to finish, not to cook.',
        points: [
          'Best dusted over lattes, desserts, plating',
          'Floral top notes that fade with heat',
          'A little goes further than lower grades',
        ],
      },
    ],
    reviews: {
      ratingCount: 'Based on 3 reviews',
      items: [
        {
          author: 'Oliver H.',
          date: '14/03/2026',
          rating: 5,
          title: 'Worth the price for special occasions',
          body: "I only use this to finish desserts and lattes now. The aroma alone is completely different from anything I've had.",
        },
        {
          author: 'Sana R.',
          date: '27/01/2026',
          rating: 5,
          title: 'Bought as a gift, keeping it for myself',
          body: 'It was meant to be a present. I ordered a second jar to actually give away.',
        },
        {
          author: 'Marcus B.',
          date: '09/12/2025',
          rating: 5,
          title: 'You can genuinely taste the harvest difference',
          body: 'More floral than C5, less sharp. This is what people mean when they say grade matters.',
        },
      ],
    },
    crossSellSlugs: [
      'c5-heritage',
      'spice-of-kings-set-a',
      'queen-of-spices-reserve-set-b',
      'golden-chai-latte',
    ],
  },
  'ceylon-reserve-coffee': {
    variant: { label: 'Size', value: '200g' },
    description:
      'Premium Arabica coffee blended with grade C5 Heritage Ceylon cinnamon, ground and ready for the Morning Ritual. Measure it into your grounds before brewing, or stir it straight into the cup — no need to strain.',
    details: [
      'Premium Arabica coffee beans',
      'Blended with C5 Heritage Ceylon cinnamon',
      'Ground for filter or cafetière brewing',
      'Single-origin Sri Lankan cinnamon, no fillers',
      'Resealable 200g pouch',
    ],
    pairsWith: 'Pairs well with: oat milk, the Morning Ritual',
    audiences: [
      {
        icon: 'mdi:coffee-outline',
        title: 'You want the Morning Ritual pre-blended',
        description:
          "This is the exact coffee-and-cinnamon ratio from our Morning Ritual recipe, already done for you.",
        points: [
          'No need to measure cinnamon separately',
          'Consistent ratio in every batch',
          'Ready to brew straight from the pouch',
        ],
      },
      {
        icon: 'mdi:clock-fast',
        title: "You don't have time to blend your own",
        description: 'Skip the extra step — the cinnamon is already ground into the coffee.',
        points: [
          'One pouch instead of two products',
          'Brews exactly like a normal ground coffee',
          'Works in filter machines, cafetières, or pour-over',
        ],
      },
      {
        icon: 'mdi:gift-outline',
        title: 'You want to gift a coffee lover something different',
        description: "An easy, distinctive gift for anyone who already drinks coffee daily.",
        points: [
          'Reads as a genuine upgrade, not a novelty',
          'Comes with brewing guidance on the pouch',
          'Pairs naturally with our other Ritual products',
        ],
      },
    ],
    reviews: {
      ratingCount: 'Based on 3 reviews',
      items: [
        {
          author: 'Sam K.',
          date: '06/03/2026',
          rating: 5,
          title: 'Replaced my regular coffee entirely',
          body: "Didn't expect to switch permanently, but the cinnamon is subtle enough that it just tastes like better coffee.",
        },
        {
          author: 'Ines V.',
          date: '14/02/2026',
          rating: 4,
          title: 'Great for cafetière brewing',
          body: 'Grind works well for a French press. Would like a finer grind option for espresso.',
        },
        {
          author: 'Tom R.',
          date: '29/12/2025',
          rating: 5,
          title: 'Cinnamon is well balanced, not overpowering',
          body: "Worried it would taste like a spiced latte syrup. It doesn't — just a warm, rounder coffee.",
        },
      ],
    },
    crossSellSlugs: ['c5-heritage', 'golden-chai-latte', 'morning-ritual-duo', 'daily-ritual-trio'],
  },
  'golden-chai-latte': {
    variant: { label: 'Size', value: '200g' },
    description:
      'One heaped teaspoon into hot oat milk. A deeply warming Sri Lankan spice blend built around true Ceylon cinnamon, cardamom, ginger, and black pepper — froth it for a café-style finish, or stir and go.',
    details: [
      'Ceylon cinnamon, cardamom, ginger, and black pepper blend',
      'Single-origin Sri Lankan spices throughout',
      'Instant powder — dissolves in hot milk or water',
      'No added sugar; sweeten to taste',
      'Resealable 200g pouch',
    ],
    pairsWith: 'Pairs well with: hot oat milk, the Afternoon Ritual',
    audiences: [
      {
        icon: 'mdi:tea-outline',
        title: 'You want an afternoon ritual that isn\'t coffee',
        description: 'A warming, caffeine-light alternative for the part of the day coffee doesn\'t suit.',
        points: [
          'Naturally lower caffeine than a second coffee',
          'Ready in under a minute, no steeping',
          'Works hot or iced',
        ],
      },
      {
        icon: 'mdi:leaf-outline',
        title: "You're tired of syrup-based chai lattes",
        description: 'Built from real ground spice, not a sugar syrup base like most café chai.',
        points: [
          'No added sugar — you control the sweetness',
          'Real Ceylon cinnamon, not a flavouring',
          'Noticeably more complex than a syrup pump',
        ],
      },
      {
        icon: 'mdi:gift-outline',
        title: 'You want a cosy, low-effort gift',
        description: 'An easy gift for tea drinkers who haven\'t tried true Ceylon cinnamon yet.',
        points: [
          'Simple froth-and-serve instructions on the pouch',
          'Approachable for chai beginners',
          'Pairs naturally with our cinnamon jars',
        ],
      },
    ],
    reviews: {
      ratingCount: 'Based on 3 reviews',
      items: [
        {
          author: 'Freya D.',
          date: '10/03/2026',
          rating: 5,
          title: 'My new afternoon habit',
          body: 'Oat milk chai with this has replaced my second coffee entirely.',
        },
        {
          author: 'Kabir S.',
          date: '21/01/2026',
          rating: 5,
          title: 'Tastes like real spice, not syrup',
          body: 'Miles better than the chai lattes I used to order out. Actual cardamom and cinnamon flavour.',
        },
        {
          author: 'Louise P.',
          date: '02/12/2025',
          rating: 4,
          title: 'Great blend, slightly strong for milk alone',
          body: 'I add a touch more milk than instructed, but the flavour is excellent.',
        },
      ],
    },
    crossSellSlugs: ['c4-daily', 'ceylon-reserve-coffee', 'chai-and-ceylon-set', 'alba-reserve'],
  },
  'spice-of-kings-set-a': {
    variant: { label: 'Size', value: '3 x 30g' },
    description:
      "Your introduction to Sri Lankan terroir. Three 30g jars of the finest spices from Sri Lanka's growing regions: true Ceylon cinnamon, highland cardamom, and either hand-picked cloves or Ceylon black pepper. Compact. Giftable. The perfect entry point into the Sri Lankan spice system, for curious cooks, ritual upgraders, and anyone who deserves better than what is on the supermarket shelf.",
    details: [
      '3 x 30g glass jars',
      'Jar 1: True Ceylon Cinnamon (C5 or Alba grade)',
      'Jar 2: Ceylon Cardamom (highland origin)',
      'Jar 3: Ceylon Cloves or Black Pepper (seasonal selection)',
      'All spices Sri Lanka origin, no anti-caking agents, no fillers',
      'Presented in a gift-ready format',
    ],
    pairsWith: 'Pairs well with: Ceylon Reserve Coffee, Ceylon Golden Chai Latte Blend',
    audiences: [
      {
        icon: 'mdi:gift-outline',
        title: 'You want a gift that stands out',
        description:
          'Both sets are built around traceable, graded Ceylon cinnamon from Sri Lanka — a gift with a story behind it, not a generic hamper.',
        points: [
          'Premium kraft gift box, ready to give',
          'Each grade explained on the inner sleeve',
          'Origin card with Sri Lanka provenance details included',
        ],
      },
      {
        icon: 'mdi:magnify',
        title: 'You want to explore the full NCC range',
        description:
          'A set is the best way to experience the grade system first-hand. Start with C4 for everyday use, step up to C5 Heritage for complexity, and try Alba Reserve as your finishing spice.',
        points: [
          'Side-by-side comparison: taste the grade difference',
          '30g tasting portions — perfect for exploring before committing',
          'Discover your grade before investing in a full 100g jar',
        ],
      },
      {
        icon: 'mdi:pot-steam-outline',
        title: 'You cook and bake with intention',
        description:
          'True Ceylon behaves differently in the kitchen. Lower coumarin. More floral. More delicate intensity to your food, coffee, and chai.',
        points: [
          'C4: everyday cooking, baking, and morning coffee',
          'C5: heritage-grade chai, sweet dishes, and gift-worthy flavour',
          'Alba Reserve: finishing spice for lattes, desserts, and plating',
        ],
      },
    ],
    reviews: {
      ratingCount: 'Based on 5 reviews',
      items: [
        {
          author: 'Callum B.',
          date: '29/04/2026',
          rating: 5,
          title: "Best spice discovery I've made all year",
          body: 'I bought this on a whim and it completely changed how I think about spices. The provenance is clear in the flavour. Bought a second set for my sister.',
        },
        {
          author: 'Sophie H.',
          date: '18/03/2026',
          rating: 4,
          title: 'Lovely introduction to micro lot spices',
          body: 'Really enjoyed exploring these. Each has a different character and the quality is noticeably higher than anything from a supermarket. Would love to see tasting notes included.',
        },
        {
          author: 'Meera L.',
          date: '14/02/2026',
          rating: 5,
          title: 'Gift for my father — he was genuinely moved',
          body: "My father is from Sri Lanka and he said these reminded him of what he grew up with. He's very hard to impress. This set meant a great deal to him.",
        },
        {
          author: 'Andrew F.',
          date: '08/01/2026',
          rating: 5,
          title: 'Outstanding quality from a clearly dedicated producer',
          body: "You can taste the care that has gone into sourcing these. Nothing like anything I've found in UK supermarkets. I use the cinnamon in my morning coffee — exceptional.",
        },
        {
          author: 'Caroline V.',
          date: '22/12/2025',
          rating: 5,
          title: 'A proper spice education in three jars',
          body: 'I love that this gives you three different spices to explore. Each one is distinct and clearly single origin. I feel like I understand Sri Lankan spice properly now.',
        },
      ],
    },
    crossSellSlugs: [
      'queen-of-spices-reserve-set-b',
      'golden-chai-latte',
      'ceylon-reserve-coffee',
      'discovery-and-reserve-bridge',
    ],
  },
  'queen-of-spices-reserve-set-b': {
    variant: { label: 'Size', value: '3 x 100g' },
    description:
      'The reserve edition of our spice set. Three full 100g jars of our highest grades — Alba Reserve cinnamon, reserve-grade cardamom, and reserve cloves — for those who want nothing but the best, in quantities that actually last.',
    details: [
      '3 x 100g glass jars (full-size, not tasting portions)',
      'Jar 1: Alba Reserve Ceylon Cinnamon',
      'Jar 2: Reserve-grade Ceylon Cardamom',
      'Jar 3: Reserve-grade Ceylon Cloves',
      'All spices Sri Lanka origin, batch-tested and traceable',
      'Presented in a premium lacquered gift box',
    ],
    pairsWith: 'Pairs well with: Ceylon Reserve Coffee, Ceylon Golden Chai Latte Blend',
    audiences: [
      {
        icon: 'mdi:crown-outline',
        title: 'You want the best we offer, full-size',
        description:
          "This is Spice of Kings Set A's bigger sibling — full 100g jars at our highest grades, not tasting portions.",
        points: [
          'Full-size jars, not samples',
          'Every jar at our top grade',
          'Built to last months, not weeks',
        ],
      },
      {
        icon: 'mdi:gift-outline',
        title: 'You are buying a milestone gift',
        description: 'For the person who already has the daily set. This is the upgrade.',
        points: [
          'Premium lacquered box, not kraft',
          'Feels substantial for special occasions',
          'Comes with full provenance documentation',
        ],
      },
      {
        icon: 'mdi:chef-hat',
        title: 'You cook seriously, often',
        description: 'Full-size reserve jars mean you can actually cook with these, not just taste them.',
        points: [
          'Enough volume for regular use',
          'Reserve grade in every jar, not just cinnamon',
          'Restocking is simple: same three grades',
        ],
      },
    ],
    reviews: {
      ratingCount: 'Based on 3 reviews',
      items: [
        {
          author: 'Victoria N.',
          date: '17/03/2026',
          rating: 5,
          title: 'The set to buy once you know you love NCC',
          body: 'Started with Set A, loved it, upgraded to this. Full-size jars at reserve grade — exactly what I wanted.',
        },
        {
          author: 'Thomas W.',
          date: '25/02/2026',
          rating: 5,
          title: 'A genuinely impressive gift',
          body: 'Gave this for a milestone birthday. The box alone looks expensive, and the spices back it up.',
        },
        {
          author: 'Anjali M.',
          date: '03/01/2026',
          rating: 4,
          title: 'Excellent quality, wish it came smaller too',
          body: "Everything is superb. Would love a 2-jar version at this price point for those who don't use cloves often.",
        },
      ],
    },
    crossSellSlugs: [
      'spice-of-kings-set-a',
      'discovery-and-reserve-bridge',
      'alba-reserve',
      'ceylon-reserve-coffee',
    ],
  },
  'morning-ritual-duo': {
    variant: { label: 'Size', value: '2 items' },
    description:
      "Everything the morning ritual needs, in one box: Ceylon Reserve Coffee and C5 Heritage cinnamon, sized to run out at the same time. No more mismatched restocking.",
    details: [
      '1 x Ceylon Reserve Coffee (200g)',
      '1 x C5 Heritage Ceylon Cinnamon (100g)',
      'Sized to last roughly the same number of mornings',
      'Gift-ready box',
    ],
    pairsWith: 'Pairs well with: oat milk, a slow morning',
    audiences: [
      {
        icon: 'mdi:coffee-outline',
        title: 'You already do the morning ritual',
        description:
          'If cinnamon coffee is already your thing, this duo just removes the guesswork on restocking.',
        points: [
          'Coffee and cinnamon sized to run out together',
          'One order instead of two',
          'Same grade used in our own Morning Ritual recipe',
        ],
      },
      {
        icon: 'mdi:gift-outline',
        title: 'You want an easy, useful gift',
        description:
          'A duo is easier to gift than a single jar — it reads as a complete ritual, not one ingredient.',
        points: [
          'Gift-ready packaging included',
          "Works for coffee lovers who've never tried Ceylon cinnamon",
          'Comes with the exact recipe ratio on the box',
        ],
      },
      {
        icon: 'mdi:leaf-outline',
        title: "You're trying cinnamon coffee for the first time",
        description:
          'This is the lowest-friction way to try the Morning Ritual without buying two full-size products separately.',
        points: [
          'Everything needed in one box',
          'Simple ½ tsp measurement guide included',
          'No need to buy a whole 100g jar to test it',
        ],
      },
    ],
    reviews: {
      ratingCount: 'Based on 3 reviews',
      items: [
        {
          author: 'Ben C.',
          date: '21/03/2026',
          rating: 5,
          title: 'Solved my restocking problem',
          body: 'Never used to buy the coffee and cinnamon at the same rate. This fixed it completely.',
        },
        {
          author: 'Alice M.',
          date: '11/02/2026',
          rating: 5,
          title: 'Perfect gift for a coffee-obsessed friend',
          body: 'Easy to wrap, easy to explain, and they use it every day now.',
        },
        {
          author: 'Ryan T.',
          date: '19/01/2026',
          rating: 4,
          title: 'Great starter set',
          body: 'Got me into cinnamon coffee. Already ordered a full jar of C5 since.',
        },
      ],
    },
    crossSellSlugs: ['c5-heritage', 'ceylon-reserve-coffee', 'chai-and-ceylon-set', 'daily-ritual-trio'],
  },
  'chai-and-ceylon-set': {
    variant: { label: 'Size', value: '2 items' },
    description:
      'Warm spice, every afternoon. Ceylon Golden Chai Latte paired with C4 Daily cinnamon, so your afternoon ritual has the same provenance as your morning one.',
    details: [
      '1 x Ceylon Golden Chai Latte Powder (200g)',
      '1 x C4 Daily Ceylon Cinnamon (100g)',
      'Both made with single-origin Sri Lankan ingredients',
      'Gift-ready box',
    ],
    pairsWith: 'Pairs well with: hot oat milk, a slow afternoon',
    audiences: [
      {
        icon: 'mdi:tea-outline',
        title: 'You already have an afternoon ritual',
        description:
          'If chai is already part of your day, this set adds true Ceylon cinnamon to round it out.',
        points: [
          'Chai and cinnamon from the same origin story',
          'Sized for regular afternoon use',
          'Matches the Afternoon Ritual recipe exactly',
        ],
      },
      {
        icon: 'mdi:gift-outline',
        title: 'You want to gift something warm',
        description: 'A cosy, low-effort gift for tea and chai drinkers.',
        points: [
          'Reads as a complete ritual, not one ingredient',
          'Gift-ready packaging included',
          'Approachable for chai beginners',
        ],
      },
      {
        icon: 'mdi:leaf-outline',
        title: "You're curious about Ceylon chai",
        description:
          'This is the easiest way to try our Golden Chai blend alongside true Ceylon cinnamon.',
        points: [
          'Everything needed in one box',
          'Simple froth-and-serve instructions included',
          'No need to buy full-size jars to test it',
        ],
      },
    ],
    reviews: {
      ratingCount: 'Based on 3 reviews',
      items: [
        {
          author: 'Isla F.',
          date: '15/03/2026',
          rating: 5,
          title: 'My new afternoon habit',
          body: 'Replaced my second coffee with this. Oat milk chai with the C4 cinnamon on top is genuinely lovely.',
        },
        {
          author: 'Noah G.',
          date: '02/02/2026',
          rating: 4,
          title: 'Cosy, easy gift',
          body: 'Gave this to my mum. She loved the box and now asks for it by name.',
        },
        {
          author: 'Zara K.',
          date: '20/12/2025',
          rating: 5,
          title: 'Better than the chai lattes I used to buy out',
          body: 'Cheaper and tastes more like real spice than the syrup-based ones from coffee shops.',
        },
      ],
    },
    crossSellSlugs: ['golden-chai-latte', 'c4-daily', 'morning-ritual-duo', 'daily-ritual-trio'],
  },
  'daily-ritual-trio': {
    variant: { label: 'Size', value: '3 items' },
    description:
      'Your everyday stack, in one order: Ceylon Reserve Coffee, Ceylon Golden Chai Latte, and C4 Daily cinnamon. Three products graded for daily use, not special occasions.',
    details: [
      '1 x Ceylon Reserve Coffee (200g)',
      '1 x Ceylon Golden Chai Latte Powder (200g)',
      '1 x C4 Daily Ceylon Cinnamon (100g)',
      'All three sized for regular, everyday use',
      'Gift-ready box',
    ],
    pairsWith: 'Pairs well with: both the morning and afternoon ritual',
    audiences: [
      {
        icon: 'mdi:repeat',
        title: 'You want to restock everything at once',
        description: 'If you already use all three daily, this trio is simpler than ordering separately.',
        points: [
          'One order covers coffee, chai, and cinnamon',
          'Everyday C4 grade, priced for daily use',
          'Slightly cheaper than buying all three separately',
        ],
      },
      {
        icon: 'mdi:gift-outline',
        title: 'You are buying for someone who drinks both coffee and tea',
        description: "Covers both rituals, so you don't have to guess which one they prefer.",
        points: [
          "Works whether they're a coffee or tea person",
          'Gift-ready packaging included',
          'Comes with both ritual recipe cards',
        ],
      },
      {
        icon: 'mdi:magnify',
        title: 'You want to try the full NCC daily range',
        description: 'The trio is the easiest way to sample everything we make for everyday use.',
        points: [
          'All three everyday products in one box',
          'Lower cost per item than buying separately',
          'A natural first order for new customers',
        ],
      },
    ],
    reviews: {
      ratingCount: 'Based on 3 reviews',
      items: [
        {
          author: 'Harriet L.',
          date: '09/03/2026',
          rating: 5,
          title: 'My whole daily order in one box',
          body: 'Coffee, chai, cinnamon — I use all three weekly, so this trio just made sense.',
        },
        {
          author: 'Josh R.',
          date: '28/01/2026',
          rating: 5,
          title: 'Great value versus buying separately',
          body: 'Worked out cheaper than ordering the three items on their own, and arrived together.',
        },
        {
          author: 'Fatima A.',
          date: '05/12/2025',
          rating: 4,
          title: 'Good first order',
          body: 'Ordered this to try the brand and now buy the coffee and cinnamon on repeat.',
        },
      ],
    },
    crossSellSlugs: ['morning-ritual-duo', 'chai-and-ceylon-set', 'c4-daily', 'discovery-and-reserve-bridge'],
  },
  'discovery-and-reserve-bridge': {
    variant: { label: 'Size', value: '3 x 50g' },
    description:
      'From daily to reserve, side by side. Three 50g jars — C4 Daily, C5 Heritage, and Alba Reserve — so you can taste exactly where your palate lands before committing to a full-size jar.',
    details: [
      '3 x 50g glass jars',
      'Jar 1: C4 Daily Ceylon Cinnamon',
      'Jar 2: C5 Heritage Ceylon Cinnamon',
      'Jar 3: Alba Reserve Ceylon Cinnamon',
      'Same three grades, side by side for direct comparison',
      'Gift-ready box',
    ],
    pairsWith: 'Pairs well with: your own daily coffee or chai, for a fair comparison',
    audiences: [
      {
        icon: 'mdi:magnify',
        title: "You can't decide which grade to buy",
        description:
          'This set exists specifically to answer that question, side by side, in your own kitchen.',
        points: [
          'All three grades in directly comparable portions',
          'Cheaper than buying three full jars to test',
          'Clear labelling so you know which is which',
        ],
      },
      {
        icon: 'mdi:school-outline',
        title: 'You want to understand the grade system properly',
        description:
          'Tasting C4 against C5 against Alba is the fastest way to actually understand what "grade" means.',
        points: [
          'A genuine side-by-side education, not marketing copy',
          'Matches the exact grades used across our range',
          'Origin card explains what to notice in each jar',
        ],
      },
      {
        icon: 'mdi:gift-outline',
        title: "You're gifting to someone who loves to compare",
        description:
          "For the person who wants to form their own opinion, not be told which grade is 'best'.",
        points: [
          'A genuinely interesting gift for curious cooks',
          'Every grade explained on the inner sleeve',
          'A natural lead-in to a full 100g jar purchase',
        ],
      },
    ],
    reviews: {
      ratingCount: 'Based on 3 reviews',
      items: [
        {
          author: 'Charlie D.',
          date: '12/03/2026',
          rating: 5,
          title: 'Finally understand what grade means',
          body: 'Tasted all three side by side and the difference is obvious once you try it this way. Went on to buy a full C5 jar.',
        },
        {
          author: 'Lucy P.',
          date: '30/01/2026',
          rating: 5,
          title: 'Great for the genuinely curious',
          body: "Gave this to my brother who loves spice comparisons. He's already asking about the reserve set.",
        },
        {
          author: 'Aiden W.',
          date: '08/12/2025',
          rating: 4,
          title: 'Really well explained',
          body: 'The origin card made it easy to know what to look for in each jar. Helpful, not just marketing.',
        },
      ],
    },
    crossSellSlugs: ['c5-heritage', 'alba-reserve', 'queen-of-spices-reserve-set-b', 'c4-daily'],
  },
};

const fallbackDetail: ProductDetail = {
  variant: { label: 'Size', value: '—' },
  description: '',
  details: [],
  pairsWith: '',
  audiences: [],
  reviews: { ratingCount: 'No reviews yet', items: [] },
  crossSellSlugs: [],
};

function resolveCategory(category: string): { category: string; categoryHref: string } {
  return category === 'gift-set'
    ? { category: 'Gift Sets', categoryHref: '/shop/gift-sets' }
    : { category: 'Shop', categoryHref: '/shop' };
}

export function getProductBySlug(slug: string | undefined): Product | undefined {
  if (!slug) return undefined;

  const base = strings.shop.products.find((product) => product.slug === slug);
  if (!base) return undefined;

  const extra = productDetails[slug] ?? fallbackDetail;
  const { category, categoryHref } = resolveCategory(base.category);

  const crossSellItems: ProductCrossSellItem[] = extra.crossSellSlugs
    .map((crossSellSlug) => strings.shop.products.find((product) => product.slug === crossSellSlug))
    .filter((product): product is (typeof strings.shop.products)[number] => Boolean(product))
    .map((product) => ({ title: product.name, price: product.price, href: `/products/${product.slug}` }));

  return {
    slug: base.slug,
    vendor: 'Natural Ceylon Cinnamon',
    title: base.name,
    price: base.price,
    category,
    categoryHref,
    variant: extra.variant,
    description: extra.description || base.description || base.name,
    details: extra.details,
    pairsWith: extra.pairsWith,
    audiences: extra.audiences,
    reviews: {
      heading: strings.productPage.reviewsHeading,
      subheading: strings.productPage.reviewsSubheading,
      ratingCount: extra.reviews.ratingCount,
      items: extra.reviews.items,
    },
    crossSell: {
      heading: strings.productPage.crossSellHeading,
      items: crossSellItems,
    },
  };
}
