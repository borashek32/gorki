export type ChampionType = {
  id: number
  name: string
  photoPath: string
  competitions: CompetitionType[]
}

export type CompetitionType = {
  id: number
  title: string
}