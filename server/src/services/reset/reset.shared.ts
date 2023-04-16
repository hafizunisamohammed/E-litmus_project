// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Reset, ResetData, ResetPatch, ResetQuery, ResetService } from './reset.class'

export type { Reset, ResetData, ResetPatch, ResetQuery }

export type ResetClientService = Pick<ResetService<Params<ResetQuery>>, (typeof resetMethods)[number]>

export const resetPath = 'reset'

export const resetMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const resetClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(resetPath, connection.service(resetPath), {
    methods: resetMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [resetPath]: ResetClientService
  }
}
