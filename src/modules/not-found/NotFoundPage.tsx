import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import SEO from '../../common/components/SEO'
import { strings } from '../../common/constants'

function NotFoundPage() {
  const { notFound } = strings

  return (
    <>
      <SEO title="Page Not Found" noIndex path="/404" />

      <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-600">
          <Icon icon="mdi:compass-off-outline" width={32} height={32} />
        </span>

        <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-primary-600">
          {notFound.eyebrow}
        </p>

        <h1 className="mt-3 font-serif text-7xl leading-none text-neutral-900 sm:text-8xl">
          {notFound.title}
        </h1>

        <h2 className="mt-3 font-serif text-2xl text-neutral-900 sm:text-3xl">
          {notFound.heading}
        </h2>

        <p className="mt-4 max-w-md text-sm text-neutral-600 sm:text-base">{notFound.message}</p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
        >
          <Icon icon="mdi:arrow-left" width={16} height={16} />
          {notFound.backHome}
        </Link>

        <div className="mt-12 w-full border-t border-neutral-200 pt-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
            {notFound.quickLinksLabel}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm">
            {notFound.quickLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-full border border-neutral-300 px-4 py-2 text-neutral-700 transition-colors hover:border-primary-400 hover:text-primary-600"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage
