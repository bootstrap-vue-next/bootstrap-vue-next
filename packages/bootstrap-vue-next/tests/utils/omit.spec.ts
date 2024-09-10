import {omit} from '../../src/utils/object'
import {describe, expect, it} from 'vitest'

describe('omit', () => {
  it('omits a value from an object', () => {
    const value = omit({a: 1, b: 1}, ['a'])
    expect(value).toEqual({b: 1})
  })

  it('omits a value from an object when is string of number', () => {
    const value = omit({1: 1, b: 1}, ['1'])
    expect(value).toEqual({b: 1})
  })

  it('omits a value from an object when is number', () => {
    const value = omit({1: 1, b: 1}, [1])
    expect(value).toEqual({b: 1})
  })

  it('omits a value from an object when is a symbol', () => {
    const key = Symbol()
    const value = omit({[key]: 1, b: 1}, [key])
    expect(value).toEqual({b: 1})
  })
})
