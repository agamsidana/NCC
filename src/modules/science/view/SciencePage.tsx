import SEO from '../../../common/components/SEO'
import strings from '../../../common/constants/strings'

function SciencePage() {
  const { science } = strings

  return (
    <>
      <SEO
        title={science.title}
        description="An honest summary of the peer-reviewed research on Ceylon cinnamon — what it says, and what it doesn't."
        path="/the-science"
      />

      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">{science.title}</h1>
        <p className="mt-4 text-neutral-600">{science.intro}</p>

        <p className="mt-6 rounded-lg border border-neutral-200 bg-neutral-100 p-4 text-xs italic text-neutral-500">
          {science.disclaimer}
        </p>

        {science.sections.map((section) => (
          <div key={section.heading} className="mt-12">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">{section.heading}</h2>

            <div className="mt-4 flex flex-col gap-4 text-neutral-600">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {section.note && (
              <p className="mt-4 border-l-2 border-primary-300 pl-4 text-sm italic text-neutral-600">
                {section.note}
              </p>
            )}

            {section.source && <p className="mt-3 text-xs italic text-neutral-400">{section.source}</p>}
          </div>
        ))}

        <p className="mt-12 rounded-lg border border-neutral-200 bg-neutral-100 p-4 text-xs italic text-neutral-500">
          {science.disclaimer}
        </p>
      </div>
    </>
  )
}

export default SciencePage
