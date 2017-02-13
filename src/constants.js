import url from 'url'

export const PROTOCOL = process.env.SPACE_MAISON_PROTOCOL || 'http:'
export const HOST = process.env.SPACE_MAISON_HOSTNAME || 'localhost'
export const PORT = process.env.SPACE_MAISON_PORT || '3000'
export const URL = `${PROTOCOL}//${HOST}${PORT ? ':' + PORT : ''}`

export const namespace = url.parse(URL)
export const NEWS_URL = namespace.resolve('stories/news')
export const LAUNCH_URL = namespace.resolve('stories/launches')
export const MEDIA_URL = namespace.resolve('stories/media')
export const FEATURED_URL = namespace.resolve('stories/featured')
export const GALLERIES_URL = namespace.resolve('stories/galleries')
