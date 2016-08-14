import { StoryContainer } from '../models/StoryContainer'
import { LAUNCH_REFRESH, NEWS_REFRESH } from '../actions/actions'
import { states } from '../actions/action'

export function news (news = new StoryContainer(), action = {}) {
  return handleStoryType(NEWS_REFRESH, news, action)
}

export function launches (launches = new StoryContainer(), action = {}) {
  return handleStoryType(LAUNCH_REFRESH, launches, action)
}

function handleStoryType (storyType, stories, action) {
  const { type, payload, meta } = action

  if (type !== storyType) return stories

  switch (meta.state) {
    case states.error: return stories
    case states.starting: return new StoryContainer(true, stories.items)
    case states.finished: return new StoryContainer(false, payload)
  }
}