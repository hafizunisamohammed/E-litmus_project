// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  puzzleDataValidator,
  puzzlePatchValidator,
  puzzleQueryValidator,
  puzzleResolver,
  puzzleExternalResolver,
  puzzleDataResolver,
  puzzlePatchResolver,
  puzzleQueryResolver
} from './puzzle.schema'

import type { Application } from '../../declarations'
import { PuzzleService, getOptions } from './puzzle.class'
import { puzzlePath, puzzleMethods } from './puzzle.shared'

export * from './puzzle.class'
export * from './puzzle.schema'

import { userIdSet } from './hooks/userIdSet'
import { incrementScore } from './hooks/incrementScore'
import { uniqueGame } from "./hooks/uniqueGame"

// A configure function that registers the service and its hooks via `app.configure`
export const puzzle = (app: Application) => {
  // Register our service on the Feathers application
  app.use(puzzlePath, new PuzzleService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: puzzleMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(puzzlePath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(puzzleExternalResolver),
        schemaHooks.resolveResult(puzzleResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(puzzleQueryValidator), schemaHooks.resolveQuery(puzzleQueryResolver)],
      find: [],
      get: [incrementScore()],
      create: [schemaHooks.validateData(puzzleDataValidator), schemaHooks.resolveData(puzzleDataResolver), userIdSet(), uniqueGame()],
      patch: [schemaHooks.validateData(puzzlePatchValidator), schemaHooks.resolveData(puzzlePatchResolver)],
      remove: []
    },
    after: {
      all: [],
      find: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [puzzlePath]: PuzzleService
  }
}
