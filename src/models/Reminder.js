import xdate from 'xdate'
import { Model, fields } from './Model'
import { LaunchStory } from './LaunchStory'

export class Reminder extends Model {
  constructor (reminder = {}) {
    if (reminder instanceof LaunchStory) {
      const { id, missions = [], rocket = {}, windowStart } = reminder
      const missionName = missions[0] && missions[0].name || rocket.name
      const date = xdate(windowStart).addMinutes(-10).toDate()

      super({
        date,
        id,
        message: `The ${missionName} launch window starts in ten minutes`
      })
    } else {
      super(reminder)
    }

    if (this.id < 1 || !Number.isInteger(this.id)) {
      throw new TypeError('Positive id integer required')
    }
  }

  get [fields] () {
    return Object.assign(super[fields], {
      id: Number,
      date: Date,
      message: String
    })
  }
}
