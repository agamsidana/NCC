import { Link } from 'react-router-dom'
import SEO from '../../common/components/SEO'
import { strings } from '../../common/constants'

function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" noIndex path="/404" />
      <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center">
        <h1 className="text-4xl font-bold">{strings.notFound.title}</h1>
        <p className="mt-4 text-neutral-600">{strings.notFound.message}</p>
        <Link to="/" className="mt-6 text-primary-600 hover:underline">
          {strings.notFound.backHome}
        </Link>
      </section>
    </>
  )
}

export default NotFoundPage
