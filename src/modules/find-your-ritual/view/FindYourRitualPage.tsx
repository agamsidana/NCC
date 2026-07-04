import { useMemo, useState } from 'react'
import SEO from '../../../common/components/SEO'
import strings from '../../../common/constants/strings'
import IntroSection from './IntroSection'
import QuizSection from './QuizSection'
import ResultSection from './ResultSection'

type Phase = 'intro' | 'quiz' | 'result'

function FindYourRitualPage() {
  const { findYourRitual } = strings
  const [phase, setPhase] = useState<Phase>('intro')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | undefined)[]>([])

  const totalQuestions = findYourRitual.questions.length
  const currentQuestion = findYourRitual.questions[questionIndex]

  const recommendedSlug = useMemo(() => {
    const grades = answers
      .map((optionIndex, index) =>
        optionIndex === undefined ? null : findYourRitual.questions[index].options[optionIndex].grade,
      )
      .filter((grade): grade is NonNullable<typeof grade> => grade !== null)

    if (grades.length === 0) return null

    const counts = new Map<string, number>()
    grades.forEach((grade) => counts.set(grade, (counts.get(grade) ?? 0) + 1))
    return [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0]
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
          <ResultSection recommendedSlug={recommendedSlug} onRetake={handleRetake} />
        )}
      </div>
    </>
  )
}

export default FindYourRitualPage
