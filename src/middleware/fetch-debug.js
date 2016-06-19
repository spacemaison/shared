import { FETCH } from '../actions/actions'
import { refresh } from '../actions/news'
import * as mockData from '../../test/mock/index'

const mocks = {
  [refresh.url]: mockData.MOCK_NEWS_RSS_FEED
}

export default function interceptFetch ({ dispatch, getState }) {
  return next => action => {
    const { type, payload = {} } = action || {}

    return type === FETCH
      ? Promise.resolve(mocks[payload.url])
      : next(action)
  }
}
