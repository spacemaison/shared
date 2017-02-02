import { StoryContainer } from '../models/StoryContainer'
import { states } from '../actions/action'

export function handleJSONArray (storyType) {
  return function (stories = new StoryContainer(), action = {}) {
    const { type, payload, meta } = action

    if (type !== storyType) return stories

    switch (meta.state) {
      case states.error: return stories
      case states.starting: return new StoryContainer(true, [ ...stories ])
      case states.finished: return new StoryContainer(false, [ ...payload ])
    }
  }
}
