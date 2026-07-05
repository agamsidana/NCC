import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import SEO from '../../../common/components/SEO'
import strings from '../../../common/constants/strings'

function ContactPage() {
  const { contact } = strings

  return (
    <>
      <SEO title={contact.title} description={contact.intro} path="/contact" />

      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">{contact.title}</h1>
        <p className="mt-4 text-neutral-600">{contact.intro}</p>

        <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
            <div className="min-w-0 sm:flex-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                {contact.emailLabel}
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-1 flex items-start gap-2 text-base font-medium text-primary-600 hover:underline sm:text-lg"
              >
                <Icon icon="mdi:email-outline" width={20} height={20} className="mt-0.5 shrink-0" />
                <span className="break-words">{contact.email}</span>
              </a>
              <p className="mt-1 text-sm text-neutral-500">{contact.responseTime}</p>
            </div>

            <div className="min-w-0 sm:flex-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                {contact.hoursLabel}
              </p>
              <p className="mt-1 text-sm text-neutral-700">{contact.hours}</p>

              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                {contact.basedInLabel}
              </p>
              <p className="mt-1 text-sm text-neutral-700">{contact.basedIn}</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
            {contact.quickLinksLabel}
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            {contact.quickLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-primary-300 hover:text-primary-600"
              >
                {link.label}
                <Icon icon="mdi:arrow-right" width={14} height={14} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
