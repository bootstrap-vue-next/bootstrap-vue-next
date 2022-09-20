import {toFloat} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('toFloat', () => {
  it('if string cannot be parsed, return defaultValue', () => {
    const value = toFloat('abc')
    expect(value).toBe(NaN)
  })

  it('if string cannot be parsed, return defaultValue param', () => {
    const value = toFloat('abc', 123)
    expect(value).toBe(123)
  })

  it('if string can be parsed, return number', () => {
    const value = toFloat('123')
    expect(value).toBe(123)
  })

  it('returns float when string', () => {
    const value = toFloat('12.5')
    expect(value).toBe(12.5)
  })

  it('returns float when number', () => {
    const value = toFloat(12.5)
    expect(value).toBe(12.5)
  })
})
