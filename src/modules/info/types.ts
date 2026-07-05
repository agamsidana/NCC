export type InfoSection = {
  heading: string
  paragraphs: readonly string[]
}

export type InfoContent = {
  title: string
  intro: string
  sections: readonly InfoSection[]
}
