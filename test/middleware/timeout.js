import { expect } from 'chai'
import timeout from '../../src/middleware/timeout'

describe('timeout middleware', () => {
  it('intercepts timeout actions', () => {
    const next = () => next.called = true
    const action = { type: 'TIMEOUT', payload: { timeout: 0 } }
    const promise = timeout()(next)(action)

    expect(promise).to.be.instanceof(Promise)
    expect(next.called).to.not.be.true

    return promise
  })

  it('moves onto the next middleware if it\'s not a timeout action', () => {
    const next = () => next.called = true
    const action = { type: 'NONSENSE', payload: { timeout: 0 } }
    const promise = timeout()(next)(action)

    expect(next.called).to.be.true
  })
})
