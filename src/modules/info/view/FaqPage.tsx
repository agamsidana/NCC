import { Icon } from '@iconify/react'
import SEO from '../../../common/components/SEO'
import strings from '../../../common/constants/strings'

function FaqPage() {
  const { faq } = strings

  return (
    <>
      <SEO title={faq.title} description={faq.intro} path="/faq" />

      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">{faq.title}</h1>
        <p className="mt-4 text-neutral-600">{faq.intro}</p>

        <div className="mt-10 flex flex-col divide-y divide-neutral-200 border-y border-neutral-200">
          {faq.items.map((item) => (
            <details key={item.question} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-neutral-900 marker:content-none">
                {item.question}
                <Icon
                  icon="mdi:chevron-down"
                  width={18}
                  height={18}
                  className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 text-sm text-neutral-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </>
  )
}

export default FaqPage
