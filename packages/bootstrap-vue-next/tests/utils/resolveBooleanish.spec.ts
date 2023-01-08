import {resolveBooleanish} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('resolveBooleanish', () => {
  it('value is true, returns true', () => {
    const value = resolveBooleanish(true)
    expect(value).toBe(true)
  })

  it('value is false, returns false', () => {
    const value = resolveBooleanish(false)
    expect(value).toBe(false)
  })

  it('value is string true, returns true', () => {
    const value = resolveBooleanish('true')
    expect(value).toBe(true)
  })

  it('value is string false, returns false', () => {
    const value = resolveBooleanish('false')
    expect(value).toBe(false)
  })

  it('value is empty string, returns true', () => {
    const value = resolveBooleanish('')
    expect(value).toBe(true)
  })
})
