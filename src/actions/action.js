import isGenerator from 'is-generator'
import { timeout } from './timeout'

export function action (type, payload = {}, meta = {}) {
  payload = payload || {}

  let error = null

  if (payload instanceof Error) {
    error = payload
    payload = null
    meta = Object.create(meta || null)
    meta.state = states.error
  }

  return { type, error, payload, meta }
}

export function starting (type, payload) {
  return action(type, payload, { state: states.starting })
}

export function finished (type, payload) {
  return action(type, payload, { state: states.finished })
}

export function aggragate (...actions) {
  return function * () {
    for (const action of actions) {
      if (isGenerator.fn(action)) {
        yield * action()
      } else {
        yield action()
      }
    }
  }
}

export function wrap (type, wrapped) {
  return function * (...args) {
    try {
      yield starting(type)

      const emitted = isGenerator.fn(wrapped) ?
          yield * wrapped(...args) :
          yield wrapped(...args)

      yield timeout(1)

      return yield finished(type, emitted)
    } catch (error) {
      return yield action(type, error)
    }
  }
}

export const states = Object.freeze({
  __proto__: null,

  starting: 'starting',
  finished: 'finished',
  error: 'error'
})
