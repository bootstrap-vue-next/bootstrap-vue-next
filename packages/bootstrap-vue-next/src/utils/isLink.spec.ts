import {describe, expect, it} from 'vitest'
import {isLink} from './isLink'

describe('isLink', () => {
  it('returns true when href is provided', () => {
    expect(isLink({href: '/path'})).toBe(true)
  })

  it('returns true when to is provided as string', () => {
    expect(isLink({to: '/route'})).toBe(true)
  })

  it('returns true when to is provided as object', () => {
    expect(isLink({to: {name: 'home'}})).toBe(true)
  })

  it('returns false when neither href nor to is provided', () => {
    expect(isLink({})).toBe(false)
  })

  it('returns false when href is empty string', () => {
    expect(isLink({href: ''})).toBe(false)
  })

  it('returns true when both href and to are provided', () => {
    expect(isLink({href: '/path', to: '/route'})).toBe(true)
  })
})
