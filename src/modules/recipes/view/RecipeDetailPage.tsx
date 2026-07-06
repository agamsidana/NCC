import { Icon } from '@iconify/react'
import { Link, useParams } from 'react-router-dom'
import SEO from '../../../common/components/SEO'
import strings from '../../../common/constants/strings'
import NotFoundPage from '../../not-found/NotFoundPage'

function RecipeDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { recipes } = strings
  const post = recipes.posts.find((item) => item.slug === slug)

  if (!post) {
    return <NotFoundPage />
  }

  return (
    <>
      <SEO title={post.title} description={post.excerpt} path={`/recipes/${post.slug}`} />

      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <Link
          to="/recipes"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-primary-600"
        >
          <Icon icon="mdi:arrow-left" width={16} height={16} />
          {recipes.backToBlog}
        </Link>

        <h1 className="mt-4 font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl">
          {post.title}
        </h1>

        <img
          src={post.img}
          alt={post.title}
          className="mt-6 aspect-[16/9] w-full rounded-2xl object-cover shadow-lg"
        />

        <p className="mt-6 text-xs uppercase tracking-wide text-neutral-500">{post.date}</p>

        <button
          type="button"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-primary-600"
        >
          <Icon icon="mdi:share-variant-outline" width={14} height={14} />
          {recipes.shareLabel}
        </button>

        <p className="mt-6 text-neutral-600">{post.excerpt}</p>

        {post.product && (
          <p className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
            <span className="font-semibold text-neutral-900">{recipes.productLabel}:</span>{' '}
            {post.product}
          </p>
        )}

        <div className="mt-10">
          <h2 className="font-serif text-2xl text-neutral-900">{recipes.ingredientsHeading}</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {post.ingredients.map((ingredient) => (
              <li key={ingredient} className="flex items-start gap-2.5 text-sm text-neutral-600">
                <Icon
                  icon="mdi:circle-small"
                  width={18}
                  height={18}
                  className="mt-0.5 shrink-0 text-primary-500"
                />
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="font-serif text-2xl text-neutral-900">{recipes.methodHeading}</h2>
          <ol className="mt-4 flex flex-col gap-3">
            {post.method.map((step, index) => (
              <li key={step} className="flex items-start gap-3 text-sm text-neutral-600">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs font-semibold text-primary-600">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10">
          <h2 className="font-serif text-2xl text-neutral-900">{recipes.whyHeading}</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {post.why.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-neutral-600">
                <Icon
                  icon="mdi:check-circle-outline"
                  width={16}
                  height={16}
                  className="mt-0.5 shrink-0 text-primary-500"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {post.disclaimer && (
          <p className="mt-10 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-xs italic text-neutral-500">
            {post.disclaimer}
          </p>
        )}

        <Link
          to="/recipes"
          className="mt-12 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-primary-600"
        >
          <Icon icon="mdi:arrow-left" width={16} height={16} />
          {recipes.backToBlog}
        </Link>
      </div>
    </>
  )
}

export default RecipeDetailPage
