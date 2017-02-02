import xdate from 'xdate'
import URL from 'url'
import mockJSON from './mocks.json'
import { FETCH } from '../actions/actions'
import {
    FEATURED_URL,
    MEDIA_URL,
    NEWS_URL,
    LAUNCH_URL,
    GALLERIES_URL } from '../constants'

export default function interceptFetch ({ dispatch, getState }) {
  return next => action => {
    const { type, payload = {} } = action || {}

    if (type !== FETCH) {
      return next(action)
    }

    const url = URL.parse(payload.url)
    const parts = url.pathname.split('/').filter(i => i)
    const itemID = Number.parseInt(parts[parts.length - 1])

    if (!isNaN(itemID)) {
      const pathname = parts.slice(0, parts.length - 1).join('/')
      const mockURL = `${url.protocol}//${url.host}/${pathname}`

      return Promise.resolve(mocks[mockURL][itemID])
    } else {
      return Promise.resolve(mocks[payload.url])
    }
  }
}

const mocks = {
  [FEATURED_URL]: mockJSON.featured,
  [LAUNCH_URL]: mockJSON.launches
    .map((mock, i) => Object.assign(mock, {
      windowStart: xdate(new Date()).addDays(i).addMinutes(11).toDate(),
      windowEnd: xdate(new Date()).addDays(i).addMinutes(20).toDate()
    })),
  [GALLERIES_URL]: (function () {
    let firstGallery = mockJSON.galleries[0]

    firstGallery.items = [ ...new Array(10) ].map((_, i) => (
      firstGallery.items[Math.floor(Math.random() * 3)]
    ))

    return [ firstGallery, ...mockJSON.galleries.slice(1) ]
  })(),
  [MEDIA_URL]: mockJSON.media,
  [NEWS_URL]: mockJSON.news
}
