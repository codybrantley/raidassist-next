export type Guild = {
  id: string
  name: string
  icon: string
  owner: boolean
  permissions: string
}

export interface Guilds extends Array<Guild>{}