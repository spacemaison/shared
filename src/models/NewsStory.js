import { Model, fields } from './Model'
import { Image } from './Image'

export class NewsStory extends Model {
  constructor ({ image } = {}) {
    super(...arguments)
    this.image = new Image(image)
  }

  get [fields] () {
    return {
      url: String,
      description: String,
      source: String,
      title: String,
      type: String,
      rank: Number,
      image: Image
    }
  }
}
