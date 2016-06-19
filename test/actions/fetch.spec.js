import { expect } from 'chai'
import { fetch, text } from '../../src/actions/fetch'

describe('actions for fetching content,', () => {
  it('creates fetch actions', () => {
    const url = 'http://nonexistent'
    const options = {}

    expect(fetch(url, options, 'invalid')).to.deep.equal({
      type: 'FETCH',
      meta: {},
      error: null,
      payload: { url, options, coerceTo: 'text' }
    })

    expect(fetch(url, options, 'blob')).to.deep.equal({
      type: 'FETCH',
      meta: {},
      error: null,
      payload: { url, options, coerceTo: 'blob' }
    })
  })

  it('creates text fetch actions', () => {
    const url = 'http://nonexistent'
    const options = {}

    expect(text(url, options)).to.deep.equal({
      type: 'FETCH',
      meta: {},
      error: null,
      payload: { url, options, coerceTo: 'text' }
    })
  })
})
