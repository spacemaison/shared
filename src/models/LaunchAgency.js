import { Model, fields } from './Model'

export class LaunchAgency extends Model {
  get [fields] () {
    return Object.assign(super[fields], {
      abbrev: String,
      countryCode: String,
      id: Number,
      infoURLs: Array,
      name: String,
      type: String,
      wikiURL: String
    })
  }
}
