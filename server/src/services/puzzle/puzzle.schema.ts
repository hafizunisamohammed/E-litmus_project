// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

import { userSchema } from '../users/users.schema'
import { type } from 'os'

// Main data model schema
export const puzzleSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    text: Type.String(),
    gameScore: Type.Number(),
    email: Type.String({ format: 'email' })

  },
  { $id: 'Puzzle', additionalProperties: true }
)
export type Puzzle = Static<typeof puzzleSchema>
export const puzzleValidator = getValidator(puzzleSchema, dataValidator)
export const puzzleResolver = resolve<Puzzle, HookContext>({})

export const puzzleExternalResolver = resolve<Puzzle, HookContext>({})

// Schema for creating new entries
export const puzzleDataSchema = Type.Pick(puzzleSchema, ['text'], {
  $id: 'PuzzleData'
})
export type PuzzleData = Static<typeof puzzleDataSchema>
export const puzzleDataValidator = getValidator(puzzleDataSchema, dataValidator)
export const puzzleDataResolver = resolve<Puzzle, HookContext>({})

// Schema for updating existing entries
export const puzzlePatchSchema = Type.Partial(puzzleSchema, {
  $id: 'PuzzlePatch'
})
export type PuzzlePatch = Static<typeof puzzlePatchSchema>
export const puzzlePatchValidator = getValidator(puzzlePatchSchema, dataValidator)
export const puzzlePatchResolver = resolve<Puzzle, HookContext>({})

// Schema for allowed query properties
export const puzzleQueryProperties = Type.Pick(puzzleSchema, ['_id', 'text'])
export const puzzleQuerySchema = Type.Intersect(
  [
    querySyntax(puzzleQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: true })
  ],
  { additionalProperties: true }
)
export type PuzzleQuery = Static<typeof puzzleQuerySchema>
export const puzzleQueryValidator = getValidator(puzzleQuerySchema, queryValidator)
export const puzzleQueryResolver = resolve<PuzzleQuery, HookContext>({})
