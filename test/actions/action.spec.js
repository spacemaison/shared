import { expect } from 'chai'
import { timeout } from '../../src/actions/timeout'
import * as actions from '../../src/actions/action'

describe('actions creators', () => {
  it('creates actions', () => {
    const payload = {}
    const error = new Error()
    const meta = {}

    expect(actions.action('type', payload, meta)).to.deep.equal({
      type: 'type',
      error: null,
      payload,
      meta
    })

    expect(actions.action('type', error)).to.deep.equal({
      type: 'type',
      payload: null,
      error,
      meta: {
        state: 'error'
      }
    })
  })

  it('creates finished action', () => {
    expect(actions.finished('type')).to.deep.equal({
      type: 'type',
      payload: {},
      error: null,
      meta: {
        state: 'finished'
      }
    })
  })

  it('creates starting action', () => {
    expect(actions.starting('type')).to.deep.equal({
      type: 'type',
      payload: {},
      error: null,
      meta: {
        state: 'starting'
      }
    })
  })

  it('creates aggragate actions', () => {
    function spy () { spy.called = true; return true }
    const aggragate = actions.aggragate(spy)

    expect(aggragate().next().value).to.be.true
    expect(spy.called).to.be.true
  })

  it('creates wrapped generator actions', () => {
    function * spy (one, two) {
      expect(one).to.equal(1)
      expect(two).to.equal(2)

      spy.called = true
      yield true
    }
    const wrapped = actions.wrap('type', spy)
    const gen = wrapped(1, 2)

    expect(gen.next().value).to.deep.equal(actions.starting('type'))
    expect(gen.next().value).to.be.true
    expect(gen.next().value).to.deep.equal(timeout(1))
    expect(gen.next().value).to.deep.equal(actions.finished('type'))
    expect(gen.next().done).to.be.true
    expect(spy.called).to.be.true
  })

  it('creates failing wrapped generator actions', () => {
    const error = new Error()
    const spy = function () { throw error }
    const wrapped = actions.wrap('type', spy)
    const gen = wrapped()

    expect(gen.next().value).to.deep.equal(actions.starting('type'))
    expect(gen.next().value).to.deep.equal(actions.action('type', error))
    expect(gen.next().done).to.be.true
  })
})
