import fetch from 'fetch-everywhere'
import { FETCH } from '../actions/actions'

export default function interceptFetch ({ dispatch, getState }) {
  return next => action => {
    const { type, payload = {} } = action || {}

    return type === FETCH
      ? fetch(payload.url, payload.params).then(res => res[payload.coerceTo]())
      : next(action)
  }
}
