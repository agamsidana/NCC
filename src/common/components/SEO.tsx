import { Helmet } from 'react-helmet-async'
import seoDefaults from '../constants/seo'
import type { SEOProps } from '../types/seo'

/**
 * Drop this at the top of every page component with page-specific overrides.
 * Handles title templating, meta description, canonical url, Open Graph /
 * Twitter cards, robots directives, and optional JSON-LD structured data.
 */
function SEO({ title, description, path = '/', image, noIndex = false, structuredData }: SEOProps) {
  const resolvedTitle = title ? seoDefaults.titleTemplate.replace('%s', title) : seoDefaults.defaultTitle
  const resolvedDescription = description ?? seoDefaults.defaultDescription
  const resolvedImage = image ?? seoDefaults.defaultImage
  const url = `${seoDefaults.siteUrl}${path}`
  const absoluteImage = resolvedImage.startsWith('http') ? resolvedImage : `${seoDefaults.siteUrl}${resolvedImage}`

  return (
    <Helmet>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={seoDefaults.siteName} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:locale" content={seoDefaults.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seoDefaults.twitterHandle} />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={absoluteImage} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO
