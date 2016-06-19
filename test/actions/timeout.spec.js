import { expect } from 'chai'
import { timeout } from '../../src/actions/timeout'

describe('actions for timeouts', () => {
  it('creates a timeout action', () => {
    expect(timeout(3)).to.deep.equal({
      type: 'TIMEOUT',
      payload: { timeout: 3 },
      meta: {},
      error: null
    })
  })
})
