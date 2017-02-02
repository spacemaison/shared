/* globals describe, it */
import { expect } from 'chai'
import { StoryContainer } from '../../src/models/StoryContainer'
import * as rest from '../../src/reducers/rest'

describe('rest reducer', () => {
  const type = 'type'

  it('handles starting to reduce json stories', () => {
    const reducer = rest.handleJSONArray(type)
    const action = { type, meta: { state: 'starting' } }

    expect(reducer(void 0, action)).to.deep.equal(new StoryContainer(true))
  })

  it('handles finishing reducing json stories', () => {
    const reducer = rest.handleJSONArray(type)
    const action = { type, payload: [], meta: { state: 'finished' } }

    expect(reducer(void 0, action)).to.deep.equal(new StoryContainer(false, []))
  })

  it('handles json stories error by returning previous story container', () => {
    const reducer = rest.handleJSONArray(type)
    const action = { meta: { state: 'error' } }
    const previous = new StoryContainer()

    expect(reducer(previous, action)).to.equal(previous)
  })
})
