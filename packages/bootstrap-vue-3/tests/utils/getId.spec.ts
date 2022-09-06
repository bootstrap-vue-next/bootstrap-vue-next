import {getId} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('getId', () => {
  it('returns something', () => {
    const value = getId()
    expect(value).toBeDefined()
  })

  it('returns a string', () => {
    const value = getId()
    expect(typeof value === 'string').toBe(true)
  })

  it('string contains __BVID__', () => {
    const value = getId()
    expect(value).toContain('__BVID__')
  })

  it('string contains ___BV_{suffix}__ when suffix is defined', () => {
    const value = getId('foobar')
    expect(value).toContain('___BV_foobar__')
  })

  it('string contains ___BV___ when not suffix', () => {
    const value = getId()
    expect(value).toContain('___BV___')
  })
})
