// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'

import type { Application } from '../../declarations'
import type { Puzzle, PuzzleData, PuzzlePatch, PuzzleQuery } from './puzzle.schema'

export type { Puzzle, PuzzleData, PuzzlePatch, PuzzleQuery }

export interface PuzzleParams extends MongoDBAdapterParams<PuzzleQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class PuzzleService<ServiceParams extends Params = PuzzleParams> extends MongoDBService<
  Puzzle,
  PuzzleData,
  PuzzleParams,
  PuzzlePatch
> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('puzzle'))
  }
}
