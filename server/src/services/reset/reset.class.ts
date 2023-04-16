// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#custom-services
import type { Id, NullableId, Params, ServiceInterface } from '@feathersjs/feathers'

import type { Application } from '../../declarations'

type Reset = any
type ResetData = any
type ResetPatch = any
type ResetQuery = any

export type { Reset, ResetData, ResetPatch, ResetQuery }

export interface ResetServiceOptions {
  app: Application
}

export interface ResetParams extends Params<ResetQuery> {}

// This is a skeleton for a custom service class. Remove or add the methods you need here
export class ResetService<ServiceParams extends ResetParams = ResetParams>
  implements ServiceInterface<Reset, ResetData, ServiceParams, ResetPatch>
{
  constructor(public options: ResetServiceOptions) {}

  async find(_params?: ServiceParams): Promise<Reset[]> {
    return []
  }

  async get(id: Id, _params?: ServiceParams): Promise<Reset> {
    return {
      id: 0,
      text: `A new message with ID: ${id}!`
    }
  }

  async create(data: ResetData, params?: ServiceParams): Promise<Reset>
  async create(data: ResetData[], params?: ServiceParams): Promise<Reset[]>
  async create(data: ResetData | ResetData[], params?: ServiceParams): Promise<Reset | Reset[]> {
    if (Array.isArray(data)) {
      return Promise.all(data.map((current) => this.create(current, params)))
    }

    return {
      id: 0,
      ...data
    }
  }

  // This method has to be added to the 'methods' option to make it available to clients
  async update(id: NullableId, data: ResetData, _params?: ServiceParams): Promise<Reset> {
    return {
      id: 0,
      ...data
    }
  }

  async patch(id: NullableId, data: ResetPatch, _params?: ServiceParams): Promise<Reset> {
    return {
      id: 0,
      text: `Fallback for ${id}`,
      ...data
    }
  }

  async remove(id: NullableId, _params?: ServiceParams): Promise<Reset> {
    return {
      id: 0,
      text: 'removed'
    }
  }
}

export const getOptions = (app: Application) => {
  return { app }
}
