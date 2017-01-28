/* globals describe, it */
import { expect } from 'chai'
import { get, set, Notifier } from '../../src/interfaces/index'

describe('interfaces', () => {
  it('gets an interface', () => {
    expect(get('notifier')).to.be.instanceOf(Notifier)
  })

  it('gets an interface, but throw when it doesn\'t exist', () => {
    expect(get.bind(null, 'nonexistent'))
      .to.throw(Error, /Interface nonexistent/)
  })

  it('sets an interface', () => {
    const notifier = new Notifier()

    expect(set('notifier', notifier)).to.equal(notifier)
  })

  it('sets an interface, but throws when types don\'t match', () => {
    expect(set.bind(null, 'notifier', {})).to.throw(TypeError)
  })
})
