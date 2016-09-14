import { expect } from 'chai'
import { StoryContainer } from '../../src/models/StoryContainer'
import { featured, news, launches, stories } from '../../src/actions/stories'
import { actions, fetch, timeouts } from '../../src/actions/index'
import { namespace } from '../../src/constants'

describe('actions for stories', () => {
  it('refreshes featured stories', () => {
    const gen = featured()
    const type = namespace.resolve('stories/featured')
    const stories = new StoryContainer()

    expect(gen.next().value).to.deep.equal(actions.starting(type))
    expect(gen.next().value).to.deep.equal(fetch.json(type))
    expect(gen.next().value).to.deep.equal(timeouts.timeout(1))
    expect(gen.next().value).to.deep.equal(actions.finished(type, stories))
  })

  it('refreshes news stories', () => {
    const gen = news()
    const type = namespace.resolve('stories/news')
    const stories = new StoryContainer()

    expect(gen.next().value).to.deep.equal(actions.starting(type))
    expect(gen.next().value).to.deep.equal(fetch.json(type))
    expect(gen.next().value).to.deep.equal(timeouts.timeout(1))
    expect(gen.next().value).to.deep.equal(actions.finished(type, stories))
  })

  it('refreshes launch stories', () => {
    const gen = launches()
    const type = namespace.resolve('stories/launches')
    const stories = new StoryContainer()

    expect(gen.next().value).to.deep.equal(actions.starting(type))
    expect(gen.next().value).to.deep.equal(fetch.json(type))
    expect(gen.next().value).to.deep.equal(timeouts.timeout(1))
    expect(gen.next().value).to.deep.equal(actions.finished(type, stories))
  })

  it('refreshes all stories', () => {
    let gen = stories()
    let type = namespace.resolve('stories/featured')
    let container = new StoryContainer()

    expect(gen.next().value).to.deep.equal(actions.starting(type))
    expect(gen.next().value).to.deep.equal(fetch.json(type))
    expect(gen.next().value).to.deep.equal(timeouts.timeout(1))
    expect(gen.next().value).to.deep.equal(actions.finished(type, container))

    type = namespace.resolve('stories/news')

    expect(gen.next().value).to.deep.equal(actions.starting(type))
    expect(gen.next().value).to.deep.equal(fetch.json(type))
    expect(gen.next().value).to.deep.equal(timeouts.timeout(1))
    expect(gen.next().value).to.deep.equal(actions.finished(type, container))

    type = namespace.resolve('stories/launches')

    expect(gen.next().value).to.deep.equal(actions.starting(type))
    expect(gen.next().value).to.deep.equal(fetch.json(type))
    expect(gen.next().value).to.deep.equal(timeouts.timeout(1))
    expect(gen.next().value).to.deep.equal(actions.finished(type, container))
  })
})
