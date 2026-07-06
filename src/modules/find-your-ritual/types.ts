export type Option = { label: string; grade: string }
export type Question = { question: string; image: string; options: readonly Option[] }
export type Phase = 'intro' | 'quiz' | 'result'
