import { Icon } from '@iconify/react'
import { IMAGES } from '../../../common/constants/image-source'
import strings from '../../../common/constants/strings'

function IntroSection({ onStart }: { onStart: () => void }) {
  const { intro } = strings.findYourRitual

  return (
    <div className="text-center">
      <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-lg [transform:translateZ(0)]">
        <img
          src={IMAGES.ritualQuizHero}
          alt={intro.heading}
          className="aspect-[4/3] w-full origin-center rounded-2xl object-cover motion-safe:animate-fade-zoom-out"
        />
      </div>

      <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-primary-600">{intro.eyebrow}</p>
      <h1 className="mt-3 font-serif text-4xl text-neutral-900 sm:text-5xl">{intro.heading}</h1>
      <p className="mt-4 text-neutral-600">{intro.subheading}</p>

      <ol className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-neutral-600 sm:flex-row sm:gap-6">
        {intro.steps.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary-400 text-xs font-medium text-primary-600">
              {index + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>

      <button
        type="button"
        onClick={onStart}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
      >
        <Icon icon="mdi:arrow-right" width={16} height={16} />
        {intro.cta}
      </button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-neutral-500">
        <Icon icon="mdi:clock-outline" width={14} height={14} />
        {intro.duration}
      </p>
    </div>
  )
}

export default IntroSection
