export function action (type, payload, meta = {}) {
  let error = null

  if (payload instanceof Error) {
    error = payload
    payload = null
    meta = Object.create(meta || null)
    meta.state = actionStates.error
  }

  return { type, error, payload, meta }
}

export function startingAction (type, payload) {
  return action(type, payload, { state: actionStates.starting })
}

export function finishedAction (type, payload) {
  return action(type, payload, { state: actionStates.finished })
}

export const actionStates = {
  __proto__: null,

  starting: 'starting',
  finished: 'finished',
  error: 'error'
}
