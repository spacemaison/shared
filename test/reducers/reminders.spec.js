/* globals describe, it */
import { expect } from 'chai'
import { namespace as ns } from '../../src/constants'
import reducer from '../../src/reducers/reminders'

describe('reminders reducers', () => {
  it('adds a reminder', () => {
    const action = {
      type: ns.resolve('reminders/add'),
      payload: { id: 1 }
    }

    expect(reducer([ { id: 1 } ], action))
      .to.deep.equal([ action.payload ])
  })

  it('removes a reminder', () => {
    const action = {
      type: ns.resolve('reminders/remove'),
      payload: { id: 1 }
    }

    expect(reducer([ { id: 1 } ], action)).to.have.lengthOf(0)
  })

  it('updates a reminder', () => {
    const action = {
      type: ns.resolve('reminders/add'),
      payload: { id: 1 }
    }

    expect(reducer([ { id: 1 } ], action))
      .to.deep.equal([ action.payload ]).and
      .have.lengthOf(1)
  })

  it('toggles a reminder', () => {
    let action = {
      type: ns.resolve('reminders/toggle'),
      payload: { id: 1 }
    }

    expect(reducer([ { id: 1 } ], action)).to.have.lengthOf(0)

    action = {
      type: ns.resolve('reminders/toggle'),
      payload: { id: 1 }
    }

    expect(reducer([], action)).to.deep.equal([ action.payload ])
  })
})
