import { action } from './action'
import { FETCH } from './actions'

export function fetch (url, options = {}, coerceTo = coerceOptions.text) {
  if (!coerceOptions[coerceTo]) {
    coerceTo = coerceOptions.text
  }

  return action(FETCH, { url, options, coerceTo })
}

export function fetchText (url, options = {}) {
  return fetch(url, options);
}

const coerceOptions = {
  __proto__: null,

  'arrayBuffer': 'arrayBuffer',
  'blob': 'blob',
  'json': 'json',
  'text': 'text',
  'formData': 'formData'
}
