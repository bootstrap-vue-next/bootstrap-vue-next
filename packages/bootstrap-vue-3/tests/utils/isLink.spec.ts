import {describe, expect, it} from 'vitest'
import {isLink} from '../../src/utils'

describe('isLink', () => {
  it('returns false when href undefined', () => {
    const value = isLink({href: undefined})
    expect(value).toBe(false)
  })

  it('returns false when to undefined', () => {
    const value = isLink({to: undefined})
    expect(value).toBe(false)
  })

  it('returns false when href empty string', () => {
    const value = isLink({href: ''})
    expect(value).toBe(false)
  })

  it('returns false when to empty string', () => {
    const value = isLink({to: ''})
    expect(value).toBe(false)
  })

  it('returns true when to is string', () => {
    const value = isLink({to: 'string'})
    expect(value).toBe(true)
  })

  it('returns true when to is object with property path', () => {
    const value = isLink({to: {path: '/abc'}})
    expect(value).toBe(true)
  })

  it('returns true when to is object that empty', () => {
    const value = isLink({to: {}})
    expect(value).toBe(true)
  })
})
