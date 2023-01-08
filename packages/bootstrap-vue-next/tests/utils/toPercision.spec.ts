import {toPercison} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('toPercison of decimals', () => {
  it('percises the value', () => {
    const value = toPercison(12.3456789, 4)
    expect(value).toBe('12.35')
  })

  it('percises the value smaller', () => {
    const value = toPercison(12.3456789, 2)
    expect(value).toBe('12')
  })

  it('adds some zeres after', () => {
    // Am I just unit testing js at this point? ¯\_(ツ)_/¯
    const value = toPercison(1, 3)
    expect(value).toBe('1.00')
  })
})
