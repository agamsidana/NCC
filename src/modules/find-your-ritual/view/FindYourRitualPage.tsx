import { useMemo, useState } from 'react'
import SEO from '../../../common/components/SEO'
import strings from '../../../common/constants/strings'
import type { Phase } from '../types'
import IntroSection from './IntroSection'
import QuizSection from './QuizSection'
import ResultSection from './ResultSection'

function FindYourRitualPage() {
  const { findYourRitual } = strings
  const [phase, setPhase] = useState<Phase>('intro')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | undefined)[]>([])

  const totalQuestions = findYourRitual.questions.length
  const currentQuestion = findYourRitual.questions[questionIndex]

  const { recommendedSlug, matchingAnswers } = useMemo(() => {
    const selectedOptions = answers
      .map((optionIndex, index) =>
        optionIndex === undefined ? null : findYourRitual.questions[index].options[optionIndex],
      )
      .filter((option): option is NonNullable<typeof option> => option !== null)

    if (selectedOptions.length === 0) {
      return { recommendedSlug: null, matchingAnswers: [] as string[] }
    }

    const counts = new Map<string, number>()
    selectedOptions.forEach((option) => counts.set(option.grade, (counts.get(option.grade) ?? 0) + 1))
    const topGrade = [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0]

    const matchingAnswers = selectedOptions
      .filter((option) => option.grade === topGrade)
      .map((option) => option.label)

    return { recommendedSlug: topGrade, matchingAnswers }
  }, [answers, findYourRitual.questions])

  function handleSelect(optionIndex: number) {
    setAnswers((prev) => {
      const next = [...prev]
      next[questionIndex] = optionIndex
      return next
    })
  }

  function handleNext() {
    if (questionIndex === totalQuestions - 1) {
      setPhase('result')
      return
    }
    setQuestionIndex((index) => index + 1)
  }

  function handleBack() {
    if (questionIndex === 0) {
      setPhase('intro')
      return
    }
    setQuestionIndex((index) => index - 1)
  }

  function handleRetake() {
    setPhase('intro')
    setQuestionIndex(0)
    setAnswers([])
  }

  return (
    <>
      <SEO
        title={findYourRitual.title}
        description="Answer 5 quick questions and we'll match you to the right Ceylon cinnamon grade."
        path="/find-your-ritual"
      />

      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        {phase === 'intro' && <IntroSection onStart={() => setPhase('quiz')} />}

        {phase === 'quiz' && (
          <QuizSection
            question={currentQuestion}
            questionNumber={questionIndex + 1}
            totalQuestions={totalQuestions}
            selectedOptionIndex={answers[questionIndex] ?? null}
            onSelect={handleSelect}
            onBack={handleBack}
            onNext={handleNext}
          />
        )}

        {phase === 'result' && recommendedSlug && (
          <ResultSection
            recommendedSlug={recommendedSlug}
            matchingAnswers={matchingAnswers}
            onRetake={handleRetake}
          />
        )}
      </div>
    </>
  )
}

export default FindYourRitualPage
