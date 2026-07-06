import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import SEO from '../../../common/components/SEO'
import type { RitualGuideContent } from '../types'

function RitualGuidePage({ guide, path }: { guide: RitualGuideContent; path: string }) {
  return (
    <>
      <SEO title={guide.title} description={guide.intro} path={path} />

      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary-600">{guide.tag}</p>
        <h1 className="mt-3 font-serif text-4xl text-neutral-900 sm:text-5xl">{guide.title}</h1>

        <img
          src={guide.image}
          alt={guide.title}
          className="mt-6 aspect-[16/9] w-full rounded-2xl object-cover shadow-lg"
        />

        <p className="mt-6 text-neutral-600">{guide.intro}</p>

        <div className="mt-10">
          <h2 className="font-serif text-2xl text-neutral-900">{guide.stepsHeading}</h2>
          <ol className="mt-4 flex flex-col gap-3">
            {guide.steps.map((step, index) => (
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
          <h2 className="font-serif text-2xl text-neutral-900">{guide.whyHeading}</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {guide.whyPoints.map((point) => (
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

        <Link
          to={`/products/${guide.productSlug}`}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
        >
          {guide.productCta}
          <Icon icon="mdi:arrow-right" width={16} height={16} />
        </Link>
      </div>
    </>
  )
}

export default RitualGuidePage
