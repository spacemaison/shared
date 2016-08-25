import { expect } from 'chai'
import { StoryContainer } from '../../src/models/StoryContainer'

describe('StoryContainer model', () => {
  it('spreads items in the container', () => {
    expect([ ...new StoryContainer(false, [1, 2, 3]) ]).to.deep.equal([1, 2, 3])
  })
})
