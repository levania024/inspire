import { Inspire } from './models/Inspire.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /**@type {Inspire} */
  images = null

  /**@type {Inspire} */
  quotes = null

  /**@type {Inspire} */
  weather = null

  /**@type {Inspire} */
  todo = null
}

export const AppState = createObservableProxy(new ObservableAppState())