import { Model, fields } from './Model'

export class LaunchRocketFamily extends Model {
  get [fields] () {
    return Object.assign(super[fields], {
      id: Number,
      name: String,
      agencies: Array
    })
  }
}
