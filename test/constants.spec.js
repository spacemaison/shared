/* globals describe, it */
import { expect } from 'chai'
import { namespace } from '../src/constants'

describe('constants', () => {
  it('resolves a namespace', () => {
    expect(namespace.resolve('foo')).to.equal('http://localhost:3000/foo')
  })
})
