import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import SEO from '../../../common/components/SEO'
import { IMAGES } from '../../../common/constants/image-source'
import strings from '../../../common/constants/strings'

const badgeIcons = ['mdi:certificate-outline', 'mdi:flask-outline', 'mdi:map-marker-outline']

function HomePage() {
  const { hero } = strings.home

  return (
    <>
      <SEO
        title="Home"
        description="Welcome to My Site — a fast, SEO-friendly React application."
        path="/"
      />

      <section className="bg-neutral-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:gap-16 md:py-20">
          <div className="flex flex-col items-start gap-5">
            <p className="text-xs font-semibold tracking-[0.2em] text-primary-600">{hero.eyebrow}</p>

            <h1 className="font-serif text-4xl leading-tight text-neutral-900 sm:text-5xl">
              {hero.heading}
            </h1>

            <p className="max-w-md text-sm text-neutral-600 sm:text-base">{hero.description}</p>

            <div className="flex items-center gap-2 text-sm">
              <span className="flex text-primary-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Icon key={index} icon="mdi:star" width={16} height={16} />
                ))}
              </span>
              <span className="font-semibold text-neutral-900">{hero.rating.score}</span>
              <span className="text-neutral-500">· {hero.rating.reviewCount}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
              >
                {hero.primaryCta}
                <Icon icon="mdi:arrow-right" width={16} height={16} />
              </Link>
              <Link
                to="/the-science"
                className="inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 transition-colors hover:border-primary-400 hover:text-primary-600"
              >
                {hero.secondaryCta}
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-xs text-neutral-600">
              {hero.badges.map((badge, index) => (
                <span key={badge} className="inline-flex items-center gap-1.5">
                  <Icon icon={badgeIcons[index]} width={14} height={14} className="text-primary-500" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-md md:max-w-none">
            <img
              src={IMAGES.hero}
              alt={hero.heading}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
