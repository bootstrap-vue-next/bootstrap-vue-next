import {toPrecision} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('toPrecision of decimals', () => {
  it('precises the value', () => {
    const value = toPrecision(12.3456789, 4)
    expect(value).toBe('12.35')
  })

  it('precises the value smaller', () => {
    const value = toPrecision(12.3456789, 2)
    expect(value).toBe('12')
  })

  it('adds some zeres after', () => {
    // Am I just unit testing js at this point? ¯\_(ツ)_/¯
    const value = toPrecision(1, 3)
    expect(value).toBe('1.00')
  })
})
