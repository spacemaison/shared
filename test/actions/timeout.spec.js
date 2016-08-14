import { expect } from 'chai'
import { timeout } from '../../src/actions/timeout'
import { namespace } from '../../src/constants'

describe('actions for timeouts', () => {
  it('creates a timeout action', () => {
    expect(timeout(3)).to.deep.equal({
      type: namespace.resolve('timeout'),
      payload: { timeout: 3 },
      meta: {},
      error: null
    })
  })
})
