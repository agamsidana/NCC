import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { IMAGES } from '../constants/image-source'
import strings from '../constants/strings'

const trustBadgeIcons = ['mdi:test-tube', 'mdi:map-marker-outline', 'mdi:truck-outline']

function Footer() {
  const { layout, footer } = strings
  const year = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-neutral-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.3fr_repeat(4,1fr)] md:gap-8">
        <div className="flex flex-col gap-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-primary-400">
              <img src={IMAGES.logo} alt="" className="h-full w-full object-cover" />
            </span>
            <span className="font-serif text-lg tracking-wide text-white">{layout.siteName}</span>
          </Link>

          <p className="text-sm text-neutral-400">{footer.tagline}</p>

          <p className="flex items-center gap-1.5 text-xs text-neutral-500">
            <Icon icon="mdi:shield-check-outline" width={14} height={14} className="text-primary-400" />
            {footer.certifiedBadge}
          </p>
        </div>

        {footer.columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-[0.15em] text-neutral-200">
              {column.title.toUpperCase()}
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-primary-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright(year)}</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footer.trustBadges.map((badge, index) => (
              <span key={badge} className="inline-flex items-center gap-1.5">
                <Icon icon={trustBadgeIcons[index]} width={14} height={14} />
                {badge}
              </span>
            ))}
          </div>
        </div>

        <p className="pb-6 text-center text-xs">
          <Link to="/cookie-preferences" className="hover:text-primary-400">
            {footer.cookiePreferences}
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
