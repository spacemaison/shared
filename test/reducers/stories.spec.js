import { expect } from 'chai'
import { featured, news, launches } from '../../src/reducers/stories'
import {
    StoryContainer,
    FeaturedStory,
    LaunchStory,
    NewsStory } from '../../src/models/index'
import {
    FEATURED_REFRESH,
    LAUNCH_REFRESH,
    NEWS_REFRESH } from '../../src/actions/actions'

describe('reducers for stories', () => {
  it('starts refreshing news stories', () => {
    const mock = new StoryContainer(false, [ new NewsStory() ])
    const type = NEWS_REFRESH

    expect(news(mock, { type, meta: { state: 'starting' } }))
      .to.be.instanceof(StoryContainer)
      .and.deep.equal({ isRefreshing: true, items: mock.items })
  })

  it('finishes refreshing news stories', () => {
    const payload = [ new NewsStory() ]
    const type = NEWS_REFRESH

    expect(news(null, { type, payload, meta: { state: 'finished' } }))
      .to.be.instanceof(StoryContainer)
      .and.deep.equal({ isRefreshing: false, items: payload })
  })

  it('starts refreshing launch stories', () => {
    const mock = new StoryContainer(false, [ new LaunchStory() ])
    const type = LAUNCH_REFRESH

    expect(launches(mock, { type, payload: null, meta: { state: 'starting' } }))
      .to.be.instanceof(StoryContainer)
      .and.deep.equal({ isRefreshing: true, items: mock.items })
  })

  it('finishes refreshing launch stories', () => {
    const payload = [ new LaunchStory() ]
    const type = LAUNCH_REFRESH

    expect(launches(null, { type, payload, meta: { state: 'finished' } }))
      .to.be.instanceof(StoryContainer)
      .and.deep.equal({ isRefreshing: false, items: payload })
  })

  it('starts refreshing featured stories', () => {
    const mock = new StoryContainer(false, [ new FeaturedStory() ])
    const type = FEATURED_REFRESH

    expect(featured(mock, { type, payload: null, meta: { state: 'starting' } }))
      .to.be.instanceof(StoryContainer)
      .and.deep.equal({ isRefreshing: true, items: mock.items })
  })

  it('finishes refreshing featured stories', () => {
    const payload = [ new FeaturedStory() ]
    const type = FEATURED_REFRESH

    expect(featured(null, { type, payload, meta: { state: 'finished' } }))
      .to.be.instanceof(StoryContainer)
      .and.deep.equal({ isRefreshing: false, items: payload })
  })
})
