import xdate from 'xdate'
import * as fetch from './fetch'
import { wrap, aggragate } from './action'
import { updateReminder } from './reminders'
import {
    FEATURED_REFRESH,
    MEDIA_REFRESH,
    NEWS_REFRESH,
    LAUNCH_REFRESH } from './actions'
import { FEATURED_URL, MEDIA_URL, NEWS_URL, LAUNCH_URL } from '../constants'
import {
    StoryContainer,
    FeaturedStory,
    LaunchStory,
    MediaStory,
    NewsStory } from '../models/index'

export const featured = wrap(FEATURED_REFRESH, function * (url = FEATURED_URL) {
  const stories = (yield fetch.json(url)).map(s => new FeaturedStory(s))

  return new StoryContainer(false, stories)
})

export const launches = wrap(LAUNCH_REFRESH, function * (url = LAUNCH_URL) {
  const launches = (yield fetch.json(url)).map(s => new LaunchStory(s))

  return new StoryContainer(false, launches)
})

export const media = wrap(MEDIA_REFRESH, function * (url = MEDIA_URL) {
  const stories = (yield fetch.json(url)).map(s => new MediaStory(s))

  return new StoryContainer(false, stories)
})

export const news = wrap(NEWS_REFRESH, function * (url = NEWS_URL) {
  const stories = (yield fetch.json(url)).map(s => new NewsStory(s))

  return new StoryContainer(false, stories)
})

export const stories = aggragate(featured, news, launches)
