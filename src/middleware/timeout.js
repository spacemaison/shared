import { TIMEOUT } from '../actions/actions'

export default function timeout () {
  return next => action => {
    const { type, payload = {} } = action || {}

    return type === TIMEOUT
      ? new Promise(resolve => setTimeout(resolve, payload.timeout || 0))
      : next(action)
  }
}
