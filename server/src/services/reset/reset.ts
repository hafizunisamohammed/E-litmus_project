// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import type { Application } from '../../declarations'
import { ResetService, getOptions } from './reset.class'
import { resetPath, resetMethods } from './reset.shared'

export * from './reset.class'

import { resetGame } from './hooks/resetGame'

// A configure function that registers the service and its hooks via `app.configure`
export const reset = (app: Application) => {
  // Register our service on the Feathers application
  app.use(resetPath, new ResetService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: resetMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(resetPath).hooks({
    around: {
      all: [authenticate('jwt')]
    },
    before: {
      all: [],
      find: [],
      get: [resetGame()],
      create: [],
      patch: [],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [resetPath]: ResetService
  }
}
