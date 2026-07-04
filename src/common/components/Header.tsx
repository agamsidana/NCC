import { useState } from 'react'
import { Link } from 'react-router-dom'
import strings from '../constants/strings'
import { Icon } from '@iconify/react'
import { IMAGES } from '../constants/image-source'


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary-400 text-primary-600">
           <img src={IMAGES.logo}/>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-wide text-neutral-900">
              {strings.layout.siteName}
            </span>
            <span className="text-[8px] tracking-[0.2em] text-neutral-400">
              {strings.layout.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-700 md:flex">
          {strings.layout.nav.map((item) => (
            <Link key={item.href} to={item.href} className="hover:text-primary-600">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label={strings.layout.search}
            className="hidden text-neutral-700 hover:text-primary-600 sm:inline-flex"
          >
            <Icon icon={"material-symbols:search"} width={22} height={22} />
          </button>
          <Link
            to="/account"
            aria-label={strings.layout.account}
            className="hidden text-neutral-700 hover:text-primary-600 sm:inline-flex"
          >
            <Icon icon={"iconamoon:profile-duotone"} width={22} height={22} />
          </Link>
          <Link
            to="/cart"
            aria-label={strings.layout.cart}
            className="inline-flex text-primary-600 hover:text-primary-700"
          >
            <Icon icon={"solar:bag-linear"} height={22} width={22} />
          </Link>
          <button
            type="button"
            aria-label={isMenuOpen ? strings.layout.closeMenu : strings.layout.menu}
            aria-expanded={isMenuOpen}
            className="inline-flex text-neutral-700 hover:text-primary-600 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ?
              <Icon icon="bitcoin-icons:cross-filled" width={25} height={25} />
              : <Icon icon="quill:hamburger" width={25} height={25} />
            }
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-neutral-200 px-4 py-4 text-sm font-medium text-neutral-700 md:hidden">
          {strings.layout.nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="rounded-md px-2 py-2 hover:bg-neutral-100 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/account"
            className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-neutral-100 hover:text-primary-600 sm:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <Icon icon={"iconamoon:profile-duotone"} width={22} height={22} />
            {strings.layout.account}
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header
