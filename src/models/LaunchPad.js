import { Model, fields } from './Model'

export class LaunchPad extends Model {
  get [fields] () {
    return Object.assign(super[fields], {
      id: Number,
      latitude: String,
      longitude: String,
      padType: String,
      name: String,
      mapURL: String,
      retired: Boolean,
      locationId: Number,
      agencies: Array,
      wikiURL: String
    })
  }
}
