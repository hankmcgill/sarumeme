export interface MovieProps {
  name: string
  academyAwardNominations: number
  academyAwardWins: number
  boxOfficeRevenueInMillions: number
  budgetInMillions: number
  rottenTomatoesScore: number
  runtimeInMinutes: number
  _id: string
}

export interface CharacterProps {
  name: string
  birth: string
  death: string
  gender: string
  hair: string
  height: string
  race: string
  realm: string
  spouse: string
  wikiUrl: string
  _id: string
}

export interface QuotesProps {
  dialog: string
  movie: string
  character: string
  id: string
}
