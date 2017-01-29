/* globals describe, it */
import { expect } from 'chai'
import { LaunchStory, Reminder } from '../../src/models/index'

describe('Reminder model', () => {
  it('coerces LaunchStory models into reminders', () => {
    const launch = new LaunchStory({ id: 1, rocket: { name: 'rocket1' } })
    const reminder = new Reminder(launch)

    expect(reminder.id).to.equal(1)
    expect(reminder.date).to.be.instanceOf(Date)
    expect(reminder.message)
      .to.equal('The rocket1 launch window starts in ten minutes')
  })

  it('throw when id < 1 or is a non integer', () => {
    expect(() => new Reminder()).to.throw(TypeError)
    expect(() => new Reminder({ id: 'bs' })).to.throw(TypeError)
    expect(() => new Reminder({ id: -2 })).to.throw(TypeError)
  })
})
