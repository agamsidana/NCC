import { Link } from 'react-router-dom'
import { getProductBySlug } from '../../../common/constants/products'
import strings from '../../../common/constants/strings'

function ResultSection({ recommendedSlug, onRetake }: { recommendedSlug: string; onRetake: () => void }) {
  const { result } = strings.findYourRitual
  const product = getProductBySlug(recommendedSlug)

  if (!product) return null

  return (
    <div className="text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-primary-600">{result.eyebrow}</p>
      <h1 className="mt-3 font-serif text-4xl text-neutral-900 sm:text-5xl">{result.heading}</h1>

      <div className="mx-auto mt-8 max-w-sm overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left">
        <img src={product.image} alt={product.title} className="aspect-square w-full object-cover" />
        <div className="flex flex-col gap-2 p-6">
          <h2 className="font-serif text-xl text-neutral-900">{product.title}</h2>
          <p className="text-sm text-neutral-500">{product.description}</p>
          <p className="text-lg font-semibold text-primary-600">{product.price}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          to={`/products/${product.slug}`}
          className="inline-flex items-center rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
        >
          {result.shopCta}
        </Link>
        <button
          type="button"
          onClick={onRetake}
          className="inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 transition-colors hover:border-primary-400 hover:text-primary-600"
        >
          {result.retakeCta}
        </button>
      </div>
    </div>
  )
}

export default ResultSection
