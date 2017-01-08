import { Model, fields } from './Model'

export class LaunchMission extends Model {
  get [fields] () {
    return Object.assign(super[fields], {
      id: Number,
      agencies: Array,
      description: Number,
      infoURLs: Array,
      name: String,
      type: String,
      wikiURL: String
    })
  }
}
