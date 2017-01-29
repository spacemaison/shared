/* globals describe, it */

import { expect } from 'chai'
import * as reminders from '../../src/actions/reminders'
import * as actions from '../../src/actions/actions'
import { Reminder } from '../../src/models/index'
import { namespace } from '../../src/constants'

describe('actions for reminders', () => {
  it('adds a reminder', () => {
    const reminder = new Reminder({ id: 1 })

    let gen = reminders.addReminder(reminder, notifier)

    gen.next()

    expect(gen.next(reminder).value).to.deep.equal({
      type: namespace.resolve('reminders/add'),
      payload: reminder,
      meta: {},
      error: null
    })
  })

  it('adds a reminder, but fails after notifier error', () => {
    const reminder = new Reminder({ id: 1 })
    const error = new Error()
    const notifier = { add () { throw error } }

    let gen = reminders.addReminder(reminder, notifier)

    expect(gen.next().value).to.deep.equal({
      type: namespace.resolve('reminders/add'),
      payload: null,
      meta: { state: 'error' },
      error
    })
  })

  it('removes a reminder', () => {
    const reminder = new Reminder({ id: 1 })

    let gen = reminders.removeReminder(reminder, notifier)

    gen.next()

    expect(gen.next(reminder).value).to.deep.equal({
      type: actions.REMINDER_REMOVE,
      payload: reminder,
      meta: {},
      error: null
    })
  })

  it('removes a reminder, but fails after notifier error', () => {
    const reminder = new Reminder({ id: 1 })
    const error = new Error()
    const notifier = { remove () { throw error } }

    let gen = reminders.removeReminder(reminder, notifier)

    expect(gen.next().value).to.deep.equal({
      type: actions.REMINDER_REMOVE,
      payload: null,
      meta: { state: 'error' },
      error
    })
  })

  it('updates a reminder', () => {
    const reminder = new Reminder({ id: 1 })

    let gen = reminders.updateReminder(reminder, notifier)

    gen.next()

    expect(gen.next(reminder).value).to.deep.equal({
      type: namespace.resolve('reminders/add'),
      payload: reminder,
      meta: {},
      error: null
    })
  })

  it('updates a reminder, but fails after notifier error', () => {
    const reminder = new Reminder({ id: 1 })
    const error = new Error()
    const notifier = { update () { throw error } }

    let gen = reminders.updateReminder(reminder, notifier)

    expect(gen.next().value).to.deep.equal({
      type: namespace.resolve('reminders/add'),
      payload: null,
      meta: { state: 'error' },
      error
    })
  })

  const notifier = {
    add () {},
    remove () {},
    update () {},
    toggle () {}
  }
})
