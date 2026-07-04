import { Outlet, Link } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-neutral-200">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="text-lg font-bold text-primary-600">
            My Site
          </Link>
          <ul className="flex gap-6 text-sm font-medium text-neutral-700">
            <li>
              <Link to="/" className="hover:text-primary-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-primary-600">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-neutral-200 py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} My Site. All rights reserved.
      </footer>
    </div>
  )
}

export default MainLayout
