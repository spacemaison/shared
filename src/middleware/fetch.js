import fetch from 'fetch-everywhere'
import { FETCH } from '../actions/actions'

export default function interceptFetch ({ dispatch, getState }) {
  return next => action => {
    const { type, payload } = action || {}
    const { url, params, coerceTo } = payload || {}

    return type === FETCH
      ? fetch(url, params)
          .then(response => {
            return coerceResponse(coerceTo, response)
          })
          .catch(error => {
            console.error(error.stack)
          })
      : next(action)
  }
}

function coerceResponse (coerceTo, response) {
  if (response.ok) {
    if (coerceTo) {
      return response[coerceTo]()
    } else {
      return response
    }
  } else {
    const { status, statusText } = response
    throw new Error(
        `Request failed with status code ${status} and message ${statusText}`)
  }
}
