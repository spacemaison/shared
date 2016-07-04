import { expect } from 'chai'
import { fetch, text, json, post, postJSON } from '../../src/actions/fetch'

describe('actions for fetching content,', () => {
  it('creates fetch actions', () => {
    const url = 'http://nonexistent'
    const params = {}

    expect(fetch(url, params, 'invalid')).to.deep.equal({
      type: 'FETCH',
      meta: {},
      error: null,
      payload: { url, params, coerceTo: null }
    })

    expect(fetch(url, params, 'blob')).to.deep.equal({
      type: 'FETCH',
      meta: {},
      error: null,
      payload: { url, params, coerceTo: 'blob' }
    })
  })

  it('creates text fetch actions', () => {
    const url = 'http://nonexistent'
    const params = {}

    expect(text(url, params)).to.deep.equal({
      type: 'FETCH',
      meta: {},
      error: null,
      payload: { url, params, coerceTo: 'text' }
    })
  })

  it('creates json fetch actions', () => {
    const url = 'http://nonexistent'
    const params = {}

    expect(json(url, params)).to.deep.equal({
      type: 'FETCH',
      meta: {},
      error: null,
      payload: { url, params, coerceTo: 'json' }
    })
  })

  it('creates post actions', () => {
    const url = 'http://nonexistent'
    const body = ''

    expect(post(url, body)).to.deep.equal({
      type: 'FETCH',
      meta: {},
      error: null,
      payload: { url, params: { method: 'POST', body }, coerceTo: null }
    })
  })

  it('creates json post actions', () => {
    const url = 'http://nonexistent'
    const body = { foo: 'bar' }

    expect(postJSON(url, body)).to.deep.equal({
      type: 'FETCH',
      meta: {},
      error: null,
      payload: {
        url,
        coerceTo: null,
        params: {
          method: 'POST',
          body: '{"foo":"bar"}',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      }
    })
  })
})
