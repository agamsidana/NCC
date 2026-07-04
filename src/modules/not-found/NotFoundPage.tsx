import { Link } from 'react-router-dom'
import SEO from '../../common/components/SEO'

function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" noIndex path="/404" />
      <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-4 text-neutral-600">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 text-primary-600 hover:underline">
          Back to home
        </Link>
      </section>
    </>
  )
}

export default NotFoundPage
