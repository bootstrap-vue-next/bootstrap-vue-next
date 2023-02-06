import {updateBooleanish} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('updateBooleanish', () => {
  it('returns boolean true when boolean false', () => {
    const value = updateBooleanish(false)
    expect(value).toBe(true)
  })

  it('returns boolean false when boolean true', () => {
    const value = updateBooleanish(false)
    expect(value).toBe(true)
  })

  it('returns string true when string false', () => {
    const value = updateBooleanish('false')
    expect(value).toBe('true')
  })

  it('returns string false when string true', () => {
    const value = updateBooleanish('true')
    expect(value).toBe('false')
  })

  it('returns string false when empty string', () => {
    const value = updateBooleanish('')
    expect(value).toBe('false')
  })
})
