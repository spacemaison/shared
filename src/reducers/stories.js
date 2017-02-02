import * as rest from './rest'
import {
    FEATURED_URL,
    LAUNCH_URL,
    MEDIA_URL,
    NEWS_URL } from '../constants'

export const featured = rest.handleJSONArray(FEATURED_URL)
export const news = rest.handleJSONArray(NEWS_URL)
export const launches = rest.handleJSONArray(LAUNCH_URL)
export const media = rest.handleJSONArray(MEDIA_URL)
