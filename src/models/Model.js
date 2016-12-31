/**
 * Symbol for a Models fields, see below.
 */
export const fields = Symbol('Model/fields')

/**
 * This is a simple "Model" class used as a helper to declare fields on derived
 * models. An example goes a long way in helping explain the construct:
 *
 * ```js
 * import assert from 'assert'
 * import { Model, fields } from './Model'
 *
 * class Ext extends Model {
 *   get [fields] () {
 *     return {
 *       ...super[fields],
 *       foo: 'bar',
 *       baz: 'beer',
 *       boo: Boolean
 *     }
 *   }
 * }
 * let ext = new Ext({ notIncluded: 'field', foo: 'assigned' })
 *
 * assert.equal(ext.notIncluded, undefined)
 * assert.equal(ext.foo, 'assigned')
 * assert.equal(ext.baz, 'beer')
 * assert.equal(ext.boo, false)
 * ```
 */
const noop = () => {}

// TODO: Implement required values of a type
// TODO: Implement field type validator
// TODO: After the above two are done, break this out into a seperate micro
// library

export class Model {
  get [fields] () {
    return Object.create(null)
  }

  constructor (values = {}) {
    const defaults = this[fields]

    for (let name in defaults) {
      const defaultValue = (function (value) {
        switch (defaults[name]) {
          case Array: return []
          case Boolean: return false
          case Date: return new Date()
          case Function: return noop
          case Number: return NaN
          case Object: return {}
          case RegExp: return /.*/
          case String: return ''
          default: return value
        }
      })(defaults[name])

      this[name] = name in values ? values[name] : defaultValue
    }
  }
}
