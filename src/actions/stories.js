import * as rest from './rest'
import { aggragate } from './action'
import { FEATURED_URL, MEDIA_URL, NEWS_URL, LAUNCH_URL } from '../constants'
import {
    FeaturedStory,
    LaunchStory,
    MediaStory,
    NewsStory } from '../models/index'

export const featured = rest.getJSONArray(FeaturedStory, FEATURED_URL)
export const launches = rest.getJSONArray(LaunchStory, LAUNCH_URL)
export const media = rest.getJSONArray(MediaStory, MEDIA_URL)
export const news = rest.getJSONArray(NewsStory, NEWS_URL)
export const stories = aggragate(featured, news, launches, media)
