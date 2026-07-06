import { Icon } from '@iconify/react'
import strings from '../../../common/constants/strings'
import type { Question } from '../types'

function QuizSection({
  question,
  questionNumber,
  totalQuestions,
  selectedOptionIndex,
  onSelect,
  onBack,
  onNext,
}: {
  question: Question
  questionNumber: number
  totalQuestions: number
  selectedOptionIndex: number | null
  onSelect: (optionIndex: number) => void
  onBack: () => void
  onNext: () => void
}) {
  const { findYourRitual } = strings
  const progress = (questionNumber / totalQuestions) * 100

  return (
    <div>
      <div className="h-1 w-full rounded-full bg-neutral-200">
        <div className="h-1 rounded-full bg-primary-600 transition-all" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-neutral-500">
        {findYourRitual.progressLabel(questionNumber, totalQuestions)}
      </p>

      <div
        key={question.question}
        className="mt-4 grid gap-5 motion-safe:animate-question-enter sm:grid-cols-[200px_1fr] sm:items-start sm:gap-8"
      >
        <img
          src={question.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md sm:aspect-square"
        />

        <div>
          <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">{question.question}</h2>

          <div className="mt-6 flex flex-col gap-3">
            {question.options.map((option, index) => {
              const isSelected = index === selectedOptionIndex
              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => onSelect(index)}
                  className={
                    isSelected
                      ? 'flex items-center gap-3 rounded-xl border border-primary-500 bg-primary-50 px-4 py-3 text-left text-sm font-medium text-neutral-900'
                      : 'flex items-center gap-3 rounded-xl border border-neutral-200 px-4 py-3 text-left text-sm text-neutral-700 hover:border-primary-300'
                  }
                >
                  <span
                    className={
                      isSelected
                        ? 'flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-primary-600'
                        : 'flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-neutral-300'
                    }
                  >
                    {isSelected && <span className="h-2 w-2 rounded-full bg-primary-600" />}
                  </span>
                  {option.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-primary-600"
        >
          <Icon icon="mdi:arrow-left" width={16} height={16} />
          {findYourRitual.backCta}
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={selectedOptionIndex === null}
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {findYourRitual.nextCta}
          <Icon icon="mdi:arrow-right" width={16} height={16} />
        </button>
      </div>
    </div>
  )
}

export default QuizSection
