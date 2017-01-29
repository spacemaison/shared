import { Reminder } from '../models/Reminder'

/*
  This notifier class is implemented in the client front ends and passed into
the "reminders" actions. The methods are used to register notifications with the
operating system, and they vary by platform. If an error is encountered it's
expected that these methods will throw, otherwise they will return resolved
promises containing the reminders to be passed to the reducers.
*/
export class Notifier {
  add (reminder = new Reminder()) {
    console.warn('Unimplemented Notifier method "add"')

    return Promise.resolve(reminder)
  }

  remove (reminder = new Reminder()) {
    console.warn('Unimplemented Notifier method "remove"')

    return Promise.resolve(reminder)
  }

  removeAll () {
    console.warn('Unimplemented Notifier method "removeAll"')
  }
}
