import {stringToInteger} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('stringToInteger', () => {
  it('if string cannot be parsed, return defaultValue', () => {
    const value = stringToInteger('abc')
    expect(value).toBe(NaN)
  })

  it('if string cannot be parsed, return defaultValue param', () => {
    const value = stringToInteger('abc', 123)
    expect(value).toBe(123)
  })

  it('if string can be parsed, return number', () => {
    const value = stringToInteger('123')
    expect(value).toBe(123)
  })
})
