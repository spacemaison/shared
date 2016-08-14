import { Url } from 'url'
import { action } from './action'
import { FETCH } from './actions'

export function fetch (url, params = {}, coerceTo = coerceOptions.text) {
  if (!coerceOptions[coerceTo]) {
    coerceTo = null
  }

  if (url instanceof Url) {
    url = url.format()
  }

  return action(FETCH, { url, params, coerceTo })
}

export function text (url, params = {}) {
  return fetch(url, params);
}

export function json (url, params = {}) {
  return fetch(url, params, coerceOptions.json);
}

export function post (url, body) {
  return fetch(url, { method: 'POST', body }, null)
}

export function postJSON (url, body) {
  if (typeof body !== 'string') {
    body = JSON.stringify(body)
  }

  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body
  }, null)
}

const coerceOptions = {
  __proto__: null,

  'arrayBuffer': 'arrayBuffer',
  'blob': 'blob',
  'json': 'json',
  'text': 'text',
  'formData': 'formData'
}
