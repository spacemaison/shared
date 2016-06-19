export function action (type, payload, meta = {}) {
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

export const states = Object.freeze({
  __proto__: null,

  starting: 'starting',
  finished: 'finished',
  error: 'error'
})
