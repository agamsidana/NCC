export interface SEOProps {
  title?: string
  description?: string
  /** Path only, e.g. "/products/123" — prepended with siteUrl to build the canonical/OG url. */
  path?: string
  image?: string
  /** Set to true on pages that should not be indexed (drafts, internal search results, etc). */
  noIndex?: boolean
  /** Optional JSON-LD structured data object(s) to embed as <script type="application/ld+json">. */
  structuredData?: Record<string, unknown> | Record<string, unknown>[]
}
