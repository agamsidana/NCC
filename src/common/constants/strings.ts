import { IMAGES } from "./image-source";

/**
 * Single source of truth for hardcoded UI copy (nav labels, footer text,
 * page copy, button labels, etc). Import from here instead of inlining
 * strings in components so copy changes happen in one place.
 */
const strings = {
  layout: {
    siteName: "NCC",
    tagline: "NATURAL CEYLON CINNAMON",
    announcement:
      "Authenticated Ceylon Cinnamon. C4 to Alba Reserve. Sourced Direct from Sri Lanka",
    nav: [
      { label: "Shop", href: "/shop" },
      { label: "The Science", href: "/the-science" },
      { label: "About NCC", href: "/about-ncc" },
      { label: "Find Your Ritual", href: "/find-your-ritual" },
      { label: "Recipes", href: "/recipes" },
    ],
    search: "Search",
    account: "Account",
    cart: "Cart",
    menu: "Menu",
    closeMenu: "Close menu",
  },
  home: {
    hero: {
      eyebrow: "Single-Origin Sri Lanka.",
      heading: "Better coffee. Better rituals. Better ingredients.",
      description:
        "Upgrade the drinks and pantry staples you already live on — coffee, chai, golden lattes, and daily blends — with true Ceylon cinnamon and traceable Sri Lankan ingredients chosen for function, flavour, and provenance.",
      rating: { score: "4.9", reviewCount: "200+ verified buyers" },
      primaryCta: "Shop Daily Rituals",
      secondaryCta: "Why Ceylon Matters",
      badges: [
        "Single-Origin Arabica",
        "True Ceylon Cinnamon",
        "Functional Latte Blends",
        "Direct Sri Lankan Sourcing",
      ],
    },
    trustBar: {
      items: [
        {
          label: "4.9 Average Rating",
          sublabel: "200+ Verified Buyers",
          icon: "mdi:star-outline",
        },
        {
          label: "30-Day Money-Back",
          sublabel: "No Questions Asked",
          icon: "mdi:shield-check-outline",
        },
        {
          label: "Zero Artificial Additives",
          sublabel: "Pure Ceylon Only",
          icon: "mdi:leaf-outline",
        },
        {
          label: "Dispatched Within 24h",
          sublabel: "From UK Warehouse",
          icon: "mdi:truck-fast-outline",
        },
        {
          label: "Batch Reports Published",
          sublabel: "Full Transparency",
          icon: "mdi:file-document-check-outline",
        },
      ],
    },
    whyProduct: {
      eyebrow: "Your Daily Ritual",
      heading: "Why Cinnamon, Why Now",
      paragraphs: [
        "Most cinnamon sold in the UK isn't actually cinnamon. It's Cassia, a cheaper bark loaded with coumarin that can cause issues at high doses. True Ceylon is different.",
        "Ceylon cinnamon has been studied for its role in supporting healthy metabolic function, particularly insulin sensitivity and blood sugar management after meals. NCC sources only authenticated Ceylon, graded by oil content, and verified by third-party testing. Your morning ritual deserves better ingredients.",
      ],
      stats: [
        { value: "C1–C5", label: "Heritage grade range" },
        {
          value: "0.04%",
          label: "Coumarin in true Ceylon (vs 1–3% in Cassia)",
        },
        { value: "100%", label: "Traceable to origin" },
      ],
      badge: "True Ceylon Certified",
      cta: "Explore the Science",
    },
    grade: {
      eyebrow: "The NCC Difference",
      heading: "Why Serious About Cinnamon Means Being Serious About Grade",
      subheading:
        "Every detail, from soil to grading to your cup, shapes the potency and purity of what you consume.",
      cards: [
        {
          icon: "mdi:water-outline",
          title: "Graded by Oil Content",
          description:
            "Ceylon is graded C0–C5 by essential oil concentration. Higher grade = greater potency. Most brands never disclose this.",
        },
        {
          icon: "mdi:map-marker-outline",
          title: "Single-Origin Sri Lanka",
          description:
            "Every batch is traceable to a specific growing region in Sri Lanka, the only country that produces true Ceylon cinnamon at scale.",
        },
        {
          icon: "mdi:flask-outline",
          title: "Third-Party Lab Verified",
          description:
            "We don't ask you to trust the label. Every batch is independently tested for purity, coumarin levels, and heavy metals.",
        },
        {
          icon: "mdi:tree-outline",
          title: "True Ceylon, Not Cassia",
          description:
            "Cassia is cheap. Ceylon is the real thing. We use only Cinnamomum verum: authentic, low-coumarin, genuine Ceylon.",
        },
        {
          icon: "mdi:eye-outline",
          title: "Transparent Sourcing",
          description:
            "We share our testing reports. You can see exactly what's in your cinnamon: no marketing fluff, no hidden corners.",
        },
      ],
    },
    gradeSystem: {
      eyebrow: "The Ceylon Range",
      heading: "One Ingredient, Graded for Every Ritual",
      subheading:
        "Every grade is authentic Ceylon cinnamon — the proof layer behind your coffee, chai, and daily pantry staples.",
      products: [
        {
          title: "C5 Heritage Ceylon Cinnamon 100g",
          description:
            "Higher essential oil concentration than C4. More aromatic, slightly sweeter. The most popular NCC grade.",
          price: "£10.95",
          href: "/products/c5-heritage",
          img: IMAGES.gradeSystem.image1,
        },
        {
          title: "C4 Daily Ceylon Cinnamon 100g",
          description:
            "The everyday workhorse. Consistent, clean, and reliable for daily use in coffee, oats, or cooking.",
          price: "£8.95",
          href: "/products/c4-daily",
          img: IMAGES.gradeSystem.image2,
        },
        {
          title: "Alba Reserve Ceylon Cinnamon 100g",
          description:
            "The most delicate grade. The innermost quill of the first-flush harvest. Ideal for finishing lattes, gifting, and serious cooks.",
          price: "£12.95",
          href: "/products/alba-reserve",
          img: IMAGES.gradeSystem.image3,
        },
      ],
      exploreCta: "Explore",
      viewAllCta: "View All Products",
    },
    rituals: {
      eyebrow: "How To Use",
      heading: "Two Rituals. One Ingredient.",
      subheading:
        "Ceylon cinnamon works as well in your morning coffee as it does in your afternoon chai.",
      morning: {
        tag: "Morning Coffee",
        tagIcon: "mdi:coffee-outline",
        heading: "The Morning Ritual",
        description:
          "Premium Arabica coffee blended with grade C5 Heritage Ceylon cinnamon.",
        steps: [
          "Measure ½ tsp NCC cinnamon",
          "Add to grounds before brewing, or stir into cup",
          "Enjoy immediately, no need to strain",
        ],
        cta: "Shop Cinnamon Coffee",
        href: "/products/ceylon-reserve-coffee",
      },
      afternoon: {
        tag: "Afternoon Chai",
        tagIcon: "mdi:tea-outline",
        heading: "The Afternoon Ritual",
        description:
          "One heaped teaspoon into hot oat milk. A deeply warming Sri Lankan spice blend.",
        steps: [
          "Add 1 tsp Ceylon Golden Chai to your cup",
          "Pour over hot oat milk or water. Stir well.",
          "Froth for a café-style finish. Sweeten if needed.",
        ],
        cta: "Shop Golden Chai Latte",
        href: "/products/golden-chai-latte",
      },
    },
    albaReserve: {
      eyebrow: "Alba Reserve",
      heading: "The Rarest Grade. Reserved for the Serious.",
      intro: "Alba is the inner quill of the first-flush cinnamon harvest.",
      description: "This is cinnamon at its finest expression.",
      points: [
        "Highest essential oil concentration in the NCC range",
        "Harvested once annually from select Sri Lankan farms",
        "Limited batch: no reformulation, no substitution",
      ],
      cta: "Explore Alba Reserve",
      shareLabel: "Share Alba",
      href: "/products/alba-reserve",
    },
    ourStory: {
      eyebrow: "Our Story",
      heading: "From Sri Lanka to Your Morning Cup",
      quote:
        "I couldn't find cinnamon in the UK that I'd actually trust. So I went back to the source.",
      authorName: "Ruwan Senavirathna",
      authorTitle: "Founder, Natural Ceylon Cinnamon",
      cta: "Read Our Full Story",
      href: "/about-ncc",
    },
    harvestPeople: {
      eyebrow: "Direct From The Estate",
      heading: "The People Behind the Harvest",
      description:
        "Ruwan's name is on the label. But the trust starts long before that — with the growers and estate workers in Sri Lanka who harvest and peel every stick by hand, the way their families have for generations.",
      photos: [
        {
          image: "grower1",
          caption: "Hand-harvesting the inner bark, the way it's done here for generations.",
        },
        {
          image: "grower2",
          caption: "Peeling and rolling each quill by hand — no machine replaces this step.",
        },
        {
          image: "grower3",
          caption: "Sun-drying on the estate before grading and export.",
        },
      ],
      cta: "Meet Our Growers",
      href: "/our-growers",
    },
    science: {
      eyebrow: "The Research",
      heading: "Backed by Peer-Reviewed Science",
      subheading:
        "Ceylon cinnamon has been the subject of hundreds of studies.",
      stats: [
        {
          icon: "mdi:pulse",
          value: "40+",
          label:
            "Peer-reviewed studies on Ceylon cinnamon and blood sugar management",
          source: "PubMed, 2010–2024",
        },
        {
          icon: "mdi:lightning-bolt-outline",
          value: "0.04%",
          label: "Coumarin content in true Ceylon vs. up to 1–3% in Cassia",
          source: "European Food Safety Authority",
        },
        {
          icon: "mdi:water-outline",
          value: "3x",
          label: "Higher essential oil concentration in grade C5 vs. C1 grade",
          source: "ISO 6539 grading standard",
        },
      ],
      disclaimer: "* These statements refer to complementary wellness support.",
      cta: "Read The Science Page",
      href: "/the-science",
    },
    reviews: {
      eyebrow: "What Customers Say",
      heading: "The Ritual Has Changed Their Mornings",
      ratingScore: "4.9",
      ratingCount: "200+ verified buyers",
      items: [
        {
          title: "Finally, cinnamon that actually tastes like something",
          body: "I'd been adding generic supermarket cinnamon to my coffee for years. Swapped to NCC C5 grade and the difference is remarkable.",
          author: "Sarah M.",
        },
        {
          title: "I check the label on everything now",
          body: "NCC was the only UK brand I found that actually grades their product and publishes their test results.",
          author: "James T.",
        },
        {
          title: "The Chai powder is my new morning ritual",
          body: "Oat milk chai with the NCC Golden Chai powder has replaced my second coffee.",
          author: "Priya K.",
        },
      ],
      cta: "Read All Reviews",
      href: "/reviews",
    },
    newsletter: {
      eyebrow: "Join The Ritual",
      heading: "Make Your Daily Cup Do More",
      subheading:
        "Coffee rituals, tea rituals, ingredient guides, new reserve drops — direct to your inbox.",
      points: [
        "Coffee & tea ritual guides",
        "Ingredient deep-dives & recipes",
        "New reserve drops, early access",
      ],
      placeholder: "Your email address",
      cta: "Join The Ritual List",
      disclaimer: "No spam. Unsubscribe any time.",
    },
  },
  footer: {
    tagline: "Make your daily cup do more.",
    certifiedBadge: "Certified True Ceylon Cinnamon (Cinnamomum verum)",
    columns: [
      {
        title: "Shop",
        links: [
          { label: "C4 Daily", href: "/products/c4-daily" },
          { label: "C5 Heritage", href: "/products/c5-heritage" },
          { label: "Alba Reserve", href: "/products/alba-reserve" },
          {
            label: "Ceylon Reserve Coffee",
            href: "/products/ceylon-reserve-coffee",
          },
          { label: "Golden Chai Latte", href: "/products/golden-chai-latte" },
          { label: "Gift Sets", href: "/shop?category=gift-set#all-products" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About NCC", href: "/about-ncc" },
          { label: "The Science", href: "/the-science" },
          { label: "Why Ceylon Matters", href: "/why-ceylon-matters" },
          { label: "Meet Our Growers", href: "/our-growers" },
          { label: "Recipes", href: "/recipes" },
          { label: "Find Your Ritual", href: "/find-your-ritual" },
          { label: "Coffee Ritual Guide", href: "/coffee-ritual-guide" },
          { label: "Golden Chai Ritual Guide", href: "/golden-chai-ritual-guide" },
          { label: "Metabolic Cinnamon Guide", href: "/metabolic-cinnamon-guide" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Shipping & Returns", href: "/shipping-returns" },
          { label: "FAQ", href: "/faq" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Terms of Service", href: "/terms-of-service" },
          { label: "Cookie Policy", href: "/cookie-policy" },
        ],
      },
    ],
    trustBadges: ["Lab Tested", "Single-Origin Sri Lanka", "Shipped from UK"],
    copyright: (year: number) =>
      `© ${year} Natural Ceylon Cinnamon. All rights reserved. Make your daily cup do more.`,
    cookiePreferences: "Cookie Preferences",
  },
  about: {
    title: "About NCC",
    subtitle: "From Sri Lanka to Your Daily Ritual",
    founder: {
      name: "Ruwan Senavirathna",
      role: "Founder, Natural Ceylon Cinnamon",
      photoCaption: "Ruwan Senavirathna, Founder — Natural Ceylon Cinnamon",
      quote:
        "I couldn't find cinnamon in the UK that I'd actually trust. So I went back to the source.",
      intro:
        "We work directly with growers in Sri Lanka on cinnamon, coffee, and the wider spice pantry — selecting each harvest by grade, testing every batch independently, and shipping directly to you.",
    },
    whyWeStarted: {
      heading: "Why We Started",
      paragraphs: [
        "After years of buying cinnamon labelled as 'Ceylon' only to find it was Cassia, or poorly stored, or unlabelled in terms of grade, Ruwan realised the problem wasn't just cinnamon — it was how many everyday rituals are built on low-grade, poorly explained ingredients with no real story behind them.",
        "Natural Ceylon Cinnamon exists to fix that, starting with what Sri Lanka does best: true Ceylon cinnamon, alongside the coffee, cardamom, and spice traditions that surround it. Every harvest is graded, tested independently for purity, and shipped directly to you. No middlemen. No substitutions.",
      ],
    },
    mission:
      "Ruwan isn't building a spice brand with a heritage story attached. He's building a Sri Lankan ritual brand rooted in ingredients his family has understood for generations — translating that knowledge into products you already know how to use.",
    differentiators: {
      heading: "What Makes NCC Different",
      items: [
        {
          title: "The grade system.",
          description:
            "Ceylon cinnamon is graded C0 to C5 by essential oil content. Higher grade means higher potency. Most brands don't disclose this. We built our entire product range around it.",
        },
        {
          title: "Traceability.",
          description:
            "Every batch is traceable to its growing region. Test reports available on request.",
        },
        {
          title: "Honest copy.",
          description:
            "We will not tell you cinnamon cures anything. What we will tell you is that it has been studied extensively for its role in supporting healthy metabolic function, and that grade and origin matter more than any marketing claim.",
        },
      ],
    },
    products: {
      heading: "Our Products",
      paragraph:
        "Our ritual collection starts with Ceylon Reserve Coffee for your morning and Ceylon Golden Chai Latte for your afternoon — both built on true Ceylon cinnamon, graded across three tiers (C4 Daily, C5 Heritage, and Alba Reserve) for however deep you want to go. Every product uses authenticated Ceylon, with no Cassia blending.",
    },
    basedInUk: {
      heading: "Based in the UK. Sourced in Sri Lanka.",
      paragraph:
        "Natural Ceylon Cinnamon ships across the United Kingdom. We're a small, focused brand, and we intend to stay that way. Quality over volume, always.",
    },
  },
  science: {
    title: "The Science Behind Ceylon Cinnamon",
    intro:
      "Ceylon cinnamon has been the subject of hundreds of peer-reviewed studies. Here's an honest summary of what the research says, and what it doesn't.",
    disclaimer:
      "These statements have not been evaluated by the MHRA. This product is not intended to diagnose, treat, cure, or prevent any disease.",
    sections: [
      {
        heading: "Ceylon vs. Cassia: Why Species Matters",
        image: IMAGES.science.whySpeciesMatter,
        paragraphs: [
          "Cassia (Cinnamomum cassia) and Ceylon (Cinnamomum verum) are botanically different plants. Ceylon is lighter in colour, more delicate in flavour, and critically different in its coumarin content. Cassia contains 1–5% coumarin. Authenticated Ceylon contains approximately 0.04%, more than 25x less.",
          "The European Food Safety Authority has set tolerable daily intake limits specifically because of Cassia's coumarin levels. If you're consuming cinnamon regularly, species matters.",
        ],
        note: null,
        source: "Source: European Food Safety Authority (EFSA).",
      },
      {
        heading: "Metabolic Health Research",
        image: IMAGES.science.metabolicHealthResearch,
        paragraphs: [
          "Over 40 peer-reviewed studies have examined cinnamon's relationship with glucose metabolism, insulin sensitivity, and post-meal blood sugar response. Several randomised controlled trials have shown statistically significant reductions in fasting blood glucose and HbA1c in participants supplementing with cinnamon regularly.",
        ],
        note: "Important note: Ceylon cinnamon is a complementary addition to a healthy lifestyle, not a treatment or cure for any medical condition. If you have a health condition, speak to a healthcare professional before supplementing.",
        source: "Source: PubMed, 2010–2024.",
      },
      {
        heading: "Why Grade Matters Scientifically",
        image: IMAGES.science.whyGradeMatters,
        paragraphs: [
          "Essential oil concentration varies significantly by grade. C1 grade contains roughly 0.5–1% volatile oil, while C5 Heritage contains 2.5–3%, and Alba Reserve tests highest of all. The bioactive compounds most studied are concentrated in the essential oil, which is why grade — not just species — determines potency.",
        ],
        note: null,
        source: "Source: ISO 6539 grading standard.",
      },
    ],
  },
  recipes: {
    title: "Recipes and Rituals",
    backToBlog: "Back to blog",
    shareLabel: "Share",
    productLabel: "NCC product",
    ingredientsHeading: "Ingredients",
    methodHeading: "Method",
    whyHeading: "The why",
    posts: [
      {
        slug: "ncc-metabolic-morning-tonic",
        title: "The NCC Metabolic Morning Tonic: Cinnamon, Lemon & Ginger",
        img: IMAGES.recipes.morningTonic,
        date: "July 3, 2026",
        excerpt:
          "A 60-second morning drink using three ingredients with functional history: Ceylon cinnamon, fresh lemon, and ginger. Zero caffeine.",
        product: "C4 Daily or C5 Heritage Ceylon Cinnamon",
        ingredients: [
          "300ml warm water (around 70°C — not boiling)",
          "½ tsp NCC C4 Daily or C5 Heritage Ceylon Cinnamon",
          "Juice of ½ lemon",
          "1cm fresh ginger, grated",
          "½ tsp raw honey (optional)",
        ],
        method: [
          "Add cinnamon and grated ginger to a mug.",
          "Pour over warm water — not boiling. Boiling water degrades the essential oils in Ceylon cinnamon.",
          "Add lemon juice. Stir well for 20 seconds.",
          "Add honey if using. Drink immediately.",
        ],
        why: [
          "Ceylon cinnamon has been studied for its role in supporting blood sugar management. Taking it before food is how many people build the habit.",
          "Lemon juice provides vitamin C and supports digestion.",
          "Ginger is a traditional digestive aid used across South Asian medicine for centuries.",
        ],
        disclaimer:
          "This is not a treatment for any condition. It's a functional daily habit using real, traceable ingredients — nothing more.",
      },
      {
        slug: "sri-lankan-red-dal-with-ceylon-cinnamon",
        title: "Sri Lankan Red Dal with Ceylon Cinnamon",
        img: IMAGES.recipes.redDal,
        date: "June 28, 2026",
        excerpt:
          "Cinnamon in dal is traditional in Sri Lanka — it adds a background warmth that deepens as it cooks. A simple weeknight red lentil dal using C4 Daily.",
        product: "C4 Daily Ceylon Cinnamon",
        ingredients: [
          "200g split red lentils, rinsed",
          "1 tbsp coconut oil or ghee",
          "1 small onion, finely chopped",
          "2 garlic cloves, crushed",
          "1cm fresh ginger, grated",
          "1 tsp turmeric",
          "½ tsp NCC C4 Daily Ceylon Cinnamon",
          "400ml water or vegetable stock",
          "Salt, to taste",
          "Fresh coriander, to serve",
        ],
        method: [
          "Melt the coconut oil in a pan and soften the onion, garlic, and ginger for 4–5 minutes.",
          "Stir in the turmeric and cinnamon and cook for 30 seconds until fragrant.",
          "Add the lentils and water. Bring to a simmer and cook for 20–25 minutes, stirring occasionally, until the lentils break down.",
          "Season with salt, top with fresh coriander, and serve warm.",
        ],
        why: [
          "Cinnamon in savoury cooking is common across Sri Lankan households — it rounds out the earthiness of lentils without adding sweetness.",
          "C4 Daily is graded for consistent, everyday use, so it holds its warmth through a 20-minute simmer without turning bitter.",
        ],
        disclaimer: null,
      },
      {
        slug: "golden-chai-french-toast",
        title: "Golden Chai French Toast: A Weekend Breakfast Ritual",
        img: IMAGES.recipes.chaiFrenchToast,
        date: "June 21, 2026",
        excerpt:
          "The Golden Chai Latte blend — cinnamon, cardamom, ginger, black pepper — makes one of the best French toast batters we've tried.",
        product: "Golden Chai Latte",
        ingredients: [
          "2 large eggs",
          "120ml whole or oat milk",
          "1 heaped tsp NCC Golden Chai Latte powder",
          "½ tsp vanilla extract (optional)",
          "4 thick slices of bread (brioche or sourdough work best)",
          "Butter, for frying",
        ],
        method: [
          "Whisk the eggs, milk, Golden Chai powder, and vanilla together in a shallow dish until smooth.",
          "Dip each slice of bread in the mixture, letting it soak for 20–30 seconds per side.",
          "Melt butter in a pan over medium heat and fry each slice for 2–3 minutes per side, until golden.",
          "Serve immediately with fruit, honey, or maple syrup.",
        ],
        why: [
          "The Golden Chai blend's cardamom and black pepper give French toast a warmth plain cinnamon can't on its own.",
          "Soaking (not just dusting) the bread means the spice cooks into the custard instead of sitting on top.",
        ],
        disclaimer: null,
      },
      {
        slug: "iced-ceylon-cinnamon-coffee",
        title: "Iced Ceylon Cinnamon Coffee: The Cold Brew Upgrade",
        img: IMAGES.recipes.icedCoffee,
        date: "June 14, 2026",
        excerpt:
          "Cold brew steeped with NCC C5 Heritage Ceylon cinnamon, poured over ice, finished with oat milk. Takes 12 hours to prepare, 2 minutes to serve.",
        product: "C5 Heritage Ceylon Cinnamon",
        ingredients: [
          "100g coarsely ground coffee",
          "1 tsp NCC C5 Heritage Ceylon Cinnamon",
          "1 litre cold water",
          "Ice cubes",
          "Oat milk, to taste",
        ],
        method: [
          "Combine the ground coffee and cinnamon in a large jar or cold brew maker.",
          "Pour over the cold water, stir once, and cover. Steep in the fridge for 12 hours.",
          "Strain through a fine sieve or cheesecloth into a clean jug.",
          "Pour over ice and top with oat milk to taste. Keeps in the fridge for up to a week.",
        ],
        why: [
          "Cold steeping avoids the heat that can degrade cinnamon's essential oils, so more of C5 Heritage's aroma carries through into the finished drink.",
          "Twelve hours is a starting point — steep longer for a stronger, more concentrated batch.",
        ],
        disclaimer: null,
      },
      {
        slug: "ceylon-cinnamon-rolls-with-alba-reserve-glaze",
        title: "Ceylon Cinnamon Rolls with Alba Reserve Glaze",
        img: IMAGES.recipes.cinnamonRolls,
        date: "June 7, 2026",
        excerpt:
          "Using NCC's Alba Reserve — the most delicate grade in our range — gives the filling a floral warmth that's genuinely different to any cinnamon roll you've had before.",
        product: "Alba Reserve Ceylon Cinnamon",
        ingredients: [
          "500g strong white bread flour",
          "7g fast-action yeast",
          "60g caster sugar",
          "250ml warm milk",
          "1 egg",
          "60g butter, softened",
          "80g soft brown sugar (for the filling)",
          "2 tsp NCC Alba Reserve Ceylon Cinnamon",
          "100g icing sugar and 2 tbsp milk (for the glaze)",
        ],
        method: [
          "Mix the flour, yeast, sugar, milk, and egg into a soft dough. Knead for 8–10 minutes, then prove for 1 hour until doubled.",
          "Roll the dough into a large rectangle. Spread with softened butter, then scatter over the brown sugar mixed with Alba Reserve cinnamon.",
          "Roll tightly into a log, slice into 10–12 rounds, and arrange in a lined baking tin. Prove for a further 30 minutes.",
          "Bake at 180°C for 20–25 minutes until golden. Whisk the icing sugar and milk into a glaze and drizzle over the warm rolls.",
        ],
        why: [
          "Alba Reserve is the most delicate grade we offer, so the filling reads as floral rather than sharply spiced — genuinely different from a standard cinnamon roll.",
          "Because Alba is a finishing-grade cinnamon, a little goes further than it would with C4 or C5.",
        ],
        disclaimer: null,
      },
      {
        slug: "ceylon-cinnamon-cardamom-energy-balls",
        title: "Ceylon Cinnamon and Cardamom Energy Balls: A No-Bake Snack",
        img: IMAGES.recipes.energyBalls,
        date: "May 31, 2026",
        excerpt:
          "No-bake energy balls made from dates, oats, true Ceylon cinnamon, and cardamom. A genuinely satisfying snack that takes ten minutes to make.",
        product: "C4 Daily Ceylon Cinnamon",
        ingredients: [
          "200g pitted dates",
          "100g rolled oats",
          "2 tbsp almond butter (or any nut butter)",
          "1 tsp NCC C4 Daily Ceylon Cinnamon",
          "½ tsp ground cardamom",
          "Pinch of salt",
          "1–2 tbsp water, if needed",
        ],
        method: [
          "Blitz the dates, oats, almond butter, cinnamon, cardamom, and salt in a food processor until it forms a sticky dough.",
          "Add a splash of water if the mixture is too dry to bind.",
          "Roll into 12 small balls and chill in the fridge for at least 20 minutes.",
          "Store in an airtight container in the fridge for up to a week.",
        ],
        why: [
          "Dates provide natural sweetness so there's no added sugar in this recipe.",
          "Cinnamon and cardamom together are a common pairing across South Asian sweets — a genuinely satisfying flavour combination, not just a health-food add-on.",
        ],
        disclaimer: null,
      },
    ],
    pagination: { currentPage: 1, totalPages: 5 },
  },
  shop: {
    title: "Shop",
    description:
      "Every grade is authentic Ceylon. Choose by your goals and how your palate leans.",
    exploreCta: "Explore",
    products: [
      {
        slug: "c5-heritage",
        name: "C5 Heritage Ceylon Cinnamon 100g",
        category: "cinnamon",
        description:
          "Higher essential oil concentration than C4. More aromatic, slightly sweeter. The most popular NCC grade.",
        price: "£10.95",
        img: IMAGES.gradeSystem.image1,
      },
      {
        slug: "c4-daily",
        name: "C4 Daily Ceylon Cinnamon 100g",
        category: "cinnamon",
        description:
          "The everyday workhorse. Consistent, clean, and reliable for daily use in coffee, oats, or cooking.",
        price: "£8.95",
        img: IMAGES.gradeSystem.image2,
      },
      {
        slug: "alba-reserve",
        name: "Alba Reserve Ceylon Cinnamon 100g",
        category: "cinnamon",
        description:
          "The most delicate grade. The smallest cut of the first-flush harvest. Ideal for finishing lattes, gifting, and serious cinnamon lovers.",
        price: "£12.95",
        img: IMAGES.gradeSystem.image3,
      },
      {
        slug: "ceylon-reserve-coffee",
        name: "Ceylon Reserve Coffee",
        category: "coffee",
        description:
          "Premium Arabica coffee blended with grade C5 Heritage Ceylon cinnamon.",
        price: "£12.95",
        img: IMAGES.ritual1,
      },
      {
        slug: "golden-chai-latte",
        name: "Golden Chai Latte",
        category: "tea",
        description:
          "One heaped teaspoon into hot oat milk. A deeply warming Sri Lankan spice blend.",
        price: "£19.95",
        img: IMAGES.mainProduct1,
      },
      {
        slug: "ceylon-reserve-coffee-tin",
        name: "Ceylon Reserve Coffee Tin",
        category: "coffee",
        description:
          "The same Ceylon Reserve blend, in a reusable tin built to stay on the counter.",
        price: "£16.95",
        img: IMAGES.bestSellerCoffee,
      },
      {
        slug: "ceylon-estate-black-tea",
        name: "Ceylon Estate Black Tea Box",
        category: "tea",
        description:
          "Single-origin loose-leaf Ceylon black tea, for an unspiced afternoon ritual.",
        price: "£15.95",
        img: IMAGES.bestSellerTea,
      },
      {
        slug: "ceylon-dark-roast-coffee",
        name: "Ceylon Dark Roast Coffee",
        category: "coffee",
        description:
          "Bold single-origin Arabica, dark roasted — no cinnamon blended in, so you control the ritual.",
        price: "£13.95",
        img: IMAGES.ceylonDarkRoast,
      },
      {
        slug: "ceylon-cold-brew-concentrate",
        name: "Ceylon Cold Brew Concentrate",
        category: "coffee",
        description:
          "Ready-to-mix cold brew concentrate, infused with true Ceylon cinnamon — built for iced rituals.",
        price: "£15.95",
        img: IMAGES.ceylonColdBrew,
      },
      {
        slug: "ceylon-herbal-wellness-tea",
        name: "Ceylon Herbal Wellness Tea",
        category: "tea",
        description:
          "Caffeine-free herbal blend of Ceylon turmeric, ginger, and holy basil — an evening wind-down ritual.",
        price: "£14.95",
        img: IMAGES.ceylonHerbalWellness,
      },
      {
        slug: "ceylon-green-tea",
        name: "Ceylon Green Tea",
        category: "tea",
        description:
          "Single-origin Ceylon green tea, lightly oxidised — a brighter, lower-caffeine daily cup.",
        price: "£13.95",
        img: IMAGES.ceylonGreenTea,
      },
      {
        slug: "spice-of-kings-set-a",
        name: "Ceylon Spice Sampler",
        category: "gift-set",
        description:
          "Three 30g jars of Sri Lanka's finest: true Ceylon cinnamon, cardamom, and cloves or pepper.",
        price: "£34.95",
        img: IMAGES.giftSets.spiceSampler,
      },
      {
        slug: "queen-of-spices-reserve-set-b",
        name: "Ceylon Reserve Spice Collection",
        category: "gift-set",
        description:
          "The reserve edition — three full 100g jars at our highest grades, built to last months.",
        price: "£69.00",
        img: IMAGES.giftSets.reserveSpiceCollection,
      },
      {
        slug: "morning-ritual-duo",
        name: "Morning Ritual Duo",
        category: "gift-set",
        description:
          "Ceylon Reserve Coffee and C5 Heritage cinnamon, sized to run out together every month.",
        price: "£19.95",
        img: IMAGES.giftSets.morningRitualDuo,
      },
      {
        slug: "chai-and-ceylon-set",
        name: "Chai & Ceylon Set",
        category: "gift-set",
        description:
          "Golden Chai Latte paired with C4 Daily cinnamon — warm spice for your afternoon ritual.",
        price: "£25.95",
        img: IMAGES.giftSets.chaiAndCeylonSet,
      },
      {
        slug: "daily-ritual-trio",
        name: "Daily Ritual Trio",
        category: "gift-set",
        description:
          "Coffee, chai, and cinnamon in one box — three everyday products, graded for daily use.",
        price: "£37.00",
        img: IMAGES.giftSets.dailyRitualTrio,
      },
      {
        slug: "ceramic-mug",
        name: "Ceramic Mug",
        category: "accessory",
        description: "A weighted, matte-finish mug sized for a proper morning pour.",
        price: "£18.00",
        img: IMAGES.brewingEssentials.ceramicMug,
      },
      {
        slug: "coffee-spoon",
        name: "Coffee Spoon",
        category: "accessory",
        description: "A long-handled measuring spoon for precise, consistent brewing.",
        price: "£9.00",
        img: IMAGES.brewingEssentials.coffeeSpoon,
      },
      {
        slug: "french-press",
        name: "French Press",
        category: "accessory",
        description: "Borosilicate glass and brushed steel, for a full-bodied everyday brew.",
        price: "£34.00",
        img: IMAGES.brewingEssentials.frenchPress,
      },
      {
        slug: "coffee-grinder",
        name: "Coffee Grinder",
        category: "accessory",
        description: "A manual burr grinder for a consistent grind, cup after cup.",
        price: "£52.00",
        img: IMAGES.brewingEssentials.coffeeGrinder,
      },
      {
        slug: "glass-storage-jar",
        name: "Glass Storage Jar",
        category: "accessory",
        description: "Airtight glass storage to keep beans and spice at their best.",
        price: "£16.00",
        img: IMAGES.brewingEssentials.glassStorageJar,
      },
      {
        slug: "pour-over-dripper",
        name: "Pour Over Dripper",
        category: "accessory",
        description: "Ceramic dripper for a clean, slow, single-cup ritual.",
        price: "£28.00",
        img: IMAGES.brewingEssentials.pourOverDripper,
      },
    ],
    hero: {
      eyebrow: "Morning Rituals",
      heading: "Coffee Crafted for Slow Mornings",
      description:
        "Single-origin coffee, Ceylon cinnamon and curated essentials for your daily ritual.",
      cta: "Explore Rituals",
    },
    ritualHeading: {
      heading: "Choose Your Ritual",
      subheading: "Everything you need for a better morning.",
    },
    ritualCards: [
      {
        title: "Coffee",
        description: "Explore premium coffee blends.",
        img: IMAGES.ritual1,
        href: "/shop?category=coffee#all-products",
      },
      {
        title: "Tea & Chai",
        description: "Black tea, chai latte & herbal blends.",
        img: IMAGES.teaAndChai,
        href: "/shop?category=tea#all-products",
      },
      {
        title: "Cinnamon",
        description: "Pure Ceylon cinnamon collection.",
        img: IMAGES.cinnamon,
        href: "/shop?category=cinnamon#all-products",
      },
      {
        title: "Brewing Essentials",
        description: "Ceramic mug, wooden spoon, French press and coffee grinder arranged neatly.",
        img: IMAGES.ritual2,
        href: "/shop#accessories",
      },
      {
        title: "Gift Sets",
        description: "Curated gift collections.",
        img: IMAGES.giftSet,
        href: "/shop?category=gift-set#all-products",
      },
    ],
    featuredCoffee: {
      badge: "Best Seller",
      heading: "Ceylon Reserve Coffee Tin",
      description: "Rich aroma, smooth finish and crafted for everyday rituals.",
      cta: "View Details",
      addToCartCta: "Add to Cart",
      href: "/products/ceylon-reserve-coffee-tin",
      img: IMAGES.bestSellerCoffee,
    },
    featuredChai: {
      badge: "Best Seller",
      heading: "Ceylon Estate Black Tea Box",
      description: "Single-origin loose-leaf Ceylon black tea, unspiced and traceable.",
      cta: "View Details",
      addToCartCta: "Add to Cart",
      href: "/products/ceylon-estate-black-tea",
      img: IMAGES.bestSellerTea,
    },
    accessoriesHeading: {
      heading: "Complete Your Coffee Ritual",
    },
    allProductsHeading: {
      heading: "All Products",
    },
  },
  productPage: {
    addToCartCta: "Add To Cart",
    buyNowCta: "Buy it now",
    shareLabel: "Share",
    quantityLabel: "Quantity",
    taxesNote: "Taxes included.",
    trustBadges: [
      { icon: "mdi:calendar-check-outline", label: "30-Day Money-Back" },
      { icon: "mdi:truck-fast-outline", label: "Dispatched Within 24h" },
      { icon: "mdi:flask-outline", label: "Lab Tested" },
    ],
    whoIsThisForHeading: "Who is this for?",
    reviewsHeading: "What Our Customers Say",
    reviewsSubheading: "Customer Reviews",
    crossSellHeading: "Complete Your Ritual",
  },
  reviewsPage: {
    title: "Customer Reviews",
    subtitle:
      "What customers are saying across the NCC range — real reviews from every product.",
  },
  findYourRitual: {
    title: "Find Your Ritual",
    intro: {
      eyebrow: "Find Your Ritual",
      heading: "Not Sure Which Grade Is Right for You?",
      subheading: "5 quick questions. We match you to the right grade.",
      steps: [
        "Tell us your goals",
        "Describe your routine",
        "Get your recommendation",
      ],
      cta: "Start the Quiz",
      duration: "Takes less than 60 seconds",
    },
    questions: [
      {
        question: "What's your main goal with Ceylon cinnamon?",
        options: [
          {
            label: "Sharpen my focus and mental clarity",
            grade: "c5-heritage",
          },
          {
            label: "Support healthy blood sugar and metabolism",
            grade: "alba-reserve",
          },
          {
            label: "Unwind, reduce stress and sleep better",
            grade: "c4-daily",
          },
          { label: "I'm curious about natural wellness", grade: "c4-daily" },
        ],
      },
      {
        question: "How often do you plan to use it?",
        options: [
          { label: "Every single day", grade: "c4-daily" },
          { label: "A few times a week", grade: "c5-heritage" },
          { label: "Occasionally, as a treat", grade: "alba-reserve" },
          { label: "Mostly to gift it to someone", grade: "alba-reserve" },
        ],
      },
      {
        question: "Where will it go first?",
        options: [
          { label: "My morning coffee", grade: "c5-heritage" },
          { label: "Tea, chai, or lattes", grade: "c4-daily" },
          { label: "Baking and cooking", grade: "c4-daily" },
          { label: "Not sure yet", grade: "c4-daily" },
        ],
      },
      {
        question: "How would you describe your palate?",
        options: [
          { label: "I like bold, warming spice", grade: "c4-daily" },
          {
            label: "I prefer something delicate and subtle",
            grade: "alba-reserve",
          },
          {
            label:
              "I want the most authentic Ceylon flavour, whatever the intensity",
            grade: "c5-heritage",
          },
          { label: "I don't have a strong preference", grade: "c4-daily" },
        ],
      },
      {
        question: "What matters most to you?",
        options: [
          { label: "Everyday reliability and value", grade: "c4-daily" },
          { label: "The most aromatic, popular grade", grade: "c5-heritage" },
          { label: "The rarest, most exclusive grade", grade: "alba-reserve" },
          {
            label: "Just exploring — I want to start somewhere",
            grade: "c4-daily",
          },
        ],
      },
    ],
    progressLabel: (current: number, total: number) =>
      `Question ${current} of ${total}`,
    backCta: "Back",
    nextCta: "Next",
    result: {
      eyebrow: "Your Match",
      heading: "Here's Your Ritual",
      retakeCta: "Retake the Quiz",
      shopCta: "Shop This Grade",
    },
  },
  cart: {
    title: "Your Cart",
    emptyHeading: "Your cart is empty",
    emptyMessage:
      "Looks like you haven't added anything yet. Explore the shop to find your ritual.",
    continueShoppingCta: "Continue Shopping",
    taxesNote: "Taxes included. Discounts and shipping calculated at checkout.",
    estimatedTotalLabel: "Estimated total",
    checkoutCta: "Checkout",
    removeLabel: "Remove",
  },
  infoPages: {
    whyCeylonMatters: {
      title: "Why Ceylon Matters",
      intro:
        "Cinnamon isn't cinnamon. Here's why the difference between Ceylon and Cassia is worth caring about.",
      sections: [
        {
          heading: "Two Different Plants",
          paragraphs: [
            'What\'s sold as "cinnamon" in most UK supermarkets isn\'t Ceylon cinnamon (Cinnamomum verum) at all — it\'s Cassia (Cinnamomum cassia), a related but distinct bark. Cassia is cheaper to grow, harder-barked, and far more common worldwide.',
            "Ceylon is lighter in colour, more delicate in flavour, and grown almost exclusively in Sri Lanka — the only country that produces true Ceylon cinnamon at commercial scale.",
          ],
        },
        {
          heading: "The Coumarin Difference",
          paragraphs: [
            "Cassia naturally contains high levels of coumarin — a compound the European Food Safety Authority has set strict tolerable daily intake limits around. Cassia can contain 1–5% coumarin; authenticated Ceylon contains approximately 0.04%, more than 25 times less.",
            "If cinnamon is part of your daily routine — coffee, tea, baking — species matters more than most labels let on.",
          ],
        },
        {
          heading: "Why We Grade Everything",
          paragraphs: [
            "Ceylon cinnamon isn't one fixed thing either. Essential oil concentration — the source of its aroma, flavour, and potency — varies significantly by harvest and cut, which is why we grade our range from C4 Daily through to Alba Reserve rather than selling a single generic jar.",
            "Every batch is tested independently for purity and graded before it reaches you. No blending, no guesswork.",
          ],
        },
        {
          heading: "Our Promise",
          paragraphs: [
            "We source directly from growers in Sri Lanka, we publish what we test for, and we will never tell you cinnamon cures anything it doesn't. Just the real thing, graded honestly.",
          ],
        },
      ],
    },
    shippingReturns: {
      title: "Shipping & Returns",
      intro:
        "Straightforward shipping and a genuine 30-day money-back guarantee — no small print games.",
      sections: [
        {
          heading: "Shipping",
          paragraphs: [
            "All orders are dispatched from our UK warehouse within 24 hours of being placed, Monday to Friday.",
            "Standard delivery typically arrives within 3–5 business days. Tracking is included and emailed to you once your order ships.",
          ],
        },
        {
          heading: "30-Day Money-Back Guarantee",
          paragraphs: [
            "If you're not happy with your order for any reason, get in touch within 30 days of delivery and we'll offer a refund or replacement — no questions asked.",
            "Opened jars are absolutely fine to return under this guarantee. We'd rather you try it properly than guess from the outside.",
          ],
        },
        {
          heading: "Damaged or Missing Items",
          paragraphs: [
            "If anything arrives damaged or an item is missing from your order, contact us with your order number and we'll sort it as quickly as possible — usually a replacement, dispatched the same or next working day.",
          ],
        },
      ],
    },
    privacyPolicy: {
      title: "Privacy Policy",
      intro:
        "How Natural Ceylon Cinnamon collects, uses, and protects your information. Last updated 5 July 2026.",
      sections: [
        {
          heading: "Information We Collect",
          paragraphs: [
            "When you place an order, we collect the details needed to fulfil it: your name, delivery address, email, and phone number. Payment details are collected and processed securely by our payment provider — we never store full card numbers ourselves.",
            "We also collect basic site usage data (such as pages visited) to help us understand and improve the shopping experience.",
          ],
        },
        {
          heading: "How We Use Your Information",
          paragraphs: [
            "We use your information to process and deliver orders, respond to customer service enquiries, and — only if you've opted in — send occasional emails about new products or reserve drops. You can unsubscribe from marketing emails at any time.",
          ],
        },
        {
          heading: "Sharing Your Information",
          paragraphs: [
            "We share only what's necessary with the parties who help us run the business: our payment processor and delivery couriers. We do not sell your information to third parties.",
          ],
        },
        {
          heading: "Your Rights",
          paragraphs: [
            "Under UK data protection law, you can request access to, correction of, or deletion of your personal information at any time. Contact us and we'll action your request promptly.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "Our site uses cookies to support core functionality like your cart and checkout, and to understand site usage. See our Cookie Policy for full detail.",
          ],
        },
      ],
    },
    termsOfService: {
      title: "Terms of Service",
      intro:
        "The terms that apply when you order from Natural Ceylon Cinnamon. Last updated 5 July 2026.",
      sections: [
        {
          heading: "Orders & Acceptance",
          paragraphs: [
            "Placing an order through our site is an offer to purchase, which we confirm by email once accepted. We reserve the right to cancel and refund an order if a product turns out to be unavailable.",
          ],
        },
        {
          heading: "Pricing & Payment",
          paragraphs: [
            "All prices are listed in GBP and are inclusive of applicable taxes unless stated otherwise. Payment is taken at checkout via our payment provider.",
          ],
        },
        {
          heading: "Shipping & Delivery",
          paragraphs: [
            "Delivery timeframes on our Shipping & Returns page are estimates, not guarantees. We are not liable for delays caused by circumstances outside our control, including courier delays.",
          ],
        },
        {
          heading: "Returns & Refunds",
          paragraphs: [
            "Our 30-day money-back guarantee is detailed in full on our Shipping & Returns page and applies to every order.",
          ],
        },
        {
          heading: "Product Information",
          paragraphs: [
            "We describe our products as accurately as possible. Our cinnamon is a food ingredient, not a medical treatment — statements about grade or origin are not intended to diagnose, treat, cure, or prevent any disease.",
          ],
        },
        {
          heading: "Limitation of Liability",
          paragraphs: [
            "To the extent permitted by law, our liability for any claim relating to an order is limited to the amount paid for that order.",
          ],
        },
        {
          heading: "Governing Law",
          paragraphs: ["These terms are governed by the laws of England and Wales."],
        },
      ],
    },
    cookiePolicy: {
      title: "Cookie Policy",
      intro:
        "What cookies we use on this site, and how you can manage them. Last updated 5 July 2026.",
      sections: [
        {
          heading: "What Are Cookies",
          paragraphs: [
            "Cookies are small files stored on your device that help websites function and remember your preferences between visits.",
          ],
        },
        {
          heading: "How We Use Cookies",
          paragraphs: [
            "We use essential cookies to support core functions like your cart and checkout, functional cookies to remember your preferences, and analytics cookies to understand how visitors use our site so we can improve it.",
          ],
        },
        {
          heading: "Managing Cookies",
          paragraphs: [
            "You can control or delete cookies at any time through your browser settings. Disabling essential cookies may affect the checkout and other core features of the site.",
          ],
        },
      ],
    },
  },
  faq: {
    title: "Frequently Asked Questions",
    intro: "Straight answers about our cinnamon, grading, shipping, and more.",
    items: [
      {
        question: "Is your cinnamon really different from what's in supermarkets?",
        answer:
          'Almost certainly, yes. Most supermarket "cinnamon" in the UK is Cassia, not true Ceylon cinnamon. We only sell authenticated Ceylon (Cinnamomum verum), sourced directly from Sri Lanka.',
      },
      {
        question: "What do the C4, C5, and Alba Reserve grades mean?",
        answer:
          "Ceylon cinnamon is graded by essential oil concentration. Higher grades mean more aroma and potency. C4 Daily is our everyday grade, C5 Heritage is our most popular, and Alba Reserve is the rarest, harvested once a year.",
      },
      {
        question: "Is coumarin dangerous?",
        answer:
          "Coumarin is naturally present in cinnamon and is only a concern at the levels found in Cassia, which the European Food Safety Authority has set intake limits around. Authenticated Ceylon contains roughly 25 times less, which is why species matters if you use cinnamon regularly.",
      },
      {
        question: "Where do you ship?",
        answer:
          "We currently ship across the United Kingdom. Orders are dispatched within 24 hours and typically arrive in 3–5 business days.",
      },
      {
        question: "What's your returns policy?",
        answer:
          "A genuine 30-day money-back guarantee. If you're not happy, contact us within 30 days of delivery for a refund or replacement — opened jars are fine.",
      },
      {
        question: "Do you offer subscriptions?",
        answer:
          "Not yet — for now every order is one-off, but it's something we're considering as we grow. Join our newsletter list on the homepage to hear if that changes.",
      },
      {
        question: "Can I see your test results?",
        answer:
          "Yes. Every batch is independently tested for purity, coumarin levels, and heavy metals, and reports are available on request — see The Science page for more detail.",
      },
    ],
  },
  contact: {
    title: "Contact",
    intro: "Questions about an order, a grade, or anything else — we read every message.",
    email: "hello@naturalceyloncinnamon.co.uk",
    emailLabel: "Email us",
    responseTime: "We aim to reply within 1 business day.",
    hoursLabel: "Hours",
    hours: "Monday–Friday, 9am–5pm (UK time)",
    basedInLabel: "Based in",
    basedIn: "United Kingdom · Sourced in Sri Lanka",
    quickLinksLabel: "Quick links",
    quickLinks: [
      { label: "FAQ", href: "/faq" },
      { label: "Shipping & Returns", href: "/shipping-returns" },
    ],
  },
  ritualGuides: {
    coffee: {
      tag: "Morning Ritual",
      title: "The Coffee Ritual Guide",
      image: IMAGES.ritual1,
      intro:
        "Coffee is already a fixed habit — which makes it the easiest place to start. Ceylon Reserve Coffee pairs single-origin Sri Lankan Arabica with true Ceylon cinnamon and cardamom, turning the cup you already make every day into something warmer, more distinctive, and more ownable.",
      stepsHeading: "How to Make It",
      steps: [
        "Measure ½ tsp Ceylon cinnamon into your grounds before brewing, or stir it straight into your cup.",
        "Brew as normal — filter, cafetière, or pour-over all work.",
        "Enjoy immediately. No need to strain.",
      ],
      whyHeading: "Why This Works",
      whyPoints: [
        "Ceylon cinnamon adds natural warmth and a subtly sweet edge, without added sugar.",
        "Cardamom rounds out the bitterness of a dark roast.",
        "Cinnamon's essential oils are delicate — add it to warm grounds or a finished cup, never to boiling water.",
      ],
      productSlug: "ceylon-reserve-coffee",
      productCta: "Shop Ceylon Reserve Coffee",
    },
    goldenChai: {
      tag: "Afternoon Ritual",
      title: "The Golden Chai Ritual Guide",
      image: IMAGES.teaAndChai,
      intro:
        "The afternoon slump doesn't need a second coffee. Ceylon Golden Chai Latte Blend is a comfort ritual with compound logic — cinnamon, cardamom, ginger, and black pepper, chosen for how they work together, not just how they taste.",
      stepsHeading: "How to Make It",
      steps: [
        "Add 1 heaped teaspoon of Golden Chai Latte Blend to your cup.",
        "Pour over hot oat milk or water and stir well.",
        "Froth for a café-style finish, or drink as is. Sweeten only if you want to.",
      ],
      whyHeading: "Why This Works",
      whyPoints: [
        "Black pepper increases the bioavailability of the other compounds in the blend.",
        "Ginger and cardamom are traditional digestive aids used across South Asian medicine for centuries.",
        "No added sugar — the sweetness comes from the spice blend itself, not a syrup base.",
      ],
      productSlug: "golden-chai-latte",
      productCta: "Shop Golden Chai Latte",
    },
    metabolicCinnamon: {
      tag: "Daily Base",
      title: "The Metabolic Cinnamon Guide",
      image: IMAGES.gradeSystem.image2,
      intro:
        "True Ceylon cinnamon is the foundational ingredient underneath every ritual in this range — not just coffee and chai, but porridge, smoothies, oats, and any blood-sugar-aware routine. This is the guide to using it well, at whichever grade fits your goals.",
      stepsHeading: "How to Use It",
      steps: [
        "Start with ¼–½ tsp per serving — Ceylon's flavour is more delicate than Cassia, so a little goes further than you'd expect.",
        "Add it after cooking or brewing, not before — heat above boiling degrades its essential oils.",
        "Store in a sealed container away from light and heat to preserve potency.",
      ],
      whyHeading: "Why Grade Matters Here",
      whyPoints: [
        "C4 Daily is graded for consistent, everyday use — coffee, oats, and cooking.",
        "C5 Heritage carries a higher essential oil concentration, for a more aromatic result in baking and lattes.",
        "Alba Reserve is the finishing grade — best dusted over a finished drink or dessert, not cooked.",
      ],
      productSlug: "c4-daily",
      productCta: "Shop Ceylon Cinnamon",
    },
  },
  growers: {
    eyebrow: "Direct From The Estate",
    title: "The People Behind the Harvest",
    intro:
      "Every grade in the NCC range starts the same way — with someone climbing, cutting, and peeling by hand. This is that part of the story: the people we source from, and why that relationship is the actual proof behind every claim on our label.",
    sections: [
      {
        heading: "A Relationship, Not a Transaction",
        paragraphs: [
          "These are the same estates and the same families my father sourced from when I was a child. When I say 'direct Sri Lankan sourcing,' I mean it literally — no brokers reshaping the story between the tree and the label.",
          "That relationship is what makes grading honest. When you know the people who peeled the bark, you know exactly what you're grading — and you can't fake that with a supply chain you've never seen.",
        ],
      },
      {
        heading: "How It's Actually Made",
        paragraphs: [
          "True Ceylon cinnamon is peeled, not stripped — thin layers of inner bark rolled by hand into the quills you recognise. It's slow, skilled work, done the same way it has been for generations, because machinery still can't replicate it without damaging the bark's essential oils.",
          "Every grade you see on this site — C4 Daily, C5 Heritage, Alba Reserve — starts as the same hand-peeled bark. The grade is decided afterwards, by how fine, how aromatic, and how consistent that particular harvest turns out to be.",
        ],
      },
    ],
    gallery: [
      {
        image: "grower1",
        caption: "Hand-harvesting the inner bark, the way it's done here for generations.",
      },
      {
        image: "grower2",
        caption: "Peeling and rolling each quill by hand — no machine replaces this step.",
      },
      {
        image: "grower3",
        caption: "Sun-drying on the estate before grading and export.",
      },
    ],
    cta: "Shop The Ceylon Range",
    href: "/shop",
  },
  notFound: {
    eyebrow: "Lost Your Way?",
    title: "404",
    heading: "This Page Doesn't Exist",
    message:
      "The page you're looking for doesn't exist. It may have been moved, or the link might be off.",
    backHome: "Back to Home",
    quickLinksLabel: "Or try one of these",
    quickLinks: [
      { label: "Shop All Products", href: "/shop" },
      { label: "Recipes & Rituals", href: "/recipes" },
      { label: "The Science", href: "/the-science" },
    ],
  },
} as const;

export type Strings = typeof strings;

export default strings;
