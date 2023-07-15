import {pick} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('pick', () => {
  it('picks out a value when pickables is an array', () => {
    const value = pick({a: 1, b: 2}, ['a'])
    expect(value).toEqual({a: 1})
  })

  it('picks out a value when pickables is an array and object key is string of a number', () => {
    const value = pick({1: 1, b: 2}, ['1'])
    expect(value).toEqual({1: 1})
  })

  it('picks out a value when pickables is an array and object key is number', () => {
    const value = pick({1: 1, b: 2}, [1])
    expect(value).toEqual({1: 1})
  })

  it('picks a value from an object when is a symbol', () => {
    const key = Symbol()
    const value = pick({[key]: 1, b: 1}, [key])
    expect(value).toEqual({[key]: 1})
  })
})
