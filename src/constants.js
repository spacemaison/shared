import url from 'url'

export const namespace = url.parse('http://localhost:3000')
export const NEWS_URL = namespace.resolve('stories/news')
export const LAUNCH_URL = namespace.resolve('stories/launches')
export const MEDIA_URL = namespace.resolve('stories/media')
export const FEATURED_URL = namespace.resolve('stories/featured')
export const GALLERIES_URL = namespace.resolve('stories/galleries')
