export class NewsStory {
  constructor ({
        url = '',
        description = '',
        thumbnailSource = '',
        thumbnailDescription = '' } = {}) {
    this.url = url
    this.description = description
    this.thumbnailSource = thumbnailSource
    this.thumbnailDescription = thumbnailDescription
  }
}
