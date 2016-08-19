import * as fetch from './fetch'
import { wrap, aggragate } from './action'
import { STORIES_REFRESH, NEWS_REFRESH, LAUNCH_REFRESH } from './actions'
import { NEWS_URL, LAUNCH_URL } from '../constants'
import { StoryContainer } from '../models/index'

export const launches = wrap(LAUNCH_REFRESH, function * (url = LAUNCH_URL) {
  return new StoryContainer(false, yield fetch.json(url))
})

export const news = wrap(NEWS_REFRESH, function * (url = NEWS_URL) {
  return new StoryContainer(false, yield fetch.json(url))
})

export const stories = aggragate(news, launches)
