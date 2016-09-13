import mockJSON from './mocks.json'
import { FETCH } from '../actions/actions'
import { NEWS_URL, LAUNCH_URL } from '../constants'
import { NewsStory, LaunchStory } from '../models/index'

export default function interceptFetch ({ dispatch, getState }) {
  return next => action => {
    const { type, payload = {} } = action || {}

    return type === FETCH
      ? Promise.resolve(mocks[payload.url])
      : next(action)
  }
}

const mocks = {
  [LAUNCH_URL]: mockJSON.launches.map(mock => new LaunchStory(mock)),
  [NEWS_URL]: mockJSON.news.map(mock => new NewsStory(mock))
}
