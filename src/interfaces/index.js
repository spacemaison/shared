import { Notifier } from './Notifier'
export { Notifier }

let interfaces = {
  __proto__: null,

  notifier: new Notifier()
}

export function get (name) {
  if (!interfaces[name]) {
    throw new Error(`Interface ${name} doesn't exist`)
  }

  return interfaces[name]
}

export function set (name, interfaceImpl = {}) {
  switch (name) {
    case 'notifier':
      if (!(interfaceImpl instanceof Notifier)) {
        throw new TypeError('Expected Notifier implementation for notifier')
      }
      break
  }

  interfaces[name] = interfaceImpl
  return interfaceImpl
}
