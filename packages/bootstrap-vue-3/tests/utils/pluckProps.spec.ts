import {pluckProps} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('pluckProps', () => {
  it('plucks out a value when pluckables is an array *as const*', () => {
    const value = pluckProps({a: 1, b: 2}, ['a'] as const)
    expect(value).toEqual({a: 1})
  })

  it('plucks out a value when pluckables is an object', () => {
    const value = pluckProps({a: 1, b: 2}, {a: 'abc'})
    expect(value).toEqual({a: 1})
  })

  it('plucks out a value when pluckables is an array *as const* and object key is number', () => {
    const value = pluckProps({1: 1, b: 2}, [1] as const)
    expect(value).toEqual({1: 1})
  })

  it('plucks out a value when pluckables is an array *as const* and object key is string of a number', () => {
    const value = pluckProps({1: 1, b: 2}, ['1'] as const)
    expect(value).toEqual({1: 1})
  })

  it('plucks out a value when pluckables is an object and object key is number', () => {
    const value = pluckProps({1: 1, b: 2}, {1: 'abc'})
    expect(value).toEqual({1: 1})
  })
})
