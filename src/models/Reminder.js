import { Model, fields } from './Model'

export class Reminder extends Model {
  constructor (reminder = {}) {
    super(reminder)

    if (this.id < 1 || !Number.isInteger(this.id)) {
      throw new TypeError('Positive id integer required')
    }
  }

  get [fields] () {
    return Object.assign(super[fields], {
      id: Number,
      time: Date,
      message: String
    })
  }
}
