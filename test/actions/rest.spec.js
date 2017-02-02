/* globals describe, it */
import { expect } from 'chai'
import { actions, fetch, timeouts, rest } from '../../src/actions/index'
import { StoryContainer } from '../../src/models/StoryContainer'

describe('restfull actions', () => {
  const url = 'url'

  it('gets json array and coerces its items to a model', () => {
    class Model {
      constructor (item = {}) {
        this.data = item.data
      }
    }

    const wrapper = rest.getJSONArray(Model, url)
    const returned = [ { data: 1 } ]
    const stories = new StoryContainer(false, returned)

    let gen = wrapper()

    expect(gen.next().value).to.deep.equal(actions.starting(url))
    expect(gen.next().value).to.deep.equal(fetch.json(url))
    expect(gen.next(returned).value).to.deep.equal(timeouts.timeout(1))

    const processed = gen.next().value

    expect(processed).to.deep.equal(actions.finished(url, stories))
    expect(processed.payload.items.every(item => item instanceof Model))
      .to.be.true
  })
})
