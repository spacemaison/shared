import { action } from './action'
import * as actions from './actions'
import * as interfaces from '../interfaces/index'
import { Reminder } from '../models/Reminder'

export function * addReminder (
    reminder = new Reminder(),
    notifier = interfaces.get('notifier')) {
  try {
    reminder = yield notifier.add(reminder)
    return yield action(actions.REMINDER_ADD, reminder)
  } catch (error) {
    return yield action(actions.REMINDER_ADD, error)
  }
}

export function * removeReminder (
    reminder = new Reminder(),
    notifier = interfaces.get('notifier')) {
  try {
    reminder = yield notifier.remove(reminder)
    return yield action(actions.REMINDER_REMOVE, reminder)
  } catch (error) {
    return yield action(actions.REMINDER_REMOVE, error)
  }
}

export function * updateReminder (
    reminder = new Reminder(),
    notifier = interfaces.get('notifier')) {
  return yield * addReminder(reminder, notifier)
}
