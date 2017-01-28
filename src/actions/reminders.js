import { action } from './action'
import * as actions from './actions'

export function addReminder (story) {
  return action(actions.REMINDER_ADD, story)
}

export function removeReminder (story) {
  return action(actions.REMINDER_REMOVE, story)
}

export function toggleReminder (story) {
  return action(actions.REMINDER_TOGGLE, story)
}

export function updateReminder (story) {
  return action(actions.REMINDER_UPDATE, story)
}
