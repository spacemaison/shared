import url from 'url'

export const namespace = url.parse('http://localhost:3000')
export const NEWS_URL = namespace.resolve('stories/news')
export const LAUNCH_URL = namespace.resolve('stories/launches')
export const FEATURED_URL = namespace.resolve('stories/featured')
