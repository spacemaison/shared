import * as actions from '../actions/actions'

export default function (reminders = [], { payload = {}, type }) {
  switch (type) {
    case actions.REMINDER_REMOVE:
      return removeReminder(reminders, payload)

    case actions.REMINDER_UPDATE:
    case actions.REMINDER_ADD:
      return addReminder(reminders, payload)

    case actions.REMINDER_TOGGLE:
      return hasReminder(reminders, payload)
          ? removeReminder(reminders, payload)
          : addReminder(reminders, payload)

    default: return reminders
  }
}

export function hasReminder (reminders, reminder) {
  return reminders.some(({ id }) => (id === reminder.id))
}

export function removeReminder (reminders, reminder) {
  return reminders.filter(({ id }) => (id !== reminder.id))
}

export function addReminder (reminders, reminder) {
  return removeReminder(reminders, reminder).concat(reminder)
}
