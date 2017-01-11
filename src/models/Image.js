import { Model, fields } from './Model'

export class Image extends Model {
  get [fields] () {
    return Object.assign(super[fields], {
      urls: Array,
      sizes: Array
    })
  }
}
