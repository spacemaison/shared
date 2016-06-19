import { action } from './action'
import { TIMEOUT } from './actions'

export function timeout (timeout) {
  return action(TIMEOUT, { timeout })
}
