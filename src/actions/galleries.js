import * as rest from './rest'
import * as fetch from './fetch'
import { wrap } from './action'
import { GALLERY_LOAD } from './actions'
import { GALLERIES_URL } from '../constants'
import { Gallery } from '../models/index'

export const galleries = rest.getJSONArray(Gallery, GALLERIES_URL)

export const getGallery = wrap(GALLERY_LOAD, function * (id) {
  return new Gallery(yield fetch.json(GALLERIES_URL + '/' + id))
})
