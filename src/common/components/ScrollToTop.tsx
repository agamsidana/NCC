import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * React Router (createBrowserRouter) does not reset scroll position on
 * navigation the way a classic multi-page site does, so without this the
 * new route renders at whatever scroll offset the previous page was left
 * at. Mounted once at the layout root: resets to the top on every route
 * change, or smooth-scrolls to the element matching the URL hash (e.g.
 * a "#faq" link) once that route's content has painted.
 */
function ScrollToTop() {
  const { pathname, search, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = hash.slice(1)
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname, search, hash, key])

  return null
}

export default ScrollToTop
