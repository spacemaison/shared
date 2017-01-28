/* globals describe, it */
import { expect } from 'chai'
import { actions } from '../../src/actions/index'
import { namespace } from '../../src/constants'
import * as reminders from '../../src/actions/reminders'

describe('actions for reminders', () => {
  it('adds a reminder', () => {
    const type = namespace.resolve('reminders/add')
    const story = {}

    expect(reminders.addReminder(story))
      .to.deep.equal(actions.action(type, story))
  })

  it('removes a reminder', () => {
    const type = namespace.resolve('reminders/remove')
    const story = {}

    expect(reminders.removeReminder(story))
      .to.deep.equal(actions.action(type, story))
  })

  it('toggles a reminder', () => {
    const type = namespace.resolve('reminders')
    const story = {}

    expect(reminders.toggleReminder(story))
      .to.deep.equal(actions.action(type, story))
  })

  it('updates a reminder', () => {
    const type = namespace.resolve('reminders/update')
    const story = {}

    expect(reminders.updateReminder(story))
      .to.deep.equal(actions.action(type, story))
  })
})
