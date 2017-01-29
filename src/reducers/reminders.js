import * as actions from '../actions/actions'
import * as interfaces from '../interfaces/index'
import * as models from '../models/index'

export default function (reminders = [], { payload = {}, type }) {
  switch (type) {
    case actions.LAUNCH_REFRESH:
      return updateReminders(reminders, payload)

    case actions.REMINDER_REMOVE:
      return removeReminder(reminders, payload)

    case actions.REMINDER_ADD:
      return addReminder(reminders, payload)

    default: return reminders
  }
}

// FIXME: This is a hack to get the dumb React Native notifier interface to
// register updates when launch windows change. The notifier interface is "dumb"
// because it only has add/remove methods that don't allow you to know whether
// or not something has already been registered, which makes it impossible to
// push this into asynchronous actions where it should reside. To fix this the
// various notification interfaces would have to be updated to allow for an
// "exists" method
export function updateReminders (reminders, launches) {
  const notifier = interfaces.get('notifier')

  Array
    .from(launches)
    .filter(launch => (reminders.some(reminder => launch.id === reminder.id)))
    .forEach(launch => {
      notifier.add(new models.Reminder(launch))
    })

  return reminders
}

export function hasReminder (reminders, reminder) {
  return reminders.some(({ id }) => (id === reminder.id))
}

export function removeReminder (reminders, reminder) {
  reminders = reminders.filter(({ id }) => (id !== reminder.id))

  // This is just insurance for buggier notification interfaces to make ensure
  // that a user doesn't get notifications if they've manually cleared them all
  if (!reminders.length) {
    interfaces.get('notifier').removeAll()
  }

  return reminders
}

export function addReminder (reminders, reminder) {
  return reminders
    .filter(({ id }) => (id !== reminder.id))
    .concat(reminder)
}
