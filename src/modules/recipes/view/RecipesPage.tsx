import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import SEO from '../../../common/components/SEO'
import strings from '../../../common/constants/strings'
import { chunk } from '../utils'

function RecipesPage() {
  const { recipes } = strings
  const { currentPage, totalPages } = recipes.pagination
  const visiblePages: (number | string)[] =
    totalPages <= 4 ? Array.from({ length: totalPages }, (_, i) => i + 1) : [1, 2, 3, '…', totalPages]

  return (
    <>
      <SEO
        title={recipes.title}
        description="Ceylon cinnamon recipes and daily rituals — coffee, chai, baking, and no-bake snacks."
        path="/recipes"
      />

      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">{recipes.title}</h1>

        {chunk(recipes.posts, 3).map((group, groupIndex) => {
          const [featured, ...rest] = group
          return (
            <div key={featured.slug} className={groupIndex === 0 ? 'mt-10' : 'mt-8'}>
              <Link
                to={`/recipes/${featured.slug}`}
                className="block rounded-2xl bg-neutral-100 p-8 text-center transition-colors hover:bg-neutral-200/70"
              >
                <h2 className="font-serif text-xl text-neutral-900 sm:text-2xl">{featured.title}</h2>
                <p className="mt-2 text-xs uppercase tracking-wide text-neutral-500">{featured.date}</p>
                <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600">{featured.excerpt}</p>
              </Link>

              {rest.length > 0 && (
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {rest.map((post) => (
                    <Link
                      key={post.slug}
                      to={`/recipes/${post.slug}`}
                      className="rounded-2xl bg-neutral-100 p-6 transition-colors hover:bg-neutral-200/70"
                    >
                      <h3 className="font-serif text-lg text-neutral-900">{post.title}</h3>
                      <p className="mt-2 text-xs uppercase tracking-wide text-neutral-500">{post.date}</p>
                      <p className="mt-3 text-sm text-neutral-600">{post.excerpt}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}

        <nav className="mt-12 flex items-center justify-center gap-2 text-sm" aria-label="Recipes pagination">
          <Link
            to={currentPage > 1 ? `/recipes?page=${currentPage - 1}` : '/recipes'}
            aria-label="Previous page"
            className="rounded-full p-2 text-neutral-500 hover:text-primary-600"
          >
            <Icon icon="mdi:chevron-left" width={18} height={18} />
          </Link>

          {visiblePages.map((page, index) =>
            typeof page === 'number' ? (
              <Link
                key={page}
                to={page === 1 ? '/recipes' : `/recipes?page=${page}`}
                className={
                  page === currentPage
                    ? 'flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 font-medium text-white'
                    : 'flex h-8 w-8 items-center justify-center rounded-full text-neutral-600 hover:bg-neutral-100'
                }
              >
                {page}
              </Link>
            ) : (
              <span key={`ellipsis-${index}`} className="px-1 text-neutral-400">
                {page}
              </span>
            ),
          )}

          <Link
            to={`/recipes?page=${Math.min(currentPage + 1, totalPages)}`}
            aria-label="Next page"
            className="rounded-full p-2 text-neutral-500 hover:text-primary-600"
          >
            <Icon icon="mdi:chevron-right" width={18} height={18} />
          </Link>
        </nav>
      </div>
    </>
  )
}

export default RecipesPage
