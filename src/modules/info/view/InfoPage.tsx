import SEO from '../../../common/components/SEO'

type InfoSection = {
  heading: string
  paragraphs: readonly string[]
}

type InfoContent = {
  title: string
  intro: string
  sections: readonly InfoSection[]
}

function InfoPage({ content, path }: { content: InfoContent; path: string }) {
  return (
    <>
      <SEO title={content.title} description={content.intro} path={path} />

      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">{content.title}</h1>
        <p className="mt-4 text-neutral-600">{content.intro}</p>

        {content.sections.map((section) => (
          <div key={section.heading} className="mt-10">
            <h2 className="font-serif text-2xl text-neutral-900">{section.heading}</h2>
            <div className="mt-3 flex flex-col gap-3 text-neutral-600">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default InfoPage
