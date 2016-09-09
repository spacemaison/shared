import { expect } from 'chai'
import { Model, fields } from '../../src/models/Model'

describe('Model helper class', () => {
  it('assigns the first argument to itself using the "fields" field', () => {
    class Ext extends Model {
      get [fields] () {
        return Object.assign(super[fields], {
          foo: 'foo',
          bar: 'baz'
        })
      }
    }

    const ext = new Ext({ unnasigned: 'field', foo: 'bar' })

    expect(ext).to.deep.equal({
      foo: 'bar',
      bar: 'baz'
    } )
  })
})
