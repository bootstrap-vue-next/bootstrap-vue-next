import {describe, expect, it} from 'vitest'
import {resolveAriaInvalid} from '../../src/utils'

describe('resolveAriaInvalid', () => {
  it('returns string true when bool true', () => {
    const value = resolveAriaInvalid(true)
    expect(value).toBe('true')
  })

  it('returns string true when string true', () => {
    const value = resolveAriaInvalid('true')
    expect(value).toBe('true')
  })

  it('returns string true when empty string', () => {
    const value = resolveAriaInvalid('')
    expect(value).toBe('true')
  })

  it('returns grammar when string grammar', () => {
    const value = resolveAriaInvalid('grammar')
    expect(value).toBe('grammar')
  })

  it('returns spelling when string spelling', () => {
    const value = resolveAriaInvalid('spelling')
    expect(value).toBe('spelling')
  })

  it('returns false when bool false', () => {
    const value = resolveAriaInvalid(false)
    expect(value).toBe('false')
  })

  it('returns false when string false', () => {
    const value = resolveAriaInvalid('false')
    expect(value).toBe('false')
  })

  it('returns undefined when no args', () => {
    const value = resolveAriaInvalid()
    expect(value).toBeUndefined()
  })

  it('returns true when bool true and state is false', () => {
    const value = resolveAriaInvalid('true', false)
    expect(value).toBe('true')
  })

  it('returns true when string true and state is false', () => {
    const value = resolveAriaInvalid(true, false)
    expect(value).toBe('true')
  })

  it('returns true when empty string and state is false', () => {
    const value = resolveAriaInvalid('', false)
    expect(value).toBe('true')
  })

  it('returns grammar when string grammar and state is false', () => {
    const value = resolveAriaInvalid('grammar', false)
    expect(value).toBe('grammar')
  })

  it('returns spelling when string spelling and state is false', () => {
    const value = resolveAriaInvalid('spelling', false)
    expect(value).toBe('spelling')
  })

  it('returns true when state false and ariaInvalid bool false', () => {
    const value = resolveAriaInvalid(false, false)
    expect(value).toBe('true')
  })

  it('returns true when state false and ariaInvalid string false', () => {
    const value = resolveAriaInvalid('false', false)
    expect(value).toBe('true')
  })

  it('returns true when state false and ariaInvalid undefined', () => {
    const value = resolveAriaInvalid(undefined, false)
    expect(value).toBe('true')
  })

  it('returns false when state undefined and ariaInvalid false', () => {
    const value = resolveAriaInvalid(false, true)
    expect(value).toBe('false')
  })

  it('returns false when state undefined and ariaInvalid string false', () => {
    const value = resolveAriaInvalid('false', true)
    expect(value).toBe('false')
  })

  it('returns undefined when state true and ariaInvalid undefined', () => {
    const value = resolveAriaInvalid(undefined, true)
    expect(value).toBeUndefined()
  })
})
