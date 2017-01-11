import { Model, fields } from './Model'
import { Image } from './Image'

export class FeaturedStory extends Model {
  get [fields] () {
    return Object.assign(super[fields], {
      url: String,
      description: String,
      title: String,
      image: Image
    })
  }
}
