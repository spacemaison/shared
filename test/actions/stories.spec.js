/* globals describe, it */
import { expect } from 'chai'
import { StoryContainer } from '../../src/models/StoryContainer'
import { LaunchStory } from '../../src/models/LaunchStory'
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
    expect(gen.next([]).value).to.deep.equal(timeouts.timeout(1))
    expect(gen.next().value).to.deep.equal(actions.finished(type, stories))
  })

  it('refreshes news stories', () => {
    const gen = news()
    const type = namespace.resolve('stories/news')
    const stories = new StoryContainer()

    expect(gen.next().value).to.deep.equal(actions.starting(type))
    expect(gen.next().value).to.deep.equal(fetch.json(type))
    expect(gen.next([]).value).to.deep.equal(timeouts.timeout(1))
    expect(gen.next().value).to.deep.equal(actions.finished(type, stories))
  })

  it('refreshes launch stories', () => {
    const gen = launches()
    const storyType = namespace.resolve('stories/launches')
    const story = new LaunchStory({ id: 1, missions: [ { name: 'mission' } ] })
    const stories = [ story ]
    const container = new StoryContainer(false, stories)

    expect(gen.next().value).to.deep.equal(actions.starting(storyType))
    expect(gen.next().value).to.deep.equal(fetch.json(storyType))
    expect(gen.next(stories).value).to.deep.equal(timeouts.timeout(1))
    expect(gen.next().value).to.deep.equal(actions.finished(storyType, container))
  })

  it('refreshes all stories', () => {
    let gen = stories()
    let type = namespace.resolve('stories/featured')
    let container = new StoryContainer()

    expect(gen.next().value).to.deep.equal(actions.starting(type))
    expect(gen.next().value).to.deep.equal(fetch.json(type))
    expect(gen.next([]).value).to.deep.equal(timeouts.timeout(1))
    expect(gen.next().value).to.deep.equal(actions.finished(type, container))

    type = namespace.resolve('stories/news')

    expect(gen.next().value).to.deep.equal(actions.starting(type))
    expect(gen.next().value).to.deep.equal(fetch.json(type))
    expect(gen.next([]).value).to.deep.equal(timeouts.timeout(1))
    expect(gen.next().value).to.deep.equal(actions.finished(type, container))

    type = namespace.resolve('stories/launches')

    expect(gen.next().value).to.deep.equal(actions.starting(type))
    expect(gen.next().value).to.deep.equal(fetch.json(type))
    expect(gen.next([]).value).to.deep.equal(timeouts.timeout(1))
    expect(gen.next().value).to.deep.equal(actions.finished(type, container))
  })
})
