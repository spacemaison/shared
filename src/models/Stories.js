import { NewsStory, LaunchStory } from './index'

export class Stories {
  constructor ({
        featured = [],
        media = [],
        news = [],
        launches = [] } = {}) {
    this.featured = featured
    this.media = media
    this.news = (news || []).map(story => new NewsStory(story))
    this.launches = (launches || []).map(story => new LaunchStory(story))
  }
}
