import { Model, fields } from './Model'

export class LaunchLocation extends Model {
  get [fields] () {
    return Object.assign(super[fields], {
      countryCode: String,
      id: Number,
      infoURLs: Array,
      name: String,
      wikiURL: String
    })
  }
}
