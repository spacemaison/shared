import * as rest from './rest'
import { GALLERIES_URL } from '../constants'
import { GALLERY_LOAD } from '../actions/actions'
import { StoryContainer } from '../models/StoryContainer'

export function galleries (galleries = new StoryContainer(), action = {}) {
  const { type } = action

  switch (type) {
    case GALLERIES_URL: return allGalleries(galleries, action)
    case GALLERY_LOAD: return galleryItem(galleries, action)
    default: return galleries
  }
}

const allGalleries = rest.handleJSONArray(GALLERIES_URL)

function galleryItem (galleries, { meta = {}, payload: gallery }) {
  if (meta.state !== 'finished') {
    return galleries
  }

  return new StoryContainer(false, [ ...galleries ]
    .filter(({ id }) => id !== gallery.id)
    .concat(gallery)
  )
}
