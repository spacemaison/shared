import { action } from './action'
import * as actions from './actions'
import * as interfaces from '../interfaces/index'
import { Reminder } from '../models/Reminder'

export function * addReminder (
    reminder = new Reminder(),
    notifier = interfaces.get('notifier')) {
  try {
    reminder = yield notifier.add(reminder)
    return action(actions.REMINDER_ADD, reminder)
  } catch (error) {
    return action(actions.REMINDER_ADD, error)
  }
}

export function * removeReminder (
    reminder = new Reminder(),
    notifier = interfaces.get('notifier')) {
  try {
    reminder = yield notifier.remove(reminder)
    return action(actions.REMINDER_REMOVE, reminder)
  } catch (error) {
    return action(actions.REMINDER_REMOVE, error)
  }
}

export function * toggleReminder (
    reminder = new Reminder(),
    notifier = interfaces.get('notifier')) {
  try {
    reminder = yield notifier.toggle(reminder)
    return action(actions.REMINDER_TOGGLE, reminder)
  } catch (error) {
    return action(actions.REMINDER_TOGGLE, error)
  }
}

export function * updateReminder (
    reminder = new Reminder(),
    notifier = interfaces.get('notifier')) {
  try {
    reminder = yield notifier.update(reminder)
    return action(actions.REMINDER_UPDATE, reminder)
  } catch (error) {
    return action(actions.REMINDER_UPDATE, error)
  }
}
