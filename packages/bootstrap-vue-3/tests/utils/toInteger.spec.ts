import {toInteger} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('toInteger', () => {
  it('returns number if is integer', () => {
    const value = toInteger(12)
    expect(value).toBe(12)
  })

  it('returns defaultValue if is float', () => {
    const value = toInteger(12.5)
    expect(value).toBe(NaN)
  })

  it('returns defaultValue of param if is float', () => {
    const value = toInteger(12.5, 555)
    expect(value).toBe(555)
  })
})
