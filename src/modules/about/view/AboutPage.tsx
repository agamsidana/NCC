import SEO from '../../../common/components/SEO'
import { IMAGES } from '../../../common/constants/image-source'
import strings from '../../../common/constants/strings'

function AboutPage() {
  const { about } = strings

  return (
    <>
      <SEO
        title={about.title}
        description="From Sri Lanka to your morning cup — why Natural Ceylon Cinnamon exists and what makes it different."
        path="/about-ncc"
      />

      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">{about.title}</h1>
        <p className="mt-3 text-lg text-neutral-600">{about.subtitle}</p>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start md:gap-16">
          <figure>
            <img
              src={IMAGES.ourStory}
              alt={about.founder.photoCaption}
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-lg transition-shadow duration-500 hover:shadow-2xl"
            />
            <figcaption className="mt-3 text-sm text-neutral-500">
              {about.founder.photoCaption}
            </figcaption>
          </figure>

          <div className="flex flex-col gap-5">
            <blockquote className="font-serif text-2xl italic leading-snug text-neutral-900 sm:text-3xl">
              “{about.founder.quote}”
            </blockquote>
            <p className="text-neutral-600">{about.founder.intro}</p>
            <div className="border-t border-neutral-200 pt-4">
              <p className="font-semibold text-neutral-900">{about.founder.name}</p>
              <p className="text-sm text-neutral-500">{about.founder.role}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-2xl">
          <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
            {about.whyWeStarted.heading}
          </h2>
          <div className="mt-4 flex flex-col gap-4 text-neutral-600">
            {about.whyWeStarted.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 border-l-2 border-primary-300 pl-4 font-serif text-lg italic leading-snug text-neutral-800">
            {about.mission}
          </p>
        </div>

        <div className="mt-16 max-w-2xl">
          <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
            {about.differentiators.heading}
          </h2>
          <div className="mt-4 flex flex-col gap-4 text-neutral-600">
            {about.differentiators.items.map((item) => (
              <p key={item.title}>
                <span className="font-semibold text-neutral-900">{item.title}</span> {item.description}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-2xl">
          <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
            {about.products.heading}
          </h2>
          <p className="mt-4 text-neutral-600">{about.products.paragraph}</p>
        </div>

        <div className="mt-16 max-w-2xl">
          <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
            {about.basedInUk.heading}
          </h2>
          <p className="mt-4 text-neutral-600">{about.basedInUk.paragraph}</p>
        </div>
      </div>
    </>
  )
}

export default AboutPage
