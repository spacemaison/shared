import { Model, fields } from './Model'
import { Image } from './Image'

export class MediaStory extends Model {
  get [fields] () {
    return Object.assign(super[fields], {
      date: Date,
      title: String,
      description: String,
      url: String,
      image: Image,
      type: String
    })
  }
}
