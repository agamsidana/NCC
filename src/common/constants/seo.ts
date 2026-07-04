/**
 * Site-wide SEO defaults. Individual pages override only what differs
 * (see the SEO usage inside each module's Page component).
 */
const seoDefaults = {
  siteName: 'My Site',
  titleTemplate: '%s | My Site',
  defaultTitle: 'My Site - Home',
  defaultDescription:
    'A short, keyword-relevant description of the site shown in search results.',
  siteUrl: 'https://example.com',
  defaultImage: '/og-image.png',
  twitterHandle: '@example',
  locale: 'en_US',
}

export default seoDefaults
