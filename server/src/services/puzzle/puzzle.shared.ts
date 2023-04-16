// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Puzzle, PuzzleData, PuzzlePatch, PuzzleQuery, PuzzleService } from './puzzle.class'

export type { Puzzle, PuzzleData, PuzzlePatch, PuzzleQuery }

export type PuzzleClientService = Pick<PuzzleService<Params<PuzzleQuery>>, (typeof puzzleMethods)[number]>

export const puzzlePath = 'puzzle'

export const puzzleMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const puzzleClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(puzzlePath, connection.service(puzzlePath), {
    methods: puzzleMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [puzzlePath]: PuzzleClientService
  }
}
