import { Model, fields } from './Model'

export class LaunchRocket extends Model {
  get [fields] () {
    return Object.assign(super[fields], {
      configuration: String,
      id: Number,
      name: String,
      defaultPads: Array,
      family: Object,
      wikiURL: String,
      infoURLs: Array,
      imageURL: String,
      imageSizes: Array
    })
  }
}
