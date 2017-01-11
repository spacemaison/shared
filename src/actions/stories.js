import * as fetch from './fetch'
import { wrap, aggragate } from './action'
import {
    FEATURED_REFRESH,
    MEDIA_REFRESH,
    NEWS_REFRESH,
    LAUNCH_REFRESH } from './actions'
import { FEATURED_URL, MEDIA_URL, NEWS_URL, LAUNCH_URL } from '../constants'
import { StoryContainer } from '../models/index'

export const featured = wrap(FEATURED_REFRESH, function * (url = FEATURED_URL) {
  return new StoryContainer(false, yield fetch.json(url))
})

export const launches = wrap(LAUNCH_REFRESH, function * (url = LAUNCH_URL) {
  return new StoryContainer(false, yield fetch.json(url))
})

export const media = wrap(MEDIA_REFRESH, function * (url = MEDIA_URL) {
  return new StoryContainer(false, yield fetch.json(url))
})

export const news = wrap(NEWS_REFRESH, function * (url = NEWS_URL) {
  return new StoryContainer(false, yield fetch.json(url))
})

export const stories = aggragate(featured, news, launches)
