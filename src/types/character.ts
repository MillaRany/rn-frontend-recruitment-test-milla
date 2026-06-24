export interface Character {
  id: string
  name: string
  status: 'Alive' | 'Dead' | 'unknown'
  species: string
  type: string
  gender: string
  image: string
  origin: { name: string }
  location: { name: string }
  episode: { id: string; name: string; episode: string; air_date: string }[]
  created: string
}

export interface CharactersData {
  characters: {
    info: {
      count: number
      pages: number
      next: number | null
      prev: number | null
    }
    results: Character[]
  }
}

export interface CharacterData {
  character: Character
}

export type CharactersFilter = {
  name?: string
  status?: string
}

export interface CharactersVars {
  page?: number
  filter?: CharactersFilter
}

export interface CharacterVars {
  id: string
}

export interface CharactersByIdsData {
  charactersByIds: Character[]
}

export interface CharactersByIdsVars {
  ids: string[]
}
