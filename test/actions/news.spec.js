import { expect } from 'chai'
import { refresh } from '../../src/actions/news'
import { MOCK_NEWS_RSS_FEED } from '../mock/news-feed'

describe('actions for news', () => {
  it('refreshes itself', () => {
    const action = refresh()
    const expectedNewsItem = {
      url: 'https://saturn.jpl.nasa.gov/system/resources/detail_files/7379_PIA20485_full.jpg',
      description: 'Bright disruption spotted on Saturn\'s F-ring',
      thumbnailSource: 'https://b.thumbs.redditmedia.com/MauDRRfm7MaHZLXnV3tPlhLBdjwnpoUHO4zUDfspJdM.jpg',
      thumbnailDescription: 'Bright disruption spotted on Saturn\'s F-ring'
    }
    const expectedLongNewsItem = Object.assign({}, expectedNewsItem, {
      description:
          'Bright disruption spotted on Saturn\'s F-ring lkjlkjlkj lkjlkjlkj ' +
          'lkjlkjlkj lkjlkjlkj lkjlkjfdslkjfkldsjflkjdslkfjdslkjfdslkjflkdsjf' +
          'kldsjf lkjlkjlkjlkj'
    })

    expect(action.next().value).to.deep.equal({
      type: 'NEWS_REFRESH',
      payload: undefined,
      error: null,
      meta: { state: 'starting' }
    })

    expect(action.next().value).to.deep.equal({
      type: 'FETCH',
      meta: {},
      error: null,
      payload: {
        url: refresh.url,
        coerceTo: 'text',
        options: {}
      }
    })

    expect(action.next(MOCK_NEWS_RSS_FEED).value).to.deep.equal({
      type: 'NEWS_REFRESH',
      error: null,
      meta: { state: 'finished' },
      payload: [ expectedNewsItem, expectedLongNewsItem, expectedNewsItem ]
    })
  })
})
