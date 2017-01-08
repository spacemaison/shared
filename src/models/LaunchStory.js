import { Model, fields } from './Model'

export class LaunchStory extends Model {
  get [fields] () {
    return Object.assign(super[fields], {
      id: Number,
      infoURLs: Array,
      location: Object,
      pads: Array,
      missions: Array,
      rocket: Object,
      videoURLs: Array,
      windowStart: Date,
      windowEnd: Date
    })
  }
}
