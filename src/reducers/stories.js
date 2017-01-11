import { StoryContainer } from '../models/StoryContainer'
import { states } from '../actions/action'
import {
    FEATURED_REFRESH,
    LAUNCH_REFRESH,
    MEDIA_REFRESH,
    NEWS_REFRESH } from '../actions/actions'

export function featured (featured = new StoryContainer(), action = {}) {
  return handleStoryType(FEATURED_REFRESH, featured, action)
}

export function news (news = new StoryContainer(), action = {}) {
  return handleStoryType(NEWS_REFRESH, news, action)
}

export function launches (launches = new StoryContainer(), action = {}) {
  return handleStoryType(LAUNCH_REFRESH, launches, action)
}

export function media (media = new StoryContainer(), action = {}) {
  return handleStoryType(MEDIA_REFRESH, media, action)
}

function handleStoryType (storyType, stories, action) {
  const { type, payload, meta } = action

  if (type !== storyType) return stories

  switch (meta.state) {
    case states.error: return stories
    case states.starting: return new StoryContainer(true, [ ...stories ])
    case states.finished: return new StoryContainer(false, [ ...payload ])
  }
}
