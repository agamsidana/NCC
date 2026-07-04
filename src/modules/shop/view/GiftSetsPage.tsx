import { Icon } from '@iconify/react'
import SEO from '../../../common/components/SEO'
import strings from '../../../common/constants/strings'
import ProductGrid from '../components/ProductGrid'

function GiftSetsPage() {
  const { giftSets, shop } = strings
  const products = shop.products.filter((product) => product.category === 'gift-set')

  return (
    <>
      <SEO title={giftSets.title} description={giftSets.description} path="/shop/gift-sets" />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">{giftSets.title}</h1>
          <p className="mt-3 text-neutral-600">{giftSets.description}</p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-4 text-sm text-neutral-600">
          <div className="flex items-center gap-4">
            <span className="text-neutral-400">Filter:</span>
            <button type="button" className="inline-flex items-center gap-1 hover:text-primary-600">
              Availability <Icon icon="mdi:chevron-down" width={14} height={14} />
            </button>
            <button type="button" className="inline-flex items-center gap-1 hover:text-primary-600">
              Price <Icon icon="mdi:chevron-down" width={14} height={14} />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              Sort by: <span className="font-medium text-neutral-900">Featured</span>
              <Icon icon="mdi:chevron-down" width={14} height={14} />
            </span>
            <span className="text-neutral-400">{products.length} products</span>
          </div>
        </div>

        <div className="mt-8">
          <ProductGrid products={products} />
        </div>
      </div>
    </>
  )
}

export default GiftSetsPage
