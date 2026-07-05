import { Icon } from '@iconify/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../../common/components/SEO'
import { IMAGES } from '../../../common/constants/image-source'
import { getProductBySlug } from '../../../common/constants/products'
import strings from '../../../common/constants/strings'
import type { CartLine } from '../types'
import { formatPrice, parsePrice } from '../utils'

const initialLines: CartLine[] = [
  { slug: 'spice-of-kings-set-a', quantity: 1 },
  { slug: 'c5-heritage', quantity: 1 },
]

function CartPage() {
  const { cart } = strings
  const [lines, setLines] = useState<CartLine[]>(initialLines)

  const items = lines.flatMap((line) => {
    const product = getProductBySlug(line.slug)
    return product ? [{ ...line, product }] : []
  })

  const estimatedTotal = items.reduce(
    (sum, item) => sum + parsePrice(item.product.price) * item.quantity,
    0,
  )

  function updateQuantity(slug: string, delta: number) {
    setLines((prev) =>
      prev.map((line) => (line.slug === slug ? { ...line, quantity: Math.max(1, line.quantity + delta) } : line)),
    )
  }

  function removeItem(slug: string) {
    setLines((prev) => prev.filter((line) => line.slug !== slug))
  }

  return (
    <>
      <SEO title={cart.title} description="Review the items in your cart." path="/cart" noIndex />

      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">{cart.title}</h1>

        {items.length === 0 ? (
          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-neutral-200 px-6 py-20 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
              <Icon icon="mdi:cart-outline" width={32} height={32} />
            </span>
            <h2 className="mt-2 font-serif text-2xl text-neutral-900">{cart.emptyHeading}</h2>
            <p className="max-w-sm text-sm text-neutral-500">{cart.emptyMessage}</p>
            <Link
              to="/shop"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              {cart.continueShoppingCta}
              <Icon icon="mdi:arrow-right" width={16} height={16} />
            </Link>
          </div>
        ) : (
          <>
            <div className="mt-8 flex flex-col divide-y divide-neutral-200 border-y border-neutral-200">
              {items.map(({ slug, quantity, product }) => (
                <div key={slug} className="flex items-center gap-4 py-5">
                  <img
                    src={IMAGES.mainProduct}
                    alt={product.title}
                    className="h-20 w-20 shrink-0 rounded-lg object-cover"
                  />
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="text-sm font-medium text-neutral-900">{product.title}</p>
                    <p className="text-xs text-neutral-500">
                      {product.variant.label}: {product.variant.value}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(slug, -1)}
                        aria-label={`Decrease quantity of ${product.title}`}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 hover:border-primary-400 hover:text-primary-600"
                      >
                        <Icon icon="mdi:minus" width={14} height={14} />
                      </button>
                      <span className="w-6 text-center text-sm text-neutral-900">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(slug, 1)}
                        aria-label={`Increase quantity of ${product.title}`}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 hover:border-primary-400 hover:text-primary-600"
                      >
                        <Icon icon="mdi:plus" width={14} height={14} />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <p className="text-sm font-semibold text-neutral-900">
                      {formatPrice(parsePrice(product.price) * quantity)}
                    </p>
                    <button
                      type="button"
                      onClick={() => removeItem(slug)}
                      aria-label={`${cart.removeLabel} ${product.title}`}
                      className="text-neutral-400 hover:text-error-600"
                    >
                      <Icon icon="mdi:trash-can-outline" width={18} height={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between text-lg font-semibold text-neutral-900">
              <span>{cart.estimatedTotalLabel}</span>
              <span>{formatPrice(estimatedTotal)}</span>
            </div>
            <p className="mt-1 text-xs text-neutral-500">{cart.taxesNote}</p>

            <Link
              to="/checkout"
              className="mt-6 flex w-full items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              {cart.checkoutCta}
            </Link>
          </>
        )}
      </div>
    </>
  )
}

export default CartPage
