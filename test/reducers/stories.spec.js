/* globals describe, it */
import { expect } from 'chai'
import { featured, news, launches } from '../../src/reducers/stories'
import {
    StoryContainer,
    FeaturedStory,
    LaunchStory,
    NewsStory } from '../../src/models/index'
import {
    FEATURED_URL,
    LAUNCH_URL,
    NEWS_URL } from '../../src/constants'

describe('reducers for stories', () => {
  it('starts refreshing news stories', () => {
    const mock = new StoryContainer(false, [ new NewsStory() ])
    const type = NEWS_URL

    expect(news(mock, { type, meta: { state: 'starting' } }))
      .to.be.instanceof(StoryContainer)
      .and.deep.equal({ isRefreshing: true, items: mock.items })
  })

  it('finishes refreshing news stories', () => {
    const payload = [ new NewsStory() ]
    const type = NEWS_URL

    expect(news(null, { type, payload, meta: { state: 'finished' } }))
      .to.be.instanceof(StoryContainer)
      .and.deep.equal({ isRefreshing: false, items: payload })
  })

  it('starts refreshing launch stories', () => {
    const mock = new StoryContainer(false, [ new LaunchStory() ])
    const type = LAUNCH_URL

    expect(launches(mock, { type, payload: null, meta: { state: 'starting' } }))
      .to.be.instanceof(StoryContainer)
      .and.deep.equal({ isRefreshing: true, items: mock.items })
  })

  it('finishes refreshing launch stories', () => {
    const payload = [ new LaunchStory() ]
    const type = LAUNCH_URL

    expect(launches(null, { type, payload, meta: { state: 'finished' } }))
      .to.be.instanceof(StoryContainer)
      .and.deep.equal({ isRefreshing: false, items: payload })
  })

  it('starts refreshing featured stories', () => {
    const mock = new StoryContainer(false, [ new FeaturedStory() ])
    const type = FEATURED_URL

    expect(featured(mock, { type, payload: null, meta: { state: 'starting' } }))
      .to.be.instanceof(StoryContainer)
      .and.deep.equal({ isRefreshing: true, items: mock.items })
  })

  it('finishes refreshing featured stories', () => {
    const payload = [ new FeaturedStory() ]
    const type = FEATURED_URL

    expect(featured(null, { type, payload, meta: { state: 'finished' } }))
      .to.be.instanceof(StoryContainer)
      .and.deep.equal({ isRefreshing: false, items: payload })
  })
})
