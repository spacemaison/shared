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
 *   get [fields] () { return { ...super[fields], foo: 'bar', baz: 'beer' } }
 * }
 * let ext = new Ext({ notIncluded: 'field', foo: 'assigned' })
 *
 * assert.equal(ext.notIncluded, undefined)
 * assert.equal(ext.foo, 'assigned')
 * assert.equal(ext.baz, 'beer')
 * ```
 */
export class Model {
  get [fields] () {
    return Object.create(null)
  }

  constructor (values = {}) {
    const defaults = this[fields]

    for (let name in defaults) {
      this[name] = name in values ? values[name] : defaults[name]
    }
  }
}
