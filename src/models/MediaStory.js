import { Model, fields } from './Model'
import { Image } from './Image'

export class MediaStory extends Model {
  get [fields] () {
    return Object.assign(super[fields], {
      title: String,
      description: String,
      url: String,
      image: Image
    })
  }
}
