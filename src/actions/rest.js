import { wrap } from './action'
import { StoryContainer } from '../models/StoryContainer'
import * as fetch from './fetch'

export function getJSONArray (Model, url, type = url) {
  return wrap(type, function * (_url = url) {
    const json = yield fetch.json(_url)
    const stories = (json || []).map(s => new Model(s))

    return new StoryContainer(false, stories)
  })
}
