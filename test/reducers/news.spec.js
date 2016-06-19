import { expect } from 'chai'
import { refresh } from '../../src/reducers/news'
import { News } from '../../src/models/News'
import { NewsItem } from '../../src/models/NewsItem'

describe('reducers for news', () => {
  it('starts refreshing news items', () => {
    const news = new News(false, [ new NewsItem() ])

    expect(refresh(news, { payload: null, meta: { state: 'starting' } }))
      .to.be.instanceof(News)
      .and.deep.equal({ isRefreshing: true, items: news.items })
  })

  it('finishes refreshing news items', () => {
    const payload = [ new NewsItem() ]

    expect(refresh(null, { payload, meta: { state: 'finished' } }))
      .to.be.instanceof(News)
      .and.deep.equal({ isRefreshing: false, items: payload })
  })
})
