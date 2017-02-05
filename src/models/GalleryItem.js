import { Model, fields } from './Model'
import { Image } from './Image'

export class GalleryItem extends Model {
  constructor () {
    super(...arguments)
    this.image = new Image(this.image)
  }

  get [fields] () {
    return Object.assign(super[fields], {
      id: String,
      image: Image,
      credit: Array,
      license: String,
      title: String,
      description: String,
      date: Date,
      infoURL: String
    })
  }
}
