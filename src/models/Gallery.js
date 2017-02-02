import { Model, fields } from './Model'
import { GalleryItem } from './GalleryItem'

export class Gallery extends Model {
  constructor () {
    super(...arguments)
    this.items = this.items.map(item => new GalleryItem(item))
  }

  get [fields] () {
    return Object.assign(super[fields], {
      id: Number,
      title: String,
      items: Array
    })
  }

  static get EmptyGallery () {
    return emptyGallery
  }
}

const emptyGallery = new Gallery()
