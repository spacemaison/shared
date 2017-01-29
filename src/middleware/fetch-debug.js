import xdate from 'xdate'
import mockJSON from './mocks.json'
import { FETCH } from '../actions/actions'
import { FEATURED_URL, MEDIA_URL, NEWS_URL, LAUNCH_URL } from '../constants'
import {
    FeaturedStory,
    MediaStory,
    NewsStory,
    LaunchStory } from '../models/index'

export default function interceptFetch ({ dispatch, getState }) {
  return next => action => {
    const { type, payload = {} } = action || {}

    return type === FETCH
      ? Promise.resolve(mocks[payload.url])
      : next(action)
  }
}

const mocks = {
  [FEATURED_URL]: mockJSON.featured.map(mock => new FeaturedStory(mock)),
  [LAUNCH_URL]: mockJSON.launches
    .map((mock, i) => new LaunchStory(Object.assign(mock, {
      windowStart: xdate(new Date()).addDays(i).addMinutes(11).toDate(),
      windowEnd: xdate(new Date()).addDays(i).addMinutes(20).toDate()
    }))),
  [MEDIA_URL]: mockJSON.media.map(mock => new MediaStory(mock)),
  [NEWS_URL]: mockJSON.news.map(mock => new NewsStory(mock))
}
